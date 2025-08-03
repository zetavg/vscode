/* eslint-disable header/header */
/* eslint-disable local/code-no-unexternalized-strings */

import type { ThemeColors } from '../../../src/vs/workbench/contrib/themes/colors';

// @ts-ignore
import Color from './vendor/color';

import { base16Colors as c } from './base16Colors';
import { chroma, lighten, opacity, overlay, saturation, withLuminanceAs } from './utils';

// See https://github.com/microsoft/vscode-docs/blob/main/api/references/theme-color.md for documentation on available colors.

const ac = {
	light_link_color: 'rgb(106, 160, 160)'
} as const;

const foreground = {
	dark: opacity(c.base05, 0.95),
	light: opacity(c.base02, 0.9),
};

const editorBackground = {
	dark: c.base00,
	light: c.base07_l,
};
const editorForeground = {
	dark: c.base05,
	light: c.base02_l,
};

const activeIconColor = {
	// dark: c.base06,
	dark: c.base05,
	light: c.base00,
};
const inactiveIconColor = {
	dark: c.base02,
	light: c.base03_a,
};

const findMatchBorder = {
	dark: opacity(c.base04, 0.75),
	light: opacity(c.base03, 0.75),
};

const listSelectionBackground = {
	dark: c.base01,
	light: opacity(c.base05, 0.8),
};
const listSelectionForeground = {
	dark: c.base06,
	light: c.base01,
};
// const listHoverBackground = Object.fromEntries(
// 	Object.entries(listSelectionBackground).map(([k, v]) => [k, opacity(v, 0.5)])
// ) as typeof listSelectionBackground;
const listHoverBackground = {
	dark: c.base00_a,
	light: opacity(listSelectionBackground.light, 0.5),
};
const listHoverForeground = listSelectionForeground;

const tabsBackground = {
	dark: c.base00_a,
	light: c.base06,
};

const tabActiveForeground = {
	// dark: c.base06,
	dark: c.base07,
	// light: c.base01,
	light: c.base00,
};

const statusBarBackground = {
	dark: c.base00_a,
	light: c.base06,
};
const statusBarForeground = {
	dark: c.base02,
	light: c.base03,
};

const editorBorder = {
	dark: opacity(c.base03, 0.3),
	light: opacity(c.base04, 0.3),
};

const editorIndentGuide = {
	dark: opacity(c.base05, 0.08),
	light: opacity(c.base02, 0.12),
};
const editorIndentGuideActive = {
	dark: opacity(c.base06_a, 0.12),
	light: opacity(c.base01, 0.18),
};

const editorSelectionBackground = {
	dark: c.base02,
	light: c.base05,
};

const addedIndicator = {
	dark: c.base0B,
	light: c.base0B_l,
};
const modifiedIndicator = {
	dark: c.base0E,
	light: c.base0E_l,
};
const deletedIndicator = {
	dark: c.base08,
	light: c.base08,
};

const warning = {
	// Option 1: Yellow
	// dark: c.base0A,
	// light: c.base0A_l,
	// Option 2: Orange, but add some yellow to make it more distinguishable from errors.
	dark: overlay(c.base09, c.base0A, 0.5),
	light: overlay(c.base09, c.base0A_l, 0.25),
};

const findMatchIndicatorColor = c.base0C_a;

function makeInputValidationBackground(color: string) {
	return {
		dark: overlay(c.base00_a, lighten(color, -0.54), 0.64),
		light: overlay(c.base07, lighten(color, 0.5), 0.5),
	};
}

// const sidebarItemForegroundOpacity = 0.9;
const sidebarItemForegroundOpacity = 1; // This is now done with CSS patch [ZP-73AF].
// const sidebarItemWithStatusForegroundOpacity = 0.642;
const sidebarItemWithStatusForegroundOpacity = 0.8; // Additional opacity is applied with CSS patch [ZP-73AF].
const lightSidebarItemWithStatusForegroundOpacity = 0.9; // Additional opacity is applied with CSS patch [ZP-73AF].

/**
 * See: https://code.visualstudio.com/api/references/theme-color
 */
export const colors: ThemeColors<string | { light: string; dark: string }> & Record<string, string | { light: string; dark: string }> = {
	//
	// Deprecated colors
	//
	'quickInput.list.focusBackground': '',
	'editorActiveLineNumber.foreground': '',

	//
	// Contrast colors
	//
	// 'contrastActiveBorder': '', // optional
	// 'contrastBorder': '', // optional

	//
	// Base colors
	//
	'focusBorder': {
		dark: opacity(c.base05, 0.2),
		light: '', // TODO
	},
	'foreground': foreground,
	'disabledForeground': {
		dark: opacity(c.base02, 0.4),
		light: opacity(c.base03, 0.4),
	},
	// 'widget.border': '', // optional
	'widget.shadow': '', // TODO
	'selection.background': {
		dark: '#beeff73a',
		light: '#0d32331c',
	},
	'descriptionForeground': {
		dark: c.base02,
		light: c.base03,
	},
	'errorForeground': {
		dark: c.base08,
		light: c.base08,
	},
	'icon.foreground': {
		dark: c.base02,
		light: c.base03,
	},
	'sash.hoverBorder': editorBorder, // TODO

	//
	// Window border
	//
	'window.activeBorder': {
		// dark: '#f3f7f430',
		dark: '',
		// light: '#0709036d',
		// light: '#828486',
		// light: '#A9ABAF',
		light: '',
	},
	'window.inactiveBorder': {
		// dark: '#f3f7f430',
		dark: '',
		// light: '#0709036d',
		// light: '#828486',
		// light: '#A9ABAF',
		light: '',
	},

	//
	// Title Bar colors
	//
	'titleBar.activeBackground': {
		// dark: '#1E1E1ECC', // macOS header view color
		// dark: '#383736',
		dark: '#272728',
		// light: '#EAEAEA', // macOS title bar color
		// light: '#f4f3f1',
		// light: '#f1f1f0',
		light: lighten('rgb(241, 241, 240)', -0.02),
	},
	'titleBar.activeForeground': {
		dark: '#FFFFFFA0',
		// light: '#000000A0',
		// light: '#4a4949',
		light: '#686765',
	},
	'titleBar.inactiveBackground': {
		// dark: '#1E1E1ECC', // macOS header view color
		// dark: '#282826',
		dark: '#222223',
		// light: '#EAEAEA', // macOS title bar color
		// light: '#E7E7E6', // macOS title bar color
		light: '#e7e6e5',
	},
	'titleBar.inactiveForeground': {
		dark: '#FFFFFF50',
		// light: '#00000050',
		light: '#a7a7a5',
	},
	'titleBar.border': {
		// dark: '#00000033',
		dark: '#00000003',
		// light: '#BFC3CB',
		light: c.base06,
	},

	//
	// Command Center colors
	//
	// Usually displayed on the title bar. The search magnifier icon color is `icon.foreground`.
	//
	// 'commandCenter.foreground': '', // optional
	// 'commandCenter.activeForeground': '', // optional
	'commandCenter.background': '',
	'commandCenter.activeBackground': '',
	// 'commandCenter.border': '', // optional
	// 'commandCenter.inactiveForeground': '', // optional
	// 'commandCenter.inactiveBorder': '', // optional
	// 'commandCenter.activeBorder': '', // optional
	// 'commandCenter.debuggingBackground': '', // optional

	//
	// Activity Bar
	//
	// Usually displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar.
	//
	'activityBar.background': {
		dark: c.base00_a,
		light: c.base06,
	},

	'activityBar.foreground': {
		...activeIconColor,
		light: c.base01, // on light theme, use a lighter color to avoid over-emphasizing the activity bar, and `activityBar.activeBorder` is used to make the active item more distinguishable.
	},
	'activityBar.inactiveForeground': inactiveIconColor,
	'activityBar.activeBorder': {
		...activeIconColor,
		dark: '#00000000',
		light: c.base01,
	},
	'activityBar.activeBackground': '',
	'activityBar.activeFocusBorder': '',
	'activityBarBadge.background': inactiveIconColor,
	'activityBarBadge.foreground': {
		// dark: c.base06,
		dark: c.base05,
		light: c.base07,
	},
	'activityBar.border': '', // optional
	'activityBar.dropBorder': '', // optional
	'activityBarTop.background': {
		// dark: c.base00_a,
		// light: c.base06,
		dark: lighten(c.base01_a, -0.0),
		light: lighten(c.base06_a, -0.0),
	},
	'activityBarTop.foreground': {
		...activeIconColor,
		light: c.base01, // on light theme, use a lighter color to avoid over-emphasizing the activity bar, and `activityBar.activeBorder` is used to make the active item more distinguishable.
	},
	'activityBarTop.inactiveForeground': inactiveIconColor,
	'activityBarTop.activeBorder': {
		...activeIconColor,
		dark: c.base05,
		light: c.base01,
	},
	'activityBarTop.activeBackground': '',
	'activityBarTop.dropBorder': '', // optional

	//
	// Side Bar
	//
	'sideBar.background': {
		dark: c.base01_a,
		light: c.base06_a,
	},
	'sideBar.foreground': {
		// dark: c.base02,
		dark: opacity(c.base03, sidebarItemForegroundOpacity),
		light: opacity(c.base03, sidebarItemForegroundOpacity),
	},
	// 'sideBar.border': '', // optional
	// 'sideBar.dropBackground': '', // optional
	'sideBarTitle.foreground': {
		dark: c.base03,
		light: c.base03,
	},
	'sideBarSectionHeader.background': {
		dark: opacity(c.base00_a, 0.6),
		light: opacity(c.base05, 0.4),
	},
	'sideBarSectionHeader.foreground': {
		dark: c.base02,
		light: c.base03,
	}, // optional
	// 'sideBarSectionHeader.border': '', // optional
	// 'sideBarActivityBarTop.border': '', // optional
	// 'sideBarTitle.background': '', // optional
	// 'sideBarStickyScroll.background': '', // optional
	'sideBarStickyScroll.border': '',
	'sideBarStickyScroll.shadow': {
		dark: c.base00_a,
		light: c.base05,
	},

	//
	// Text colors
	//
	// Places that use these colors: extension page, Interactive Editor Playground.
	//
	'textBlockQuote.background': {
		dark: opacity(c.base03, 0.0),
		light: opacity(c.base04, 0.0),
	},
	'textBlockQuote.border': {
		dark: c.base0D,
		light: c.base0D_l,
	},
	'textCodeBlock.background': { // Places that use this: code block in editor hover widget.
		dark: opacity(c.base07, 0.1),
		light: opacity(c.base01, 0.1),
	},
	'textLink.foreground': {
		dark: c.base0C_a,
		light: ac.light_link_color,
	},
	'textLink.activeForeground': {
		dark: c.base0C_a,
		light: ac.light_link_color,
	},
	'textPreformat.foreground': {
		dark: c.base0A,
		light: c.base09,
	},
	'textPreformat.background': {
		dark: opacity(c.base07, 0.1),
		light: opacity(c.base02, 0.1),
	},
	'textSeparator.foreground': { // need to check
		dark: opacity(c.base07, 0.1),
		light: opacity(c.base00, 0.1),
	},

	//
	// Action colors
	//
	// Places that use these colors: the layout buttons on the top-right of the window, the icon buttons on the editor tab bar, icon buttons on sidebar pane headers.
	// `toolbar.hoverForeground` might be more ideal but unfortunately it isn't supported
	//
	'toolbar.hoverBackground': { // TODO: check
		dark: opacity(c.base06, 0.08),
		light: opacity(c.base02, 0.08),
	},
	// 'toolbar.hoverOutline': '', // optional
	'toolbar.activeBackground': '', // TODO

	//
	// Button control
	//
	'button.background': c.base0C_a,
	'button.foreground': {
		dark: c.base01,
		light: opacity(c.base01, 0.9),
	},
	'button.border': '', // optional
	'button.separator': opacity(c.base01, 0.4),
	'button.hoverBackground': '',
	'button.secondaryBackground': {
		// dark: lighten(c.base01, -0.05),
		dark: opacity(c.base01, 0.8),
		light: opacity(c.base05, 0.5),
	},
	'button.secondaryForeground': { // need to check
		dark: c.base0C_a,
		light: lighten(ac.light_link_color, -0.16),
	},
	'button.secondaryHoverBackground': opacity(c.base0C_a, 0.5), // need to check
	'checkbox.background': {
		dark: c.base00_a,
		light: c.base06,
	},
	'checkbox.foreground': {
		dark: c.base06_a,
		light: c.base00,
	},
	'checkbox.border': {
		dark: '#00000000',
		light: opacity(c.base04, 0.5),
	},
	'checkbox.selectBackground': '',
	'checkbox.selectBorder': '',

	//
	// Dropdown control
	//
	'dropdown.background': {
		dark: c.base00_a,
		light: c.base06_a,
	},
	'dropdown.foreground': {
		dark: c.base06_a,
		light: c.base00,
	},
	'dropdown.border': {
		dark: '#00000000',
		light: opacity(c.base04, 0.5),
	},
	'dropdown.listBackground': {
		dark: c.base01_a,
		light: c.base06,
	},

	//
	// Input control
	//
	'input.background': {
		dark: c.base00_a,
		light: c.base07,
	},
	'input.foreground': {
		dark: opacity(c.base06_a, 0.85),
		light: opacity(c.base02, 1.0),
	},
	'input.border': {
		dark: '#00000000',
		// light: '#00000000',
		light: opacity(c.base04, 0.25),
	},
	'input.placeholderForeground': {
		dark: opacity(c.base02, 0.7),
		light: opacity(c.base03_a, 0.5),
	},
	'inputOption.activeBorder': {
		dark: c.base02,
		light: c.base04,
	}, // There's no way to change `inputOption.inactiveForeground` so we use custom CSS to do that. This color (`--vscode-inputOption-activeBorder`) will be used as such `inputOption.inactiveForeground`.
	'inputOption.activeForeground': {
		dark: opacity(c.base07_a, 1.0),
		light: opacity(c.base02, 1.0),
	},
	'inputOption.activeBackground': '#00000000',
	'inputOption.hoverBackground': {
		dark: opacity(c.base06, 0.1),
		light: opacity(c.base02, 0.1),
	},
	'inputValidation.errorBorder': c.base08,
	'inputValidation.errorBackground': makeInputValidationBackground(c.base08),
	'inputValidation.errorForeground': '',
	'inputValidation.infoBorder': c.base0D,
	'inputValidation.infoBackground': makeInputValidationBackground(c.base0D),
	'inputValidation.infoForeground': '',
	'inputValidation.warningBorder': c.base09,
	'inputValidation.warningBackground': makeInputValidationBackground(c.base09),
	'inputValidation.warningForeground': '',

	//
	// Scrollbar control
	//
	'scrollbar.shadow': '#00000000', // no shadow
	'scrollbarSlider.activeBackground': {
		dark: opacity(c.base03, 0.9),
		light: opacity(c.base04, 0.9),
	},
	'scrollbarSlider.background': {
		// dark: opacity(c.base03, 0.64),
		// light: opacity(c.base04, 0.64),
		dark: opacity(c.base03, 0.5),
		light: opacity(c.base04, 0.5),
	},
	'scrollbarSlider.hoverBackground': {
		dark: opacity(c.base03, 0.75),
		light: opacity(c.base04, 0.75),
	},

	//
	// Badge
	//
	'badge.foreground': {
		dark: c.base03_a,
		// light: '#ffffff',
		light: c.base03,
	},
	'badge.background': {
		dark: c.base01,
		// light: lighten(c.base04, 0.1),
		light: c.base05,
	},

	//
	// Progress bar
	//
	'progressBar.background': { // TODO: check
		dark: opacity(c.base03, 0.9),
		light: opacity(c.base04, 0.9),
	},

	//
	// Lists and trees
	//
	'list.activeSelectionBackground': listSelectionBackground,
	'list.activeSelectionForeground': listSelectionForeground,
	'list.activeSelectionIconForeground': '',
	'list.dropBackground': listHoverBackground,
	'list.focusBackground': '',
	'list.focusForeground': '',
	// 'list.focusHighlightForeground': '', // optional
	// 'list.focusOutline': '', // optional
	'list.focusAndSelectionOutline': '',
	'list.highlightForeground': {
		dark: withLuminanceAs(chroma(c.base0D, n => Math.min(0.2, n * 10)), listHoverForeground.dark, { lightnessAdjustment: (l) => l - 0.2 }),
		light: withLuminanceAs(chroma(c.base0D, n => Math.min(0.2, n * 10)), listHoverForeground.light, { lightnessAdjustment: (l) => l - 0.2 }),
	}, // Places that use this: `list.focusHighlightForeground` which is used to highlight the matched words in the quick picker (command palette).
	'list.hoverBackground': listHoverBackground,
	'list.hoverForeground': listHoverForeground,
	'list.inactiveSelectionBackground': listSelectionBackground,
	'list.inactiveSelectionForeground': listSelectionForeground,
	'list.inactiveSelectionIconForeground': '',
	'list.inactiveFocusBackground': '',
	'list.inactiveFocusOutline': '',
	'list.invalidItemForeground': '', // TODO
	'list.errorForeground': opacity(c.base08, sidebarItemWithStatusForegroundOpacity),
	'list.warningForeground': {
		// dark: opacity(c.base0A_a, sidebarItemWithStatusForegroundOpacity),
		// light: opacity(c.base09, lightSidebarItemWithStatusForegroundOpacity),
		dark: opacity(warning.dark, sidebarItemWithStatusForegroundOpacity),
		light: opacity(warning.light, lightSidebarItemWithStatusForegroundOpacity),
	},
	// 'listFilterWidget.background': '', // optional
	'listFilterWidget.outline': '', // TODO
	'listFilterWidget.noMatchesOutline': '', // TODO
	// 'listFilterWidget.shadow': '', // optional
	'list.filterMatchBackground': '#00000000', // optional
	'list.filterMatchBorder': findMatchBorder,
	'list.deemphasizedForeground': '', // TODO
	// 'list.dropBetweenBackground': '', // optional
	'tree.indentGuidesStroke': {
		dark: opacity(c.base02, 0.4),
		light: opacity(c.base05, 0.6),
	},
	// 'tree.inactiveIndentGuidesStroke': '', // optional
	'tree.tableColumnsBorder': {
		dark: opacity(c.base03, 0.3),
		light: opacity(c.base04, 0.4),
	},
	'tree.tableOddRowsBackground': {
		dark: opacity(c.base02, 0.1),
		light: opacity(c.base05, 0.2),
	}, // optional

	//
	// Profiles
	//
	'profileBadge.background': '', // TODO
	'profileBadge.foreground': '', // TODO
	// 'profiles.sashBorder': '', // optional

	//
	// Minimap
	//
	'minimap.selectionHighlight': {
		dark: opacity(c.base04, 0.9),
		light: opacity(c.base04, 0.9),
	},
	// For text documents (such as Markdown files) this will highlight all occurrences of the word under the cursor (case sensitive) or the selected text (case insensitive).
	// And for code files, this will highlight all occurrences of the symbol under the cursor, including matching property names or string literals, but excluding keywords in the language. For variables, it seems to be smart enough to identify the scope and highlight only the same references but not all variables with the same name.
	// So we consider this information useful and give it a more prominent color.
	'minimap.selectionOccurrenceHighlight': {
		dark: opacity(saturation(overlay(c.base0A, c.base0B_l, 0.1), n => n * 1), 0.8),
		light: opacity(saturation(overlay(c.base0A_l, c.base0B, 0.1), n => n * 1), 0.8),
	},
	// 'minimap.selectionOccurrenceHighlight': { // Used to highlight occurrences of the selected text in a text document (such as Markdown). This seems to not apply to selections in code files.
	// 	dark: opacity(c.base04, 0.25),
	// 	light: opacity(c.base05, 0.25),
	// },
	'minimap.findMatchHighlight': {
		dark: opacity(c.base04, 0.25),
		light: opacity(c.base04, 0.25),
	},
	'minimap.errorHighlight': {
		// This is important, use a color that is easy to spot, and to distinguish from warnings.
		dark: saturation(c.base08_a, n => n * 1.2),
		light: saturation(c.base08_a, n => n * 1.2),
	},
	'minimap.warningHighlight': {
		// Using orange here to make it more distinguishable from selection occurrence highlights.
		dark: lighten(c.base09, 0.05),
		light: c.base09,
	},
	'minimap.infoHighlight': {
		dark: c.base0C,
		light: c.base0C,
	},
	'minimap.background': '',
	'minimap.foregroundOpacity': '',
	'minimapSlider.background': { // Recommended to set `"editor.minimap.showSlider": "always"` in user settings.
		dark: opacity(c.base02, 0.30),
		light: opacity(c.base05, 0.30),
	},
	'minimapSlider.hoverBackground': {
		dark: opacity(c.base02, 0.30),
		light: opacity(c.base05, 0.30),
	},
	'minimapSlider.activeBackground': {
		dark: opacity(c.base02, 0.4),
		light: opacity(c.base05, 0.4),
	},
	'minimapGutter.addedBackground': addedIndicator,
	'minimapGutter.modifiedBackground': modifiedIndicator,
	'minimapGutter.deletedBackground': deletedIndicator,

	//
	// Editor Groups & Tabs
	//
	'editorGroup.border': editorBorder,
	'editorGroup.dropBackground': { // TODO: consider making this blue
		dark: opacity(c.base00_a, 0.8),
		light: opacity(c.base06, 0.8),
	},
	// 'editorGroupHeader.noTabsBackground': '', // optional
	'editorGroupHeader.tabsBackground': tabsBackground,
	'editorGroupHeader.tabsBorder': '',
	// 'editorGroupHeader.border': '', // optional
	'editorGroup.emptyBackground': '',
	// 'editorGroup.focusedEmptyBorder': '', // optional
	// 'editorGroup.dropIntoPromptForeground': '', // optional
	// 'editorGroup.dropIntoPromptBackground': '', // optional
	// 'editorGroup.dropIntoPromptBorder': '', // optional
	// 'tab.activeBackground': '', // optional
	// 'tab.unfocusedActiveBackground': '', // optional
	'tab.activeForeground': tabActiveForeground,
	'tab.border': '#00000000',
	'tab.activeBorder': '',
	// 'tab.selectedBorderTop': '', // optional
	// 'tab.selectedBackground': '', // optional
	'tab.selectedForeground': '', // optional
	// 'tab.dragAndDropBorder': '', // optional
	// 'tab.unfocusedActiveBorder': '', // optional
	'tab.activeBorderTop': '',
	// 'tab.unfocusedActiveBorderTop': '', // optional
	// 'tab.lastPinnedBorder': '', // optional
	'tab.inactiveBackground': tabsBackground,
	// 'tab.unfocusedInactiveBackground': '', // optional
	'tab.inactiveForeground': {
		dark: c.base03,
		light: c.base03,
	},
	// 'tab.unfocusedActiveForeground': '', // optional
	// 'tab.unfocusedInactiveForeground': '', // optional
	'tab.hoverBackground': '',
	// 'tab.unfocusedHoverBackground': '', // optional
	'tab.hoverForeground': tabActiveForeground,
	// 'tab.unfocusedHoverForeground': '', // optional
	'tab.hoverBorder': '',
	// 'tab.unfocusedHoverBorder': '', // optional
	'tab.activeModifiedBorder': '',
	// 'tab.inactiveModifiedBorder': '', // optional
	// 'tab.unfocusedActiveModifiedBorder': '', // optional
	// 'tab.unfocusedInactiveModifiedBorder': '', // optional
	// 'editorPane.background': '', // optional
	// 'sideBySideEditor.horizontalBorder': '', // optional
	// 'sideBySideEditor.verticalBorder': '', // optional

	//
	// Editor colors
	//
	'editor.background': editorBackground,
	'editor.foreground': editorForeground,
	'editorLineNumber.foreground': {
		dark: opacity(c.base03_a, 0.75),
		light: opacity(c.base03, 0.5),
	},
	'editorLineNumber.activeForeground': {
		dark: c.base04,
		light: c.base03,
	},
	'editorLineNumber.dimmedForeground': '',
	'editorCursor.background': '',
	'editorCursor.foreground': {
		dark: c.base05,
		light: c.base05,
	},
	// 'editorMultiCursor.primary.foreground': '', // optional
	// 'editorMultiCursor.primary.background': '', // optional
	// 'editorMultiCursor.secondary.foreground': '', // optional
	// 'editorMultiCursor.secondary.background': '', // optional
	// 'editor.placeholder.foreground': '', // optional
	'editor.selectionBackground': editorSelectionBackground,
	// 'editor.selectionForeground': '', // optional
	// 'editor.inactiveSelectionBackground': '', // optional
	// 'editor.selectionHighlightBackground': '', // optional
	// 'editor.selectionHighlightBorder': '', // optional
	'editor.wordHighlightBackground': '#00000000',
	// 'editor.wordHighlightBorder': '', // optional
	'editor.wordHighlightStrongBackground': '#00000000',
	// 'editor.wordHighlightStrongBorder': '', // optional
	// 'editor.wordHighlightTextBackground': '', // optional
	// 'editor.wordHighlightTextBorder': '', // optional
	'editor.findMatchBackground': '',
	'editor.findMatchForeground': '',
	'editor.findMatchHighlightForeground': '',
	'editor.findMatchHighlightBackground': '#00000000',
	'editor.findRangeHighlightBackground': '',
	// 'editor.findMatchBorder': '', // optional
	'editor.findMatchHighlightBorder': findMatchBorder,
	// 'editor.findRangeHighlightBorder': '', // optional
	'search.resultsInfoForeground': {
		dark: opacity(c.base03_a, 0.9),
		light: opacity(c.base03, 0.9),
	},
	// 'searchEditor.findMatchBackground': '', // optional
	// 'searchEditor.findMatchBorder': '', // optional
	// 'searchEditor.textInputBorder': '', // optional
	'editor.hoverHighlightBackground': '',
	'editor.lineHighlightBackground': {
		dark: c.base01,
		light: c.base06,
	},
	'editor.lineHighlightBorder': '#00000000',
	// 'editorWatermark.foreground': '', // optional
	// 'editorUnicodeHighlight.border': '', // optional
	// 'editorUnicodeHighlight.background': '', // optional
	'editorLink.activeForeground': '',
	'editor.rangeHighlightBackground': '',
	// 'editor.rangeHighlightBorder': '', // optional
	// 'editor.symbolHighlightBackground': '', // optional
	// 'editor.symbolHighlightBorder': '', // optional
	'editorWhitespace.foreground': '',
	// 'editorIndentGuide.background': '', // optional
	'editorIndentGuide.background1': editorIndentGuide,
	'editorIndentGuide.background2': editorIndentGuide,
	'editorIndentGuide.background3': editorIndentGuide,
	'editorIndentGuide.background4': editorIndentGuide,
	'editorIndentGuide.background5': editorIndentGuide,
	'editorIndentGuide.background6': editorIndentGuide,
	// 'editorIndentGuide.activeBackground': '', // optional
	'editorIndentGuide.activeBackground1': editorIndentGuideActive,
	'editorIndentGuide.activeBackground2': editorIndentGuideActive,
	'editorIndentGuide.activeBackground3': editorIndentGuideActive,
	'editorIndentGuide.activeBackground4': editorIndentGuideActive,
	'editorIndentGuide.activeBackground5': editorIndentGuideActive,
	'editorIndentGuide.activeBackground6': editorIndentGuideActive,
	'editorInlayHint.background': '', // optional
	'editorInlayHint.foreground': '',
	// 'editorInlayHint.typeForeground': '', // optional
	// 'editorInlayHint.typeBackground': '', // optional
	// 'editorInlayHint.parameterForeground': '', // optional
	// 'editorInlayHint.parameterBackground': '', // optional
	'editorRuler.foreground': '',
	'editor.linkedEditingBackground': '',
	'editorCodeLens.foreground': '',
	'editorLightBulb.foreground': {
		dark: c.base0A,
		light: c.base0A_l,
	},
	'editorLightBulbAutoFix.foreground': '',
	// 'editorLightBulbAi.foreground': '', // optional
	'editorBracketMatch.background': '#00000000',
	'editorBracketMatch.border': {
		dark: c.base03_a,
		light: c.base04,
	},
	'editorBracketHighlight.foreground1': editorForeground,
	'editorBracketHighlight.foreground2': {
		dark: overlay(editorForeground.dark, c.base0C_a, 0.8),
		light: overlay(editorForeground.light, c.base0C_l, 0.9),
	},
	'editorBracketHighlight.foreground3': {
		dark: overlay(editorForeground.dark, c.base0E, 0.8),
		light: overlay(editorForeground.light, c.base0E_l, 0.9),
	},
	'editorBracketHighlight.foreground4': editorForeground,
	'editorBracketHighlight.foreground5': {
		dark: overlay(editorForeground.dark, c.base0C_a, 0.8),
		light: overlay(editorForeground.light, c.base0C_l, 0.9),
	},
	'editorBracketHighlight.foreground6': {
		dark: overlay(editorForeground.dark, c.base0E, 0.8),
		light: overlay(editorForeground.light, c.base0E_l, 0.9),
	},
	'editorBracketHighlight.unexpectedBracket.foreground': c.base08,
	'editorBracketPairGuide.activeBackground1': '',
	'editorBracketPairGuide.activeBackground2': '',
	'editorBracketPairGuide.activeBackground3': '',
	'editorBracketPairGuide.activeBackground4': '',
	'editorBracketPairGuide.activeBackground5': '',
	'editorBracketPairGuide.activeBackground6': '',
	'editorBracketPairGuide.background1': '',
	'editorBracketPairGuide.background2': '',
	'editorBracketPairGuide.background3': '',
	'editorBracketPairGuide.background4': '',
	'editorBracketPairGuide.background5': '',
	'editorBracketPairGuide.background6': '',
	'editor.foldBackground': opacity(c.base0D, 0.05),
	'editor.foldPlaceholderForeground': {
		dark: c.base0D,
		light: c.base0D_l,
	},
	'editorOverviewRuler.background': editorBackground,
	'editorOverviewRuler.border': editorBorder,
	'editorOverviewRuler.findMatchForeground': opacity(findMatchIndicatorColor, 0.2),
	'editorOverviewRuler.rangeHighlightForeground': '#00f', // TODO
	'editorOverviewRuler.selectionHighlightForeground': { // Used to highlight occurrences of the selected text in a text document (such as Markdown). This seems to not apply to selections in code files.
		dark: opacity(editorSelectionBackground.dark, 0.8),
		light: opacity(editorSelectionBackground.light, 0.8),
	},
	'editorOverviewRuler.wordHighlightForeground': { // Used to highlight occurrences of the selected symbol (word) or the symbol (word) under the cursor.
		// Using a very invisible color to keep information on the overview ruler minimal.
		dark: opacity(editorSelectionBackground.dark, 0.25),
		light: opacity(editorSelectionBackground.light, 0.25),
	},
	'editorOverviewRuler.wordHighlightStrongForeground': { // See also: minimap.selectionOccurrenceHighlight
		// dark: opacity(saturation(overlay(c.base0A, c.base0B_l, 0.1), n => n * 1), 0.8),
		// light: opacity(saturation(overlay(c.base0A_l, c.base0B, 0.1), n => n * 1), 0.8),
		dark: opacity(editorSelectionBackground.dark, 0.8),
		light: opacity(editorSelectionBackground.light, 0.8),
	},
	'editorOverviewRuler.wordHighlightTextForeground': { // Used to highlight occurrences of the word under the cursor in a text document (such as Markdown). If a word is selected in a text document, it seems that `editorOverviewRuler.selectionHighlightForeground` will be used instead.
		// Using a very invisible color to keep information on the overview ruler minimal.
		dark: opacity(editorSelectionBackground.dark, 0.25),
		light: opacity(editorSelectionBackground.light, 0.25),
	},
	// 'editorOverviewRuler.modifiedForeground': '', // use default
	// 'editorOverviewRuler.addedForeground': '', // use default
	// 'editorOverviewRuler.deletedForeground': '', // use default
	'editorOverviewRuler.errorForeground': opacity(c.base08_a, 0.9),
	// 'editorOverviewRuler.warningForeground': '', // use default (editorWarning.foreground)
	'editorOverviewRuler.infoForeground': {
		dark: opacity(c.base0C, 0.5),
		light: opacity(c.base0C_l, 0.5),
	}, // default is editorInfo.foreground, we adjust the opacity to make it less prominent
	'editorOverviewRuler.bracketMatchForeground': editorIndentGuide,
	// 'editorOverviewRuler.inlineChatInserted': '', // optional
	// 'editorOverviewRuler.inlineChatRemoved': '', // optional

	// These colors are used as squiggly line colors in the editor.
	// We don't want squigglies, however these colors are also referenced as the defaults of many other colors, even some of them are text colors, so it will be problematic to set them to `#00000000`.
	// So we still set them with reasonable values, and remove the squigglies with patch [ZP-0FE1].
	'editorError.foreground': c.base08,
	'editorWarning.foreground': warning,
	'editorInfo.foreground': {
		dark: c.base0C,
		light: c.base0C_l,
	},
	'editorHint.foreground': {
		dark: c.base0B,
		light: c.base0B_l,
	},

	'editorError.background': {
		// dark: opacity(lighten(saturation(c.base08, 100), -0.3), 0.25),
		dark: opacity(lighten(saturation(c.base08, 60), -0.2), 0.25),
		light: opacity(lighten(saturation(c.base08, 100), 0.2), 0.3),
	},
	'editorWarning.background': {
		dark: opacity(lighten(saturation(warning.dark, 100), -0.3), 0.25),
		light: opacity(lighten(saturation(warning.light, 100), -0.05), 0.3),
	},
	'editorInfo.background': '', // using underline, patch [ZP-0FE1] will turn the editorInfo.foreground squiggly line into a straight underline

	// 'editorError.border': '', // optional
	// 'editorWarning.border': '', // optional
	// 'editorInfo.border': '', // optional
	// 'editorHint.border': '', // optional

	// 'problemsErrorIcon.foreground': '', // use default (editorError.foreground)
	// 'problemsWarningIcon.foreground': '', // use default (editorWarning.foreground)
	// 'problemsInfoIcon.foreground': '', // use default (editorInfo.foreground)
	// 'editorUnnecessaryCode.border': '', // optional
	'editorUnnecessaryCode.opacity': '', // use default
	'editorGutter.background': {
		dark: '',
		light: '',
		// light: opacity(c.base06_a, 0.5),
	},
	'editorGutter.modifiedBackground': modifiedIndicator,
	'editorGutter.addedBackground': {
		dark: opacity(addedIndicator.dark, 0.9),
		light: addedIndicator.light,
	},
	'editorGutter.deletedBackground': deletedIndicator,
	'editorGutter.modifiedSecondaryBackground': {
		dark: opacity(modifiedIndicator.dark, 0.3),
		light: opacity(modifiedIndicator.light, 0.3),
	},
	'editorGutter.addedSecondaryBackground': {
		dark: opacity(addedIndicator.dark, 0.3),
		light: opacity(addedIndicator.light, 0.3),
	},
	'editorGutter.deletedSecondaryBackground': {
		dark: opacity(deletedIndicator.dark, 0.3),
		light: opacity(deletedIndicator.light, 0.3),
	},
	// 'editorGutter.commentRangeForeground': '', // optional
	// 'editorGutter.commentGlyphForeground': '', // optional
	// 'editorGutter.commentUnresolvedGlyphForeground': '', // optional
	// 'editorGutter.foldingControlForeground': '', // optional
	// 'editorCommentsWidget.resolvedBorder': '', // optional
	// 'editorCommentsWidget.unresolvedBorder': '', // optional
	// 'editorCommentsWidget.rangeBackground': '', // optional
	// 'editorCommentsWidget.rangeActiveBackground': '', // optional
	// 'editorCommentsWidget.replyInputBackground': '', // optional
	'bookmarks.overviewRuler': c.base0F,

	//
	// Diff editor colors
	//

	'diffEditor.insertedLineBackground': {
		dark: opacity(addedIndicator.dark, 0.12),
		light: opacity(addedIndicator.light, 0.12),
	},
	'diffEditor.insertedTextBackground': {
		dark: opacity(addedIndicator.dark, 0.20),
		light: opacity(addedIndicator.light, 0.20),
	},
	// 'diffEditor.insertedTextBorder': '', // optional
	'diffEditor.removedLineBackground': {
		dark: opacity(deletedIndicator.dark, 0.12),
		light: opacity(deletedIndicator.light, 0.12),
	},
	'diffEditor.removedTextBackground': {
		dark: opacity(deletedIndicator.dark, 0.20),
		light: opacity(deletedIndicator.light, 0.20),
	},
	// 'diffEditor.removedTextBorder': '', // optional
	'diffEditor.border': {
		dark: opacity(editorBorder.dark, 0.1),
		light: opacity(editorBorder.light, 0.1),
	},
	'diffEditor.diagonalFill': {
		dark: opacity(c.base02, 0.8),
		light: opacity(c.base05, 0.8),
	},
	'diffEditorGutter.insertedLineBackground': {
		dark: opacity(addedIndicator.dark, 0.08),
		light: opacity(addedIndicator.light, 0.08),
	},
	'diffEditorGutter.removedLineBackground': {
		dark: opacity(deletedIndicator.dark, 0.08),
		light: opacity(deletedIndicator.light, 0.08),
	},
	'diffEditorOverview.insertedForeground': '',
	'diffEditorOverview.removedForeground': '',
	// 'diffEditor.unchangedRegionBackground': '', // optional
	// 'diffEditor.unchangedRegionForeground': '', // optional
	'diffEditor.unchangedRegionShadow': '',
	'diffEditor.unchangedCodeBackground': '',
	'diffEditor.move.border': '',
	'diffEditor.moveActive.border': '',
	'multiDiffEditor.headerBackground': '',
	// 'multiDiffEditor.background': '', // optional
	'multiDiffEditor.border': '',

	//
	// Chat colors
	//
	'chat.foreground': { // [ZP-A612]
		dark: c.base03_a,
		light: c.base03,
	},
	'chat.requestBorder': '',
	// 'chat.requestBackground': '', // optional
	'chat.requestBubbleBackground': {
		dark: opacity(c.base01, 0.4),
		light: opacity(c.base05, 0.4),
	},
	'chat.requestBubbleHoverBackground': {
		dark: opacity(c.base01, 0.8),
		light: opacity(c.base05, 0.8),
	},
	'chat.slashCommandBackground': {
		dark: opacity(c.base07, 0.1),
		light: opacity(c.base02, 0.1),
	},
	'chat.slashCommandForeground': {
		dark: overlay(c.base03_a, 'rgb(64, 166, 255)', 0.8),
		light: overlay(c.base03, 'rgb(80, 162, 236)', 0.8),
	},
	'chat.avatarBackground': {
		dark: c.base00_a,
		light: '',
	},
	// 'chat.avatarForeground': '', // optional

	//
	// Inline Chat colors
	//
	// 'inlineChat.background': '', // optional
	// 'inlineChat.foreground': '', // optional
	// 'inlineChat.border': '', // optional
	// 'inlineChat.shadow': '', // optional
	// 'inlineChatInput.border': '', // optional
	// 'inlineChatInput.focusBorder': '', // optional
	// 'inlineChatInput.placeholderForeground': '', // optional
	// 'inlineChatInput.background': '', // optional
	// 'inlineChatDiff.inserted': '', // optional
	// 'inlineChatDiff.removed': '', // optional

	// Panel Chat colors
	// 'interactive.activeCodeBorder': '', // optional
	// 'interactive.inactiveCodeBorder': '', // optional

	//
	// Editor widget colors
	//
	'editorWidget.foreground': {
		...foreground,
		light: lighten(c.base03, -0.01),
	},
	'editorWidget.background': {
		dark: c.base01_a,
		light: lighten(c.base06_a, 0.01),
	},
	'editorWidget.border': {
		dark: opacity(c.base02, 0.5),
		light: c.base05,
	},
	'editorWidget.resizeBorder': '',
	// 'editorSuggestWidget.background': '', // optional
	// 'editorSuggestWidget.border': '', // optional
	// 'editorSuggestWidget.foreground': '', // optional
	// 'editorSuggestWidget.focusHighlightForeground': '', // optional
	// 'editorSuggestWidget.highlightForeground': '', // optional
	// 'editorSuggestWidget.selectedBackground': '', // optional
	// 'editorSuggestWidget.selectedForeground': '', // optional
	// 'editorSuggestWidget.selectedIconForeground': '', // optional
	// 'editorSuggestWidgetStatus.foreground': '', // optional
	'editorHoverWidget.foreground': {
		dark: c.base05,
		light: c.base03,
	},
	'editorHoverWidget.background': {
		dark: c.base01_a,
		light: c.base06_a,
	},
	'editorHoverWidget.border': {
		dark: overlay(c.base01_a, c.base01, 0.9),
		light: c.base06,
	},
	// 'editorHoverWidget.highlightForeground': '', // optional
	'editorHoverWidget.statusBarBackground': {
		dark: overlay(c.base01_a, c.base01, 0.8),
		light: c.base06,
	},
	'editorGhostText.border': '',
	'editorGhostText.background': {
		dark: opacity(editorSelectionBackground.dark, 0.12),
		light: opacity(editorSelectionBackground.light, 0.18),
	},
	'editorGhostText.foreground': {
		dark: opacity(lighten(editorSelectionBackground.dark, 0.1), 0.9),
		light: opacity(lighten(editorSelectionBackground.light, -0.1), 0.9),
	}, // Places that use this ("ghost text"): GitHub Copilot auto completion.
	// 'editorStickyScroll.background': '', // optional
	// 'editorStickyScroll.border': '', // optional
	'editorStickyScroll.shadow': {
		dark: opacity(c.base00_a, 0.25),
		light: opacity(c.base05, 0.25),
	},
	'editorStickyScrollHover.background': {
		dark: lighten(editorBackground.dark, -0.1),
		light: lighten(editorBackground.light, -0.1),
	},
	'debugExceptionWidget.background': '',
	'debugExceptionWidget.border': '',
	// 'editorMarkerNavigation.background': '', // optional
	// 'editorMarkerNavigationError.background': '', // optional
	// 'editorMarkerNavigationWarning.background': '', // optional
	// 'editorMarkerNavigationInfo.background': '', // optional
	// 'editorMarkerNavigationError.headerBackground': '', // optional
	// 'editorMarkerNavigationWarning.headerBackground': '', // optional
	// 'editorMarkerNavigationInfo.headerBackground': '', // optional

	//
	// Peek view colors
	//
	'peekView.border': {
		dark: lighten(c.base00_a, 0.12),
		light: c.base05,
	}, // optional
	'peekViewEditor.background': {
		dark: lighten(c.base00_a, 0.08),
		light: c.base06_a,
	},
	// 'peekViewEditorGutter.background': '', // optional
	'peekViewEditor.matchHighlightBackground': {
		dark: opacity(c.base0A_a, 0.2),
		light: opacity(c.base0A_a, 0.5),
	},
	// 'peekViewEditor.matchHighlightBorder': '', // optional
	// 'peekViewEditorStickyScroll.background': '', // optional
	// "peekViewResult" is the side panel where a list of results is shown.
	'peekViewResult.background': {
		dark: c.base01_a,
		light: lighten(c.base06, 0.01),
	},
	'peekViewResult.fileForeground': listSelectionForeground,
	'peekViewResult.lineForeground': listSelectionForeground,
	'peekViewResult.matchHighlightBackground': {
		dark: opacity(c.base0A_a, 0.2),
		light: opacity(c.base0A_a, 0.5),
	},
	'peekViewResult.selectionBackground': listSelectionBackground,
	'peekViewResult.selectionForeground': listSelectionForeground,
	'peekViewTitle.background': {
		dark: lighten(c.base00_a, 0.08),
		light: c.base06,
	},
	'peekViewTitleDescription.foreground': {
		dark: c.base03,
		light: c.base04,
	},
	'peekViewTitleLabel.foreground': {
		dark: c.base06,
		light: c.base01,
	},

	//
	// Merge conflicts colors
	//
	'merge.currentHeaderBackground': '',
	// 'merge.currentContentBackground': '', // optional
	'merge.incomingHeaderBackground': '',
	// 'merge.incomingContentBackground': '', // optional
	// 'merge.border': '', // optional
	// 'merge.commonContentBackground': '', // optional
	'merge.commonHeaderBackground': '',
	// 'editorOverviewRuler.currentContentForeground': '', // optional
	// 'editorOverviewRuler.incomingContentForeground': '', // optional
	// 'editorOverviewRuler.commonContentForeground': '', // optional
	// 'editorOverviewRuler.commentForeground': '', // optional
	// 'editorOverviewRuler.commentUnresolvedForeground': '', // optional
	'mergeEditor.change.background': '',
	'mergeEditor.change.word.background': '',
	'mergeEditor.conflict.unhandledUnfocused.border': '',
	'mergeEditor.conflict.unhandledFocused.border': '',
	'mergeEditor.conflict.handledUnfocused.border': '',
	'mergeEditor.conflict.handledFocused.border': '',
	'mergeEditor.conflict.handled.minimapOverViewRuler': '',
	'mergeEditor.conflict.unhandled.minimapOverViewRuler': '',
	'mergeEditor.conflictingLines.background': '',
	'mergeEditor.changeBase.background': '',
	'mergeEditor.changeBase.word.background': '',
	// 'mergeEditor.conflict.input1.background': '', // optional
	// 'mergeEditor.conflict.input2.background': '', // optional

	//
	// Panel colors
	//
	'panel.background': {
		dark: lighten(c.base00_a, 0.07),
		// light: lighten(c.base06_a, -0.01),
		light: lighten(c.base07_a, -0.01),
	}, // optional
	'panel.border': {
		dark: opacity(c.base00, 1),
		light: opacity(c.base05, 0.4),
	},
	// 'panel.dropBorder': '', // optional
	// 'panelTitle.activeBorder': '', // optional
	'panelTitle.activeForeground': {
		dark: c.base06,
		light: c.base01,
	},
	'panelTitle.inactiveForeground': {
		dark: c.base03,
		light: c.base04,
	}, // optional
	'panelInput.border': {
		dark: c.base00,
		light: c.base06,
	},
	// 'panelSection.border': '', // optional
	// 'panelSection.dropBackground': '', // optional
	'panelSectionHeader.background': '',
	'panelSectionHeader.foreground': '',
	// 'panelStickyScroll.background': '', // optional
	'panelStickyScroll.border': '',
	// 'panelStickyScroll.shadow': '', // optional
	// 'panelSectionHeader.border': '', // optional
	'outputView.background': '',
	// 'outputViewStickyScroll.background': '', // optional

	//
	// Status Bar colors
	//
	'statusBar.background': statusBarBackground,
	'statusBar.foreground': statusBarForeground,
	// 'statusBar.border': '', // optional
	'statusBar.debuggingBackground': statusBarBackground,
	'statusBar.debuggingForeground': statusBarForeground,
	// 'statusBar.debuggingBorder': '', // optional
	'statusBar.noFolderBackground': statusBarBackground,
	'statusBar.noFolderForeground': statusBarForeground,
	// 'statusBar.noFolderBorder': '', // optional
	'statusBarItem.activeBackground': '#00000000',
	'statusBarItem.hoverForeground': {
		dark: lighten(statusBarForeground.dark, 0.1),
		light: lighten(statusBarForeground.dark, -0.1),
	},
	'statusBarItem.hoverBackground': '#00000000',
	// 'statusBarItem.prominentForeground': '', // optional
	'statusBarItem.prominentBackground': '#00000000',
	// 'statusBarItem.prominentHoverForeground': '', // optional
	'statusBarItem.prominentHoverBackground': '#00000000',
	'statusBarItem.remoteBackground': {
		dark: opacity(c.base0C, 0.8),
		light: opacity(c.base0C, 0.8),
	},
	'statusBarItem.remoteForeground': {
		dark: c.base00_a,
		light: c.base02,
	},
	'statusBarItem.remoteHoverBackground': {
		dark: c.base0C,
		light: c.base0C,
	},
	'statusBarItem.remoteHoverForeground': {
		dark: c.base01,
		light: c.base01,
	},
	// 'statusBarItem.errorBackground': '', // optional
	'statusBarItem.errorForeground': '',
	// 'statusBarItem.errorHoverBackground': '', // optional
	// 'statusBarItem.errorHoverForeground': '', // optional
	// 'statusBarItem.warningBackground': '', // optional
	'statusBarItem.warningForeground': '',
	// 'statusBarItem.warningHoverBackground': '', // optional
	// 'statusBarItem.warningHoverForeground': '', // optional
	'statusBarItem.compactHoverBackground': '#00000000',
	// 'statusBarItem.focusBorder': '', // optional
	// 'statusBar.focusBorder': '', // optional
	'statusBarItem.offlineBackground': '#00000000',
	// 'statusBarItem.offlineForeground': '', // optional
	// 'statusBarItem.offlineHoverForeground': '', // optional
	// 'statusBarItem.offlineHoverBackground': '', // optional

	//
	// Menu Bar colors
	//
	// 'menubar.selectionForeground': '', // optional
	// 'menubar.selectionBackground': '', // optional
	// 'menubar.selectionBorder': '', // optional
	// 'menu.foreground': '', // optional
	// 'menu.background': '', // optional
	// 'menu.selectionForeground': '', // optional
	// 'menu.selectionBackground': '', // optional
	// 'menu.selectionBorder': '', // optional
	'menu.separatorBackground': '',
	// 'menu.border': '', // optional

	//
	// Notification colors
	//
	// 'notificationCenter.border': '', // optional
	'notificationCenterHeader.foreground': '',
	// 'notificationCenterHeader.background': '', // optional
	// 'notificationToast.border': '', // optional
	'notifications.foreground': {
		dark: '',
		light: c.base03,
	}, // optional
	'notifications.background': {
		dark: '',
		light: c.base06_a,
	}, // optional
	// 'notifications.border': '', // optional
	// 'notificationLink.foreground': '', // optional
	// 'notificationsErrorIcon.foreground': '', // optional
	// 'notificationsWarningIcon.foreground': '', // optional
	// 'notificationsInfoIcon.foreground': '', // optional

	//
	// Banner colors
	//
	// 'banner.background': '', // optional
	// 'banner.foreground': '', // optional
	// 'banner.iconForeground': '', // optional

	//
	// Extensions colors
	//
	// 'extensionButton.prominentForeground': '', // optional
	// 'extensionButton.prominentBackground': '', // optional
	// 'extensionButton.prominentHoverBackground': '', // optional
	// 'extensionButton.background': '', // optional
	// 'extensionButton.foreground': '', // optional
	// 'extensionButton.hoverBackground': '', // optional
	// 'extensionButton.separator': '', // optional
	// 'extensionBadge.remoteBackground': '', // optional
	// 'extensionBadge.remoteForeground': '', // optional
	'extensionIcon.starForeground': '',
	// 'extensionIcon.verifiedForeground': '', // optional
	'extensionIcon.preReleaseForeground': '',
	'extensionIcon.sponsorForeground': '',

	//
	// Quick picker colors
	//
	// Places that uses these colors: Command palette.
	//
	'pickerGroup.border': {
		dark: c.base01,
		light: c.base05,
	},
	'pickerGroup.foreground': {
		dark: c.base03,
		light: c.base04,
	},
	'quickInputTitle.background': '',
	// 'quickInput.background': '', // optional
	// 'quickInput.foreground': '', // optional
	// 'quickInputList.focusBackground': '', // optional
	// 'quickInputList.focusForeground': '', // optional
	// 'quickInputList.focusIconForeground': '', // optional

	//
	// Keybinding label colors
	//
	'keybindingLabel.background': {
		dark: opacity(lighten(c.base03_a, -0.05), 0.17),
		light: opacity(c.base06, 0.4),
	},
	'keybindingLabel.foreground': {
		dark: opacity(c.base05, 1),
		light: opacity(c.base02, 1),
	},
	'keybindingLabel.border': {
		dark: opacity(lighten(c.base01, 0.1), 0.6),
		light: opacity(c.base05, 0.4),
	},
	'keybindingLabel.bottomBorder': {
		dark: opacity(c.base02, 0.6),
		light: opacity(c.base04, 0.4),
	},

	//
	// Keyboard shortcut table colors
	//
	'keybindingTable.headerBackground': {
		dark: opacity(foreground.dark, 0.07),
		light: opacity(foreground.light, 0.07),
	},
	// 'keybindingTable.rowsBackground': '', // optional

	//
	// Integrated Terminal colors
	//
	// 'terminal.background': lighten(c.base00_a, 0.07),
	'terminal.background': '',
	// 'terminal.border': '', // optional
	'terminal.foreground': {
		dark: c.base05,
		light: c.base02,
	},
	'terminal.ansiBlack': {
		dark: c.base00_a,
		light: c.base07_a,
	},
	'terminal.ansiBlue': c.base0D,
	'terminal.ansiBrightBlack': {
		dark: c.base00,
		light: c.base07,
	},
	'terminal.ansiBrightBlue': c.base0C_a,
	'terminal.ansiBrightCyan': c.base0C_a,
	'terminal.ansiBrightGreen': {
		// dark: '#8ee394',
		dark: '#7fe1b1',
		light: c.base0B,
	},
	'terminal.ansiBrightMagenta': c.base0E,
	'terminal.ansiBrightRed': c.base09,
	'terminal.ansiBrightWhite': {
		dark: c.base06,
		light: c.base01,
	},
	'terminal.ansiBrightYellow': c.base0A_a,
	'terminal.ansiCyan': c.base0C,
	'terminal.ansiGreen': c.base0B,
	'terminal.ansiMagenta': c.base0F,
	'terminal.ansiRed': c.base08,
	'terminal.ansiWhite': {
		dark: c.base05,
		light: c.base02,
	},
	'terminal.ansiYellow': c.base0A,
	// 'terminal.selectionBackground': '', // optional
	// 'terminal.selectionForeground': '', // optional
	// 'terminal.inactiveSelectionBackground': '', // optional
	// 'terminal.findMatchBackground': '', // optional
	// 'terminal.findMatchBorder': '', // optional
	// 'terminal.findMatchHighlightBackground': '', // optional
	// 'terminal.findMatchHighlightBorder': '', // optional
	// 'terminal.hoverHighlightBackground': '', // optional
	'terminalCursor.background': {
		dark: '',
		light: '',
	},
	'terminalCursor.foreground': {
		dark: c.base05,
		light: c.base02,
	},
	// 'terminal.dropBackground': '', // optional
	// 'terminal.tab.activeBorder': '', // optional
	'terminalCommandDecoration.defaultBackground': c.base0D,
	'terminalCommandDecoration.successBackground': c.base0C,
	'terminalCommandDecoration.errorBackground': c.base08,
	'terminalOverviewRuler.cursorForeground': '',
	// 'terminalOverviewRuler.findMatchForeground': '', // optional
	'terminalStickyScroll.background': '',
	// 'terminalStickyScroll.border': '', // optional
	'terminalStickyScrollHover.background': {
		dark: c.base00,
		light: c.base06,
	},
	'terminal.initialHintForeground': '',

	//
	// Debug Icons colors
	//
	'debugIcon.breakpointForeground': c.base08,
	'debugIcon.breakpointDisabledForeground': '',
	'debugIcon.breakpointUnverifiedForeground': '',
	'debugIcon.breakpointCurrentStackframeForeground': {
		dark: c.base0A_a,
		light: c.base0A_a,
	},
	'debugIcon.breakpointStackframeForeground': {
		dark: chroma(c.base0B, 0.16),
		light: chroma(c.base0B, 0.16),
	},
	'debugIcon.startForeground': '',
	'debugIcon.pauseForeground': '',
	'debugIcon.stopForeground': '',
	'debugIcon.disconnectForeground': '',
	'debugIcon.restartForeground': '',
	'debugIcon.stepOverForeground': '',
	'debugIcon.stepIntoForeground': '',
	'debugIcon.stepOutForeground': '',
	'debugIcon.continueForeground': '',
	'debugIcon.stepBackForeground': '',
	// 'debugConsole.infoForeground': '', // optional
	// 'debugConsole.warningForeground': '', // optional
	// 'debugConsole.errorForeground': '', // optional
	// 'debugConsole.sourceForeground': '', // optional
	// 'debugConsoleInputIcon.foreground': '', // optional

	//
	// Debug colors
	//
	'debugToolBar.background': '',
	'debugToolBar.border': '',
	'editor.stackFrameHighlightBackground': {
		dark: opacity(c.base0A_a, 0.2),
		light: opacity(c.base0A_a, 0.5),
	},
	'editor.focusedStackFrameHighlightBackground': {
		dark: opacity(chroma(c.base0B, 0.16), 0.2),
		light: opacity(chroma(c.base0B, 0.16), 0.3),
	},
	'editor.inlineValuesForeground': '',
	'editor.inlineValuesBackground': '',
	'debugView.exceptionLabelForeground': '',
	'debugView.exceptionLabelBackground': '',
	// 'debugView.stateLabelForeground': '', // optional
	'debugView.stateLabelBackground': '',
	'debugView.valueChangedHighlight': '',
	'debugTokenExpression.name': {
		dark: c.base0E,
		light: c.base0E_l,
	},
	'debugTokenExpression.value': c.base0F,
	'debugTokenExpression.string': {
		dark: c.base0B,
		light: c.base0B_l,
	},
	'debugTokenExpression.boolean': c.base09,
	'debugTokenExpression.number': c.base09,
	'debugTokenExpression.error': c.base08,
	'debugTokenExpression.type': {
		dark: c.base0A,
		light: c.base0A_l,
	},

	//
	// Testing colors
	//
	// 'testing.runAction': '', // optional
	// 'testing.iconErrored': '#d75f5f',
	// 'testing.iconFailed': '#d75f5f',
	// 'testing.iconPassed': '#a3be8c',
	// 'testing.iconQueued': '#cd950c',
	// 'testing.iconSkipped': '#af865a',
	// 'testing.iconUnset': '#4f5b67',

	'testing.iconErrored': c.base08,
	'testing.iconFailed': c.base08,
	'testing.iconPassed': {
		dark: c.base0B,
		light: c.base0B_l,
	},
	'testing.iconQueued': {
		dark: c.base0A,
		light: c.base0A_l,
	},
	'testing.iconSkipped': c.base0F,
	'testing.iconUnset': {
		dark: c.base0D,
		light: c.base0D_l,
	},

	// 'testing.iconErrored.retired': '', // optional
	// 'testing.iconFailed.retired': '', // optional
	// 'testing.iconPassed.retired': '', // optional
	// 'testing.iconQueued.retired': '', // optional
	// 'testing.iconUnset.retired': '', // optional
	// 'testing.iconSkipped.retired': '', // optional
	// 'testing.peekBorder': '', // optional
	// 'testing.peekHeaderBackground': '', // optional
	// 'testing.message.error.decorationForeground': '', // optional
	'testing.message.error.lineBackground': '',
	// 'testing.message.info.decorationForeground': '', // optional
	'testing.message.info.lineBackground': '',
	// 'testing.messagePeekBorder': '', // optional
	// 'testing.messagePeekHeaderBackground': '', // optional
	// 'testing.coveredBackground': '', // optional
	// 'testing.coveredBorder': '', // optional
	// 'testing.coveredGutterBackground': '', // optional
	// 'testing.uncoveredBranchBackground': '', // optional
	// 'testing.uncoveredBackground': '', // optional
	// 'testing.uncoveredBorder': '', // optional
	// 'testing.uncoveredGutterBackground': '', // optional
	// 'testing.coverCountBadgeBackground': '', // optional
	// 'testing.coverCountBadgeForeground': '', // optional

	//
	// Welcome page colors
	//
	'welcomePage.background': '',
	// 'welcomePage.progress.background': '', // optional
	// 'welcomePage.progress.foreground': '', // optional
	'welcomePage.tileBackground': {
		dark: '',
		light: c.base06,
	}, // optional
	'welcomePage.tileHoverBackground': {
		dark: '',
		light: c.base06_a,
	}, // optional
	'welcomePage.tileBorder': {
		dark: opacity(c.base03, 0.5),
		light: opacity(c.base04, 0.5),
	},
	'walkThrough.embeddedEditorBackground': {
		dark: c.base01_a,
		light: c.base06_a,
	},
	'walkthrough.stepTitle.foreground': foreground,

	//
	// Git colors
	//
	'gitDecoration.addedResourceForeground': {
		dark: opacity(c.base0B, sidebarItemWithStatusForegroundOpacity),
		light: opacity(c.base0B_l, lightSidebarItemWithStatusForegroundOpacity),
	},
	'gitDecoration.modifiedResourceForeground': {
		dark: opacity(c.base0E, sidebarItemWithStatusForegroundOpacity),
		light: opacity(lighten(c.base0E_l, -0.18), lightSidebarItemWithStatusForegroundOpacity),
	},
	'gitDecoration.deletedResourceForeground': { // TODO: check
		dark: opacity(c.base0B, sidebarItemWithStatusForegroundOpacity),
		light: opacity(c.base0B_l, lightSidebarItemWithStatusForegroundOpacity),
	},
	'gitDecoration.renamedResourceForeground': {
		dark: opacity(c.base0B, sidebarItemWithStatusForegroundOpacity),
		light: opacity(c.base0B_l, lightSidebarItemWithStatusForegroundOpacity),
	},
	'gitDecoration.stageModifiedResourceForeground': {
		dark: opacity(c.base0A, sidebarItemWithStatusForegroundOpacity),
		light: opacity(lighten(c.base0A_a, -0.18), lightSidebarItemWithStatusForegroundOpacity),
	},
	'gitDecoration.stageDeletedResourceForeground': c.base0B,
	'gitDecoration.untrackedResourceForeground': {
		dark: opacity(c.base0B, sidebarItemWithStatusForegroundOpacity),
		light: opacity(c.base0B_l, lightSidebarItemWithStatusForegroundOpacity),
	},
	'gitDecoration.ignoredResourceForeground': {
		dark: opacity(opacity(c.base03, 0.6), sidebarItemWithStatusForegroundOpacity),
		light: opacity(opacity(c.base01, 0.4), lightSidebarItemWithStatusForegroundOpacity),
	},
	'gitDecoration.conflictingResourceForeground': c.base09,
	'gitDecoration.submoduleResourceForeground': {
		dark: opacity(c.base0C, sidebarItemWithStatusForegroundOpacity),
		light: opacity(c.base0C_l, lightSidebarItemWithStatusForegroundOpacity),
	},

	//
	// Settings Editor colors
	//
	'settings.headerForeground': {
		...foreground,
		dark: opacity(c.base06, 1),
		light: opacity(c.base02, 1),
	},
	'settings.modifiedItemIndicator': modifiedIndicator,
	// 'settings.dropdownBackground': '', // optional
	// 'settings.dropdownForeground': '', // optional
	// 'settings.dropdownBorder': '', // optional
	// 'settings.dropdownListBorder': '', // optional
	// 'settings.checkboxBackground': '', // optional
	// 'settings.checkboxForeground': '', // optional
	// 'settings.checkboxBorder': '', // optional
	'settings.rowHoverBackground': {
		dark: opacity(c.base01_a, 0.2),
		light: '',
	}, // optional
	// 'settings.textInputBackground': '', // optional
	// 'settings.textInputForeground': '', // optional
	// 'settings.textInputBorder': '', // optional
	// 'settings.numberInputBackground': '', // optional
	// 'settings.numberInputForeground': '', // optional
	// 'settings.numberInputBorder': '', // optional
	'settings.focusedRowBackground': {
		dark: opacity(c.base01_a, 0.7),
		light: '',
	}, // optional
	// 'settings.focusedRowBorder': '', // optional
	'settings.headerBorder': '#00000000', // optional
	'settings.sashBorder': '#00000000', // optional
	// 'settings.settingsHeaderHoverForeground': '', // optional

	//
	// Breadcrumbs colors
	//
	'breadcrumb.foreground': {
		dark: c.base03,
		light: c.base04,
	}, // optional
	// 'breadcrumb.background': '', // optional
	// 'breadcrumb.focusForeground': '', // optional
	// 'breadcrumb.activeSelectionForeground': '', // optional
	// 'breadcrumbPicker.background': '', // optional

	//
	// Snippets colors
	//
	'editor.snippetTabstopHighlightBackground': '',
	'editor.snippetTabstopHighlightBorder': '',
	'editor.snippetFinalTabstopHighlightBackground': '',
	'editor.snippetFinalTabstopHighlightBorder': '',

	//
	// Symbol Icons colors
	//
	// 'symbolIcon.arrayForeground': '', // optional
	// 'symbolIcon.booleanForeground': '', // optional
	'symbolIcon.classForeground': '',
	// 'symbolIcon.colorForeground': '', // optional
	// 'symbolIcon.constantForeground': '', // optional
	'symbolIcon.constructorForeground': '',
	'symbolIcon.enumeratorForeground': '',
	'symbolIcon.enumeratorMemberForeground': '',
	'symbolIcon.eventForeground': '',
	'symbolIcon.fieldForeground': '',
	// 'symbolIcon.fileForeground': '', // optional
	// 'symbolIcon.folderForeground': '', // optional
	'symbolIcon.functionForeground': '',
	'symbolIcon.interfaceForeground': '',
	// 'symbolIcon.keyForeground': '', // optional
	// 'symbolIcon.keywordForeground': '', // optional
	'symbolIcon.methodForeground': '',
	// 'symbolIcon.moduleForeground': '', // optional
	// 'symbolIcon.namespaceForeground': '', // optional
	// 'symbolIcon.nullForeground': '', // optional
	// 'symbolIcon.numberForeground': '', // optional
	// 'symbolIcon.objectForeground': '', // optional
	// 'symbolIcon.operatorForeground': '', // optional
	// 'symbolIcon.packageForeground': '', // optional
	// 'symbolIcon.propertyForeground': '', // optional
	// 'symbolIcon.referenceForeground': '', // optional
	// 'symbolIcon.snippetForeground': '', // optional
	// 'symbolIcon.stringForeground': '', // optional
	// 'symbolIcon.structForeground': '', // optional
	// 'symbolIcon.textForeground': '', // optional
	// 'symbolIcon.typeParameterForeground': '', // optional
	// 'symbolIcon.unitForeground': '', // optional
	'symbolIcon.variableForeground': '',


	//
	// Notebook colors
	//
	// 'notebook.editorBackground': '', // optional
	// 'notebook.cellBorderColor': '', // optional
	// 'notebook.cellHoverBackground': '', // optional
	// 'notebook.cellInsertionIndicator': '', // optional
	'notebook.cellStatusBarItemHoverBackground': '',
	'notebook.cellToolbarSeparator': '',
	// 'notebook.cellEditorBackground': '', // optional
	'notebook.focusedCellBackground': '',
	// 'notebook.focusedCellBorder': '', // optional
	// 'notebook.focusedEditorBorder': '', // optional
	// 'notebook.inactiveFocusedCellBorder': '', // optional
	// 'notebook.inactiveSelectedCellBorder': '', // optional
	'notebook.outputContainerBackgroundColor': '',
	'notebook.outputContainerBorderColor': '',
	// 'notebook.selectedCellBackground': '', // optional
	// 'notebook.selectedCellBorder': '', // optional
	'notebook.symbolHighlightBackground': '',
	// 'notebookScrollbarSlider.activeBackground': '', // optional
	// 'notebookScrollbarSlider.background': '', // optional
	// 'notebookScrollbarSlider.hoverBackground': '', // optional
	// 'notebookStatusErrorIcon.foreground': '', // optional
	// 'notebookStatusRunningIcon.foreground': '', // optional
	// 'notebookStatusSuccessIcon.foreground': '', // optional
	// 'notebookEditorOverviewRuler.runningCellForeground': '', // optional

	//
	// Chart colors
	//
	// 'charts.foreground': '', // optional
	// 'charts.lines': '', // optional
	// 'charts.red': '', // optional
	// 'charts.blue': '', // optional
	// 'charts.yellow': '', // optional
	// 'charts.orange': '', // optional
	'charts.green': '',
	'charts.purple': '',

	//
	// Ports Colors
	//
	// 'ports.iconRunningProcessForeground': '', // optional

	//
	// Comments View colors
	//
	// 'commentsView.resolvedIcon': '', // optional
	// 'commentsView.unresolvedIcon': '', // optional

	//
	// Action Bar colors
	//
	// 'actionBar.toggledBackground': '', // optional

	//
	// Simple Find Widget
	//
	'simpleFindWidget.sashBorder': '',

	//
	// SCM
	//
	// 'scm.historyItemAdditionsForeground': '', // optional
	// 'scm.historyItemDeletionsForeground': '', // optional
	// 'scm.historyItemStatisticsBorder': '', // optional
	// 'scm.historyItemSelectedStatisticsBorder': '', // optional
};
