/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { VSBuffer } from '../../../../../base/common/buffer.js';
import { joinPath } from '../../../../../base/common/resources.js';
import { ServicesAccessor } from '../../../../../editor/browser/editorExtensions.js';
import { localize, localize2 } from '../../../../../nls.js';
import { Action2, registerAction2 } from '../../../../../platform/actions/common/actions.js';
import { IFileDialogService } from '../../../../../platform/dialogs/common/dialogs.js';
import { IFileService } from '../../../../../platform/files/common/files.js';
import { CHAT_CATEGORY } from './chatActions.js';
import { ChatViewPaneTarget, IChatWidgetService } from '../chat.js';
import { IChatEditorOptions } from '../widgetHosts/editor/chatEditor.js';
import { ChatEditorInput } from '../widgetHosts/editor/chatEditorInput.js';
import { ChatContextKeys } from '../../common/actions/chatContextKeys.js';
import { isExportableSessionData } from '../../common/model/chatModel.js';
import { IChatService } from '../../common/chatService/chatService.js';
import { URI } from '../../../../../base/common/uri.js';
import { revive } from '../../../../../base/common/marshalling.js';
import { ACTIVE_GROUP, PreferredGroup } from '../../../../services/editor/common/editorService.js';
import { generateUuid } from '../../../../../base/common/uuid.js'; // [ZP-0EAA] Import and save a chat from a file into persistent history.
// [ZP-8B1A] Provide a command to export all chat sessions from the current workspace
import { IProgressService, ProgressLocation } from '../../../../../platform/progress/common/progress.js';
import { CancellationToken } from '../../../../../base/common/cancellation.js';
import { ChatAgentLocation } from '../../common/constants.js';

const defaultFileName = 'chat.json';
const filters = [{ name: localize('chat.file.label', "Chat Session"), extensions: ['json'] }];

/**
 * Target location for importing a chat session.
 * - 'chatViewPane': Opens in the chat view pane (sidebar/panel)
 * - 'default': Opens in the active editor group
 */
export type ChatImportTarget = 'chatViewPane' | 'default';

export interface ChatImportOptions {
	inputPath?: URI;
	target?: ChatImportTarget;
}

export function registerChatExportActions() {
	registerAction2(class ExportChatAction extends Action2 {
		constructor() {
			super({
				id: 'workbench.action.chat.export',
				category: CHAT_CATEGORY,
				title: localize2('chat.export.label', "Export Chat..."),
				precondition: ChatContextKeys.enabled,
				f1: true,
			});
		}
		async run(accessor: ServicesAccessor, outputPath?: URI) {
			const widgetService = accessor.get(IChatWidgetService);
			const fileDialogService = accessor.get(IFileDialogService);
			const fileService = accessor.get(IFileService);
			const chatService = accessor.get(IChatService);

			const widget = widgetService.lastFocusedWidget;
			if (!widget || !widget.viewModel) {
				return;
			}

			if (!outputPath) {
				const defaultUri = joinPath(await fileDialogService.defaultFilePath(), defaultFileName);
				const result = await fileDialogService.showSaveDialog({
					defaultUri,
					filters
				});
				if (!result) {
					return;
				}
				outputPath = result;
			}

			const model = chatService.getSession(widget.viewModel.sessionResource);
			if (!model) {
				return;
			}

			// Using toJSON on the model
			const content = VSBuffer.fromString(JSON.stringify(model.toExport(), undefined, 2));
			await fileService.writeFile(outputPath, content);
		}
	});

	registerAction2(class ImportChatAction extends Action2 {
		constructor() {
			super({
				id: 'workbench.action.chat.import',
				title: localize2('chat.import.label', "Import Chat..."),
				category: CHAT_CATEGORY,
				precondition: ChatContextKeys.enabled,
				f1: true,
			});
		}
		async run(accessor: ServicesAccessor, opts?: ChatImportOptions) {
			const fileService = accessor.get(IFileService);
			const widgetService = accessor.get(IChatWidgetService);
			const chatService = accessor.get(IChatService);
			const fileDialogService = accessor.get(IFileDialogService);

			let inputPath = opts?.inputPath;
			if (!inputPath) {
				const defaultUri = joinPath(await fileDialogService.defaultFilePath(), defaultFileName);
				const result = await fileDialogService.showOpenDialog({
					defaultUri,
					canSelectFiles: true,
					filters
				});
				if (!result) {
					return;
				}
				inputPath = result[0];
			}

			const content = await fileService.readFile(inputPath);
			try {
				const data = revive(JSON.parse(content.value.toString()));
				if (!isExportableSessionData(data)) {
					throw new Error('Invalid chat session data');
				}

				let sessionResource: URI;
				let resolvedTarget: typeof ChatViewPaneTarget | PreferredGroup;
				let options: IChatEditorOptions;

				if (opts?.target === 'chatViewPane') {
					const modelRef = chatService.loadSessionFromData(data);
					sessionResource = modelRef.object.sessionResource;
					resolvedTarget = ChatViewPaneTarget;
					options = { pinned: true };
				} else {
					sessionResource = ChatEditorInput.getNewEditorUri();
					resolvedTarget = ACTIVE_GROUP;
					options = { target: { data }, pinned: true };
				}

				await widgetService.openSession(sessionResource, resolvedTarget, options);
			} catch (err) {
				throw err;
			}
		}
	});

	// [ZP-0EAA] Import and save a chat from a file into persistent history.
	// Reads a chat JSON file and creates a new persisted local session (like
	// duplicating an existing session), so the imported chat survives tab close.
	registerAction2(class ImportAndSaveChatAction extends Action2 {
		constructor() {
			super({
				id: 'workbench.action.chat.importAndSave',
				title: localize2('chat.importAndSave.label', "Import and Save Chat..."),
				category: CHAT_CATEGORY,
				precondition: ChatContextKeys.enabled,
				f1: true,
			});
		}
		async run(accessor: ServicesAccessor, opts?: ChatImportOptions) {
			const fileService = accessor.get(IFileService);
			const widgetService = accessor.get(IChatWidgetService);
			const chatService = accessor.get(IChatService);
			const fileDialogService = accessor.get(IFileDialogService);

			let inputPath = opts?.inputPath;
			if (!inputPath) {
				const defaultUri = joinPath(await fileDialogService.defaultFilePath(), defaultFileName);
				const result = await fileDialogService.showOpenDialog({
					defaultUri,
					canSelectFiles: true,
					filters
				});
				if (!result) {
					return;
				}
				inputPath = result[0];
			}

			const content = await fileService.readFile(inputPath);
			try {
				const data = revive(JSON.parse(content.value.toString()));
				if (!isExportableSessionData(data)) {
					throw new Error('Invalid chat session data');
				}

				// Assign a fresh sessionId and creationDate so the session is
				// treated as a brand-new local session and persisted to storage,
				// mirroring the behaviour of DuplicateAgentSessionAction.
				const dataToPersist = {
					...data,
					sessionId: generateUuid(),
					creationDate: Date.now(),
				};

				const modelRef = chatService.loadSessionFromData(dataToPersist);
				if (!modelRef) {
					return;
				}

				try {
					await widgetService.openSession(modelRef.object.sessionResource, ChatViewPaneTarget);
				} finally {
					modelRef.dispose();
				}
			} catch (err) {
				throw err;
			}
		}
	});

	// [ZP-8B1A] Provide a command to export all chat sessions from the current workspace
	registerAction2(class ExportAllChatSessionsAction extends Action2 {
		constructor() {
			super({
				id: 'workbench.action.chat.exportAll',
				category: CHAT_CATEGORY,
				title: localize2('chat.exportAll.label', "Export All Chat Sessions..."),
				precondition: ChatContextKeys.enabled,
				f1: true,
			});
		}
		async run(accessor: ServicesAccessor) {
			const chatService = accessor.get(IChatService);
			const fileDialogService = accessor.get(IFileDialogService);
			const fileService = accessor.get(IFileService);
			const progressService = accessor.get(IProgressService);

			const defaultUri = await fileDialogService.defaultFolderPath();
			const folderUri = await fileDialogService.showOpenDialog({
				defaultUri,
				canSelectFiles: false,
				canSelectFolders: true,
				canSelectMany: false,
				title: localize('chat.exportAll.folderTitle', "Select Folder to Export All Chat Sessions"),
			});
			if (!folderUri || folderUri.length === 0) {
				return;
			}

			const targetFolder = folderUri[0];

			await progressService.withProgress(
				{ location: ProgressLocation.Notification, title: localize('chat.exportAll.exporting', "Exporting chat sessions...") },
				async () => {
					const allSessions = await chatService.getLocalSessionHistory();

					for (const detail of allSessions) {
						const sessionRef = await chatService.acquireOrLoadSession(detail.sessionResource, ChatAgentLocation.Chat, CancellationToken.None);
						if (!sessionRef) {
							continue;
						}
						try {
							const model = sessionRef.object;
							const exported = model.toExport();
							/**
							 * We expect sessionUid to be something like `MmNkMmYxNWItZTc3Mi00MzVlLTkwOGQtMWQzYTIyMzZhOTU2` while `.sessionResource` is something like `vscode-chat-session://local/MmNkMmYxNWItZTc3Mi00MzVlLTkwOGQtMWQzYTIyMzZhOTU2`.
							 */
							const sessionUid = model.sessionResource.path.replaceAll('/', '-').replace(/^[\s-]+|[\s-]+$/g, '');
							const fileName = `${sessionUid}.json`;
							const filePath = joinPath(targetFolder, fileName);
							const content = VSBuffer.fromString(JSON.stringify(exported, undefined, 2));
							await fileService.writeFile(filePath, content);
						} finally {
							sessionRef.dispose();
						}
					}
				}
			);
		}
	});
}
