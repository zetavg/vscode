/* eslint-disable local/code-import-patterns */
/* eslint-disable header/header */

import { mainWindow } from '../../base/browser/window.js';
import { Disposable } from '../../base/common/lifecycle.js';
import { IConfigurationService } from '../../platform/configuration/common/configuration.js';
import { IWorkbenchContribution, registerWorkbenchContribution2, WorkbenchPhase } from '../../workbench/common/contributions.js';

import { DISABLED_PATCHES_KEY, DISABLE_PATCH_CLASS_PREFIX, PATCH_CODE_REGEX } from './consts.js';


class DisablePatchesContribution extends Disposable implements IWorkbenchContribution {
	static readonly ID = 'workbench.contrib.disablePatches';

	private applied = new Set<string>();

	constructor(
		@IConfigurationService private readonly configurationService: IConfigurationService,
	) {
		super();
		this.update();
		this._register(this.configurationService.onDidChangeConfiguration(e => {
			if (e.affectsConfiguration(DISABLED_PATCHES_KEY)) {
				this.update();
			}
		}));
	}

	private readCodes(): Set<string> {
		const raw = this.configurationService.getValue<unknown>(DISABLED_PATCHES_KEY);
		if (!Array.isArray(raw)) { return new Set(); }
		const out = new Set<string>();
		for (const v of raw) {
			if (typeof v !== 'string') { continue; }
			const code = v.trim().toUpperCase();
			if (PATCH_CODE_REGEX.test(code)) { out.add(code); }
		}
		return out;
	}

	private update(): void {
		const next = this.readCodes();
		const body = mainWindow.document.body.classList;
		for (const code of this.applied) {
			if (!next.has(code)) { body.remove(DISABLE_PATCH_CLASS_PREFIX + code); }
		}
		for (const code of next) {
			if (!this.applied.has(code)) { body.add(DISABLE_PATCH_CLASS_PREFIX + code); }
		}
		this.applied = next;
	}
}

registerWorkbenchContribution2(
	DisablePatchesContribution.ID,
	DisablePatchesContribution,
	WorkbenchPhase.BlockStartup,
);
