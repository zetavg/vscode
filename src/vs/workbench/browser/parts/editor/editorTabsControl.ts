/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import 'vs/css!./media/editortabscontrol';
import { localize } from 'vs/nls';
import { applyDragImage, DataTransfers } from 'vs/base/browser/dnd';
import { Dimension, getActiveWindow, getWindow, isMouseEvent } from 'vs/base/browser/dom';
import { StandardMouseEvent } from 'vs/base/browser/mouseEvent';
import { ActionsOrientation, IActionViewItem, prepareActions } from 'vs/base/browser/ui/actionbar/actionbar';
import { IAction, ActionRunner } from 'vs/base/common/actions';
import { ResolvedKeybinding } from 'vs/base/common/keybindings';
import { DisposableStore, IDisposable } from 'vs/base/common/lifecycle';
import { createActionViewItem } from 'vs/platform/actions/browser/menuEntryActionViewItem';
import { MenuId } from 'vs/platform/actions/common/actions';
import { IContextKeyService, IContextKey } from 'vs/platform/contextkey/common/contextkey';
import { IContextMenuService } from 'vs/platform/contextview/browser/contextView';
import { IInstantiationService } from 'vs/platform/instantiation/common/instantiation';
import { IKeybindingService } from 'vs/platform/keybinding/common/keybinding';
import { INotificationService } from 'vs/platform/notification/common/notification';
import { IQuickInputService } from 'vs/platform/quickinput/common/quickInput';
import { listActiveSelectionBackground, listActiveSelectionForeground } from 'vs/platform/theme/common/colorRegistry';
import { IThemeService, Themable } from 'vs/platform/theme/common/themeService';
import { DraggedEditorGroupIdentifier, DraggedEditorIdentifier, fillEditorsDragData, isWindowDraggedOver } from 'vs/workbench/browser/dnd';
import { EditorPane } from 'vs/workbench/browser/parts/editor/editorPane';
import { IEditorGroupsView, IEditorGroupView, IEditorPartsView, IInternalEditorOpenOptions } from 'vs/workbench/browser/parts/editor/editor';
import { IEditorCommandsContext, EditorResourceAccessor, IEditorPartOptions, SideBySideEditor, EditorsOrder, EditorInputCapabilities, IToolbarActions, GroupIdentifier, Verbosity } from 'vs/workbench/common/editor';
import { EditorInput } from 'vs/workbench/common/editor/editorInput';
import { ResourceContextKey, ActiveEditorPinnedContext, ActiveEditorStickyContext, ActiveEditorGroupLockedContext, ActiveEditorCanSplitInGroupContext, SideBySideEditorActiveContext, ActiveEditorFirstInGroupContext, ActiveEditorAvailableEditorIdsContext, applyAvailableEditorIds, ActiveEditorLastInGroupContext } from 'vs/workbench/common/contextkeys';
import { AnchorAlignment } from 'vs/base/browser/ui/contextview/contextview';
import { assertIsDefined } from 'vs/base/common/types';
import { isFirefox } from 'vs/base/browser/browser';
import { isCancellationError } from 'vs/base/common/errors';
import { SideBySideEditorInput } from 'vs/workbench/common/editor/sideBySideEditorInput';
import { WorkbenchToolBar } from 'vs/platform/actions/browser/toolbar';
import { LocalSelectionTransfer } from 'vs/platform/dnd/browser/dnd';
import { DraggedTreeItemsIdentifier } from 'vs/editor/common/services/treeViewsDnd';
import { IEditorResolverService } from 'vs/workbench/services/editor/common/editorResolverService';
import { IEditorTitleControlDimensions } from 'vs/workbench/browser/parts/editor/editorTitleControl';
import { IReadonlyEditorGroupModel } from 'vs/workbench/common/editor/editorGroupModel';
import { EDITOR_CORE_NAVIGATION_COMMANDS } from 'vs/workbench/browser/parts/editor/editorCommands';
import { IAuxiliaryEditorPart, MergeGroupMode } from 'vs/workbench/services/editor/common/editorGroupsService';
import { isMacintosh } from 'vs/base/common/platform';
import { IHostService } from 'vs/workbench/services/host/browser/host';
import { ServiceCollection } from 'vs/platform/instantiation/common/serviceCollection';
import { IHoverDelegate } from 'vs/base/browser/ui/hover/hoverDelegate';
import { getDefaultHoverDelegate } from 'vs/base/browser/ui/hover/hoverDelegateFactory';
import { IBaseActionViewItemOptions } from 'vs/base/browser/ui/actionbar/actionViewItems';

export class EditorCommandsContextActionRunner extends ActionRunner {

	constructor(
		private context: IEditorCommandsContext
	) {
		super();
	}

	override run(action: IAction, context?: { preserveFocus?: boolean }): Promise<void> {

		// Even though we have a fixed context for editor commands,
		// allow to preserve the context that is given to us in case
		// it applies.

		let mergedContext = this.context;
		if (context?.preserveFocus) {
			mergedContext = {
				...this.context,
				preserveFocus: true
			};
		}

		return super.run(action, mergedContext);
	}
}

export interface IEditorTabsControl extends IDisposable {
	updateOptions(oldOptions: IEditorPartOptions, newOptions: IEditorPartOptions): void;
	openEditor(editor: EditorInput, options?: IInternalEditorOpenOptions): boolean;
	openEditors(editors: EditorInput[]): boolean;
	beforeCloseEditor(editor: EditorInput): void;
	closeEditor(editor: EditorInput): void;
	closeEditors(editors: EditorInput[]): void;
	moveEditor(editor: EditorInput, fromIndex: number, targetIndex: number, stickyStateChange: boolean): void;
	pinEditor(editor: EditorInput): void;
	stickEditor(editor: EditorInput): void;
	unstickEditor(editor: EditorInput): void;
	setActive(isActive: boolean): void;
	updateEditorSelections(): void;
	updateEditorLabel(editor: EditorInput): void;
	updateEditorDirty(editor: EditorInput): void;
	layout(dimensions: IEditorTitleControlDimensions): Dimension;
	getHeight(): number;
}

export abstract class EditorTabsControl extends Themable implements IEditorTabsControl {

	protected readonly editorTransfer = LocalSelectionTransfer.getInstance<DraggedEditorIdentifier>();
	protected readonly groupTransfer = LocalSelectionTransfer.getInstance<DraggedEditorGroupIdentifier>();
	protected readonly treeItemsTransfer = LocalSelectionTransfer.getInstance<DraggedTreeItemsIdentifier>();

	private static readonly EDITOR_TAB_HEIGHT = {
		normal: 35 as const,
		themed: 28 as const,
		compact: 22 as const
	};

	protected editorActionsToolbarContainer: HTMLElement | undefined;
	private editorActionsToolbar: WorkbenchToolBar | undefined;
	private readonly editorActionsToolbarDisposables = this._register(new DisposableStore());
	private readonly editorActionsDisposables = this._register(new DisposableStore());

	private readonly contextMenuContextKeyService: IContextKeyService;
	private resourceContext: ResourceContextKey;

	private editorPinnedContext: IContextKey<boolean>;
	private editorIsFirstContext: IContextKey<boolean>;
	private editorIsLastContext: IContextKey<boolean>;
	private editorStickyContext: IContextKey<boolean>;
	private editorAvailableEditorIds: IContextKey<string>;

	private editorCanSplitInGroupContext: IContextKey<boolean>;
	private sideBySideEditorContext: IContextKey<boolean>;

	private groupLockedContext: IContextKey<boolean>;

	private renderDropdownAsChildElement: boolean;

	private readonly tabsHoverDelegate: IHoverDelegate;

	constructor(
		protected readonly parent: HTMLElement,
		protected readonly editorPartsView: IEditorPartsView,
		protected readonly groupsView: IEditorGroupsView,
		protected readonly groupView: IEditorGroupView,
		protected readonly tabsModel: IReadonlyEditorGroupModel,
		@IContextMenuService protected readonly contextMenuService: IContextMenuService,
		@IInstantiationService protected instantiationService: IInstantiationService,
		@IContextKeyService protected readonly contextKeyService: IContextKeyService,
		@IKeybindingService private readonly keybindingService: IKeybindingService,
		@INotificationService private readonly notificationService: INotificationService,
		@IQuickInputService protected quickInputService: IQuickInputService,
		@IThemeService themeService: IThemeService,
		@IEditorResolverService private readonly editorResolverService: IEditorResolverService,
		@IHostService private readonly hostService: IHostService,
	) {
		super(themeService);

		this.contextMenuContextKeyService = this._register(this.contextKeyService.createScoped(parent));
		const scopedInstantiationService = this._register(this.instantiationService.createChild(new ServiceCollection(
			[IContextKeyService, this.contextMenuContextKeyService],
		)));

		this.resourceContext = this._register(scopedInstantiationService.createInstance(ResourceContextKey));

		this.editorPinnedContext = ActiveEditorPinnedContext.bindTo(this.contextMenuContextKeyService);
		this.editorIsFirstContext = ActiveEditorFirstInGroupContext.bindTo(this.contextMenuContextKeyService);
		this.editorIsLastContext = ActiveEditorLastInGroupContext.bindTo(this.contextMenuContextKeyService);
		this.editorStickyContext = ActiveEditorStickyContext.bindTo(this.contextMenuContextKeyService);
		this.editorAvailableEditorIds = ActiveEditorAvailableEditorIdsContext.bindTo(this.contextMenuContextKeyService);

		this.editorCanSplitInGroupContext = ActiveEditorCanSplitInGroupContext.bindTo(this.contextMenuContextKeyService);
		this.sideBySideEditorContext = SideBySideEditorActiveContext.bindTo(this.contextMenuContextKeyService);

		this.groupLockedContext = ActiveEditorGroupLockedContext.bindTo(this.contextMenuContextKeyService);

		this.renderDropdownAsChildElement = false;

		this.tabsHoverDelegate = getDefaultHoverDelegate('mouse');

		this.create(parent);
	}

	protected create(parent: HTMLElement): void {
		this.updateTabHeight();
	}

	private get editorActionsEnabled(): boolean {
		return this.groupsView.partOptions.editorActionsLocation === 'default' && this.groupsView.partOptions.showTabs !== 'none';
	}

	protected createEditorActionsToolBar(parent: HTMLElement, classes: string[]): void {
		this.editorActionsToolbarContainer = document.createElement('div');
		this.editorActionsToolbarContainer.classList.add(...classes);
		parent.appendChild(this.editorActionsToolbarContainer);

		this.handleEditorActionToolBarVisibility(this.editorActionsToolbarContainer);
	}

	private handleEditorActionToolBarVisibility(container: HTMLElement): void {
		const editorActionsEnabled = this.editorActionsEnabled;
		const editorActionsVisible = !!this.editorActionsToolbar;

		// Create toolbar if it is enabled (and not yet created)
		if (editorActionsEnabled && !editorActionsVisible) {
			this.doCreateEditorActionsToolBar(container);
		}
		// Remove toolbar if it is not enabled (and is visible)
		else if (!editorActionsEnabled && editorActionsVisible) {
			this.editorActionsToolbar?.getElement().remove();
			this.editorActionsToolbar = undefined;
			this.editorActionsToolbarDisposables.clear();
			this.editorActionsDisposables.clear();
		}

		container.classList.toggle('hidden', !editorActionsEnabled);
	}

	private doCreateEditorActionsToolBar(container: HTMLElement): void {
		const context: IEditorCommandsContext = { groupId: this.groupView.id };

		// Toolbar Widget
		this.editorActionsToolbar = this.editorActionsToolbarDisposables.add(this.instantiationService.createInstance(WorkbenchToolBar, container, {
			actionViewItemProvider: (action, options) => this.actionViewItemProvider(action, options),
			orientation: ActionsOrientation.HORIZONTAL,
			ariaLabel: localize('ariaLabelEditorActions', "Editor actions"),
			getKeyBinding: action => this.getKeybinding(action),
			actionRunner: this.editorActionsToolbarDisposables.add(new EditorCommandsContextActionRunner(context)),
			anchorAlignmentProvider: () => AnchorAlignment.RIGHT,
			renderDropdownAsChildElement: this.renderDropdownAsChildElement,
			telemetrySource: 'editorPart',
			resetMenu: MenuId.EditorTitle,
			overflowBehavior: { maxItems: 9, exempted: EDITOR_CORE_NAVIGATION_COMMANDS },
			highlightToggledItems: true
		}));

		// Context
		this.editorActionsToolbar.context = context;

		// Action Run Handling
		this.editorActionsToolbarDisposables.add(this.editorActionsToolbar.actionRunner.onDidRun(e => {

			// Notify for Error
			if (e.error && !isCancellationError(e.error)) {
				this.notificationService.error(e.error);
			}
		}));
	}

	private actionViewItemProvider(action: IAction, options: IBaseActionViewItemOptions): IActionViewItem | undefined {
		const activeEditorPane = this.groupView.activeEditorPane;

		// Check Active Editor
		if (activeEditorPane instanceof EditorPane) {
			const result = activeEditorPane.getActionViewItem(action, options);

			if (result) {
				return result;
			}
		}

		// Check extensions
		return createActionViewItem(this.instantiationService, action, { ...options, menuAsChild: this.renderDropdownAsChildElement });
	}

	protected updateEditorActionsToolbar(): void {
		if (!this.editorActionsEnabled) {
			return;
		}

		this.editorActionsDisposables.clear();

		const editorActions = this.groupView.createEditorActions(this.editorActionsDisposables);
		this.editorActionsDisposables.add(editorActions.onDidChange(() => this.updateEditorActionsToolbar()));

		const editorActionsToolbar = assertIsDefined(this.editorActionsToolbar);
		const { primary, secondary } = this.prepareEditorActions(editorActions.actions);
		editorActionsToolbar.setActions(prepareActions(primary), prepareActions(secondary));
	}

	protected abstract prepareEditorActions(editorActions: IToolbarActions): IToolbarActions;
	private getEditorPaneAwareContextKeyService(): IContextKeyService {
		return this.groupView.activeEditorPane?.scopedContextKeyService ?? this.contextKeyService;
	}

	protected clearEditorActionsToolbar(): void {
		if (!this.editorActionsEnabled) {
			return;
		}

		const editorActionsToolbar = assertIsDefined(this.editorActionsToolbar);
		editorActionsToolbar.setActions([], []);
	}

	protected onGroupDragStart(e: DragEvent, element: HTMLElement): boolean {
		if (e.target !== element) {
			return false; // only if originating from tabs container
		}

		const isNewWindowOperation = this.isNewWindowOperation(e);

		// Set editor group as transfer
		this.groupTransfer.setData([new DraggedEditorGroupIdentifier(this.groupView.id)], DraggedEditorGroupIdentifier.prototype);
		if (e.dataTransfer) {
			e.dataTransfer.effectAllowed = 'copyMove';
		}

		// Drag all tabs of the group if tabs are enabled
		let hasDataTransfer = false;
		if (this.groupsView.partOptions.showTabs === 'multiple') {
			hasDataTransfer = this.doFillResourceDataTransfers(this.groupView.getEditors(EditorsOrder.SEQUENTIAL), e, isNewWindowOperation);
		}

		// Otherwise only drag the active editor
		else {
			if (this.groupView.activeEditor) {
				hasDataTransfer = this.doFillResourceDataTransfers([this.groupView.activeEditor], e, isNewWindowOperation);
			}
		}

		// Firefox: requires to set a text data transfer to get going
		if (!hasDataTransfer && isFirefox) {
			e.dataTransfer?.setData(DataTransfers.TEXT, String(this.groupView.label));
		}

		// Drag Image
		if (this.groupView.activeEditor) {
			let label = this.groupView.activeEditor.getName();
			if (this.groupsView.partOptions.showTabs === 'multiple' && this.groupView.count > 1) {
				label = localize('draggedEditorGroup', "{0} (+{1})", label, this.groupView.count - 1);
			}

			applyDragImage(e, label, 'monaco-editor-group-drag-image', this.getColor(listActiveSelectionBackground), this.getColor(listActiveSelectionForeground));
		}

		return isNewWindowOperation;
	}

	protected async onGroupDragEnd(e: DragEvent, previousDragEvent: DragEvent | undefined, element: HTMLElement, isNewWindowOperation: boolean): Promise<void> {
		this.groupTransfer.clearData(DraggedEditorGroupIdentifier.prototype);

		if (
			e.target !== element ||
			!isNewWindowOperation ||
			isWindowDraggedOver()
		) {
			return; // drag to open in new window is disabled
		}

		const auxiliaryEditorPart = await this.maybeCreateAuxiliaryEditorPartAt(e, element);
		if (!auxiliaryEditorPart) {
			return;
		}

		const targetGroup = auxiliaryEditorPart.activeGroup;
		this.groupsView.mergeGroup(this.groupView, targetGroup.id, {
			mode: this.isMoveOperation(previousDragEvent ?? e, targetGroup.id) ? MergeGroupMode.MOVE_EDITORS : MergeGroupMode.COPY_EDITORS
		});

		targetGroup.focus();
	}

	protected async maybeCreateAuxiliaryEditorPartAt(e: DragEvent, offsetElement: HTMLElement): Promise<IAuxiliaryEditorPart | undefined> {
		const { point, display } = await this.hostService.getCursorScreenPoint() ?? { point: { x: e.screenX, y: e.screenY } };
		const window = getActiveWindow();
		if (window.document.visibilityState === 'visible' && window.document.hasFocus()) {
			if (point.x >= window.screenX && point.x <= window.screenX + window.outerWidth && point.y >= window.screenY && point.y <= window.screenY + window.outerHeight) {
				return; // refuse to create as long as the mouse was released over active focused window to reduce chance of opening by accident
			}
		}

		const offsetX = offsetElement.offsetWidth / 2;
		const offsetY = 30/* take title bar height into account (approximation) */ + offsetElement.offsetHeight / 2;

		const bounds = {
			x: point.x - offsetX,
			y: point.y - offsetY
		};

		if (display) {
			if (bounds.x < display.x) {
				bounds.x = display.x; // prevent overflow to the left
			}

			if (bounds.y < display.y) {
				bounds.y = display.y; // prevent overflow to the top
			}
		}

		return this.editorPartsView.createAuxiliaryEditorPart({ bounds });
	}

	protected isNewWindowOperation(e: DragEvent): boolean {
		if (this.groupsView.partOptions.dragToOpenWindow) {
			return !e.altKey;
		}

		return e.altKey;
	}

	protected isMoveOperation(e: DragEvent, sourceGroup: GroupIdentifier, sourceEditor?: EditorInput): boolean {
		if (sourceEditor?.hasCapability(EditorInputCapabilities.Singleton)) {
			return true; // Singleton editors cannot be split
		}

		const isCopy = (e.ctrlKey && !isMacintosh) || (e.altKey && isMacintosh);

		return (!isCopy || sourceGroup === this.groupView.id);
	}

	protected doFillResourceDataTransfers(editors: readonly EditorInput[], e: DragEvent, disableStandardTransfer: boolean): boolean {
		if (editors.length) {
			this.instantiationService.invokeFunction(fillEditorsDragData, editors.map(editor => ({ editor, groupId: this.groupView.id })), e, { disableStandardTransfer });

			return true;
		}

		return false;
	}

	protected onTabContextMenu(editor: EditorInput, e: Event, node: HTMLElement): void {

		// Update contexts based on editor picked and remember previous to restore
		this.resourceContext.set(EditorResourceAccessor.getOriginalUri(editor, { supportSideBySide: SideBySideEditor.PRIMARY }));
		this.editorPinnedContext.set(this.tabsModel.isPinned(editor));
		this.editorIsFirstContext.set(this.tabsModel.isFirst(editor));
		this.editorIsLastContext.set(this.tabsModel.isLast(editor));
		this.editorStickyContext.set(this.tabsModel.isSticky(editor));
		this.groupLockedContext.set(this.tabsModel.isLocked);
		this.editorCanSplitInGroupContext.set(editor.hasCapability(EditorInputCapabilities.CanSplitInGroup));
		this.sideBySideEditorContext.set(editor.typeId === SideBySideEditorInput.ID);
		applyAvailableEditorIds(this.editorAvailableEditorIds, editor, this.editorResolverService);

		// Find target anchor
		let anchor: HTMLElement | StandardMouseEvent = node;
		if (isMouseEvent(e)) {
			anchor = new StandardMouseEvent(getWindow(node), e);
		}

		// Show it
		this.contextMenuService.showContextMenu({
			getAnchor: () => anchor,
			menuId: MenuId.EditorTitleContext,
			menuActionOptions: { shouldForwardArgs: true, arg: this.resourceContext.get() },
			contextKeyService: this.contextMenuContextKeyService,
			getActionsContext: () => ({ groupId: this.groupView.id, editorIndex: this.groupView.getIndexOfEditor(editor) }),
			getKeyBinding: action => this.keybindingService.lookupKeybinding(action.id, this.contextMenuContextKeyService),
			onHide: () => this.groupsView.activeGroup.focus() // restore focus to active group
		});
	}

	protected getKeybinding(action: IAction): ResolvedKeybinding | undefined {
		return this.keybindingService.lookupKeybinding(action.id, this.getEditorPaneAwareContextKeyService());
	}

	protected getKeybindingLabel(action: IAction): string | undefined {
		const keybinding = this.getKeybinding(action);

		return keybinding ? keybinding.getLabel() ?? undefined : undefined;
	}

	protected get tabHeight() {
		return this.groupsView.partOptions.tabHeight !== 'compact' ? EditorTabsControl.EDITOR_TAB_HEIGHT.themed : EditorTabsControl.EDITOR_TAB_HEIGHT.compact;
	}

	protected getHoverTitle(editor: EditorInput): string {
		return editor.getTitle(Verbosity.LONG);
	}

	protected getHoverDelegate(): IHoverDelegate {
		return this.tabsHoverDelegate;
	}

	protected updateTabHeight(): void {
		this.parent.style.setProperty('--editor-group-tab-height', `${this.tabHeight}px`);
	}

	updateOptions(oldOptions: IEditorPartOptions, newOptions: IEditorPartOptions): void {

		// Update tab height
		if (oldOptions.tabHeight !== newOptions.tabHeight) {
			this.updateTabHeight();
		}

		// Update Editor Actions Toolbar
		if (
			oldOptions.editorActionsLocation !== newOptions.editorActionsLocation ||
			oldOptions.showTabs !== newOptions.showTabs
		) {
			if (this.editorActionsToolbarContainer) {
				this.handleEditorActionToolBarVisibility(this.editorActionsToolbarContainer);
				this.updateEditorActionsToolbar();
			}
		}
	}

	abstract openEditor(editor: EditorInput): boolean;

	abstract openEditors(editors: EditorInput[]): boolean;

	abstract beforeCloseEditor(editor: EditorInput): void;

	abstract closeEditor(editor: EditorInput): void;

	abstract closeEditors(editors: EditorInput[]): void;

	abstract moveEditor(editor: EditorInput, fromIndex: number, targetIndex: number): void;

	abstract pinEditor(editor: EditorInput): void;

	abstract stickEditor(editor: EditorInput): void;

	abstract unstickEditor(editor: EditorInput): void;

	abstract setActive(isActive: boolean): void;

	abstract updateEditorSelections(): void;

	abstract updateEditorLabel(editor: EditorInput): void;

	abstract updateEditorDirty(editor: EditorInput): void;

	abstract layout(dimensions: IEditorTitleControlDimensions): Dimension;

	abstract getHeight(): number;
}
