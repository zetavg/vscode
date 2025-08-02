// THIS FILE IS AUTO GENERATED. DO NOT EDIT!
// Run `scripts/test-documentation.sh` to update this file.

/* eslint-disable header/header */

export type ThemeColors<T = string> = {
	/**
	* Overall foreground color. This color is only used if not overridden by a component.
	*
	* Defaults: `{"dark":"#CCCCCC","light":"#616161","hcDark":"#FFFFFF","hcLight":"#292929"}`.
	*/
	'foreground': T;
	/**
	* Overall foreground for disabled elements. This color is only used if not overridden by a component.
	*
	* Defaults: `{"dark":"#CCCCCC80","light":"#61616180","hcDark":"#A5A5A5","hcLight":"#7F7F7F"}`.
	*/
	'disabledForeground': T;
	/**
	* Overall foreground color for error messages. This color is only used if not overridden by a component.
	*
	* Defaults: `{"dark":"#F48771","light":"#A1260D","hcDark":"#F48771","hcLight":"#B5200D"}`.
	*/
	'errorForeground': T;
	/**
	* Foreground color for description text providing additional information, for example for a label.
	*
	* Defaults: `{"light":"#717171","dark":{"op":2,"value":"foreground","factor":0.7},"hcDark":{"op":2,"value":"foreground","factor":0.7},"hcLight":{"op":2,"value":"foreground","factor":0.7}}`.
	*/
	'descriptionForeground': T;
	/**
	* The default color for icons in the workbench.
	*
	* Defaults: `{"dark":"#C5C5C5","light":"#424242","hcDark":"#FFFFFF","hcLight":"#292929"}`.
	*/
	'icon.foreground': T;
	/**
	* Overall border color for focused elements. This color is only used if not overridden by a component.
	*
	* Defaults: `{"dark":"#007FD4","light":"#0090F1","hcDark":"#F38518","hcLight":"#006BBD"}`.
	*/
	'focusBorder': T;
	/**
	* An extra border around elements to separate them from others for greater contrast.
	*
	* Optional.
	*
	* Defaults: `{"light":null,"dark":null,"hcDark":"#6FC3DF","hcLight":"#0F4A85"}`.
	*/
	'contrastBorder'?: T;
	/**
	* An extra border around active elements to separate them from others for greater contrast.
	*
	* Optional.
	*
	* Defaults: `{"light":null,"dark":null,"hcDark":"focusBorder","hcLight":"focusBorder"}`.
	*/
	'contrastActiveBorder'?: T;
	/**
	* The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor.
	*
	* Defaults: `null`.
	*/
	'selection.background': T;
	/**
	* Foreground color for links in text.
	*
	* Defaults: `{"light":"#006AB1","dark":"#3794FF","hcDark":"#21A6FF","hcLight":"#0F4A85"}`.
	*/
	'textLink.foreground': T;
	/**
	* Foreground color for links in text when clicked on and on mouse hover.
	*
	* Defaults: `{"light":"#006AB1","dark":"#3794FF","hcDark":"#21A6FF","hcLight":"#0F4A85"}`.
	*/
	'textLink.activeForeground': T;
	/**
	* Color for text separators.
	*
	* Defaults: `{"light":"#0000002e","dark":"#ffffff2e","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":"#292929"}`.
	*/
	'textSeparator.foreground': T;
	/**
	* Foreground color for preformatted text segments.
	*
	* Defaults: `{"light":"#A31515","dark":"#D7BA7D","hcDark":"#000000","hcLight":"#FFFFFF"}`.
	*/
	'textPreformat.foreground': T;
	/**
	* Background color for preformatted text segments.
	*
	* Defaults: `{"light":"#0000001A","dark":"#FFFFFF1A","hcDark":"#FFFFFF","hcLight":"#09345f"}`.
	*/
	'textPreformat.background': T;
	/**
	* Background color for block quotes in text.
	*
	* Defaults: `{"light":"#f2f2f2","dark":"#222222","hcDark":null,"hcLight":"#F2F2F2"}`.
	*/
	'textBlockQuote.background': T;
	/**
	* Border color for block quotes in text.
	*
	* Defaults: `{"light":"#007acc80","dark":"#007acc80","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"#292929"}`.
	*/
	'textBlockQuote.border': T;
	/**
	* Background color for code blocks in text.
	*
	* Defaults: `{"light":"#dcdcdc66","dark":"#0a0a0a66","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":"#F2F2F2"}`.
	*/
	'textCodeBlock.background': T;
	/**
	* Border color of active sashes.
	*
	* Optional.
	*
	* Defaults: `"focusBorder"`.
	*/
	'sash.hoverBorder'?: T;
	/**
	* Badge background color. Badges are small information labels, e.g. for search results count.
	*
	* Defaults: `{"dark":"#4D4D4D","light":"#C4C4C4","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":"#0F4A85"}`.
	*/
	'badge.background': T;
	/**
	* Badge foreground color. Badges are small information labels, e.g. for search results count.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"light":"#333","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'badge.foreground': T;
	/**
	* Scrollbar shadow to indicate that the view is scrolled.
	*
	* Defaults: `{"dark":"#000000","light":"#DDDDDD","hcDark":null,"hcLight":null}`.
	*/
	'scrollbar.shadow': T;
	/**
	* Scrollbar slider background color.
	*
	* Defaults: `{"dark":{"rgba":{"r":121,"g":121,"b":121,"a":0.4}},"light":{"rgba":{"r":100,"g":100,"b":100,"a":0.4}},"hcDark":{"op":2,"value":"contrastBorder","factor":0.6},"hcLight":{"op":2,"value":"contrastBorder","factor":0.4}}`.
	*/
	'scrollbarSlider.background': T;
	/**
	* Scrollbar slider background color when hovering.
	*
	* Defaults: `{"dark":{"rgba":{"r":100,"g":100,"b":100,"a":0.7}},"light":{"rgba":{"r":100,"g":100,"b":100,"a":0.7}},"hcDark":{"op":2,"value":"contrastBorder","factor":0.8},"hcLight":{"op":2,"value":"contrastBorder","factor":0.8}}`.
	*/
	'scrollbarSlider.hoverBackground': T;
	/**
	* Scrollbar slider background color when clicked on.
	*
	* Defaults: `{"dark":{"rgba":{"r":191,"g":191,"b":191,"a":0.4}},"light":{"rgba":{"r":0,"g":0,"b":0,"a":0.6}},"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'scrollbarSlider.activeBackground': T;
	/**
	* Background color of the progress bar that can show for long running operations.
	*
	* Defaults: `{"dark":{"rgba":{"r":14,"g":112,"b":192,"a":1}},"light":{"rgba":{"r":14,"g":112,"b":192,"a":1}},"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'progressBar.background': T;
	/**
	* Editor background color.
	*
	* Defaults: `{"light":"#ffffff","dark":"#1E1E1E","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'editor.background': T;
	/**
	* Editor default foreground color.
	*
	* Defaults: `{"light":"#333333","dark":"#BBBBBB","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"foreground"}`.
	*/
	'editor.foreground': T;
	/**
	* Background color of sticky scroll in the editor
	*
	* Optional.
	*
	* Defaults: `"editor.background"`.
	*/
	'editorStickyScroll.background'?: T;
	/**
	* Background color of sticky scroll on hover in the editor
	*
	* Defaults: `{"dark":"#2A2D2E","light":"#F0F0F0","hcDark":null,"hcLight":{"rgba":{"r":15,"g":74,"b":133,"a":0.1}}}`.
	*/
	'editorStickyScrollHover.background': T;
	/**
	* Border color of sticky scroll in the editor
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'editorStickyScroll.border'?: T;
	/**
	*  Shadow color of sticky scroll in the editor
	*
	* Optional.
	*
	* Defaults: `"scrollbar.shadow"`.
	*/
	'editorStickyScroll.shadow'?: T;
	/**
	* Background color of editor widgets, such as find/replace.
	*
	* Defaults: `{"dark":"#252526","light":"#F3F3F3","hcDark":"#0C141F","hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'editorWidget.background': T;
	/**
	* Foreground color of editor widgets, such as find/replace.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'editorWidget.foreground'?: T;
	/**
	* Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.
	*
	* Defaults: `{"dark":"#454545","light":"#C8C8C8","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'editorWidget.border': T;
	/**
	* Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.
	*
	* Defaults: `null`.
	*/
	'editorWidget.resizeBorder': T;
	/**
	* Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `null`.
	*/
	'editorError.background': T;
	/**
	* Foreground color of error squigglies in the editor.
	*
	* Defaults: `{"dark":"#F14C4C","light":"#E51400","hcDark":"#F48771","hcLight":"#B5200D"}`.
	*/
	'editorError.foreground': T;
	/**
	* If set, color of double underlines for errors in the editor.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":{"rgba":{"r":228,"g":119,"b":119,"a":0.8}},"hcLight":"#B5200D"}`.
	*/
	'editorError.border'?: T;
	/**
	* Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `null`.
	*/
	'editorWarning.background': T;
	/**
	* Foreground color of warning squigglies in the editor.
	*
	* Defaults: `{"dark":"#CCA700","light":"#BF8803","hcDark":"#FFD370","hcLight":"#895503"}`.
	*/
	'editorWarning.foreground': T;
	/**
	* If set, color of double underlines for warnings in the editor.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":{"rgba":{"r":255,"g":204,"b":0,"a":0.8}},"hcLight":{"rgba":{"r":255,"g":204,"b":0,"a":0.8}}}`.
	*/
	'editorWarning.border'?: T;
	/**
	* Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `null`.
	*/
	'editorInfo.background': T;
	/**
	* Foreground color of info squigglies in the editor.
	*
	* Defaults: `{"dark":"#3794FF","light":"#1a85ff","hcDark":"#3794FF","hcLight":"#1a85ff"}`.
	*/
	'editorInfo.foreground': T;
	/**
	* If set, color of double underlines for infos in the editor.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":{"rgba":{"r":55,"g":148,"b":255,"a":0.8}},"hcLight":"#292929"}`.
	*/
	'editorInfo.border'?: T;
	/**
	* Foreground color of hint squigglies in the editor.
	*
	* Defaults: `{"dark":{"rgba":{"r":238,"g":238,"b":238,"a":0.7}},"light":"#6c6c6c","hcDark":null,"hcLight":null}`.
	*/
	'editorHint.foreground': T;
	/**
	* If set, color of double underlines for hints in the editor.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":{"rgba":{"r":238,"g":238,"b":238,"a":0.8}},"hcLight":"#292929"}`.
	*/
	'editorHint.border'?: T;
	/**
	* Color of active links.
	*
	* Defaults: `{"dark":"#4E94CE","light":{"rgba":{"r":0,"g":0,"b":255,"a":1}},"hcDark":{"rgba":{"r":0,"g":255,"b":255,"a":1}},"hcLight":"#292929"}`.
	*/
	'editorLink.activeForeground': T;
	/**
	* Color of the editor selection.
	*
	* Defaults: `{"light":"#ADD6FF","dark":"#264F78","hcDark":"#f3f518","hcLight":"#0F4A85"}`.
	*/
	'editor.selectionBackground': T;
	/**
	* Color of the selected text for high contrast.
	*
	* Optional.
	*
	* Defaults: `{"light":null,"dark":null,"hcDark":"#000000","hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'editor.selectionForeground'?: T;
	/**
	* Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
	*
	* Optional.
	*
	* Defaults: `{"light":{"op":2,"value":"editor.selectionBackground","factor":0.5},"dark":{"op":2,"value":"editor.selectionBackground","factor":0.5},"hcDark":{"op":2,"value":"editor.selectionBackground","factor":0.7},"hcLight":{"op":2,"value":"editor.selectionBackground","factor":0.5}}`.
	*/
	'editor.inactiveSelectionBackground'?: T;
	/**
	* Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
	*
	* Optional.
	*
	* Defaults: `{"light":{"op":5,"value":"editor.selectionBackground","background":"editor.background","factor":0.3,"transparency":0.6},"dark":{"op":5,"value":"editor.selectionBackground","background":"editor.background","factor":0.3,"transparency":0.6},"hcDark":null,"hcLight":null}`.
	*/
	'editor.selectionHighlightBackground'?: T;
	/**
	* Border color for regions with the same content as the selection.
	*
	* Optional.
	*
	* Defaults: `{"light":null,"dark":null,"hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'editor.selectionHighlightBorder'?: T;
	/**
	* Color of the current search match.
	*
	* Defaults: `{"light":"#A8AC94","dark":"#515C6A","hcDark":null,"hcLight":null}`.
	*/
	'editor.findMatchBackground': T;
	/**
	* Text color of the current search match.
	*
	* Defaults: `null`.
	*/
	'editor.findMatchForeground': T;
	/**
	* Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"light":"#EA5C0055","dark":"#EA5C0055","hcDark":null,"hcLight":null}`.
	*/
	'editor.findMatchHighlightBackground': T;
	/**
	* Foreground color of the other search matches.
	*
	* Defaults: `null`.
	*/
	'editor.findMatchHighlightForeground': T;
	/**
	* Color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"dark":"#3a3d4166","light":"#b4b4b44d","hcDark":null,"hcLight":null}`.
	*/
	'editor.findRangeHighlightBackground': T;
	/**
	* Border color of the current search match.
	*
	* Optional.
	*
	* Defaults: `{"light":null,"dark":null,"hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'editor.findMatchBorder'?: T;
	/**
	* Border color of the other search matches.
	*
	* Optional.
	*
	* Defaults: `{"light":null,"dark":null,"hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'editor.findMatchHighlightBorder'?: T;
	/**
	* Border color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":{"op":2,"value":"contrastActiveBorder","factor":0.4},"hcLight":{"op":2,"value":"contrastActiveBorder","factor":0.4}}`.
	*/
	'editor.findRangeHighlightBorder'?: T;
	/**
	* Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"light":"#ADD6FF26","dark":"#264f7840","hcDark":"#ADD6FF26","hcLight":null}`.
	*/
	'editor.hoverHighlightBackground': T;
	/**
	* Background color of the editor hover.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.background"`.
	*/
	'editorHoverWidget.background'?: T;
	/**
	* Foreground color of the editor hover.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.foreground"`.
	*/
	'editorHoverWidget.foreground'?: T;
	/**
	* Border color of the editor hover.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.border"`.
	*/
	'editorHoverWidget.border'?: T;
	/**
	* Background color of the editor hover status bar.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":1,"value":"editorHoverWidget.background","factor":0.2},"light":{"op":0,"value":"editorHoverWidget.background","factor":0.05},"hcDark":"editorWidget.background","hcLight":"editorWidget.background"}`.
	*/
	'editorHoverWidget.statusBarBackground'?: T;
	/**
	* Foreground color of inline hints
	*
	* Defaults: `{"dark":"#969696","light":"#969696","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":{"rgba":{"r":0,"g":0,"b":0,"a":1}}}`.
	*/
	'editorInlayHint.foreground': T;
	/**
	* Background color of inline hints
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"badge.background","factor":0.1},"light":{"op":2,"value":"badge.background","factor":0.1},"hcDark":{"op":2,"value":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"factor":0.1},"hcLight":{"op":2,"value":"badge.background","factor":0.1}}`.
	*/
	'editorInlayHint.background'?: T;
	/**
	* Foreground color of inline hints for types
	*
	* Optional.
	*
	* Defaults: `"editorInlayHint.foreground"`.
	*/
	'editorInlayHint.typeForeground'?: T;
	/**
	* Background color of inline hints for types
	*
	* Optional.
	*
	* Defaults: `"editorInlayHint.background"`.
	*/
	'editorInlayHint.typeBackground'?: T;
	/**
	* Foreground color of inline hints for parameters
	*
	* Optional.
	*
	* Defaults: `"editorInlayHint.foreground"`.
	*/
	'editorInlayHint.parameterForeground'?: T;
	/**
	* Background color of inline hints for parameters
	*
	* Optional.
	*
	* Defaults: `"editorInlayHint.background"`.
	*/
	'editorInlayHint.parameterBackground'?: T;
	/**
	* The color used for the lightbulb actions icon.
	*
	* Defaults: `{"dark":"#FFCC00","light":"#DDB100","hcDark":"#FFCC00","hcLight":"#007ACC"}`.
	*/
	'editorLightBulb.foreground': T;
	/**
	* The color used for the lightbulb auto fix actions icon.
	*
	* Defaults: `{"dark":"#75BEFF","light":"#007ACC","hcDark":"#75BEFF","hcLight":"#007ACC"}`.
	*/
	'editorLightBulbAutoFix.foreground': T;
	/**
	* The color used for the lightbulb AI icon.
	*
	* Optional.
	*
	* Defaults: `"editorLightBulb.foreground"`.
	*/
	'editorLightBulbAi.foreground'?: T;
	/**
	* Highlight background color of a snippet tabstop.
	*
	* Defaults: `{"dark":{"rgba":{"r":124,"g":124,"b":124,"a":0.3}},"light":{"rgba":{"r":10,"g":50,"b":100,"a":0.2}},"hcDark":{"rgba":{"r":124,"g":124,"b":124,"a":0.3}},"hcLight":{"rgba":{"r":10,"g":50,"b":100,"a":0.2}}}`.
	*/
	'editor.snippetTabstopHighlightBackground': T;
	/**
	* Highlight border color of a snippet tabstop.
	*
	* Defaults: `null`.
	*/
	'editor.snippetTabstopHighlightBorder': T;
	/**
	* Highlight background color of the final tabstop of a snippet.
	*
	* Defaults: `null`.
	*/
	'editor.snippetFinalTabstopHighlightBackground': T;
	/**
	* Highlight border color of the final tabstop of a snippet.
	*
	* Defaults: `{"dark":"#525252","light":{"rgba":{"r":10,"g":50,"b":100,"a":0.5}},"hcDark":"#525252","hcLight":"#292929"}`.
	*/
	'editor.snippetFinalTabstopHighlightBorder': T;
	/**
	* Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"dark":"#9ccc2c33","light":"#9ccc2c40","hcDark":null,"hcLight":null}`.
	*/
	'diffEditor.insertedTextBackground': T;
	/**
	* Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"dark":"#ff000033","light":"#ff000033","hcDark":null,"hcLight":null}`.
	*/
	'diffEditor.removedTextBackground': T;
	/**
	* Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"dark":{"rgba":{"r":155,"g":185,"b":85,"a":0.2}},"light":{"rgba":{"r":155,"g":185,"b":85,"a":0.2}},"hcDark":null,"hcLight":null}`.
	*/
	'diffEditor.insertedLineBackground': T;
	/**
	* Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":0,"b":0,"a":0.2}},"light":{"rgba":{"r":255,"g":0,"b":0,"a":0.2}},"hcDark":null,"hcLight":null}`.
	*/
	'diffEditor.removedLineBackground': T;
	/**
	* Background color for the margin where lines got inserted.
	*
	* Defaults: `null`.
	*/
	'diffEditorGutter.insertedLineBackground': T;
	/**
	* Background color for the margin where lines got removed.
	*
	* Defaults: `null`.
	*/
	'diffEditorGutter.removedLineBackground': T;
	/**
	* Diff overview ruler foreground for inserted content.
	*
	* Defaults: `null`.
	*/
	'diffEditorOverview.insertedForeground': T;
	/**
	* Diff overview ruler foreground for removed content.
	*
	* Defaults: `null`.
	*/
	'diffEditorOverview.removedForeground': T;
	/**
	* Outline color for the text that got inserted.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"#33ff2eff","hcLight":"#374E06"}`.
	*/
	'diffEditor.insertedTextBorder'?: T;
	/**
	* Outline color for text that got removed.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"#FF008F","hcLight":"#AD0707"}`.
	*/
	'diffEditor.removedTextBorder'?: T;
	/**
	* Border color between the two text editors.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'diffEditor.border'?: T;
	/**
	* Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
	*
	* Defaults: `{"dark":"#cccccc33","light":"#22222233","hcDark":null,"hcLight":null}`.
	*/
	'diffEditor.diagonalFill': T;
	/**
	* The background color of unchanged blocks in the diff editor.
	*
	* Optional.
	*
	* Defaults: `"sideBar.background"`.
	*/
	'diffEditor.unchangedRegionBackground'?: T;
	/**
	* The foreground color of unchanged blocks in the diff editor.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'diffEditor.unchangedRegionForeground'?: T;
	/**
	* The background color of unchanged code in the diff editor.
	*
	* Defaults: `{"dark":"#74747429","light":"#b8b8b829","hcDark":null,"hcLight":null}`.
	*/
	'diffEditor.unchangedCodeBackground': T;
	/**
	* Shadow color of widgets such as find/replace inside the editor.
	*
	* Defaults: `{"dark":{"op":2,"value":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"factor":0.36},"light":{"op":2,"value":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"factor":0.16},"hcDark":null,"hcLight":null}`.
	*/
	'widget.shadow': T;
	/**
	* Border color of widgets such as find/replace inside the editor.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'widget.border'?: T;
	/**
	* Toolbar background when hovering over actions using the mouse
	*
	* Defaults: `{"dark":"#5a5d5e50","light":"#b8b8b850","hcDark":null,"hcLight":null}`.
	*/
	'toolbar.hoverBackground': T;
	/**
	* Toolbar outline when hovering over actions using the mouse
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'toolbar.hoverOutline'?: T;
	/**
	* Toolbar background when holding the mouse over actions
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":1,"value":"toolbar.hoverBackground","factor":0.1},"light":{"op":0,"value":"toolbar.hoverBackground","factor":0.1},"hcDark":null,"hcLight":null}`.
	*/
	'toolbar.activeBackground'?: T;
	/**
	* Color of focused breadcrumb items.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"foreground","factor":0.8}`.
	*/
	'breadcrumb.foreground'?: T;
	/**
	* Background color of breadcrumb items.
	*
	* Optional.
	*
	* Defaults: `"editor.background"`.
	*/
	'breadcrumb.background'?: T;
	/**
	* Color of focused breadcrumb items.
	*
	* Optional.
	*
	* Defaults: `{"light":{"op":0,"value":"foreground","factor":0.2},"dark":{"op":1,"value":"foreground","factor":0.1},"hcDark":{"op":1,"value":"foreground","factor":0.1},"hcLight":{"op":1,"value":"foreground","factor":0.1}}`.
	*/
	'breadcrumb.focusForeground'?: T;
	/**
	* Color of selected breadcrumb items.
	*
	* Optional.
	*
	* Defaults: `{"light":{"op":0,"value":"foreground","factor":0.2},"dark":{"op":1,"value":"foreground","factor":0.1},"hcDark":{"op":1,"value":"foreground","factor":0.1},"hcLight":{"op":1,"value":"foreground","factor":0.1}}`.
	*/
	'breadcrumb.activeSelectionForeground'?: T;
	/**
	* Background color of breadcrumb item picker.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.background"`.
	*/
	'breadcrumbPicker.background'?: T;
	/**
	* Current header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"dark":{"rgba":{"r":64,"g":200,"b":174,"a":0.5}},"light":{"rgba":{"r":64,"g":200,"b":174,"a":0.5}},"hcDark":null,"hcLight":null}`.
	*/
	'merge.currentHeaderBackground': T;
	/**
	* Current content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"merge.currentHeaderBackground","factor":0.4}`.
	*/
	'merge.currentContentBackground'?: T;
	/**
	* Incoming header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"dark":{"rgba":{"r":64,"g":166,"b":255,"a":0.5}},"light":{"rgba":{"r":64,"g":166,"b":255,"a":0.5}},"hcDark":null,"hcLight":null}`.
	*/
	'merge.incomingHeaderBackground': T;
	/**
	* Incoming content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"merge.incomingHeaderBackground","factor":0.4}`.
	*/
	'merge.incomingContentBackground'?: T;
	/**
	* Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"dark":{"rgba":{"r":96,"g":96,"b":96,"a":0.4}},"light":{"rgba":{"r":96,"g":96,"b":96,"a":0.4}},"hcDark":null,"hcLight":null}`.
	*/
	'merge.commonHeaderBackground': T;
	/**
	* Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"merge.commonHeaderBackground","factor":0.4}`.
	*/
	'merge.commonContentBackground'?: T;
	/**
	* Border color on headers and the splitter in inline merge-conflicts.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"#C3DF6F","hcLight":"#007ACC"}`.
	*/
	'merge.border'?: T;
	/**
	* Current overview ruler foreground for inline merge-conflicts.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"merge.currentHeaderBackground","factor":1},"light":{"op":2,"value":"merge.currentHeaderBackground","factor":1},"hcDark":"merge.border","hcLight":"merge.border"}`.
	*/
	'editorOverviewRuler.currentContentForeground'?: T;
	/**
	* Incoming overview ruler foreground for inline merge-conflicts.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"merge.incomingHeaderBackground","factor":1},"light":{"op":2,"value":"merge.incomingHeaderBackground","factor":1},"hcDark":"merge.border","hcLight":"merge.border"}`.
	*/
	'editorOverviewRuler.incomingContentForeground'?: T;
	/**
	* Common ancestor overview ruler foreground for inline merge-conflicts.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"merge.commonHeaderBackground","factor":1},"light":{"op":2,"value":"merge.commonHeaderBackground","factor":1},"hcDark":"merge.border","hcLight":"merge.border"}`.
	*/
	'editorOverviewRuler.commonContentForeground'?: T;
	/**
	* Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"dark":"#d186167e","light":"#d186167e","hcDark":"#AB5A00","hcLight":""}`.
	*/
	'editorOverviewRuler.findMatchForeground': T;
	/**
	* Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `"#A0A0A0CC"`.
	*/
	'editorOverviewRuler.selectionHighlightForeground': T;
	/**
	* The color used for the problems error icon.
	*
	* Optional.
	*
	* Defaults: `"editorError.foreground"`.
	*/
	'problemsErrorIcon.foreground'?: T;
	/**
	* The color used for the problems warning icon.
	*
	* Optional.
	*
	* Defaults: `"editorWarning.foreground"`.
	*/
	'problemsWarningIcon.foreground'?: T;
	/**
	* The color used for the problems info icon.
	*
	* Optional.
	*
	* Defaults: `"editorInfo.foreground"`.
	*/
	'problemsInfoIcon.foreground'?: T;
	/**
	* Input box background.
	*
	* Defaults: `{"dark":"#3C3C3C","light":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'input.background': T;
	/**
	* Input box foreground.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'input.foreground'?: T;
	/**
	* Input box border.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'input.border'?: T;
	/**
	* Border color of activated options in input fields.
	*
	* Defaults: `{"dark":"#007ACC","light":"#007ACC","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'inputOption.activeBorder': T;
	/**
	* Background color of activated options in input fields.
	*
	* Defaults: `{"dark":"#5a5d5e80","light":"#b8b8b850","hcDark":null,"hcLight":null}`.
	*/
	'inputOption.hoverBackground': T;
	/**
	* Background hover color of options in input fields.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"focusBorder","factor":0.4},"light":{"op":2,"value":"focusBorder","factor":0.2},"hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":0},"_toString":"rgba(0, 0, 0, 0)"},"hcLight":{"rgba":{"r":0,"g":0,"b":0,"a":0},"_toString":"rgba(0, 0, 0, 0)"}}`.
	*/
	'inputOption.activeBackground'?: T;
	/**
	* Foreground color of activated options in input fields.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"light":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcDark":"foreground","hcLight":"foreground"}`.
	*/
	'inputOption.activeForeground': T;
	/**
	* Input box foreground color for placeholder text.
	*
	* Optional.
	*
	* Defaults: `{"light":{"op":2,"value":"foreground","factor":0.5},"dark":{"op":2,"value":"foreground","factor":0.5},"hcDark":{"op":2,"value":"foreground","factor":0.7},"hcLight":{"op":2,"value":"foreground","factor":0.7}}`.
	*/
	'input.placeholderForeground'?: T;
	/**
	* Input validation background color for information severity.
	*
	* Defaults: `{"dark":"#063B49","light":"#D6ECF2","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'inputValidation.infoBackground': T;
	/**
	* Input validation foreground color for information severity.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":null,"hcLight":"foreground"}`.
	*/
	'inputValidation.infoForeground': T;
	/**
	* Input validation border color for information severity.
	*
	* Defaults: `{"dark":"#007acc","light":"#007acc","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'inputValidation.infoBorder': T;
	/**
	* Input validation background color for warning severity.
	*
	* Defaults: `{"dark":"#352A05","light":"#F6F5D2","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'inputValidation.warningBackground': T;
	/**
	* Input validation foreground color for warning severity.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":null,"hcLight":"foreground"}`.
	*/
	'inputValidation.warningForeground': T;
	/**
	* Input validation border color for warning severity.
	*
	* Defaults: `{"dark":"#B89500","light":"#B89500","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'inputValidation.warningBorder': T;
	/**
	* Input validation background color for error severity.
	*
	* Defaults: `{"dark":"#5A1D1D","light":"#F2DEDE","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'inputValidation.errorBackground': T;
	/**
	* Input validation foreground color for error severity.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":null,"hcLight":"foreground"}`.
	*/
	'inputValidation.errorForeground': T;
	/**
	* Input validation border color for error severity.
	*
	* Defaults: `{"dark":"#BE1100","light":"#BE1100","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'inputValidation.errorBorder': T;
	/**
	* Dropdown background.
	*
	* Defaults: `{"dark":"#3C3C3C","light":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'dropdown.background': T;
	/**
	* Dropdown list background.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'dropdown.listBackground'?: T;
	/**
	* Dropdown foreground.
	*
	* Defaults: `{"dark":"#F0F0F0","light":"foreground","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"foreground"}`.
	*/
	'dropdown.foreground': T;
	/**
	* Dropdown border.
	*
	* Defaults: `{"dark":"dropdown.background","light":"#CECECE","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'dropdown.border': T;
	/**
	* Button foreground color.
	*
	* Defaults: `{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}`.
	*/
	'button.foreground': T;
	/**
	* Button separator color.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"button.foreground","factor":0.4}`.
	*/
	'button.separator'?: T;
	/**
	* Button background color.
	*
	* Defaults: `{"dark":"#0E639C","light":"#007ACC","hcDark":null,"hcLight":"#0F4A85"}`.
	*/
	'button.background': T;
	/**
	* Button background color when hovering.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":1,"value":"button.background","factor":0.2},"light":{"op":0,"value":"button.background","factor":0.2},"hcDark":"button.background","hcLight":"button.background"}`.
	*/
	'button.hoverBackground'?: T;
	/**
	* Button border color.
	*
	* Optional.
	*
	* Defaults: `"contrastBorder"`.
	*/
	'button.border'?: T;
	/**
	* Secondary button foreground color.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"light":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"foreground"}`.
	*/
	'button.secondaryForeground': T;
	/**
	* Secondary button background color.
	*
	* Defaults: `{"dark":"#3A3D41","light":"#5F6A79","hcDark":null,"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'button.secondaryBackground': T;
	/**
	* Secondary button background color when hovering.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":1,"value":"button.secondaryBackground","factor":0.2},"light":{"op":0,"value":"button.secondaryBackground","factor":0.2},"hcDark":null,"hcLight":null}`.
	*/
	'button.secondaryHoverBackground'?: T;
	/**
	* Background color of checkbox widget.
	*
	* Optional.
	*
	* Defaults: `"dropdown.background"`.
	*/
	'checkbox.background'?: T;
	/**
	* Background color of checkbox widget when the element it's in is selected.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.background"`.
	*/
	'checkbox.selectBackground'?: T;
	/**
	* Foreground color of checkbox widget.
	*
	* Optional.
	*
	* Defaults: `"dropdown.foreground"`.
	*/
	'checkbox.foreground'?: T;
	/**
	* Border color of checkbox widget.
	*
	* Optional.
	*
	* Defaults: `"dropdown.border"`.
	*/
	'checkbox.border'?: T;
	/**
	* Border color of checkbox widget when the element it's in is selected.
	*
	* Optional.
	*
	* Defaults: `"icon.foreground"`.
	*/
	'checkbox.selectBorder'?: T;
	/**
	* Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.
	*
	* Defaults: `{"dark":{"rgba":{"r":128,"g":128,"b":128,"a":0.17}},"light":{"rgba":{"r":221,"g":221,"b":221,"a":0.4}},"hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":0},"_toString":"rgba(0, 0, 0, 0)"},"hcLight":{"rgba":{"r":0,"g":0,"b":0,"a":0},"_toString":"rgba(0, 0, 0, 0)"}}`.
	*/
	'keybindingLabel.background': T;
	/**
	* Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.
	*
	* Defaults: `{"dark":{"rgba":{"r":204,"g":204,"b":204,"a":1}},"light":{"rgba":{"r":85,"g":85,"b":85,"a":1}},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"foreground"}`.
	*/
	'keybindingLabel.foreground': T;
	/**
	* Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.
	*
	* Defaults: `{"dark":{"rgba":{"r":51,"g":51,"b":51,"a":0.6}},"light":{"rgba":{"r":204,"g":204,"b":204,"a":0.4}},"hcDark":{"rgba":{"r":111,"g":195,"b":223,"a":1}},"hcLight":"contrastBorder"}`.
	*/
	'keybindingLabel.border': T;
	/**
	* Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.
	*
	* Defaults: `{"dark":{"rgba":{"r":68,"g":68,"b":68,"a":0.6}},"light":{"rgba":{"r":187,"g":187,"b":187,"a":0.4}},"hcDark":{"rgba":{"r":111,"g":195,"b":223,"a":1}},"hcLight":"foreground"}`.
	*/
	'keybindingLabel.bottomBorder': T;
	/**
	* Minimap marker color for find matches.
	*
	* Defaults: `{"light":"#d18616","dark":"#d18616","hcDark":"#AB5A00","hcLight":"#0F4A85"}`.
	*/
	'minimap.findMatchHighlight': T;
	/**
	* Minimap marker color for repeating editor selections.
	*
	* Defaults: `{"light":"#c9c9c9","dark":"#676767","hcDark":"#ffffff","hcLight":"#0F4A85"}`.
	*/
	'minimap.selectionOccurrenceHighlight': T;
	/**
	* Minimap marker color for the editor selection.
	*
	* Defaults: `{"light":"#ADD6FF","dark":"#264F78","hcDark":"#ffffff","hcLight":"#0F4A85"}`.
	*/
	'minimap.selectionHighlight': T;
	/**
	* Minimap marker color for infos.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editorInfo.foreground","light":"editorInfo.foreground","hcDark":"editorInfo.border","hcLight":"editorInfo.border"}`.
	*/
	'minimap.infoHighlight'?: T;
	/**
	* Minimap marker color for warnings.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editorWarning.foreground","light":"editorWarning.foreground","hcDark":"editorWarning.border","hcLight":"editorWarning.border"}`.
	*/
	'minimap.warningHighlight'?: T;
	/**
	* Minimap marker color for errors.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":18,"b":18,"a":0.7}},"light":{"rgba":{"r":255,"g":18,"b":18,"a":0.7}},"hcDark":{"rgba":{"r":255,"g":50,"b":50,"a":1}},"hcLight":"#B5200D"}`.
	*/
	'minimap.errorHighlight': T;
	/**
	* Minimap background color.
	*
	* Defaults: `null`.
	*/
	'minimap.background': T;
	/**
	* Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.
	*
	* Defaults: `{"rgba":{"r":0,"g":0,"b":0,"a":1}}`.
	*/
	'minimap.foregroundOpacity': T;
	/**
	* Minimap slider background color.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"scrollbarSlider.background","factor":0.5}`.
	*/
	'minimapSlider.background'?: T;
	/**
	* Minimap slider background color when hovering.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"scrollbarSlider.hoverBackground","factor":0.5}`.
	*/
	'minimapSlider.hoverBackground'?: T;
	/**
	* Minimap slider background color when clicked on.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"scrollbarSlider.activeBackground","factor":0.5}`.
	*/
	'minimapSlider.activeBackground'?: T;
	/**
	* The foreground color used in charts.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'charts.foreground'?: T;
	/**
	* The color used for horizontal lines in charts.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"foreground","factor":0.5}`.
	*/
	'charts.lines'?: T;
	/**
	* The red color used in chart visualizations.
	*
	* Optional.
	*
	* Defaults: `"editorError.foreground"`.
	*/
	'charts.red'?: T;
	/**
	* The blue color used in chart visualizations.
	*
	* Optional.
	*
	* Defaults: `"editorInfo.foreground"`.
	*/
	'charts.blue'?: T;
	/**
	* The yellow color used in chart visualizations.
	*
	* Optional.
	*
	* Defaults: `"editorWarning.foreground"`.
	*/
	'charts.yellow'?: T;
	/**
	* The orange color used in chart visualizations.
	*
	* Optional.
	*
	* Defaults: `"minimap.findMatchHighlight"`.
	*/
	'charts.orange'?: T;
	/**
	* The green color used in chart visualizations.
	*
	* Defaults: `{"dark":"#89D185","light":"#388A34","hcDark":"#89D185","hcLight":"#374e06"}`.
	*/
	'charts.green': T;
	/**
	* The purple color used in chart visualizations.
	*
	* Defaults: `{"dark":"#B180D7","light":"#652D90","hcDark":"#B180D7","hcLight":"#652D90"}`.
	*/
	'charts.purple': T;
	/**
	* Color of the text in the search viewlet's completion message.
	*
	* Optional.
	*
	* Defaults: `{"light":"foreground","dark":{"op":2,"value":"foreground","factor":0.65},"hcDark":"foreground","hcLight":"foreground"}`.
	*/
	'search.resultsInfoForeground'?: T;
	/**
	* Color of the Search Editor query matches.
	*
	* Optional.
	*
	* Defaults: `{"light":{"op":2,"value":"editor.findMatchHighlightBackground","factor":0.66},"dark":{"op":2,"value":"editor.findMatchHighlightBackground","factor":0.66},"hcDark":"editor.findMatchHighlightBackground","hcLight":"editor.findMatchHighlightBackground"}`.
	*/
	'searchEditor.findMatchBackground'?: T;
	/**
	* Border color of the Search Editor query matches.
	*
	* Optional.
	*
	* Defaults: `{"light":{"op":2,"value":"editor.findMatchHighlightBorder","factor":0.66},"dark":{"op":2,"value":"editor.findMatchHighlightBorder","factor":0.66},"hcDark":"editor.findMatchHighlightBorder","hcLight":"editor.findMatchHighlightBorder"}`.
	*/
	'searchEditor.findMatchBorder'?: T;
	/**
	* List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
	*
	* Defaults: `null`.
	*/
	'list.focusBackground': T;
	/**
	* List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
	*
	* Defaults: `null`.
	*/
	'list.focusForeground': T;
	/**
	* List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
	*
	* Optional.
	*
	* Defaults: `{"dark":"focusBorder","light":"focusBorder","hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'list.focusOutline'?: T;
	/**
	* List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.
	*
	* Defaults: `null`.
	*/
	'list.focusAndSelectionOutline': T;
	/**
	* List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
	*
	* Defaults: `{"dark":"#04395E","light":"#0060C0","hcDark":null,"hcLight":{"rgba":{"r":15,"g":74,"b":133,"a":0.1}}}`.
	*/
	'list.activeSelectionBackground': T;
	/**
	* List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"light":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcDark":null,"hcLight":null}`.
	*/
	'list.activeSelectionForeground': T;
	/**
	* List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
	*
	* Defaults: `null`.
	*/
	'list.activeSelectionIconForeground': T;
	/**
	* List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
	*
	* Defaults: `{"dark":"#37373D","light":"#E4E6F1","hcDark":null,"hcLight":{"rgba":{"r":15,"g":74,"b":133,"a":0.1}}}`.
	*/
	'list.inactiveSelectionBackground': T;
	/**
	* List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
	*
	* Defaults: `null`.
	*/
	'list.inactiveSelectionForeground': T;
	/**
	* List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
	*
	* Defaults: `null`.
	*/
	'list.inactiveSelectionIconForeground': T;
	/**
	* List/Tree background color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
	*
	* Defaults: `null`.
	*/
	'list.inactiveFocusBackground': T;
	/**
	* List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
	*
	* Defaults: `null`.
	*/
	'list.inactiveFocusOutline': T;
	/**
	* List/Tree background when hovering over items using the mouse.
	*
	* Defaults: `{"dark":"#2A2D2E","light":"#F0F0F0","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":0.1}},"hcLight":{"rgba":{"r":15,"g":74,"b":133,"a":0.1}}}`.
	*/
	'list.hoverBackground': T;
	/**
	* List/Tree foreground when hovering over items using the mouse.
	*
	* Defaults: `null`.
	*/
	'list.hoverForeground': T;
	/**
	* List/Tree drag and drop background when moving items over other items when using the mouse.
	*
	* Defaults: `{"dark":"#062F4A","light":"#D6EBFF","hcDark":null,"hcLight":null}`.
	*/
	'list.dropBackground': T;
	/**
	* List/Tree drag and drop border color when moving items between items when using the mouse.
	*
	* Optional.
	*
	* Defaults: `{"dark":"icon.foreground","light":"icon.foreground","hcDark":null,"hcLight":null}`.
	*/
	'list.dropBetweenBackground'?: T;
	/**
	* List/Tree foreground color of the match highlights when searching inside the list/tree.
	*
	* Defaults: `{"dark":"#2AAAFF","light":"#0066BF","hcDark":"focusBorder","hcLight":"focusBorder"}`.
	*/
	'list.highlightForeground': T;
	/**
	* List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
	*
	* Optional.
	*
	* Defaults: `{"dark":"list.highlightForeground","light":{"op":6,"if":"list.activeSelectionBackground","then":"list.highlightForeground","else":"#BBE7FF"},"hcDark":"list.highlightForeground","hcLight":"list.highlightForeground"}`.
	*/
	'list.focusHighlightForeground'?: T;
	/**
	* List/Tree foreground color for invalid items, for example an unresolved root in explorer.
	*
	* Defaults: `{"dark":"#B89500","light":"#B89500","hcDark":"#B89500","hcLight":"#B5200D"}`.
	*/
	'list.invalidItemForeground': T;
	/**
	* Foreground color of list items containing errors.
	*
	* Defaults: `{"dark":"#F88070","light":"#B01011","hcDark":null,"hcLight":null}`.
	*/
	'list.errorForeground': T;
	/**
	* Foreground color of list items containing warnings.
	*
	* Defaults: `{"dark":"#CCA700","light":"#855F00","hcDark":null,"hcLight":null}`.
	*/
	'list.warningForeground': T;
	/**
	* Background color of the type filter widget in lists and trees.
	*
	* Optional.
	*
	* Defaults: `{"light":{"op":0,"value":"editorWidget.background","factor":0},"dark":{"op":1,"value":"editorWidget.background","factor":0},"hcDark":"editorWidget.background","hcLight":"editorWidget.background"}`.
	*/
	'listFilterWidget.background'?: T;
	/**
	* Outline color of the type filter widget in lists and trees.
	*
	* Defaults: `{"dark":{"rgba":{"r":0,"g":0,"b":0,"a":0},"_toString":"rgba(0, 0, 0, 0)"},"light":{"rgba":{"r":0,"g":0,"b":0,"a":0},"_toString":"rgba(0, 0, 0, 0)"},"hcDark":"#f38518","hcLight":"#007ACC"}`.
	*/
	'listFilterWidget.outline': T;
	/**
	* Outline color of the type filter widget in lists and trees, when there are no matches.
	*
	* Defaults: `{"dark":"#BE1100","light":"#BE1100","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'listFilterWidget.noMatchesOutline': T;
	/**
	* Shadow color of the type filter widget in lists and trees.
	*
	* Optional.
	*
	* Defaults: `"widget.shadow"`.
	*/
	'listFilterWidget.shadow'?: T;
	/**
	* Background color of the filtered match.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editor.findMatchHighlightBackground","light":"editor.findMatchHighlightBackground","hcDark":null,"hcLight":null}`.
	*/
	'list.filterMatchBackground'?: T;
	/**
	* Border color of the filtered match.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editor.findMatchHighlightBorder","light":"editor.findMatchHighlightBorder","hcDark":"contrastBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'list.filterMatchBorder'?: T;
	/**
	* List/Tree foreground color for items that are deemphasized.
	*
	* Defaults: `{"dark":"#8C8C8C","light":"#8E8E90","hcDark":"#A7A8A9","hcLight":"#666666"}`.
	*/
	'list.deemphasizedForeground': T;
	/**
	* Tree stroke color for the indentation guides.
	*
	* Defaults: `{"dark":"#585858","light":"#a9a9a9","hcDark":"#a9a9a9","hcLight":"#a5a5a5"}`.
	*/
	'tree.indentGuidesStroke': T;
	/**
	* Tree stroke color for the indentation guides that are not active.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"tree.indentGuidesStroke","factor":0.4}`.
	*/
	'tree.inactiveIndentGuidesStroke'?: T;
	/**
	* Table border color between columns.
	*
	* Defaults: `{"dark":"#CCCCCC20","light":"#61616120","hcDark":null,"hcLight":null}`.
	*/
	'tree.tableColumnsBorder': T;
	/**
	* Background color for odd table rows.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"foreground","factor":0.04},"light":{"op":2,"value":"foreground","factor":0.04},"hcDark":null,"hcLight":null}`.
	*/
	'tree.tableOddRowsBackground'?: T;
	/**
	* Border color of menus.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'menu.border'?: T;
	/**
	* Foreground color of menu items.
	*
	* Optional.
	*
	* Defaults: `"dropdown.foreground"`.
	*/
	'menu.foreground'?: T;
	/**
	* Background color of menu items.
	*
	* Optional.
	*
	* Defaults: `"dropdown.background"`.
	*/
	'menu.background'?: T;
	/**
	* Foreground color of the selected menu item in menus.
	*
	* Optional.
	*
	* Defaults: `"list.activeSelectionForeground"`.
	*/
	'menu.selectionForeground'?: T;
	/**
	* Background color of the selected menu item in menus.
	*
	* Optional.
	*
	* Defaults: `"list.activeSelectionBackground"`.
	*/
	'menu.selectionBackground'?: T;
	/**
	* Border color of the selected menu item in menus.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'menu.selectionBorder'?: T;
	/**
	* Color of a separator menu item in menus.
	*
	* Defaults: `{"dark":"#606060","light":"#D4D4D4","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'menu.separatorBackground': T;
	/**
	* Quick picker background color. The quick picker widget is the container for pickers like the command palette.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.background"`.
	*/
	'quickInput.background'?: T;
	/**
	* Quick picker foreground color. The quick picker widget is the container for pickers like the command palette.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.foreground"`.
	*/
	'quickInput.foreground'?: T;
	/**
	* Quick picker title background color. The quick picker widget is the container for pickers like the command palette.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":0.105}},"light":{"rgba":{"r":0,"g":0,"b":0,"a":0.06}},"hcDark":"#000000","hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'quickInputTitle.background': T;
	/**
	* Quick picker color for grouping labels.
	*
	* Defaults: `{"dark":"#3794FF","light":"#0066BF","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"#0F4A85"}`.
	*/
	'pickerGroup.foreground': T;
	/**
	* Quick picker color for grouping borders.
	*
	* Defaults: `{"dark":"#3F3F46","light":"#CCCEDB","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"#0F4A85"}`.
	*/
	'pickerGroup.border': T;
	/**
	* Note: Please use quickInputList.focusBackground instead
	*
	* Defaults: `null`.
	*/
	'quickInput.list.focusBackground': T;
	/**
	* Quick picker foreground color for the focused item.
	*
	* Optional.
	*
	* Defaults: `"list.activeSelectionForeground"`.
	*/
	'quickInputList.focusForeground'?: T;
	/**
	* Quick picker icon foreground color for the focused item.
	*
	* Optional.
	*
	* Defaults: `"list.activeSelectionIconForeground"`.
	*/
	'quickInputList.focusIconForeground'?: T;
	/**
	* Quick picker background color for the focused item.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":4,"values":["quickInput.list.focusBackground","list.activeSelectionBackground"]},"light":{"op":4,"values":["quickInput.list.focusBackground","list.activeSelectionBackground"]},"hcDark":null,"hcLight":null}`.
	*/
	'quickInputList.focusBackground'?: T;
	/**
	* Active tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `"editor.background"`.
	*/
	'tab.activeBackground'?: T;
	/**
	* Active tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `"tab.activeBackground"`.
	*/
	'tab.unfocusedActiveBackground'?: T;
	/**
	* Inactive tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Defaults: `{"dark":"#2D2D2D","light":"#ECECEC","hcDark":null,"hcLight":null}`.
	*/
	'tab.inactiveBackground': T;
	/**
	* Inactive tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `"tab.inactiveBackground"`.
	*/
	'tab.unfocusedInactiveBackground'?: T;
	/**
	* Active tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"light":"#333333","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"#292929"}`.
	*/
	'tab.activeForeground': T;
	/**
	* Inactive tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"tab.activeForeground","factor":0.5},"light":{"op":2,"value":"tab.activeForeground","factor":0.7},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"#292929"}`.
	*/
	'tab.inactiveForeground'?: T;
	/**
	* Active tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"tab.activeForeground","factor":0.5},"light":{"op":2,"value":"tab.activeForeground","factor":0.7},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"#292929"}`.
	*/
	'tab.unfocusedActiveForeground'?: T;
	/**
	* Inactive tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"tab.inactiveForeground","factor":0.5},"light":{"op":2,"value":"tab.inactiveForeground","factor":0.5},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"#292929"}`.
	*/
	'tab.unfocusedInactiveForeground'?: T;
	/**
	* Tab background color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Defaults: `null`.
	*/
	'tab.hoverBackground': T;
	/**
	* Tab background color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"tab.hoverBackground","factor":0.5},"light":{"op":2,"value":"tab.hoverBackground","factor":0.7},"hcDark":null,"hcLight":null}`.
	*/
	'tab.unfocusedHoverBackground'?: T;
	/**
	* Tab foreground color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Defaults: `null`.
	*/
	'tab.hoverForeground': T;
	/**
	* Tab foreground color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"tab.hoverForeground","factor":0.5},"light":{"op":2,"value":"tab.hoverForeground","factor":0.5},"hcDark":null,"hcLight":null}`.
	*/
	'tab.unfocusedHoverForeground'?: T;
	/**
	* Border to separate tabs from each other. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Defaults: `{"dark":"#252526","light":"#F3F3F3","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'tab.border': T;
	/**
	* Border to separate pinned tabs from other tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `{"dark":"tree.indentGuidesStroke","light":"tree.indentGuidesStroke","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'tab.lastPinnedBorder'?: T;
	/**
	* Border on the bottom of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Defaults: `null`.
	*/
	'tab.activeBorder': T;
	/**
	* Border on the bottom of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"tab.activeBorder","factor":0.5},"light":{"op":2,"value":"tab.activeBorder","factor":0.7},"hcDark":null,"hcLight":null}`.
	*/
	'tab.unfocusedActiveBorder'?: T;
	/**
	* Border to the top of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":null,"hcLight":"#B5200D"}`.
	*/
	'tab.activeBorderTop': T;
	/**
	* Border to the top of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"tab.activeBorderTop","factor":0.5},"light":{"op":2,"value":"tab.activeBorderTop","factor":0.7},"hcDark":null,"hcLight":"#B5200D"}`.
	*/
	'tab.unfocusedActiveBorderTop'?: T;
	/**
	* Border to the top of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `"tab.activeBorderTop"`.
	*/
	'tab.selectedBorderTop'?: T;
	/**
	* Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `"tab.activeBackground"`.
	*/
	'tab.selectedBackground'?: T;
	/**
	* Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `"tab.activeForeground"`.
	*/
	'tab.selectedForeground'?: T;
	/**
	* Border to highlight tabs when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Defaults: `null`.
	*/
	'tab.hoverBorder': T;
	/**
	* Border to highlight tabs in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"tab.hoverBorder","factor":0.5},"light":{"op":2,"value":"tab.hoverBorder","factor":0.7},"hcDark":null,"hcLight":"contrastBorder"}`.
	*/
	'tab.unfocusedHoverBorder'?: T;
	/**
	* Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `{"dark":"tab.activeForeground","light":"tab.activeForeground","hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'tab.dragAndDropBorder'?: T;
	/**
	* Border on the top of modified active tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Defaults: `{"dark":"#3399CC","light":"#33AAEE","hcDark":null,"hcLight":"contrastBorder"}`.
	*/
	'tab.activeModifiedBorder': T;
	/**
	* Border on the top of modified inactive tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"tab.activeModifiedBorder","factor":0.5},"light":{"op":2,"value":"tab.activeModifiedBorder","factor":0.5},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"contrastBorder"}`.
	*/
	'tab.inactiveModifiedBorder'?: T;
	/**
	* Border on the top of modified active tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"tab.activeModifiedBorder","factor":0.5},"light":{"op":2,"value":"tab.activeModifiedBorder","factor":0.7},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"contrastBorder"}`.
	*/
	'tab.unfocusedActiveModifiedBorder'?: T;
	/**
	* Border on the top of modified inactive tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"tab.inactiveModifiedBorder","factor":0.5},"light":{"op":2,"value":"tab.inactiveModifiedBorder","factor":0.5},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"contrastBorder"}`.
	*/
	'tab.unfocusedInactiveModifiedBorder'?: T;
	/**
	* Background color of the editor pane visible on the left and right side of the centered editor layout.
	*
	* Optional.
	*
	* Defaults: `"editor.background"`.
	*/
	'editorPane.background'?: T;
	/**
	* Background color of an empty editor group. Editor groups are the containers of editors.
	*
	* Defaults: `null`.
	*/
	'editorGroup.emptyBackground': T;
	/**
	* Border color of an empty editor group that is focused. Editor groups are the containers of editors.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"focusBorder","hcLight":"focusBorder"}`.
	*/
	'editorGroup.focusedEmptyBorder'?: T;
	/**
	* Background color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.
	*
	* Defaults: `{"dark":"#252526","light":"#F3F3F3","hcDark":null,"hcLight":null}`.
	*/
	'editorGroupHeader.tabsBackground': T;
	/**
	* Border color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.
	*
	* Defaults: `null`.
	*/
	'editorGroupHeader.tabsBorder': T;
	/**
	* Background color of the editor group title header when (`"workbench.editor.showTabs": "single"`). Editor groups are the containers of editors.
	*
	* Optional.
	*
	* Defaults: `"editor.background"`.
	*/
	'editorGroupHeader.noTabsBackground'?: T;
	/**
	* Border color of the editor group title header. Editor groups are the containers of editors.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'editorGroupHeader.border'?: T;
	/**
	* Color to separate multiple editor groups from each other. Editor groups are the containers of editors.
	*
	* Defaults: `{"dark":"#444444","light":"#E7E7E7","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'editorGroup.border': T;
	/**
	* Background color when dragging editors around. The color should have transparency so that the editor contents can still shine through.
	*
	* Defaults: `{"dark":{"rgba":{"r":83,"g":89,"b":93,"a":0.5}},"light":{"rgba":{"r":38,"g":119,"b":203,"a":0.18}},"hcDark":null,"hcLight":{"rgba":{"r":15,"g":74,"b":133,"a":0.5}}}`.
	*/
	'editorGroup.dropBackground': T;
	/**
	* Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.foreground"`.
	*/
	'editorGroup.dropIntoPromptForeground'?: T;
	/**
	* Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.background"`.
	*/
	'editorGroup.dropIntoPromptBackground'?: T;
	/**
	* Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'editorGroup.dropIntoPromptBorder'?: T;
	/**
	* Color to separate two editors from each other when shown side by side in an editor group from top to bottom.
	*
	* Optional.
	*
	* Defaults: `"editorGroup.border"`.
	*/
	'sideBySideEditor.horizontalBorder'?: T;
	/**
	* Color to separate two editors from each other when shown side by side in an editor group from left to right.
	*
	* Optional.
	*
	* Defaults: `"editorGroup.border"`.
	*/
	'sideBySideEditor.verticalBorder'?: T;
	/**
	* Panel background color. Panels are shown below the editor area and contain views like output and integrated terminal.
	*
	* Optional.
	*
	* Defaults: `"editor.background"`.
	*/
	'panel.background'?: T;
	/**
	* Panel border color to separate the panel from the editor. Panels are shown below the editor area and contain views like output and integrated terminal.
	*
	* Defaults: `{"dark":{"rgba":{"r":128,"g":128,"b":128,"a":0.35}},"light":{"rgba":{"r":128,"g":128,"b":128,"a":0.35}},"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'panel.border': T;
	/**
	* Title color for the active panel. Panels are shown below the editor area and contain views like output and integrated terminal.
	*
	* Defaults: `{"dark":"#E7E7E7","light":"#424242","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"editor.foreground"}`.
	*/
	'panelTitle.activeForeground': T;
	/**
	* Title color for the inactive panel. Panels are shown below the editor area and contain views like output and integrated terminal.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"panelTitle.activeForeground","factor":0.6},"light":{"op":2,"value":"panelTitle.activeForeground","factor":0.75},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"editor.foreground"}`.
	*/
	'panelTitle.inactiveForeground'?: T;
	/**
	* Border color for the active panel title. Panels are shown below the editor area and contain views like output and integrated terminal.
	*
	* Optional.
	*
	* Defaults: `{"dark":"panelTitle.activeForeground","light":"panelTitle.activeForeground","hcDark":"contrastBorder","hcLight":"#B5200D"}`.
	*/
	'panelTitle.activeBorder'?: T;
	/**
	* Input box border for inputs in the panel.
	*
	* Defaults: `{"dark":"input.border","light":{"rgba":{"r":221,"g":221,"b":221,"a":1}},"hcDark":"input.border","hcLight":"input.border"}`.
	*/
	'panelInput.border': T;
	/**
	* Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal.
	*
	* Optional.
	*
	* Defaults: `"panelTitle.activeForeground"`.
	*/
	'panel.dropBorder'?: T;
	/**
	* Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
	*
	* Optional.
	*
	* Defaults: `"editorGroup.dropBackground"`.
	*/
	'panelSection.dropBackground'?: T;
	/**
	* Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
	*
	* Defaults: `{"dark":{"rgba":{"r":128,"g":128,"b":128,"a":0.2}},"light":{"rgba":{"r":128,"g":128,"b":128,"a":0.2}},"hcDark":null,"hcLight":null}`.
	*/
	'panelSectionHeader.background': T;
	/**
	* Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
	*
	* Defaults: `null`.
	*/
	'panelSectionHeader.foreground': T;
	/**
	* Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
	*
	* Optional.
	*
	* Defaults: `"contrastBorder"`.
	*/
	'panelSectionHeader.border'?: T;
	/**
	* Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
	*
	* Optional.
	*
	* Defaults: `"panel.border"`.
	*/
	'panelSection.border'?: T;
	/**
	* Background color of sticky scroll in the panel.
	*
	* Optional.
	*
	* Defaults: `"panel.background"`.
	*/
	'panelStickyScroll.background'?: T;
	/**
	* Border color of sticky scroll in the panel.
	*
	* Defaults: `null`.
	*/
	'panelStickyScroll.border': T;
	/**
	* Shadow color of sticky scroll in the panel.
	*
	* Optional.
	*
	* Defaults: `"scrollbar.shadow"`.
	*/
	'panelStickyScroll.shadow'?: T;
	/**
	* Output view background color.
	*
	* Defaults: `null`.
	*/
	'outputView.background': T;
	/**
	* Output view sticky scroll background color.
	*
	* Optional.
	*
	* Defaults: `"outputView.background"`.
	*/
	'outputViewStickyScroll.background'?: T;
	/**
	* Banner background color. The banner is shown under the title bar of the window.
	*
	* Optional.
	*
	* Defaults: `{"dark":"list.activeSelectionBackground","light":{"op":0,"value":"list.activeSelectionBackground","factor":0.3},"hcDark":"list.activeSelectionBackground","hcLight":"list.activeSelectionBackground"}`.
	*/
	'banner.background'?: T;
	/**
	* Banner foreground color. The banner is shown under the title bar of the window.
	*
	* Optional.
	*
	* Defaults: `"list.activeSelectionForeground"`.
	*/
	'banner.foreground'?: T;
	/**
	* Banner icon color. The banner is shown under the title bar of the window.
	*
	* Optional.
	*
	* Defaults: `"editorInfo.foreground"`.
	*/
	'banner.iconForeground'?: T;
	/**
	* Status bar foreground color when a workspace or folder is opened. The status bar is shown in the bottom of the window.
	*
	* Defaults: `{"dark":"#FFFFFF","light":"#FFFFFF","hcDark":"#FFFFFF","hcLight":"editor.foreground"}`.
	*/
	'statusBar.foreground': T;
	/**
	* Status bar foreground color when no folder is opened. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `"statusBar.foreground"`.
	*/
	'statusBar.noFolderForeground'?: T;
	/**
	* Status bar background color when a workspace or folder is opened. The status bar is shown in the bottom of the window.
	*
	* Defaults: `{"dark":"#007ACC","light":"#007ACC","hcDark":null,"hcLight":null}`.
	*/
	'statusBar.background': T;
	/**
	* Status bar background color when no folder is opened. The status bar is shown in the bottom of the window.
	*
	* Defaults: `{"dark":"#68217A","light":"#68217A","hcDark":null,"hcLight":null}`.
	*/
	'statusBar.noFolderBackground': T;
	/**
	* Status bar border color separating to the sidebar and editor. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'statusBar.border'?: T;
	/**
	* Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `{"dark":"statusBar.foreground","light":"statusBar.foreground","hcDark":null,"hcLight":"statusBar.foreground"}`.
	*/
	'statusBar.focusBorder'?: T;
	/**
	* Status bar border color separating to the sidebar and editor when no folder is opened. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `"statusBar.border"`.
	*/
	'statusBar.noFolderBorder'?: T;
	/**
	* Status bar item background color when clicking. The status bar is shown in the bottom of the window.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":0.18}},"light":{"rgba":{"r":255,"g":255,"b":255,"a":0.18}},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":0.18}},"hcLight":{"rgba":{"r":0,"g":0,"b":0,"a":0.18}}}`.
	*/
	'statusBarItem.activeBackground': T;
	/**
	* Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `{"dark":"statusBar.foreground","light":"statusBar.foreground","hcDark":null,"hcLight":"contrastActiveBorder"}`.
	*/
	'statusBarItem.focusBorder'?: T;
	/**
	* Status bar item background color when hovering. The status bar is shown in the bottom of the window.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":0.12}},"light":{"rgba":{"r":255,"g":255,"b":255,"a":0.12}},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":0.12}},"hcLight":{"rgba":{"r":0,"g":0,"b":0,"a":0.12}}}`.
	*/
	'statusBarItem.hoverBackground': T;
	/**
	* Status bar item foreground color when hovering. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `"statusBar.foreground"`.
	*/
	'statusBarItem.hoverForeground'?: T;
	/**
	* Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":0.2}},"light":{"rgba":{"r":255,"g":255,"b":255,"a":0.2}},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":0.2}},"hcLight":{"rgba":{"r":0,"g":0,"b":0,"a":0.2}}}`.
	*/
	'statusBarItem.compactHoverBackground': T;
	/**
	* Status bar prominent items foreground color. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `"statusBar.foreground"`.
	*/
	'statusBarItem.prominentForeground'?: T;
	/**
	* Status bar prominent items background color. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
	*
	* Defaults: `{"rgba":{"r":0,"g":0,"b":0,"a":0.5}}`.
	*/
	'statusBarItem.prominentBackground': T;
	/**
	* Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `"statusBarItem.hoverForeground"`.
	*/
	'statusBarItem.prominentHoverForeground'?: T;
	/**
	* Status bar prominent items background color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
	*
	* Defaults: `{"dark":{"rgba":{"r":0,"g":0,"b":0,"a":0.3}},"light":{"rgba":{"r":0,"g":0,"b":0,"a":0.3}},"hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":0.3}},"hcLight":null}`.
	*/
	'statusBarItem.prominentHoverBackground': T;
	/**
	* Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":0,"value":"errorForeground","factor":0.4},"light":{"op":0,"value":"errorForeground","factor":0.4},"hcDark":null,"hcLight":"#B5200D"}`.
	*/
	'statusBarItem.errorBackground'?: T;
	/**
	* Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
	*
	* Defaults: `{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}`.
	*/
	'statusBarItem.errorForeground': T;
	/**
	* Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `"statusBarItem.hoverForeground"`.
	*/
	'statusBarItem.errorHoverForeground'?: T;
	/**
	* Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `"statusBarItem.hoverBackground"`.
	*/
	'statusBarItem.errorHoverBackground'?: T;
	/**
	* Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":0,"value":"editorWarning.foreground","factor":0.4},"light":{"op":0,"value":"editorWarning.foreground","factor":0.4},"hcDark":null,"hcLight":"#895503"}`.
	*/
	'statusBarItem.warningBackground'?: T;
	/**
	* Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
	*
	* Defaults: `{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}`.
	*/
	'statusBarItem.warningForeground': T;
	/**
	* Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `"statusBarItem.hoverForeground"`.
	*/
	'statusBarItem.warningHoverForeground'?: T;
	/**
	* Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
	*
	* Optional.
	*
	* Defaults: `"statusBarItem.hoverBackground"`.
	*/
	'statusBarItem.warningHoverBackground'?: T;
	/**
	* Activity bar background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	*
	* Defaults: `{"dark":"#333333","light":"#2C2C2C","hcDark":"#000000","hcLight":"#FFFFFF"}`.
	*/
	'activityBar.background': T;
	/**
	* Activity bar item foreground color when it is active. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"light":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"editor.foreground"}`.
	*/
	'activityBar.foreground': T;
	/**
	* Activity bar item foreground color when it is inactive. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"activityBar.foreground","factor":0.4},"light":{"op":2,"value":"activityBar.foreground","factor":0.4},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"editor.foreground"}`.
	*/
	'activityBar.inactiveForeground'?: T;
	/**
	* Activity bar border color separating to the side bar. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'activityBar.border'?: T;
	/**
	* Activity bar border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	*
	* Optional.
	*
	* Defaults: `{"dark":"activityBar.foreground","light":"activityBar.foreground","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'activityBar.activeBorder'?: T;
	/**
	* Activity bar focus border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":null,"hcLight":"#B5200D"}`.
	*/
	'activityBar.activeFocusBorder': T;
	/**
	* Activity bar background color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	*
	* Defaults: `null`.
	*/
	'activityBar.activeBackground': T;
	/**
	* Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	*
	* Optional.
	*
	* Defaults: `{"dark":"activityBar.foreground","light":"activityBar.foreground","hcDark":null,"hcLight":null}`.
	*/
	'activityBar.dropBorder'?: T;
	/**
	* Activity notification badge background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	*
	* Defaults: `{"dark":"#007ACC","light":"#007ACC","hcDark":"#000000","hcLight":"#0F4A85"}`.
	*/
	'activityBarBadge.background': T;
	/**
	* Activity notification badge foreground color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	*
	* Defaults: `{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}`.
	*/
	'activityBarBadge.foreground': T;
	/**
	* Active foreground color of the item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.
	*
	* Defaults: `{"dark":"#E7E7E7","light":"#424242","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"editor.foreground"}`.
	*/
	'activityBarTop.foreground': T;
	/**
	* Focus border color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.
	*
	* Optional.
	*
	* Defaults: `{"dark":"activityBarTop.foreground","light":"activityBarTop.foreground","hcDark":"contrastBorder","hcLight":"#B5200D"}`.
	*/
	'activityBarTop.activeBorder'?: T;
	/**
	* Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.
	*
	* Defaults: `null`.
	*/
	'activityBarTop.activeBackground': T;
	/**
	* Inactive foreground color of the item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"activityBarTop.foreground","factor":0.6},"light":{"op":2,"value":"activityBarTop.foreground","factor":0.75},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"editor.foreground"}`.
	*/
	'activityBarTop.inactiveForeground'?: T;
	/**
	* Drag and drop feedback color for the items in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.
	*
	* Optional.
	*
	* Defaults: `"activityBarTop.foreground"`.
	*/
	'activityBarTop.dropBorder'?: T;
	/**
	* Background color of the activity bar when set to top / bottom.
	*
	* Defaults: `null`.
	*/
	'activityBarTop.background': T;
	/**
	* Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar.
	*
	* Defaults: `{"dark":"#4D4D4D","light":"#C4C4C4","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":{"rgba":{"r":0,"g":0,"b":0,"a":1}}}`.
	*/
	'profileBadge.background': T;
	/**
	* Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"light":"#333333","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'profileBadge.foreground': T;
	/**
	* Background color for the remote indicator on the status bar.
	*
	* Optional.
	*
	* Defaults: `"activityBarBadge.background"`.
	*/
	'statusBarItem.remoteBackground'?: T;
	/**
	* Foreground color for the remote indicator on the status bar.
	*
	* Optional.
	*
	* Defaults: `"activityBarBadge.foreground"`.
	*/
	'statusBarItem.remoteForeground'?: T;
	/**
	* Foreground color for the remote indicator on the status bar when hovering.
	*
	* Optional.
	*
	* Defaults: `"statusBarItem.hoverForeground"`.
	*/
	'statusBarItem.remoteHoverForeground'?: T;
	/**
	* Background color for the remote indicator on the status bar when hovering.
	*
	* Optional.
	*
	* Defaults: `{"dark":"statusBarItem.hoverBackground","light":"statusBarItem.hoverBackground","hcDark":"statusBarItem.hoverBackground","hcLight":null}`.
	*/
	'statusBarItem.remoteHoverBackground'?: T;
	/**
	* Status bar item background color when the workbench is offline.
	*
	* Defaults: `"#6c1717"`.
	*/
	'statusBarItem.offlineBackground': T;
	/**
	* Status bar item foreground color when the workbench is offline.
	*
	* Optional.
	*
	* Defaults: `"statusBarItem.remoteForeground"`.
	*/
	'statusBarItem.offlineForeground'?: T;
	/**
	* Status bar item foreground hover color when the workbench is offline.
	*
	* Optional.
	*
	* Defaults: `"statusBarItem.hoverForeground"`.
	*/
	'statusBarItem.offlineHoverForeground'?: T;
	/**
	* Status bar item background hover color when the workbench is offline.
	*
	* Optional.
	*
	* Defaults: `{"dark":"statusBarItem.hoverBackground","light":"statusBarItem.hoverBackground","hcDark":"statusBarItem.hoverBackground","hcLight":null}`.
	*/
	'statusBarItem.offlineHoverBackground'?: T;
	/**
	* Background color for the remote badge in the extensions view.
	*
	* Optional.
	*
	* Defaults: `"activityBarBadge.background"`.
	*/
	'extensionBadge.remoteBackground'?: T;
	/**
	* Foreground color for the remote badge in the extensions view.
	*
	* Optional.
	*
	* Defaults: `"activityBarBadge.foreground"`.
	*/
	'extensionBadge.remoteForeground'?: T;
	/**
	* Side bar background color. The side bar is the container for views like explorer and search.
	*
	* Defaults: `{"dark":"#252526","light":"#F3F3F3","hcDark":"#000000","hcLight":"#FFFFFF"}`.
	*/
	'sideBar.background': T;
	/**
	* Side bar foreground color. The side bar is the container for views like explorer and search.
	*
	* Defaults: `null`.
	*/
	'sideBar.foreground': T;
	/**
	* Side bar border color on the side separating to the editor. The side bar is the container for views like explorer and search.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'sideBar.border'?: T;
	/**
	* Side bar title background color. The side bar is the container for views like explorer and search.
	*
	* Optional.
	*
	* Defaults: `"sideBar.background"`.
	*/
	'sideBarTitle.background'?: T;
	/**
	* Side bar title foreground color. The side bar is the container for views like explorer and search.
	*
	* Optional.
	*
	* Defaults: `"sideBar.foreground"`.
	*/
	'sideBarTitle.foreground'?: T;
	/**
	* Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar.
	*
	* Optional.
	*
	* Defaults: `"editorGroup.dropBackground"`.
	*/
	'sideBar.dropBackground'?: T;
	/**
	* Side bar section header background color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar.
	*
	* Defaults: `{"dark":{"rgba":{"r":128,"g":128,"b":128,"a":0.2}},"light":{"rgba":{"r":128,"g":128,"b":128,"a":0.2}},"hcDark":null,"hcLight":null}`.
	*/
	'sideBarSectionHeader.background': T;
	/**
	* Side bar section header foreground color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar.
	*
	* Optional.
	*
	* Defaults: `"sideBar.foreground"`.
	*/
	'sideBarSectionHeader.foreground'?: T;
	/**
	* Side bar section header border color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar.
	*
	* Optional.
	*
	* Defaults: `"contrastBorder"`.
	*/
	'sideBarSectionHeader.border'?: T;
	/**
	* Border color between the activity bar at the top/bottom and the views.
	*
	* Optional.
	*
	* Defaults: `"sideBarSectionHeader.border"`.
	*/
	'sideBarActivityBarTop.border'?: T;
	/**
	* Background color of sticky scroll in the side bar.
	*
	* Optional.
	*
	* Defaults: `"sideBar.background"`.
	*/
	'sideBarStickyScroll.background'?: T;
	/**
	* Border color of sticky scroll in the side bar.
	*
	* Defaults: `null`.
	*/
	'sideBarStickyScroll.border': T;
	/**
	* Shadow color of sticky scroll in the side bar.
	*
	* Optional.
	*
	* Defaults: `"scrollbar.shadow"`.
	*/
	'sideBarStickyScroll.shadow'?: T;
	/**
	* Title bar foreground when the window is active.
	*
	* Defaults: `{"dark":"#CCCCCC","light":"#333333","hcDark":"#FFFFFF","hcLight":"#292929"}`.
	*/
	'titleBar.activeForeground': T;
	/**
	* Title bar foreground when the window is inactive.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"titleBar.activeForeground","factor":0.6},"light":{"op":2,"value":"titleBar.activeForeground","factor":0.6},"hcDark":null,"hcLight":"#292929"}`.
	*/
	'titleBar.inactiveForeground'?: T;
	/**
	* Title bar background when the window is active.
	*
	* Defaults: `{"dark":"#3C3C3C","light":"#DDDDDD","hcDark":"#000000","hcLight":"#FFFFFF"}`.
	*/
	'titleBar.activeBackground': T;
	/**
	* Title bar background when the window is inactive.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"titleBar.activeBackground","factor":0.6},"light":{"op":2,"value":"titleBar.activeBackground","factor":0.6},"hcDark":null,"hcLight":null}`.
	*/
	'titleBar.inactiveBackground'?: T;
	/**
	* Title bar border color.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'titleBar.border'?: T;
	/**
	* Foreground color of the selected menu item in the menubar.
	*
	* Optional.
	*
	* Defaults: `"titleBar.activeForeground"`.
	*/
	'menubar.selectionForeground'?: T;
	/**
	* Background color of the selected menu item in the menubar.
	*
	* Optional.
	*
	* Defaults: `{"dark":"toolbar.hoverBackground","light":"toolbar.hoverBackground","hcDark":null,"hcLight":null}`.
	*/
	'menubar.selectionBackground'?: T;
	/**
	* Border color of the selected menu item in the menubar.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'menubar.selectionBorder'?: T;
	/**
	* Foreground color of the command center
	*
	* Optional.
	*
	* Defaults: `"titleBar.activeForeground"`.
	*/
	'commandCenter.foreground'?: T;
	/**
	* Active foreground color of the command center
	*
	* Optional.
	*
	* Defaults: `"menubar.selectionForeground"`.
	*/
	'commandCenter.activeForeground'?: T;
	/**
	* Foreground color of the command center when the window is inactive
	*
	* Optional.
	*
	* Defaults: `"titleBar.inactiveForeground"`.
	*/
	'commandCenter.inactiveForeground'?: T;
	/**
	* Background color of the command center
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":0.05}},"hcDark":null,"light":{"rgba":{"r":0,"g":0,"b":0,"a":0.05}},"hcLight":null}`.
	*/
	'commandCenter.background': T;
	/**
	* Active background color of the command center
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":0.08}},"hcDark":"menubar.selectionBackground","light":{"rgba":{"r":0,"g":0,"b":0,"a":0.08}},"hcLight":"menubar.selectionBackground"}`.
	*/
	'commandCenter.activeBackground': T;
	/**
	* Border color of the command center
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"titleBar.activeForeground","factor":0.2},"hcDark":"contrastBorder","light":{"op":2,"value":"titleBar.activeForeground","factor":0.2},"hcLight":"contrastBorder"}`.
	*/
	'commandCenter.border'?: T;
	/**
	* Active border color of the command center
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"titleBar.activeForeground","factor":0.3},"hcDark":"titleBar.activeForeground","light":{"op":2,"value":"titleBar.activeForeground","factor":0.3},"hcLight":"titleBar.activeForeground"}`.
	*/
	'commandCenter.activeBorder'?: T;
	/**
	* Border color of the command center when the window is inactive
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"titleBar.inactiveForeground","factor":0.25}`.
	*/
	'commandCenter.inactiveBorder'?: T;
	/**
	* Notifications center border color. Notifications slide in from the bottom right of the window.
	*
	* Optional.
	*
	* Defaults: `{"dark":"widget.border","light":"widget.border","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'notificationCenter.border'?: T;
	/**
	* Notification toast border color. Notifications slide in from the bottom right of the window.
	*
	* Optional.
	*
	* Defaults: `{"dark":"widget.border","light":"widget.border","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'notificationToast.border'?: T;
	/**
	* Notifications foreground color. Notifications slide in from the bottom right of the window.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.foreground"`.
	*/
	'notifications.foreground'?: T;
	/**
	* Notifications background color. Notifications slide in from the bottom right of the window.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.background"`.
	*/
	'notifications.background'?: T;
	/**
	* Notification links foreground color. Notifications slide in from the bottom right of the window.
	*
	* Optional.
	*
	* Defaults: `"textLink.foreground"`.
	*/
	'notificationLink.foreground'?: T;
	/**
	* Notifications center header foreground color. Notifications slide in from the bottom right of the window.
	*
	* Defaults: `null`.
	*/
	'notificationCenterHeader.foreground': T;
	/**
	* Notifications center header background color. Notifications slide in from the bottom right of the window.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":1,"value":"notifications.background","factor":0.3},"light":{"op":0,"value":"notifications.background","factor":0.05},"hcDark":"notifications.background","hcLight":"notifications.background"}`.
	*/
	'notificationCenterHeader.background'?: T;
	/**
	* Notifications border color separating from other notifications in the notifications center. Notifications slide in from the bottom right of the window.
	*
	* Optional.
	*
	* Defaults: `"notificationCenterHeader.background"`.
	*/
	'notifications.border'?: T;
	/**
	* The color used for the icon of error notifications. Notifications slide in from the bottom right of the window.
	*
	* Optional.
	*
	* Defaults: `"editorError.foreground"`.
	*/
	'notificationsErrorIcon.foreground'?: T;
	/**
	* The color used for the icon of warning notifications. Notifications slide in from the bottom right of the window.
	*
	* Optional.
	*
	* Defaults: `"editorWarning.foreground"`.
	*/
	'notificationsWarningIcon.foreground'?: T;
	/**
	* The color used for the icon of info notifications. Notifications slide in from the bottom right of the window.
	*
	* Optional.
	*
	* Defaults: `"editorInfo.foreground"`.
	*/
	'notificationsInfoIcon.foreground'?: T;
	/**
	* The color used for the border of the window when it is active. Only supported in the macOS and Linux desktop client when using the custom title bar.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'window.activeBorder'?: T;
	/**
	* The color used for the border of the window when it is inactive. Only supported in the macOS and Linux desktop client when using the custom title bar.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'window.inactiveBorder'?: T;
	/**
	* The border color of a chat request.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":0.1}},"light":{"rgba":{"r":0,"g":0,"b":0,"a":0.1}},"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'chat.requestBorder': T;
	/**
	* The background color of a chat request.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"editor.background","factor":0.62},"light":{"op":2,"value":"editor.background","factor":0.62},"hcDark":"editorWidget.background","hcLight":null}`.
	*/
	'chat.requestBackground'?: T;
	/**
	* The background color of a chat slash command.
	*
	* Defaults: `{"dark":"#34414b8f","light":"#d2ecff99","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"badge.background"}`.
	*/
	'chat.slashCommandBackground': T;
	/**
	* The foreground color of a chat slash command.
	*
	* Defaults: `{"dark":"#40A6FF","light":"#306CA2","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":"badge.foreground"}`.
	*/
	'chat.slashCommandForeground': T;
	/**
	* The background color of a chat avatar.
	*
	* Defaults: `{"dark":"#1f1f1f","light":"#f2f2f2","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'chat.avatarBackground': T;
	/**
	* The foreground color of a chat avatar.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'chat.avatarForeground'?: T;
	/**
	* Status bar background color when a program is being debugged. The status bar is shown in the bottom of the window
	*
	* Defaults: `{"dark":"#CC6633","light":"#CC6633","hcDark":"#BA592C","hcLight":"#B5200D"}`.
	*/
	'statusBar.debuggingBackground': T;
	/**
	* Status bar foreground color when a program is being debugged. The status bar is shown in the bottom of the window
	*
	* Optional.
	*
	* Defaults: `{"dark":"statusBar.foreground","light":"statusBar.foreground","hcDark":"statusBar.foreground","hcLight":"#FFFFFF"}`.
	*/
	'statusBar.debuggingForeground'?: T;
	/**
	* Status bar border color separating to the sidebar and editor when a program is being debugged. The status bar is shown in the bottom of the window
	*
	* Optional.
	*
	* Defaults: `"statusBar.border"`.
	*/
	'statusBar.debuggingBorder'?: T;
	/**
	* Command center background color when a program is being debugged
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"statusBar.debuggingBackground","factor":0.258}`.
	*/
	'commandCenter.debuggingBackground'?: T;
	/**
	* Background color for the highlight of line at the cursor position.
	*
	* Defaults: `null`.
	*/
	'editor.lineHighlightBackground': T;
	/**
	* Background color for the border around the line at the cursor position.
	*
	* Defaults: `{"dark":"#282828","light":"#eeeeee","hcDark":"#f38518","hcLight":"contrastBorder"}`.
	*/
	'editor.lineHighlightBorder': T;
	/**
	* Background color of highlighted ranges, like by quick open and find features. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"dark":"#ffffff0b","light":"#fdff0033","hcDark":null,"hcLight":null}`.
	*/
	'editor.rangeHighlightBackground': T;
	/**
	* Background color of the border around highlighted ranges.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'editor.rangeHighlightBorder'?: T;
	/**
	* Background color of highlighted symbol, like for go to definition or go next/previous symbol. The color must not be opaque so as not to hide underlying decorations.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editor.findMatchHighlightBackground","light":"editor.findMatchHighlightBackground","hcDark":null,"hcLight":null}`.
	*/
	'editor.symbolHighlightBackground'?: T;
	/**
	* Background color of the border around highlighted symbols.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'editor.symbolHighlightBorder'?: T;
	/**
	* Color of the editor cursor.
	*
	* Defaults: `{"dark":"#AEAFAD","light":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"#0F4A85"}`.
	*/
	'editorCursor.foreground': T;
	/**
	* The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
	*
	* Defaults: `null`.
	*/
	'editorCursor.background': T;
	/**
	* Color of the primary editor cursor when multiple cursors are present.
	*
	* Optional.
	*
	* Defaults: `"editorCursor.foreground"`.
	*/
	'editorMultiCursor.primary.foreground'?: T;
	/**
	* The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
	*
	* Optional.
	*
	* Defaults: `"editorCursor.background"`.
	*/
	'editorMultiCursor.primary.background'?: T;
	/**
	* Color of secondary editor cursors when multiple cursors are present.
	*
	* Optional.
	*
	* Defaults: `"editorCursor.foreground"`.
	*/
	'editorMultiCursor.secondary.foreground'?: T;
	/**
	* The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
	*
	* Optional.
	*
	* Defaults: `"editorCursor.background"`.
	*/
	'editorMultiCursor.secondary.background'?: T;
	/**
	* Color of whitespace characters in the editor.
	*
	* Defaults: `{"dark":"#e3e4e229","light":"#33333333","hcDark":"#e3e4e229","hcLight":"#CCCCCC"}`.
	*/
	'editorWhitespace.foreground': T;
	/**
	* Color of editor line numbers.
	*
	* Defaults: `{"dark":"#858585","light":"#237893","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"#292929"}`.
	*/
	'editorLineNumber.foreground': T;
	/**
	* Color of the editor indentation guides. Note: 'editorIndentGuide.background' is deprecated. Use 'editorIndentGuide.background1' instead.
	*
	* Optional.
	*
	* Defaults: `"editorWhitespace.foreground"`.
	*/
	'editorIndentGuide.background'?: T;
	/**
	* Color of the active editor indentation guides. Note: 'editorIndentGuide.activeBackground' is deprecated. Use 'editorIndentGuide.activeBackground1' instead.
	*
	* Optional.
	*
	* Defaults: `"editorWhitespace.foreground"`.
	*/
	'editorIndentGuide.activeBackground'?: T;
	/**
	* Color of the editor indentation guides (1).
	*
	* Optional.
	*
	* Defaults: `"editorIndentGuide.background"`.
	*/
	'editorIndentGuide.background1'?: T;
	/**
	* Color of the editor indentation guides (2).
	*
	* Defaults: `"#00000000"`.
	*/
	'editorIndentGuide.background2': T;
	/**
	* Color of the editor indentation guides (3).
	*
	* Defaults: `"#00000000"`.
	*/
	'editorIndentGuide.background3': T;
	/**
	* Color of the editor indentation guides (4).
	*
	* Defaults: `"#00000000"`.
	*/
	'editorIndentGuide.background4': T;
	/**
	* Color of the editor indentation guides (5).
	*
	* Defaults: `"#00000000"`.
	*/
	'editorIndentGuide.background5': T;
	/**
	* Color of the editor indentation guides (6).
	*
	* Defaults: `"#00000000"`.
	*/
	'editorIndentGuide.background6': T;
	/**
	* Color of the active editor indentation guides (1).
	*
	* Optional.
	*
	* Defaults: `"editorIndentGuide.activeBackground"`.
	*/
	'editorIndentGuide.activeBackground1'?: T;
	/**
	* Color of the active editor indentation guides (2).
	*
	* Defaults: `"#00000000"`.
	*/
	'editorIndentGuide.activeBackground2': T;
	/**
	* Color of the active editor indentation guides (3).
	*
	* Defaults: `"#00000000"`.
	*/
	'editorIndentGuide.activeBackground3': T;
	/**
	* Color of the active editor indentation guides (4).
	*
	* Defaults: `"#00000000"`.
	*/
	'editorIndentGuide.activeBackground4': T;
	/**
	* Color of the active editor indentation guides (5).
	*
	* Defaults: `"#00000000"`.
	*/
	'editorIndentGuide.activeBackground5': T;
	/**
	* Color of the active editor indentation guides (6).
	*
	* Defaults: `"#00000000"`.
	*/
	'editorIndentGuide.activeBackground6': T;
	/**
	* Color of editor active line number Note: Id is deprecated. Use 'editorLineNumber.activeForeground' instead.
	*
	* Defaults: `{"dark":"#c6c6c6","light":"#0B216F","hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'editorActiveLineNumber.foreground': T;
	/**
	* Color of editor active line number
	*
	* Optional.
	*
	* Defaults: `"editorActiveLineNumber.foreground"`.
	*/
	'editorLineNumber.activeForeground'?: T;
	/**
	* Color of the final editor line when editor.renderFinalNewline is set to dimmed.
	*
	* Defaults: `null`.
	*/
	'editorLineNumber.dimmedForeground': T;
	/**
	* Color of the editor rulers.
	*
	* Defaults: `{"dark":"#5A5A5A","light":{"rgba":{"r":211,"g":211,"b":211,"a":1}},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"#292929"}`.
	*/
	'editorRuler.foreground': T;
	/**
	* Foreground color of editor CodeLens
	*
	* Defaults: `{"dark":"#999999","light":"#919191","hcDark":"#999999","hcLight":"#292929"}`.
	*/
	'editorCodeLens.foreground': T;
	/**
	* Background color behind matching brackets
	*
	* Defaults: `{"dark":"#0064001a","light":"#0064001a","hcDark":"#0064001a","hcLight":"#0000"}`.
	*/
	'editorBracketMatch.background': T;
	/**
	* Color for matching brackets boxes
	*
	* Defaults: `{"dark":"#888","light":"#B9B9B9","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'editorBracketMatch.border': T;
	/**
	* Color of the overview ruler border.
	*
	* Defaults: `{"dark":"#7f7f7f4d","light":"#7f7f7f4d","hcDark":"#7f7f7f4d","hcLight":"#666666"}`.
	*/
	'editorOverviewRuler.border': T;
	/**
	* Background color of the editor overview ruler.
	*
	* Defaults: `null`.
	*/
	'editorOverviewRuler.background': T;
	/**
	* Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
	*
	* Optional.
	*
	* Defaults: `"editor.background"`.
	*/
	'editorGutter.background'?: T;
	/**
	* Border color of unnecessary (unused) source code in the editor.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":0.8}},"hcLight":"contrastBorder"}`.
	*/
	'editorUnnecessaryCode.border'?: T;
	/**
	* Opacity of unnecessary (unused) source code in the editor. For example, "#000000c0" will render the code with 75% opacity. For high contrast themes, use the  'editorUnnecessaryCode.border' theme color to underline unnecessary code instead of fading it out.
	*
	* Defaults: `{"dark":{"rgba":{"r":0,"g":0,"b":0,"a":0.667}},"light":{"rgba":{"r":0,"g":0,"b":0,"a":0.467}},"hcDark":null,"hcLight":null}`.
	*/
	'editorUnnecessaryCode.opacity': T;
	/**
	* Border color of ghost text in the editor.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":0.8}},"hcLight":{"rgba":{"r":41,"g":41,"b":41,"a":0.8}}}`.
	*/
	'editorGhostText.border'?: T;
	/**
	* Foreground color of the ghost text in the editor.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":0.337}},"light":{"rgba":{"r":0,"g":0,"b":0,"a":0.467}},"hcDark":null,"hcLight":null}`.
	*/
	'editorGhostText.foreground': T;
	/**
	* Background color of the ghost text in the editor.
	*
	* Defaults: `null`.
	*/
	'editorGhostText.background': T;
	/**
	* Overview ruler marker color for range highlights. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"rgba":{"r":0,"g":122,"b":204,"a":0.6}}`.
	*/
	'editorOverviewRuler.rangeHighlightForeground': T;
	/**
	* Overview ruler marker color for errors.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":18,"b":18,"a":0.7}},"light":{"rgba":{"r":255,"g":18,"b":18,"a":0.7}},"hcDark":{"rgba":{"r":255,"g":50,"b":50,"a":1}},"hcLight":"#B5200D"}`.
	*/
	'editorOverviewRuler.errorForeground': T;
	/**
	* Overview ruler marker color for warnings.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editorWarning.foreground","light":"editorWarning.foreground","hcDark":"editorWarning.border","hcLight":"editorWarning.border"}`.
	*/
	'editorOverviewRuler.warningForeground'?: T;
	/**
	* Overview ruler marker color for infos.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editorInfo.foreground","light":"editorInfo.foreground","hcDark":"editorInfo.border","hcLight":"editorInfo.border"}`.
	*/
	'editorOverviewRuler.infoForeground'?: T;
	/**
	* Foreground color of brackets (1). Requires enabling bracket pair colorization.
	*
	* Defaults: `{"dark":"#FFD700","light":"#0431FAFF","hcDark":"#FFD700","hcLight":"#0431FAFF"}`.
	*/
	'editorBracketHighlight.foreground1': T;
	/**
	* Foreground color of brackets (2). Requires enabling bracket pair colorization.
	*
	* Defaults: `{"dark":"#DA70D6","light":"#319331FF","hcDark":"#DA70D6","hcLight":"#319331FF"}`.
	*/
	'editorBracketHighlight.foreground2': T;
	/**
	* Foreground color of brackets (3). Requires enabling bracket pair colorization.
	*
	* Defaults: `{"dark":"#179FFF","light":"#7B3814FF","hcDark":"#87CEFA","hcLight":"#7B3814FF"}`.
	*/
	'editorBracketHighlight.foreground3': T;
	/**
	* Foreground color of brackets (4). Requires enabling bracket pair colorization.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketHighlight.foreground4': T;
	/**
	* Foreground color of brackets (5). Requires enabling bracket pair colorization.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketHighlight.foreground5': T;
	/**
	* Foreground color of brackets (6). Requires enabling bracket pair colorization.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketHighlight.foreground6': T;
	/**
	* Foreground color of unexpected brackets.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":18,"b":18,"a":0.8}},"light":{"rgba":{"r":255,"g":18,"b":18,"a":0.8}},"hcDark":{"rgba":{"r":255,"g":50,"b":50,"a":1}},"hcLight":""}`.
	*/
	'editorBracketHighlight.unexpectedBracket.foreground': T;
	/**
	* Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketPairGuide.background1': T;
	/**
	* Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketPairGuide.background2': T;
	/**
	* Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketPairGuide.background3': T;
	/**
	* Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketPairGuide.background4': T;
	/**
	* Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketPairGuide.background5': T;
	/**
	* Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketPairGuide.background6': T;
	/**
	* Background color of active bracket pair guides (1). Requires enabling bracket pair guides.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketPairGuide.activeBackground1': T;
	/**
	* Background color of active bracket pair guides (2). Requires enabling bracket pair guides.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketPairGuide.activeBackground2': T;
	/**
	* Background color of active bracket pair guides (3). Requires enabling bracket pair guides.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketPairGuide.activeBackground3': T;
	/**
	* Background color of active bracket pair guides (4). Requires enabling bracket pair guides.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketPairGuide.activeBackground4': T;
	/**
	* Background color of active bracket pair guides (5). Requires enabling bracket pair guides.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketPairGuide.activeBackground5': T;
	/**
	* Background color of active bracket pair guides (6). Requires enabling bracket pair guides.
	*
	* Defaults: `"#00000000"`.
	*/
	'editorBracketPairGuide.activeBackground6': T;
	/**
	* Border color used to highlight unicode characters.
	*
	* Optional.
	*
	* Defaults: `"editorWarning.foreground"`.
	*/
	'editorUnicodeHighlight.border'?: T;
	/**
	* Background color used to highlight unicode characters.
	*
	* Optional.
	*
	* Defaults: `"editorWarning.background"`.
	*/
	'editorUnicodeHighlight.background'?: T;
	/**
	* Foreground color of the interactive editor widget
	*
	* Optional.
	*
	* Defaults: `"editorWidget.foreground"`.
	*/
	'inlineChat.foreground'?: T;
	/**
	* Background color of the interactive editor widget
	*
	* Optional.
	*
	* Defaults: `"editorWidget.background"`.
	*/
	'inlineChat.background'?: T;
	/**
	* Border color of the interactive editor widget
	*
	* Optional.
	*
	* Defaults: `"editorWidget.border"`.
	*/
	'inlineChat.border'?: T;
	/**
	* Shadow color of the interactive editor widget
	*
	* Optional.
	*
	* Defaults: `"widget.shadow"`.
	*/
	'inlineChat.shadow'?: T;
	/**
	* Border color of the interactive editor input
	*
	* Optional.
	*
	* Defaults: `"editorWidget.border"`.
	*/
	'inlineChatInput.border'?: T;
	/**
	* Border color of the interactive editor input when focused
	*
	* Optional.
	*
	* Defaults: `"focusBorder"`.
	*/
	'inlineChatInput.focusBorder'?: T;
	/**
	* Foreground color of the interactive editor input placeholder
	*
	* Optional.
	*
	* Defaults: `"input.placeholderForeground"`.
	*/
	'inlineChatInput.placeholderForeground'?: T;
	/**
	* Background color of the interactive editor input
	*
	* Optional.
	*
	* Defaults: `"input.background"`.
	*/
	'inlineChatInput.background'?: T;
	/**
	* Background color of inserted text in the interactive editor input
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"diffEditor.insertedTextBackground","factor":0.5}`.
	*/
	'inlineChatDiff.inserted'?: T;
	/**
	* Overview ruler marker color for inline chat inserted content.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"diffEditor.insertedTextBackground","factor":0.6},"light":{"op":2,"value":"diffEditor.insertedTextBackground","factor":0.8},"hcDark":{"op":2,"value":"diffEditor.insertedTextBackground","factor":0.6},"hcLight":{"op":2,"value":"diffEditor.insertedTextBackground","factor":0.8}}`.
	*/
	'editorOverviewRuler.inlineChatInserted'?: T;
	/**
	* Background color of removed text in the interactive editor input
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"diffEditor.removedTextBackground","factor":0.5}`.
	*/
	'inlineChatDiff.removed'?: T;
	/**
	* Overview ruler marker color for inline chat removed content.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"diffEditor.removedTextBackground","factor":0.6},"light":{"op":2,"value":"diffEditor.removedTextBackground","factor":0.8},"hcDark":{"op":2,"value":"diffEditor.removedTextBackground","factor":0.6},"hcLight":{"op":2,"value":"diffEditor.removedTextBackground","factor":0.8}}`.
	*/
	'editorOverviewRuler.inlineChatRemoved'?: T;
	/**
	* Debug toolbar background color.
	*
	* Defaults: `{"dark":"#333333","light":"#F3F3F3","hcDark":"#000000","hcLight":"#FFFFFF"}`.
	*/
	'debugToolBar.background': T;
	/**
	* Debug toolbar border color.
	*
	* Defaults: `null`.
	*/
	'debugToolBar.border': T;
	/**
	* Debug toolbar icon for start debugging.
	*
	* Defaults: `{"dark":"#89D185","light":"#388A34","hcDark":"#89D185","hcLight":"#388A34"}`.
	*/
	'debugIcon.startForeground': T;
	/**
	* Background color for the highlight of line at the top stack frame position.
	*
	* Defaults: `{"dark":"#ffff0033","light":"#ffff6673","hcDark":"#ffff0033","hcLight":"#ffff6673"}`.
	*/
	'editor.stackFrameHighlightBackground': T;
	/**
	* Background color for the highlight of line at focused stack frame position.
	*
	* Defaults: `{"dark":"#7abd7a4d","light":"#cee7ce73","hcDark":"#7abd7a4d","hcLight":"#cee7ce73"}`.
	*/
	'editor.focusedStackFrameHighlightBackground': T;
	/**
	* The foreground color for a section header or active title.
	*
	* Defaults: `{"light":"#444444","dark":"#e7e7e7","hcDark":"#ffffff","hcLight":"#292929"}`.
	*/
	'settings.headerForeground': T;
	/**
	* The foreground color for a section header or hovered title.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"settings.headerForeground","factor":0.7}`.
	*/
	'settings.settingsHeaderHoverForeground'?: T;
	/**
	* The color of the modified setting indicator.
	*
	* Defaults: `{"light":{"rgba":{"r":102,"g":175,"b":224,"a":1}},"dark":{"rgba":{"r":12,"g":125,"b":157,"a":1}},"hcDark":{"rgba":{"r":0,"g":73,"b":122,"a":1}},"hcLight":{"rgba":{"r":102,"g":175,"b":224,"a":1}}}`.
	*/
	'settings.modifiedItemIndicator': T;
	/**
	* The color of the header container border.
	*
	* Optional.
	*
	* Defaults: `"panel.border"`.
	*/
	'settings.headerBorder'?: T;
	/**
	* The color of the Settings editor splitview sash border.
	*
	* Optional.
	*
	* Defaults: `"panel.border"`.
	*/
	'settings.sashBorder'?: T;
	/**
	* Settings editor dropdown background.
	*
	* Optional.
	*
	* Defaults: `"dropdown.background"`.
	*/
	'settings.dropdownBackground'?: T;
	/**
	* Settings editor dropdown foreground.
	*
	* Optional.
	*
	* Defaults: `"dropdown.foreground"`.
	*/
	'settings.dropdownForeground'?: T;
	/**
	* Settings editor dropdown border.
	*
	* Optional.
	*
	* Defaults: `"dropdown.border"`.
	*/
	'settings.dropdownBorder'?: T;
	/**
	* Settings editor dropdown list border. This surrounds the options and separates the options from the description.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.border"`.
	*/
	'settings.dropdownListBorder'?: T;
	/**
	* Settings editor checkbox background.
	*
	* Optional.
	*
	* Defaults: `"checkbox.background"`.
	*/
	'settings.checkboxBackground'?: T;
	/**
	* Settings editor checkbox foreground.
	*
	* Optional.
	*
	* Defaults: `"checkbox.foreground"`.
	*/
	'settings.checkboxForeground'?: T;
	/**
	* Settings editor checkbox border.
	*
	* Optional.
	*
	* Defaults: `"checkbox.border"`.
	*/
	'settings.checkboxBorder'?: T;
	/**
	* Settings editor text input box background.
	*
	* Optional.
	*
	* Defaults: `"input.background"`.
	*/
	'settings.textInputBackground'?: T;
	/**
	* Settings editor text input box foreground.
	*
	* Optional.
	*
	* Defaults: `"input.foreground"`.
	*/
	'settings.textInputForeground'?: T;
	/**
	* Settings editor text input box border.
	*
	* Optional.
	*
	* Defaults: `"input.border"`.
	*/
	'settings.textInputBorder'?: T;
	/**
	* Settings editor number input box background.
	*
	* Optional.
	*
	* Defaults: `"input.background"`.
	*/
	'settings.numberInputBackground'?: T;
	/**
	* Settings editor number input box foreground.
	*
	* Optional.
	*
	* Defaults: `"input.foreground"`.
	*/
	'settings.numberInputForeground'?: T;
	/**
	* Settings editor number input box border.
	*
	* Optional.
	*
	* Defaults: `"input.border"`.
	*/
	'settings.numberInputBorder'?: T;
	/**
	* The background color of a settings row when focused.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"list.hoverBackground","factor":0.6},"light":{"op":2,"value":"list.hoverBackground","factor":0.6},"hcDark":null,"hcLight":null}`.
	*/
	'settings.focusedRowBackground'?: T;
	/**
	* The background color of a settings row when hovered.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"list.hoverBackground","factor":0.3},"light":{"op":2,"value":"list.hoverBackground","factor":0.3},"hcDark":null,"hcLight":null}`.
	*/
	'settings.rowHoverBackground'?: T;
	/**
	* The color of the row's top and bottom border when the row is focused.
	*
	* Optional.
	*
	* Defaults: `"focusBorder"`.
	*/
	'settings.focusedRowBorder'?: T;
	/**
	* Color for the 'failed' icon in the test explorer.
	*
	* Defaults: `{"dark":"#f14c4c","light":"#f14c4c","hcDark":"#f14c4c","hcLight":"#B5200D"}`.
	*/
	'testing.iconFailed': T;
	/**
	* Color for the 'Errored' icon in the test explorer.
	*
	* Defaults: `{"dark":"#f14c4c","light":"#f14c4c","hcDark":"#f14c4c","hcLight":"#B5200D"}`.
	*/
	'testing.iconErrored': T;
	/**
	* Color for the 'passed' icon in the test explorer.
	*
	* Defaults: `{"dark":"#73c991","light":"#73c991","hcDark":"#73c991","hcLight":"#007100"}`.
	*/
	'testing.iconPassed': T;
	/**
	* Color for 'run' icons in the editor.
	*
	* Optional.
	*
	* Defaults: `"testing.iconPassed"`.
	*/
	'testing.runAction'?: T;
	/**
	* Color for the 'Queued' icon in the test explorer.
	*
	* Defaults: `"#cca700"`.
	*/
	'testing.iconQueued': T;
	/**
	* Color for the 'Unset' icon in the test explorer.
	*
	* Defaults: `"#848484"`.
	*/
	'testing.iconUnset': T;
	/**
	* Color for the 'Skipped' icon in the test explorer.
	*
	* Defaults: `"#848484"`.
	*/
	'testing.iconSkipped': T;
	/**
	* Color of the peek view borders and arrow.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editorError.foreground","light":"editorError.foreground","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'testing.peekBorder'?: T;
	/**
	* Color of the peek view borders and arrow when peeking a logged message.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editorInfo.foreground","light":"editorInfo.foreground","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'testing.messagePeekBorder'?: T;
	/**
	* Color of the peek view borders and arrow.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"editorError.foreground","factor":0.1},"light":{"op":2,"value":"editorError.foreground","factor":0.1},"hcDark":null,"hcLight":null}`.
	*/
	'testing.peekHeaderBackground'?: T;
	/**
	* Color of the peek view borders and arrow when peeking a logged message.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"editorInfo.foreground","factor":0.1},"light":{"op":2,"value":"editorInfo.foreground","factor":0.1},"hcDark":null,"hcLight":null}`.
	*/
	'testing.messagePeekHeaderBackground'?: T;
	/**
	* Background color of text that was covered.
	*
	* Optional.
	*
	* Defaults: `{"dark":"diffEditor.insertedTextBackground","light":"diffEditor.insertedTextBackground","hcDark":null,"hcLight":null}`.
	*/
	'testing.coveredBackground'?: T;
	/**
	* Border color of text that was covered.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"testing.coveredBackground","factor":0.75},"light":{"op":2,"value":"testing.coveredBackground","factor":0.75},"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'testing.coveredBorder'?: T;
	/**
	* Gutter color of regions where code was covered.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"diffEditor.insertedTextBackground","factor":0.6},"light":{"op":2,"value":"diffEditor.insertedTextBackground","factor":0.6},"hcDark":"charts.green","hcLight":"charts.green"}`.
	*/
	'testing.coveredGutterBackground'?: T;
	/**
	* Background of the widget shown for an uncovered branch.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":3,"value":{"op":2,"value":"diffEditor.removedTextBackground","factor":2},"background":"editor.background"},"light":{"op":3,"value":{"op":2,"value":"diffEditor.removedTextBackground","factor":2},"background":"editor.background"},"hcDark":null,"hcLight":null}`.
	*/
	'testing.uncoveredBranchBackground'?: T;
	/**
	* Background color of text that was not covered.
	*
	* Optional.
	*
	* Defaults: `{"dark":"diffEditor.removedTextBackground","light":"diffEditor.removedTextBackground","hcDark":null,"hcLight":null}`.
	*/
	'testing.uncoveredBackground'?: T;
	/**
	* Border color of text that was not covered.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"testing.uncoveredBackground","factor":0.75},"light":{"op":2,"value":"testing.uncoveredBackground","factor":0.75},"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'testing.uncoveredBorder'?: T;
	/**
	* Gutter color of regions where code not covered.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"diffEditor.removedTextBackground","factor":1.5},"light":{"op":2,"value":"diffEditor.removedTextBackground","factor":1.5},"hcDark":"charts.red","hcLight":"charts.red"}`.
	*/
	'testing.uncoveredGutterBackground'?: T;
	/**
	* Background for the badge indicating execution count
	*
	* Optional.
	*
	* Defaults: `"badge.background"`.
	*/
	'testing.coverCountBadgeBackground'?: T;
	/**
	* Foreground for the badge indicating execution count
	*
	* Optional.
	*
	* Defaults: `"badge.foreground"`.
	*/
	'testing.coverCountBadgeForeground'?: T;
	/**
	* Text color of test error messages shown inline in the editor.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editorError.foreground","light":"editorError.foreground","hcDark":"editor.foreground","hcLight":"editor.foreground"}`.
	*/
	'testing.message.error.decorationForeground'?: T;
	/**
	* Margin color beside error messages shown inline in the editor.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":0,"b":0,"a":0.2}},"light":{"rgba":{"r":255,"g":0,"b":0,"a":0.2}},"hcDark":null,"hcLight":null}`.
	*/
	'testing.message.error.lineBackground': T;
	/**
	* Text color of test info messages shown inline in the editor.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"editor.foreground","factor":0.5}`.
	*/
	'testing.message.info.decorationForeground'?: T;
	/**
	* Margin color beside info messages shown inline in the editor.
	*
	* Defaults: `null`.
	*/
	'testing.message.info.lineBackground': T;
	/**
	* Retired color for the 'Errored' icon in the test explorer.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"testing.iconErrored","factor":0.7}`.
	*/
	'testing.iconErrored.retired'?: T;
	/**
	* Retired color for the 'failed' icon in the test explorer.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"testing.iconFailed","factor":0.7}`.
	*/
	'testing.iconFailed.retired'?: T;
	/**
	* Retired color for the 'passed' icon in the test explorer.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"testing.iconPassed","factor":0.7}`.
	*/
	'testing.iconPassed.retired'?: T;
	/**
	* Retired color for the 'Queued' icon in the test explorer.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"testing.iconQueued","factor":0.7}`.
	*/
	'testing.iconQueued.retired'?: T;
	/**
	* Retired color for the 'Unset' icon in the test explorer.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"testing.iconUnset","factor":0.7}`.
	*/
	'testing.iconUnset.retired'?: T;
	/**
	* Retired color for the 'Skipped' icon in the test explorer.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"testing.iconSkipped","factor":0.7}`.
	*/
	'testing.iconSkipped.retired'?: T;
	/**
	* The background color of the terminal, this allows coloring the terminal differently to the panel.
	*
	* Defaults: `null`.
	*/
	'terminal.background': T;
	/**
	* The foreground color of the terminal.
	*
	* Defaults: `{"light":"#333333","dark":"#CCCCCC","hcDark":"#FFFFFF","hcLight":"#292929"}`.
	*/
	'terminal.foreground': T;
	/**
	* The foreground color of the terminal cursor.
	*
	* Defaults: `null`.
	*/
	'terminalCursor.foreground': T;
	/**
	* The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
	*
	* Defaults: `null`.
	*/
	'terminalCursor.background': T;
	/**
	* The selection background color of the terminal.
	*
	* Optional.
	*
	* Defaults: `"editor.selectionBackground"`.
	*/
	'terminal.selectionBackground'?: T;
	/**
	* The selection background color of the terminal when it does not have focus.
	*
	* Optional.
	*
	* Defaults: `{"light":{"op":2,"value":"terminal.selectionBackground","factor":0.5},"dark":{"op":2,"value":"terminal.selectionBackground","factor":0.5},"hcDark":{"op":2,"value":"terminal.selectionBackground","factor":0.7},"hcLight":{"op":2,"value":"terminal.selectionBackground","factor":0.5}}`.
	*/
	'terminal.inactiveSelectionBackground'?: T;
	/**
	* The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied.
	*
	* Optional.
	*
	* Defaults: `{"light":null,"dark":null,"hcDark":"#000000","hcLight":"#ffffff"}`.
	*/
	'terminal.selectionForeground'?: T;
	/**
	* The default terminal command decoration background color.
	*
	* Defaults: `{"light":"#00000040","dark":"#ffffff40","hcDark":"#ffffff80","hcLight":"#00000040"}`.
	*/
	'terminalCommandDecoration.defaultBackground': T;
	/**
	* The terminal command decoration background color for successful commands.
	*
	* Defaults: `{"dark":"#1B81A8","light":"#2090D3","hcDark":"#1B81A8","hcLight":"#007100"}`.
	*/
	'terminalCommandDecoration.successBackground': T;
	/**
	* The terminal command decoration background color for error commands.
	*
	* Defaults: `{"dark":"#F14C4C","light":"#E51400","hcDark":"#F14C4C","hcLight":"#B5200D"}`.
	*/
	'terminalCommandDecoration.errorBackground': T;
	/**
	* The overview ruler cursor color.
	*
	* Defaults: `"#A0A0A0CC"`.
	*/
	'terminalOverviewRuler.cursorForeground': T;
	/**
	* The color of the border that separates split panes within the terminal. This defaults to panel.border.
	*
	* Optional.
	*
	* Defaults: `"panel.border"`.
	*/
	'terminal.border'?: T;
	/**
	* Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editor.findMatchBackground","light":"editor.findMatchBackground","hcDark":null,"hcLight":"#0F4A85"}`.
	*/
	'terminal.findMatchBackground'?: T;
	/**
	* Border color of the other search matches in the terminal.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"editor.hoverHighlightBackground","factor":0.5}`.
	*/
	'terminal.hoverHighlightBackground'?: T;
	/**
	* Border color of the current search match in the terminal.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"#f38518","hcLight":"#0F4A85"}`.
	*/
	'terminal.findMatchBorder'?: T;
	/**
	* Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editor.findMatchHighlightBackground","light":"editor.findMatchHighlightBackground","hcDark":null,"hcLight":null}`.
	*/
	'terminal.findMatchHighlightBackground'?: T;
	/**
	* Border color of the other search matches in the terminal.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"#f38518","hcLight":"#0F4A85"}`.
	*/
	'terminal.findMatchHighlightBorder'?: T;
	/**
	* Overview ruler marker color for find matches in the terminal.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editorOverviewRuler.findMatchForeground","light":"editorOverviewRuler.findMatchForeground","hcDark":"#f38518","hcLight":"#0F4A85"}`.
	*/
	'terminalOverviewRuler.findMatchForeground'?: T;
	/**
	* Background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.
	*
	* Optional.
	*
	* Defaults: `"editorGroup.dropBackground"`.
	*/
	'terminal.dropBackground'?: T;
	/**
	* Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder.
	*
	* Optional.
	*
	* Defaults: `"tab.activeBorder"`.
	*/
	'terminal.tab.activeBorder'?: T;
	/**
	* Foreground color of the terminal initial hint.
	*
	* Defaults: `{"dark":"#ffffff56","light":"#0007","hcDark":null,"hcLight":null}`.
	*/
	'terminal.initialHintForeground': T;
	/**
	* The background color for changes.
	*
	* Defaults: `"#9bb95533"`.
	*/
	'mergeEditor.change.background': T;
	/**
	* The background color for word changes.
	*
	* Defaults: `{"dark":"#9ccc2c33","light":"#9ccc2c66","hcDark":"#9ccc2c33","hcLight":"#9ccc2c66"}`.
	*/
	'mergeEditor.change.word.background': T;
	/**
	* The background color for changes in base.
	*
	* Defaults: `{"dark":"#4B1818FF","light":"#FFCCCCFF","hcDark":"#4B1818FF","hcLight":"#FFCCCCFF"}`.
	*/
	'mergeEditor.changeBase.background': T;
	/**
	* The background color for word changes in base.
	*
	* Defaults: `{"dark":"#6F1313FF","light":"#FFA3A3FF","hcDark":"#6F1313FF","hcLight":"#FFA3A3FF"}`.
	*/
	'mergeEditor.changeBase.word.background': T;
	/**
	* The border color of unhandled unfocused conflicts.
	*
	* Defaults: `{"dark":"#ffa6007a","light":"#ffa600FF","hcDark":"#ffa6007a","hcLight":"#ffa6007a"}`.
	*/
	'mergeEditor.conflict.unhandledUnfocused.border': T;
	/**
	* The border color of unhandled focused conflicts.
	*
	* Defaults: `"#ffa600"`.
	*/
	'mergeEditor.conflict.unhandledFocused.border': T;
	/**
	* The border color of handled unfocused conflicts.
	*
	* Defaults: `"#86868649"`.
	*/
	'mergeEditor.conflict.handledUnfocused.border': T;
	/**
	* The border color of handled focused conflicts.
	*
	* Defaults: `"#c1c1c1cc"`.
	*/
	'mergeEditor.conflict.handledFocused.border': T;
	/**
	* The foreground color for changes in input 1.
	*
	* Defaults: `"#adaca8ee"`.
	*/
	'mergeEditor.conflict.handled.minimapOverViewRuler': T;
	/**
	* The foreground color for changes in input 1.
	*
	* Defaults: `"#fcba03FF"`.
	*/
	'mergeEditor.conflict.unhandled.minimapOverViewRuler': T;
	/**
	* The background of the "Conflicting Lines" text.
	*
	* Defaults: `"#ffea0047"`.
	*/
	'mergeEditor.conflictingLines.background': T;
	/**
	* The background color of decorations in input 1.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"merge.currentHeaderBackground","factor":0.4}`.
	*/
	'mergeEditor.conflict.input1.background'?: T;
	/**
	* The background color of decorations in input 2.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"merge.incomingHeaderBackground","factor":0.4}`.
	*/
	'mergeEditor.conflict.input2.background'?: T;
	/**
	* The background color of the sticky scroll overlay in the terminal.
	*
	* Defaults: `null`.
	*/
	'terminalStickyScroll.background': T;
	/**
	* The background color of the sticky scroll overlay in the terminal when hovered.
	*
	* Defaults: `{"dark":"#2A2D2E","light":"#F0F0F0","hcDark":"#E48B39","hcLight":"#0f4a85"}`.
	*/
	'terminalStickyScrollHover.background': T;
	/**
	* The border of the sticky scroll overlay in the terminal.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"#6fc3df","hcLight":"#0f4a85"}`.
	*/
	'terminalStickyScroll.border'?: T;
	/**
	* Background color for the embedded editors on the Interactive Playground.
	*
	* Defaults: `{"dark":{"rgba":{"r":0,"g":0,"b":0,"a":0.4}},"light":"#f4f4f4","hcDark":null,"hcLight":null}`.
	*/
	'walkThrough.embeddedEditorBackground': T;
	/**
	* Background color for the Welcome page.
	*
	* Defaults: `null`.
	*/
	'welcomePage.background': T;
	/**
	* Background color for the tiles on the Welcome page.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editorWidget.background","light":"editorWidget.background","hcDark":"#000","hcLight":"editorWidget.background"}`.
	*/
	'welcomePage.tileBackground'?: T;
	/**
	* Hover background color for the tiles on the Welcome.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":1,"value":"editorWidget.background","factor":0.2},"light":{"op":0,"value":"editorWidget.background","factor":0.1},"hcDark":null,"hcLight":null}`.
	*/
	'welcomePage.tileHoverBackground'?: T;
	/**
	* Border color for the tiles on the Welcome page.
	*
	* Defaults: `{"dark":"#ffffff1a","light":"#0000001a","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'welcomePage.tileBorder': T;
	/**
	* Foreground color for the Welcome page progress bars.
	*
	* Optional.
	*
	* Defaults: `"input.background"`.
	*/
	'welcomePage.progress.background'?: T;
	/**
	* Background color for the Welcome page progress bars.
	*
	* Optional.
	*
	* Defaults: `"textLink.foreground"`.
	*/
	'welcomePage.progress.foreground'?: T;
	/**
	* Foreground color of the heading of each walkthrough step
	*
	* Defaults: `{"light":"#000000","dark":"#ffffff","hcDark":null,"hcLight":null}`.
	*/
	'walkthrough.stepTitle.foreground': T;
	/**
	* The background color of the diff editor's header
	*
	* Defaults: `{"dark":"#262626","light":"tab.inactiveBackground","hcDark":"tab.inactiveBackground","hcLight":"tab.inactiveBackground"}`.
	*/
	'multiDiffEditor.headerBackground': T;
	/**
	* The background color of the multi file diff editor
	*
	* Optional.
	*
	* Defaults: `"editorBackground"`.
	*/
	'multiDiffEditor.background'?: T;
	/**
	* The border color of the multi file diff editor
	*
	* Defaults: `{"dark":"sideBarSectionHeader.border","light":"#cccccc","hcDark":"sideBarSectionHeader.border","hcLight":"#cccccc"}`.
	*/
	'multiDiffEditor.border': T;
	/**
	* The foreground color for array symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.arrayForeground'?: T;
	/**
	* The foreground color for boolean symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.booleanForeground'?: T;
	/**
	* The foreground color for class symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Defaults: `{"dark":"#EE9D28","light":"#D67E00","hcDark":"#EE9D28","hcLight":"#D67E00"}`.
	*/
	'symbolIcon.classForeground': T;
	/**
	* The foreground color for color symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.colorForeground'?: T;
	/**
	* The foreground color for constant symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.constantForeground'?: T;
	/**
	* The foreground color for constructor symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Defaults: `{"dark":"#B180D7","light":"#652D90","hcDark":"#B180D7","hcLight":"#652D90"}`.
	*/
	'symbolIcon.constructorForeground': T;
	/**
	* The foreground color for enumerator symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Defaults: `{"dark":"#EE9D28","light":"#D67E00","hcDark":"#EE9D28","hcLight":"#D67E00"}`.
	*/
	'symbolIcon.enumeratorForeground': T;
	/**
	* The foreground color for enumerator member symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Defaults: `{"dark":"#75BEFF","light":"#007ACC","hcDark":"#75BEFF","hcLight":"#007ACC"}`.
	*/
	'symbolIcon.enumeratorMemberForeground': T;
	/**
	* The foreground color for event symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Defaults: `{"dark":"#EE9D28","light":"#D67E00","hcDark":"#EE9D28","hcLight":"#D67E00"}`.
	*/
	'symbolIcon.eventForeground': T;
	/**
	* The foreground color for field symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Defaults: `{"dark":"#75BEFF","light":"#007ACC","hcDark":"#75BEFF","hcLight":"#007ACC"}`.
	*/
	'symbolIcon.fieldForeground': T;
	/**
	* The foreground color for file symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.fileForeground'?: T;
	/**
	* The foreground color for folder symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.folderForeground'?: T;
	/**
	* The foreground color for function symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Defaults: `{"dark":"#B180D7","light":"#652D90","hcDark":"#B180D7","hcLight":"#652D90"}`.
	*/
	'symbolIcon.functionForeground': T;
	/**
	* The foreground color for interface symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Defaults: `{"dark":"#75BEFF","light":"#007ACC","hcDark":"#75BEFF","hcLight":"#007ACC"}`.
	*/
	'symbolIcon.interfaceForeground': T;
	/**
	* The foreground color for key symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.keyForeground'?: T;
	/**
	* The foreground color for keyword symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.keywordForeground'?: T;
	/**
	* The foreground color for method symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Defaults: `{"dark":"#B180D7","light":"#652D90","hcDark":"#B180D7","hcLight":"#652D90"}`.
	*/
	'symbolIcon.methodForeground': T;
	/**
	* The foreground color for module symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.moduleForeground'?: T;
	/**
	* The foreground color for namespace symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.namespaceForeground'?: T;
	/**
	* The foreground color for null symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.nullForeground'?: T;
	/**
	* The foreground color for number symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.numberForeground'?: T;
	/**
	* The foreground color for object symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.objectForeground'?: T;
	/**
	* The foreground color for operator symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.operatorForeground'?: T;
	/**
	* The foreground color for package symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.packageForeground'?: T;
	/**
	* The foreground color for property symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.propertyForeground'?: T;
	/**
	* The foreground color for reference symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.referenceForeground'?: T;
	/**
	* The foreground color for snippet symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.snippetForeground'?: T;
	/**
	* The foreground color for string symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.stringForeground'?: T;
	/**
	* The foreground color for struct symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.structForeground'?: T;
	/**
	* The foreground color for text symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.textForeground'?: T;
	/**
	* The foreground color for type parameter symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.typeParameterForeground'?: T;
	/**
	* The foreground color for unit symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'symbolIcon.unitForeground'?: T;
	/**
	* The foreground color for variable symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	*
	* Defaults: `{"dark":"#75BEFF","light":"#007ACC","hcDark":"#75BEFF","hcLight":"#007ACC"}`.
	*/
	'symbolIcon.variableForeground': T;
	/**
	* Foreground color for the labels in the editor watermark.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"editor.foreground","factor":0.6},"light":{"op":2,"value":"editor.foreground","factor":0.68},"hcDark":"editor.foreground","hcLight":"editor.foreground"}`.
	*/
	'editorWatermark.foreground'?: T;
	/**
	* Foreground color of the placeholder text in the editor.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editorGhostText.foreground","light":"editorGhostText.foreground","hcDark":"editorGhostText.foreground","hcLight":"editorGhostText.foreground"}`.
	*/
	'editor.placeholder.foreground'?: T;
	/**
	* Button background color for extension actions.
	*
	* Optional.
	*
	* Defaults: `{"dark":"button.background","light":"button.background","hcDark":null,"hcLight":null}`.
	*/
	'extensionButton.background'?: T;
	/**
	* Button foreground color for extension actions.
	*
	* Optional.
	*
	* Defaults: `{"dark":"button.foreground","light":"button.foreground","hcDark":null,"hcLight":null}`.
	*/
	'extensionButton.foreground'?: T;
	/**
	* Button background hover color for extension actions.
	*
	* Optional.
	*
	* Defaults: `{"dark":"button.hoverBackground","light":"button.hoverBackground","hcDark":null,"hcLight":null}`.
	*/
	'extensionButton.hoverBackground'?: T;
	/**
	* Button separator color for extension actions
	*
	* Optional.
	*
	* Defaults: `"button.separator"`.
	*/
	'extensionButton.separator'?: T;
	/**
	* Button background color for extension actions that stand out (e.g. install button).
	*
	* Optional.
	*
	* Defaults: `{"dark":"button.background","light":"button.background","hcDark":null,"hcLight":null}`.
	*/
	'extensionButton.prominentBackground'?: T;
	/**
	* Button foreground color for extension actions that stand out (e.g. install button).
	*
	* Optional.
	*
	* Defaults: `{"dark":"button.foreground","light":"button.foreground","hcDark":null,"hcLight":null}`.
	*/
	'extensionButton.prominentForeground'?: T;
	/**
	* Button background hover color for extension actions that stand out (e.g. install button).
	*
	* Optional.
	*
	* Defaults: `{"dark":"button.hoverBackground","light":"button.hoverBackground","hcDark":null,"hcLight":null}`.
	*/
	'extensionButton.prominentHoverBackground'?: T;
	/**
	* The icon color for extension ratings.
	*
	* Defaults: `{"light":"#DF6100","dark":"#FF8E00","hcDark":"#FF8E00","hcLight":"textLink.foreground"}`.
	*/
	'extensionIcon.starForeground': T;
	/**
	* The icon color for extension verified publisher.
	*
	* Optional.
	*
	* Defaults: `"textLink.foreground"`.
	*/
	'extensionIcon.verifiedForeground'?: T;
	/**
	* The icon color for pre-release extension.
	*
	* Defaults: `{"dark":"#1d9271","light":"#1d9271","hcDark":"#1d9271","hcLight":"textLink.foreground"}`.
	*/
	'extensionIcon.preReleaseForeground': T;
	/**
	* The icon color for extension sponsor.
	*
	* Defaults: `{"light":"#B51E78","dark":"#D758B3","hcDark":null,"hcLight":"#B51E78"}`.
	*/
	'extensionIcon.sponsorForeground': T;
	/**
	* Background color for toggled action items in action bar.
	*
	* Optional.
	*
	* Defaults: `"inputOption.activeBackground"`.
	*/
	'actionBar.toggledBackground'?: T;
	/**
	* The color of the icon for a port that has an associated running process.
	*
	* Optional.
	*
	* Defaults: `"statusBarItem.remoteBackground"`.
	*/
	'ports.iconRunningProcessForeground'?: T;
	/**
	* Foreground color of the active item in the parameter hint.
	*
	* Optional.
	*
	* Defaults: `"list.highlightForeground"`.
	*/
	'editorHoverWidget.highlightForeground'?: T;
	/**
	* Overview ruler marker color for matching brackets.
	*
	* Defaults: `"#A0A0A0"`.
	*/
	'editorOverviewRuler.bracketMatchForeground': T;
	/**
	* Background color when the editor auto renames on type.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":0,"b":0,"a":0.3}},"light":{"rgba":{"r":255,"g":0,"b":0,"a":0.3}},"hcDark":{"rgba":{"r":255,"g":0,"b":0,"a":0.3}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'editor.linkedEditingBackground': T;
	/**
	* The border color for text that got moved in the diff editor.
	*
	* Defaults: `"#8b8b8b9c"`.
	*/
	'diffEditor.move.border': T;
	/**
	* The active border color for text that got moved in the diff editor.
	*
	* Defaults: `"#FFA500"`.
	*/
	'diffEditor.moveActive.border': T;
	/**
	* The color of the shadow around unchanged region widgets.
	*
	* Defaults: `{"dark":"#000000","light":"#737373BF","hcDark":"#000000","hcLight":"#737373BF"}`.
	*/
	'diffEditor.unchangedRegionShadow': T;
	/**
	* Background color behind folded ranges. The color must not be opaque so as not to hide underlying decorations.
	*
	* Optional.
	*
	* Defaults: `{"light":{"op":2,"value":"editor.selectionBackground","factor":0.3},"dark":{"op":2,"value":"editor.selectionBackground","factor":0.3},"hcDark":null,"hcLight":null}`.
	*/
	'editor.foldBackground'?: T;
	/**
	* Color of the collapsed text after the first line of a folded range.
	*
	* Defaults: `{"light":"#808080","dark":"#808080","hcDark":null,"hcLight":null}`.
	*/
	'editor.foldPlaceholderForeground': T;
	/**
	* Color of the folding control in the editor gutter.
	*
	* Optional.
	*
	* Defaults: `"icon.foreground"`.
	*/
	'editorGutter.foldingControlForeground'?: T;
	/**
	* Background color of a symbol during read-access, like reading a variable. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"dark":"#575757B8","light":"#57575740","hcDark":null,"hcLight":null}`.
	*/
	'editor.wordHighlightBackground': T;
	/**
	* Background color of a symbol during write-access, like writing to a variable. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `{"dark":"#004972B8","light":"#0e639c40","hcDark":null,"hcLight":null}`.
	*/
	'editor.wordHighlightStrongBackground': T;
	/**
	* Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
	*
	* Optional.
	*
	* Defaults: `"editor.wordHighlightBackground"`.
	*/
	'editor.wordHighlightTextBackground'?: T;
	/**
	* Border color of a symbol during read-access, like reading a variable.
	*
	* Optional.
	*
	* Defaults: `{"light":null,"dark":null,"hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'editor.wordHighlightBorder'?: T;
	/**
	* Border color of a symbol during write-access, like writing to a variable.
	*
	* Optional.
	*
	* Defaults: `{"light":null,"dark":null,"hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'editor.wordHighlightStrongBorder'?: T;
	/**
	* Border color of a textual occurrence for a symbol.
	*
	* Optional.
	*
	* Defaults: `"editor.wordHighlightBorder"`.
	*/
	'editor.wordHighlightTextBorder'?: T;
	/**
	* Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `"#A0A0A0CC"`.
	*/
	'editorOverviewRuler.wordHighlightForeground': T;
	/**
	* Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
	*
	* Defaults: `"#C0A0C0CC"`.
	*/
	'editorOverviewRuler.wordHighlightStrongForeground': T;
	/**
	* Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
	*
	* Optional.
	*
	* Defaults: `"editorOverviewRuler.selectionHighlightForeground"`.
	*/
	'editorOverviewRuler.wordHighlightTextForeground'?: T;
	/**
	* Exception widget border color.
	*
	* Defaults: `"#a31515"`.
	*/
	'debugExceptionWidget.border': T;
	/**
	* Exception widget background color.
	*
	* Defaults: `{"dark":"#420b0d","light":"#f1dfde","hcDark":"#420b0d","hcLight":"#f1dfde"}`.
	*/
	'debugExceptionWidget.background': T;
	/**
	* Border color of the sash border.
	*
	* Defaults: `{"dark":"#454545","light":"#C8C8C8","hcDark":"#6FC3DF","hcLight":"#0F4A85"}`.
	*/
	'simpleFindWidget.sashBorder': T;
	/**
	* Editor gutter decoration color for commenting ranges. This color should be opaque.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":3,"value":"list.inactiveSelectionBackground","background":"editor.background"},"light":{"op":0,"value":{"op":3,"value":"list.inactiveSelectionBackground","background":"editor.background"},"factor":0.05},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":{"rgba":{"r":0,"g":0,"b":0,"a":1}}}`.
	*/
	'editorGutter.commentRangeForeground'?: T;
	/**
	* Editor overview ruler decoration color for resolved comments. This color should be opaque.
	*
	* Optional.
	*
	* Defaults: `"editorGutter.commentRangeForeground"`.
	*/
	'editorOverviewRuler.commentForeground'?: T;
	/**
	* Editor overview ruler decoration color for unresolved comments. This color should be opaque.
	*
	* Optional.
	*
	* Defaults: `"editorOverviewRuler.commentForeground"`.
	*/
	'editorOverviewRuler.commentUnresolvedForeground'?: T;
	/**
	* Editor gutter decoration color for commenting glyphs.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editor.foreground","light":"editor.foreground","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'editorGutter.commentGlyphForeground'?: T;
	/**
	* Editor gutter decoration color for commenting glyphs for unresolved comment threads.
	*
	* Optional.
	*
	* Defaults: `"editorGutter.commentGlyphForeground"`.
	*/
	'editorGutter.commentUnresolvedGlyphForeground'?: T;
	/**
	* Background color of the peek view title area.
	*
	* Defaults: `{"dark":"#252526","light":"#F3F3F3","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'peekViewTitle.background': T;
	/**
	* Color of the peek view title.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"light":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"editor.foreground"}`.
	*/
	'peekViewTitleLabel.foreground': T;
	/**
	* Color of the peek view title info.
	*
	* Defaults: `{"dark":"#ccccccb3","light":"#616161","hcDark":"#FFFFFF99","hcLight":"#292929"}`.
	*/
	'peekViewTitleDescription.foreground': T;
	/**
	* Color of the peek view borders and arrow.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editorInfo.foreground","light":"editorInfo.foreground","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'peekView.border'?: T;
	/**
	* Background color of the peek view result list.
	*
	* Defaults: `{"dark":"#252526","light":"#F3F3F3","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'peekViewResult.background': T;
	/**
	* Foreground color for line nodes in the peek view result list.
	*
	* Defaults: `{"dark":"#bbbbbb","light":"#646465","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"editor.foreground"}`.
	*/
	'peekViewResult.lineForeground': T;
	/**
	* Foreground color for file nodes in the peek view result list.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"light":"#1E1E1E","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"editor.foreground"}`.
	*/
	'peekViewResult.fileForeground': T;
	/**
	* Background color of the selected entry in the peek view result list.
	*
	* Defaults: `{"dark":"#3399ff33","light":"#3399ff33","hcDark":null,"hcLight":null}`.
	*/
	'peekViewResult.selectionBackground': T;
	/**
	* Foreground color of the selected entry in the peek view result list.
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"light":"#6C6C6C","hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"},"hcLight":"editor.foreground"}`.
	*/
	'peekViewResult.selectionForeground': T;
	/**
	* Background color of the peek view editor.
	*
	* Defaults: `{"dark":"#001F33","light":"#F2F8FC","hcDark":{"rgba":{"r":0,"g":0,"b":0,"a":1}},"hcLight":{"rgba":{"r":255,"g":255,"b":255,"a":1},"_toString":"#ffffff"}}`.
	*/
	'peekViewEditor.background': T;
	/**
	* Background color of the gutter in the peek view editor.
	*
	* Optional.
	*
	* Defaults: `"peekViewEditor.background"`.
	*/
	'peekViewEditorGutter.background'?: T;
	/**
	* Background color of sticky scroll in the peek view editor.
	*
	* Optional.
	*
	* Defaults: `"peekViewEditor.background"`.
	*/
	'peekViewEditorStickyScroll.background'?: T;
	/**
	* Match highlight color in the peek view result list.
	*
	* Defaults: `{"dark":"#ea5c004d","light":"#ea5c004d","hcDark":null,"hcLight":null}`.
	*/
	'peekViewResult.matchHighlightBackground': T;
	/**
	* Match highlight color in the peek view editor.
	*
	* Defaults: `{"dark":"#ff8f0099","light":"#f5d802de","hcDark":null,"hcLight":null}`.
	*/
	'peekViewEditor.matchHighlightBackground': T;
	/**
	* Match highlight border in the peek view editor.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"contrastActiveBorder","hcLight":"contrastActiveBorder"}`.
	*/
	'peekViewEditor.matchHighlightBorder'?: T;
	/**
	* Editor marker navigation widget error color.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":4,"values":["editorError.foreground","editorError.border"]},"light":{"op":4,"values":["editorError.foreground","editorError.border"]},"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'editorMarkerNavigationError.background'?: T;
	/**
	* Editor marker navigation widget error heading background.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"editorMarkerNavigationError.background","factor":0.1},"light":{"op":2,"value":"editorMarkerNavigationError.background","factor":0.1},"hcDark":null,"hcLight":null}`.
	*/
	'editorMarkerNavigationError.headerBackground'?: T;
	/**
	* Editor marker navigation widget warning color.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":4,"values":["editorWarning.foreground","editorWarning.border"]},"light":{"op":4,"values":["editorWarning.foreground","editorWarning.border"]},"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'editorMarkerNavigationWarning.background'?: T;
	/**
	* Editor marker navigation widget warning heading background.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"editorMarkerNavigationWarning.background","factor":0.1},"light":{"op":2,"value":"editorMarkerNavigationWarning.background","factor":0.1},"hcDark":"#0C141F","hcLight":{"op":2,"value":"editorMarkerNavigationWarning.background","factor":0.2}}`.
	*/
	'editorMarkerNavigationWarning.headerBackground'?: T;
	/**
	* Editor marker navigation widget info color.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":4,"values":["editorInfo.foreground","editorInfo.border"]},"light":{"op":4,"values":["editorInfo.foreground","editorInfo.border"]},"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'editorMarkerNavigationInfo.background'?: T;
	/**
	* Editor marker navigation widget info heading background.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"editorMarkerNavigationInfo.background","factor":0.1},"light":{"op":2,"value":"editorMarkerNavigationInfo.background","factor":0.1},"hcDark":null,"hcLight":null}`.
	*/
	'editorMarkerNavigationInfo.headerBackground'?: T;
	/**
	* Editor marker navigation widget background.
	*
	* Optional.
	*
	* Defaults: `"editor.background"`.
	*/
	'editorMarkerNavigation.background'?: T;
	/**
	* Icon color for resolved comments.
	*
	* Optional.
	*
	* Defaults: `{"dark":"disabledForeground","light":"disabledForeground","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'commentsView.resolvedIcon'?: T;
	/**
	* Icon color for unresolved comments.
	*
	* Optional.
	*
	* Defaults: `{"dark":"list.focusOutline","light":"list.focusOutline","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'commentsView.unresolvedIcon'?: T;
	/**
	* Background color for comment reply input box.
	*
	* Optional.
	*
	* Defaults: `"peekViewTitle.background"`.
	*/
	'editorCommentsWidget.replyInputBackground'?: T;
	/**
	* Color of borders and arrow for resolved comments.
	*
	* Optional.
	*
	* Defaults: `{"dark":"commentsView.resolvedIcon","light":"commentsView.resolvedIcon","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'editorCommentsWidget.resolvedBorder'?: T;
	/**
	* Color of borders and arrow for unresolved comments.
	*
	* Optional.
	*
	* Defaults: `{"dark":"commentsView.unresolvedIcon","light":"commentsView.unresolvedIcon","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'editorCommentsWidget.unresolvedBorder'?: T;
	/**
	* Color of background for comment ranges.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"editorCommentsWidget.unresolvedBorder","factor":0.1}`.
	*/
	'editorCommentsWidget.rangeBackground'?: T;
	/**
	* Color of background for currently selected or hovered comment range.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"editorCommentsWidget.unresolvedBorder","factor":0.1}`.
	*/
	'editorCommentsWidget.rangeActiveBackground'?: T;
	/**
	* Background color of the suggest widget.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.background"`.
	*/
	'editorSuggestWidget.background'?: T;
	/**
	* Border color of the suggest widget.
	*
	* Optional.
	*
	* Defaults: `"editorWidget.border"`.
	*/
	'editorSuggestWidget.border'?: T;
	/**
	* Foreground color of the suggest widget.
	*
	* Optional.
	*
	* Defaults: `"editor.foreground"`.
	*/
	'editorSuggestWidget.foreground'?: T;
	/**
	* Foreground color of the selected entry in the suggest widget.
	*
	* Optional.
	*
	* Defaults: `"quickInputList.focusForeground"`.
	*/
	'editorSuggestWidget.selectedForeground'?: T;
	/**
	* Icon foreground color of the selected entry in the suggest widget.
	*
	* Optional.
	*
	* Defaults: `"quickInputList.focusIconForeground"`.
	*/
	'editorSuggestWidget.selectedIconForeground'?: T;
	/**
	* Background color of the selected entry in the suggest widget.
	*
	* Optional.
	*
	* Defaults: `"quickInputList.focusBackground"`.
	*/
	'editorSuggestWidget.selectedBackground'?: T;
	/**
	* Color of the match highlights in the suggest widget.
	*
	* Optional.
	*
	* Defaults: `"list.highlightForeground"`.
	*/
	'editorSuggestWidget.highlightForeground'?: T;
	/**
	* Color of the match highlights in the suggest widget when an item is focused.
	*
	* Optional.
	*
	* Defaults: `"list.focusHighlightForeground"`.
	*/
	'editorSuggestWidget.focusHighlightForeground'?: T;
	/**
	* Foreground color of the suggest widget status.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"editorSuggestWidget.foreground","factor":0.5}`.
	*/
	'editorSuggestWidgetStatus.foreground'?: T;
	/**
	* Icon color for breakpoints.
	*
	* Defaults: `"#E51400"`.
	*/
	'debugIcon.breakpointForeground': T;
	/**
	* Icon color for disabled breakpoints.
	*
	* Defaults: `"#848484"`.
	*/
	'debugIcon.breakpointDisabledForeground': T;
	/**
	* Icon color for unverified breakpoints.
	*
	* Defaults: `"#848484"`.
	*/
	'debugIcon.breakpointUnverifiedForeground': T;
	/**
	* Icon color for the current breakpoint stack frame.
	*
	* Defaults: `{"dark":"#FFCC00","light":"#BE8700","hcDark":"#FFCC00","hcLight":"#BE8700"}`.
	*/
	'debugIcon.breakpointCurrentStackframeForeground': T;
	/**
	* Icon color for all breakpoint stack frames.
	*
	* Defaults: `"#89D185"`.
	*/
	'debugIcon.breakpointStackframeForeground': T;
	/**
	* Background color for the keyboard shortcuts table header.
	*
	* Optional.
	*
	* Defaults: `"tree.tableOddRowsBackground"`.
	*/
	'keybindingTable.headerBackground'?: T;
	/**
	* Background color for the keyboard shortcuts table alternating rows.
	*
	* Optional.
	*
	* Defaults: `"tree.tableOddRowsBackground"`.
	*/
	'keybindingTable.rowsBackground'?: T;
	/**
	* 'Black' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#000000","dark":"#000000","hcDark":"#000000","hcLight":"#292929"}`.
	*/
	'terminal.ansiBlack': T;
	/**
	* 'Red' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#cd3131","dark":"#cd3131","hcDark":"#cd0000","hcLight":"#cd3131"}`.
	*/
	'terminal.ansiRed': T;
	/**
	* 'Green' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#107C10","dark":"#0DBC79","hcDark":"#00cd00","hcLight":"#136C13"}`.
	*/
	'terminal.ansiGreen': T;
	/**
	* 'Yellow' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#949800","dark":"#e5e510","hcDark":"#cdcd00","hcLight":"#949800"}`.
	*/
	'terminal.ansiYellow': T;
	/**
	* 'Blue' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#0451a5","dark":"#2472c8","hcDark":"#0000ee","hcLight":"#0451a5"}`.
	*/
	'terminal.ansiBlue': T;
	/**
	* 'Magenta' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#bc05bc","dark":"#bc3fbc","hcDark":"#cd00cd","hcLight":"#bc05bc"}`.
	*/
	'terminal.ansiMagenta': T;
	/**
	* 'Cyan' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#0598bc","dark":"#11a8cd","hcDark":"#00cdcd","hcLight":"#0598bc"}`.
	*/
	'terminal.ansiCyan': T;
	/**
	* 'White' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#555555","dark":"#e5e5e5","hcDark":"#e5e5e5","hcLight":"#555555"}`.
	*/
	'terminal.ansiWhite': T;
	/**
	* 'BrightBlack' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#666666","dark":"#666666","hcDark":"#7f7f7f","hcLight":"#666666"}`.
	*/
	'terminal.ansiBrightBlack': T;
	/**
	* 'BrightRed' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#cd3131","dark":"#f14c4c","hcDark":"#ff0000","hcLight":"#cd3131"}`.
	*/
	'terminal.ansiBrightRed': T;
	/**
	* 'BrightGreen' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#14CE14","dark":"#23d18b","hcDark":"#00ff00","hcLight":"#00bc00"}`.
	*/
	'terminal.ansiBrightGreen': T;
	/**
	* 'BrightYellow' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#b5ba00","dark":"#f5f543","hcDark":"#ffff00","hcLight":"#b5ba00"}`.
	*/
	'terminal.ansiBrightYellow': T;
	/**
	* 'BrightBlue' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#0451a5","dark":"#3b8eea","hcDark":"#5c5cff","hcLight":"#0451a5"}`.
	*/
	'terminal.ansiBrightBlue': T;
	/**
	* 'BrightMagenta' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#bc05bc","dark":"#d670d6","hcDark":"#ff00ff","hcLight":"#bc05bc"}`.
	*/
	'terminal.ansiBrightMagenta': T;
	/**
	* 'BrightCyan' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#0598bc","dark":"#29b8db","hcDark":"#00ffff","hcLight":"#0598bc"}`.
	*/
	'terminal.ansiBrightCyan': T;
	/**
	* 'BrightWhite' ANSI color in the terminal.
	*
	* Defaults: `{"light":"#a5a5a5","dark":"#e5e5e5","hcDark":"#ffffff","hcLight":"#a5a5a5"}`.
	*/
	'terminal.ansiBrightWhite': T;
	/**
	* The color of the Profiles editor splitview sash border.
	*
	* Optional.
	*
	* Defaults: `"panel.border"`.
	*/
	'profiles.sashBorder'?: T;
	/**
	* Editor gutter background color for lines that are modified.
	*
	* Defaults: `{"dark":"#1B81A8","light":"#2090D3","hcDark":"#1B81A8","hcLight":"#2090D3"}`.
	*/
	'editorGutter.modifiedBackground': T;
	/**
	* Editor gutter background color for lines that are added.
	*
	* Defaults: `{"dark":"#487E02","light":"#48985D","hcDark":"#487E02","hcLight":"#48985D"}`.
	*/
	'editorGutter.addedBackground': T;
	/**
	* Editor gutter background color for lines that are deleted.
	*
	* Optional.
	*
	* Defaults: `"editorError.foreground"`.
	*/
	'editorGutter.deletedBackground'?: T;
	/**
	* Minimap gutter background color for lines that are modified.
	*
	* Optional.
	*
	* Defaults: `"editorGutter.modifiedBackground"`.
	*/
	'minimapGutter.modifiedBackground'?: T;
	/**
	* Minimap gutter background color for lines that are added.
	*
	* Optional.
	*
	* Defaults: `"editorGutter.addedBackground"`.
	*/
	'minimapGutter.addedBackground'?: T;
	/**
	* Minimap gutter background color for lines that are deleted.
	*
	* Optional.
	*
	* Defaults: `"editorGutter.deletedBackground"`.
	*/
	'minimapGutter.deletedBackground'?: T;
	/**
	* Overview ruler marker color for modified content.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"editorGutter.modifiedBackground","factor":0.6}`.
	*/
	'editorOverviewRuler.modifiedForeground'?: T;
	/**
	* Overview ruler marker color for added content.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"editorGutter.addedBackground","factor":0.6}`.
	*/
	'editorOverviewRuler.addedForeground'?: T;
	/**
	* Overview ruler marker color for deleted content.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"editorGutter.deletedBackground","factor":0.6}`.
	*/
	'editorOverviewRuler.deletedForeground'?: T;
	/**
	* Color for the debug inline value text.
	*
	* Defaults: `{"dark":"#ffffff80","light":"#00000080","hcDark":"#ffffff80","hcLight":"#00000080"}`.
	*/
	'editor.inlineValuesForeground': T;
	/**
	* Color for the debug inline value background.
	*
	* Defaults: `"#ffc80033"`.
	*/
	'editor.inlineValuesBackground': T;
	/**
	* Foreground color for the token names shown in the debug views (ie. the Variables or Watch view).
	*
	* Defaults: `{"dark":"#c586c0","light":"#9b46b0","hcDark":"foreground","hcLight":"foreground"}`.
	*/
	'debugTokenExpression.name': T;
	/**
	* Foreground color for the token types shown in the debug views (ie. the Variables or Watch view).
	*
	* Defaults: `{"dark":"#4A90E2","light":"#4A90E2","hcDark":"foreground","hcLight":"foreground"}`.
	*/
	'debugTokenExpression.type': T;
	/**
	* Foreground color for the token values shown in the debug views (ie. the Variables or Watch view).
	*
	* Defaults: `{"dark":"#cccccc99","light":"#6c6c6ccc","hcDark":"foreground","hcLight":"foreground"}`.
	*/
	'debugTokenExpression.value': T;
	/**
	* Foreground color for strings in the debug views (ie. the Variables or Watch view).
	*
	* Defaults: `{"dark":"#ce9178","light":"#a31515","hcDark":"#f48771","hcLight":"#a31515"}`.
	*/
	'debugTokenExpression.string': T;
	/**
	* Foreground color for booleans in the debug views (ie. the Variables or Watch view).
	*
	* Defaults: `{"dark":"#4e94ce","light":"#0000ff","hcDark":"#75bdfe","hcLight":"#0000ff"}`.
	*/
	'debugTokenExpression.boolean': T;
	/**
	* Foreground color for numbers in the debug views (ie. the Variables or Watch view).
	*
	* Defaults: `{"dark":"#b5cea8","light":"#098658","hcDark":"#89d185","hcLight":"#098658"}`.
	*/
	'debugTokenExpression.number': T;
	/**
	* Foreground color for expression errors in the debug views (ie. the Variables or Watch view) and for error logs shown in the debug console.
	*
	* Defaults: `{"dark":"#f48771","light":"#e51400","hcDark":"#f48771","hcLight":"#e51400"}`.
	*/
	'debugTokenExpression.error': T;
	/**
	* Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception.
	*
	* Defaults: `{"dark":"foreground","light":"#FFF","hcDark":"foreground","hcLight":"foreground"}`.
	*/
	'debugView.exceptionLabelForeground': T;
	/**
	* Background color for a label shown in the CALL STACK view when the debugger breaks on an exception.
	*
	* Defaults: `{"dark":"#6C2022","light":"#A31515","hcDark":"#6C2022","hcLight":"#A31515"}`.
	*/
	'debugView.exceptionLabelBackground': T;
	/**
	* Foreground color for a label in the CALL STACK view showing the current session's or thread's state.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'debugView.stateLabelForeground'?: T;
	/**
	* Background color for a label in the CALL STACK view showing the current session's or thread's state.
	*
	* Defaults: `"#88888844"`.
	*/
	'debugView.stateLabelBackground': T;
	/**
	* Color used to highlight value changes in the debug views (ie. in the Variables view).
	*
	* Defaults: `"#569CD6"`.
	*/
	'debugView.valueChangedHighlight': T;
	/**
	* Foreground color for info messages in debug REPL console.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editorInfo.foreground","light":"editorInfo.foreground","hcDark":"foreground","hcLight":"foreground"}`.
	*/
	'debugConsole.infoForeground'?: T;
	/**
	* Foreground color for warning messages in debug REPL console.
	*
	* Optional.
	*
	* Defaults: `{"dark":"editorWarning.foreground","light":"editorWarning.foreground","hcDark":"#008000","hcLight":"editorWarning.foreground"}`.
	*/
	'debugConsole.warningForeground'?: T;
	/**
	* Foreground color for error messages in debug REPL console.
	*
	* Optional.
	*
	* Defaults: `"errorForeground"`.
	*/
	'debugConsole.errorForeground'?: T;
	/**
	* Foreground color for source filenames in debug REPL console.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'debugConsole.sourceForeground'?: T;
	/**
	* Foreground color for debug console input marker icon.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'debugConsoleInputIcon.foreground'?: T;
	/**
	* Debug toolbar icon for pause.
	*
	* Defaults: `{"dark":"#75BEFF","light":"#007ACC","hcDark":"#75BEFF","hcLight":"#007ACC"}`.
	*/
	'debugIcon.pauseForeground': T;
	/**
	* Debug toolbar icon for stop.
	*
	* Defaults: `{"dark":"#F48771","light":"#A1260D","hcDark":"#F48771","hcLight":"#A1260D"}`.
	*/
	'debugIcon.stopForeground': T;
	/**
	* Debug toolbar icon for disconnect.
	*
	* Defaults: `{"dark":"#F48771","light":"#A1260D","hcDark":"#F48771","hcLight":"#A1260D"}`.
	*/
	'debugIcon.disconnectForeground': T;
	/**
	* Debug toolbar icon for restart.
	*
	* Defaults: `{"dark":"#89D185","light":"#388A34","hcDark":"#89D185","hcLight":"#388A34"}`.
	*/
	'debugIcon.restartForeground': T;
	/**
	* Debug toolbar icon for step over.
	*
	* Defaults: `{"dark":"#75BEFF","light":"#007ACC","hcDark":"#75BEFF","hcLight":"#007ACC"}`.
	*/
	'debugIcon.stepOverForeground': T;
	/**
	* Debug toolbar icon for step into.
	*
	* Defaults: `{"dark":"#75BEFF","light":"#007ACC","hcDark":"#75BEFF","hcLight":"#007ACC"}`.
	*/
	'debugIcon.stepIntoForeground': T;
	/**
	* Debug toolbar icon for step over.
	*
	* Defaults: `{"dark":"#75BEFF","light":"#007ACC","hcDark":"#75BEFF","hcLight":"#007ACC"}`.
	*/
	'debugIcon.stepOutForeground': T;
	/**
	* Debug toolbar icon for continue.
	*
	* Defaults: `{"dark":"#75BEFF","light":"#007ACC","hcDark":"#75BEFF","hcLight":"#007ACC"}`.
	*/
	'debugIcon.continueForeground': T;
	/**
	* Debug toolbar icon for step back.
	*
	* Defaults: `{"dark":"#75BEFF","light":"#007ACC","hcDark":"#75BEFF","hcLight":"#007ACC"}`.
	*/
	'debugIcon.stepBackForeground': T;
	/**
	* History item additions foreground color.
	*
	* Optional.
	*
	* Defaults: `"gitDecoration.addedResourceForeground"`.
	*/
	'scm.historyItemAdditionsForeground'?: T;
	/**
	* History item deletions foreground color.
	*
	* Optional.
	*
	* Defaults: `"gitDecoration.deletedResourceForeground"`.
	*/
	'scm.historyItemDeletionsForeground'?: T;
	/**
	* History item statistics border color.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"foreground","factor":0.2}`.
	*/
	'scm.historyItemStatisticsBorder'?: T;
	/**
	* History item selected statistics border color.
	*
	* Optional.
	*
	* Defaults: `{"op":2,"value":"list.activeSelectionForeground","factor":0.2}`.
	*/
	'scm.historyItemSelectedStatisticsBorder'?: T;
	/**
	* The border color for notebook cells.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"list.inactiveSelectionBackground","factor":1},"light":{"op":2,"value":"list.inactiveSelectionBackground","factor":1},"hcDark":"panel.border","hcLight":"panel.border"}`.
	*/
	'notebook.cellBorderColor'?: T;
	/**
	* The color of the notebook cell editor border.
	*
	* Optional.
	*
	* Defaults: `"focusBorder"`.
	*/
	'notebook.focusedEditorBorder'?: T;
	/**
	* The error icon color of notebook cells in the cell status bar.
	*
	* Optional.
	*
	* Defaults: `"debugIcon.startForeground"`.
	*/
	'notebookStatusSuccessIcon.foreground'?: T;
	/**
	* The color of the running cell decoration in the notebook editor overview ruler.
	*
	* Optional.
	*
	* Defaults: `"debugIcon.startForeground"`.
	*/
	'notebookEditorOverviewRuler.runningCellForeground'?: T;
	/**
	* The error icon color of notebook cells in the cell status bar.
	*
	* Optional.
	*
	* Defaults: `"errorForeground"`.
	*/
	'notebookStatusErrorIcon.foreground'?: T;
	/**
	* The running icon color of notebook cells in the cell status bar.
	*
	* Optional.
	*
	* Defaults: `"foreground"`.
	*/
	'notebookStatusRunningIcon.foreground'?: T;
	/**
	* The border color of the notebook output container.
	*
	* Defaults: `null`.
	*/
	'notebook.outputContainerBorderColor': T;
	/**
	* The color of the notebook output container background.
	*
	* Defaults: `null`.
	*/
	'notebook.outputContainerBackgroundColor': T;
	/**
	* The color of the separator in the cell bottom toolbar
	*
	* Defaults: `{"dark":{"rgba":{"r":128,"g":128,"b":128,"a":0.35}},"light":{"rgba":{"r":128,"g":128,"b":128,"a":0.35}},"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'notebook.cellToolbarSeparator': T;
	/**
	* The background color of a cell when the cell is focused.
	*
	* Defaults: `null`.
	*/
	'notebook.focusedCellBackground': T;
	/**
	* The background color of a cell when the cell is selected.
	*
	* Optional.
	*
	* Defaults: `{"dark":"list.inactiveSelectionBackground","light":"list.inactiveSelectionBackground","hcDark":null,"hcLight":null}`.
	*/
	'notebook.selectedCellBackground'?: T;
	/**
	* The background color of a cell when the cell is hovered.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":2,"value":"notebook.focusedCellBackground","factor":0.5},"light":{"op":2,"value":"notebook.focusedCellBackground","factor":0.7},"hcDark":null,"hcLight":null}`.
	*/
	'notebook.cellHoverBackground'?: T;
	/**
	* The color of the cell's top and bottom border when the cell is selected but not focused.
	*
	* Optional.
	*
	* Defaults: `{"dark":"notebook.cellBorderColor","light":"notebook.cellBorderColor","hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'notebook.selectedCellBorder'?: T;
	/**
	* The color of the cell's borders when multiple cells are selected.
	*
	* Optional.
	*
	* Defaults: `{"dark":null,"light":null,"hcDark":"focusBorder","hcLight":"focusBorder"}`.
	*/
	'notebook.inactiveSelectedCellBorder'?: T;
	/**
	* The color of the cell's focus indicator borders when the cell is focused.
	*
	* Optional.
	*
	* Defaults: `"focusBorder"`.
	*/
	'notebook.focusedCellBorder'?: T;
	/**
	* The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor.
	*
	* Optional.
	*
	* Defaults: `"notebook.cellBorderColor"`.
	*/
	'notebook.inactiveFocusedCellBorder'?: T;
	/**
	* The background color of notebook cell status bar items.
	*
	* Defaults: `{"light":{"rgba":{"r":0,"g":0,"b":0,"a":0.08}},"dark":{"rgba":{"r":255,"g":255,"b":255,"a":0.15}},"hcDark":{"rgba":{"r":255,"g":255,"b":255,"a":0.15}},"hcLight":{"rgba":{"r":0,"g":0,"b":0,"a":0.08}}}`.
	*/
	'notebook.cellStatusBarItemHoverBackground': T;
	/**
	* The color of the notebook cell insertion indicator.
	*
	* Optional.
	*
	* Defaults: `"focusBorder"`.
	*/
	'notebook.cellInsertionIndicator'?: T;
	/**
	* Notebook scrollbar slider background color.
	*
	* Optional.
	*
	* Defaults: `"scrollbarSlider.background"`.
	*/
	'notebookScrollbarSlider.background'?: T;
	/**
	* Notebook scrollbar slider background color when hovering.
	*
	* Optional.
	*
	* Defaults: `"scrollbarSlider.hoverBackground"`.
	*/
	'notebookScrollbarSlider.hoverBackground'?: T;
	/**
	* Notebook scrollbar slider background color when clicked on.
	*
	* Optional.
	*
	* Defaults: `"scrollbarSlider.activeBackground"`.
	*/
	'notebookScrollbarSlider.activeBackground'?: T;
	/**
	* Background color of highlighted cell
	*
	* Defaults: `{"dark":{"rgba":{"r":255,"g":255,"b":255,"a":0.043}},"light":{"rgba":{"r":253,"g":255,"b":0,"a":0.2}},"hcDark":null,"hcLight":null}`.
	*/
	'notebook.symbolHighlightBackground': T;
	/**
	* Cell editor background color.
	*
	* Optional.
	*
	* Defaults: `{"light":"sideBar.background","dark":"sideBar.background","hcDark":null,"hcLight":null}`.
	*/
	'notebook.cellEditorBackground'?: T;
	/**
	* Notebook background color.
	*
	* Optional.
	*
	* Defaults: `{"light":"editorPane.background","dark":"editorPane.background","hcDark":null,"hcLight":null}`.
	*/
	'notebook.editorBackground'?: T;
	/**
	* The border color for the current interactive code cell when the editor has focus.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":6,"if":"peekView.border","then":"peekView.border","else":"#007acc"},"light":{"op":6,"if":"peekView.border","then":"peekView.border","else":"#007acc"},"hcDark":"contrastBorder","hcLight":"contrastBorder"}`.
	*/
	'interactive.activeCodeBorder'?: T;
	/**
	* The border color for the current interactive code cell when the editor does not have focus.
	*
	* Optional.
	*
	* Defaults: `{"dark":{"op":6,"if":"list.inactiveSelectionBackground","then":"list.inactiveSelectionBackground","else":"#37373D"},"light":{"op":6,"if":"list.inactiveSelectionBackground","then":"list.inactiveSelectionBackground","else":"#E4E6F1"},"hcDark":"panel.border","hcLight":"panel.border"}`.
	*/
	'interactive.inactiveCodeBorder'?: T;
	/**
	* Search editor text input box border.
	*
	* Optional.
	*
	* Defaults: `"input.border"`.
	*/
	'searchEditor.textInputBorder'?: T;
};
