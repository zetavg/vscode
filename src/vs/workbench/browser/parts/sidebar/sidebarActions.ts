/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import './media/sidebarpart.css';
import { localize2 } from '../../../../nls.js';
import { Action2, registerAction2 } from '../../../../platform/actions/common/actions.js';
import { IWorkbenchLayoutService, Parts } from '../../../services/layout/browser/layoutService.js';
import { KeyMod, KeyCode } from '../../../../base/common/keyCodes.js';
import { ServicesAccessor } from '../../../../platform/instantiation/common/instantiation.js';
import { KeybindingWeight } from '../../../../platform/keybinding/common/keybindingsRegistry.js';
import { Categories } from '../../../../platform/action/common/actionCommonCategories.js';
import { IPaneCompositePartService } from '../../../services/panecomposite/browser/panecomposite.js';
import { ViewContainerLocation } from '../../../common/views.js';
import { SideBarVisibleContext } from '../../../common/contextkeys.js';
// [ZP-CS8A] Cycle Side Bar Action
import { IStorageService, StorageScope, StorageTarget } from '../../../../platform/storage/common/storage.js';
import { IConfigurationService } from '../../../../platform/configuration/common/configuration.js';
import { INotificationService } from '../../../../platform/notification/common/notification.js';

registerAction2(class extends Action2 {

	constructor() {
		super({
			id: 'workbench.action.closeSidebar',
			title: localize2('closeSidebar', 'Close Primary Side Bar'),
			category: Categories.View,
			f1: true,
			precondition: SideBarVisibleContext
		});
	}

	run(accessor: ServicesAccessor): void {
		accessor.get(IWorkbenchLayoutService).setPartHidden(true, Parts.SIDEBAR_PART);
	}
});

export class FocusSideBarAction extends Action2 {

	constructor() {
		super({
			id: 'workbench.action.focusSideBar',
			title: localize2('focusSideBar', 'Focus into Primary Side Bar'),
			category: Categories.View,
			f1: true,
			keybinding: {
				weight: KeybindingWeight.WorkbenchContrib,
				when: null,
				primary: KeyMod.CtrlCmd | KeyCode.Digit0
			}
		});
	}

	async run(accessor: ServicesAccessor): Promise<void> {
		const layoutService = accessor.get(IWorkbenchLayoutService);
		const paneCompositeService = accessor.get(IPaneCompositePartService);

		// Show side bar
		if (!layoutService.isVisible(Parts.SIDEBAR_PART)) {
			layoutService.setPartHidden(false, Parts.SIDEBAR_PART);
		}

		// Focus into active viewlet
		const viewlet = paneCompositeService.getActivePaneComposite(ViewContainerLocation.Sidebar);
		viewlet?.focus();
	}
}

registerAction2(FocusSideBarAction);

// [ZP-CS8A] Cycle Side Bar Action
// Supports configurable widths through 'workbench.sideBar.cycleWidths' setting.
// Values can be numbers or objects with breakpoints like: { "0": 300, "1440": 320 }
export class CycleSideBarAction extends Action2 {

	static readonly ID = 'workbench.action.cycleSideBar';
	static readonly LABEL = localize2('cycleSideBar', "Cycle Primary Side Bar Display");

	// Storage key for side bar state
	private static readonly SIDE_BAR_STATE_KEY = 'sideBar.cycleState';

	constructor() {
		super({
			id: CycleSideBarAction.ID,
			title: CycleSideBarAction.LABEL,
			category: Categories.View,
			f1: true,
		});
	}

	override async run(accessor: ServicesAccessor): Promise<void> {
		const layoutService = accessor.get(IWorkbenchLayoutService);
		const storageService = accessor.get(IStorageService);
		const configurationService = accessor.get(IConfigurationService);
		const notificationService = accessor.get(INotificationService);

		// Get the configured widths from user settings
		const configuredWidths = configurationService.getValue<(number | Record<string, number>)[]>('workbench.sideBar.cycleWidths');

		// Helper function to evaluate a width value when needed
		const evaluateWidth = (width: number | Record<string, number>, index: number): number => {
			if (typeof width === 'number') {
				return width;
			} else if (typeof width === 'object' && width !== null) {
				try {
					// Get the current window width for breakpoint evaluation
					const windowWidth = layoutService.mainContainerDimension.width;

					// Convert object keys to numbers and sort them in descending order
					const breakpoints = Object.keys(width)
						.map(key => parseInt(key, 10))
						.filter(key => !isNaN(key))
						.sort((a, b) => b - a); // Sort descending

					// Find the first breakpoint that the window width is greater than or equal to
					for (const breakpoint of breakpoints) {
						if (windowWidth >= breakpoint) {
							const result = width[breakpoint.toString()];
							if (typeof result === 'number' && result >= 0) {
								return Math.floor(result);
							}
						}
					}

					// If no breakpoint matches, use the smallest breakpoint value
					if (breakpoints.length > 0) {
						const smallestBreakpoint = Math.min(...breakpoints);
						const result = width[smallestBreakpoint.toString()];
						if (typeof result === 'number' && result >= 0) {
							return Math.floor(result);
						}
					}

					notificationService.warn(localize2('sideBarInvalidBreakpoints', "Invalid breakpoints in side bar width configuration at index {0}. Using 300 as fallback.", index).value);
					return 300;
				} catch (error) {
					notificationService.warn(localize2('sideBarBreakpointError', "Error evaluating side bar width breakpoints at index {0}: {1}. Using 300 as fallback.", index, error instanceof Error ? `"${error.message}"` : JSON.stringify(error)).value);
					return 300;
				}
			} else {
				notificationService.warn(localize2('sideBarInvalidConfig', "Invalid side bar width configuration at index {0}: {1}. Using 300 as fallback.", index, JSON.stringify(width)).value);
				return 300;
			}
		};

		// Get the current state from storage
		const currentState = storageService.getNumber(CycleSideBarAction.SIDE_BAR_STATE_KEY, StorageScope.WORKSPACE, 0);
		let nextState = (currentState + 1) % configuredWidths.length;

		// If the side bar is not visible, start from the first non-zero width
		if (!layoutService.isVisible(Parts.SIDEBAR_PART)) {
			nextState = -1;
			for (let i = 0; i < configuredWidths.length; i++) {
				const width = evaluateWidth(configuredWidths[i], i);
				if (width > 0) {
					nextState = i;
					break;
				}
			}
			if (nextState === -1) {
				nextState = 0; // fallback to first state if all are 0
			}
		}

		const targetWidth = evaluateWidth(configuredWidths[nextState], nextState);

		if (targetWidth === 0) {
			// Hide the side bar
			layoutService.setPartHidden(true, Parts.SIDEBAR_PART);
		} else {
			// Show the side bar with the specified width
			if (!layoutService.isVisible(Parts.SIDEBAR_PART)) {
				layoutService.setPartHidden(false, Parts.SIDEBAR_PART);
			}
			layoutService.setSize(Parts.SIDEBAR_PART, { width: targetWidth, height: layoutService.getSize(Parts.SIDEBAR_PART).height });
		}

		// Save the next state to storage
		storageService.store(CycleSideBarAction.SIDE_BAR_STATE_KEY, nextState, StorageScope.WORKSPACE, StorageTarget.MACHINE);
	}
}

registerAction2(CycleSideBarAction);
