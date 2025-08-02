/* eslint-disable header/header */

export const dark = {
	'-00': 'rgb(28, 31, 38)',
	'-01': 'rgb(35, 40, 48)',
	'00': 'rgb(43, 48, 59)',
	'01': 'rgb(52, 61, 70)',
	'02': 'rgb(79, 91, 102)',
	'03': 'rgb(101, 115, 127)',
	'04': 'rgb(167, 173, 186)',
	'04--0.5': 'rgba(167, 173, 186, 0.5)',
	'05': 'rgb(192, 197, 206)',
	'06': 'rgb(223, 225, 232)',
	'07': 'rgb(239, 241, 245)',
	'08': 'rgb(191, 97, 106)',
	'0A': 'rgb(235, 203, 139)',
	'0A2': 'rgb(254, 204, 102)',
	'0C': 'rgb(150, 181, 180)',
};

export const light = {
	'00': 'rgb(43, 48, 58)',
	'01': 'rgb(51, 61, 70)',
	'02': 'rgb(79, 91, 102)',
	'03': 'rgb(101, 115, 127)',
	'03--0.7': 'rgb(101, 115, 127, 0.7)',
	'03-04': 'rgb(140, 145, 156)',
	'04': 'rgb(167, 173, 186)',
	'04--0.5': 'rgba(167, 173, 186, 0.5)',
	'05': 'rgb(192, 197, 206)',
	'06': 'rgb(223, 225, 232)',
	'06-07': 'rgb(230, 233, 240)',
	'07': 'rgb(239, 241, 245)',
	'08': 'rgb(191, 97, 106)',
	'09': 'rgb(208, 135, 112)',
	'0A': 'rgb(254, 204, 102)',
	'0E': 'rgb(180, 142, 173)',
	'white': 'rgb(255, 255, 255)',
};

export const a = {
	tabset_control: {
		dark: dark['-00'],
		light: light['06'],
	},
	tab_control: {
		dark: dark['-00'],
		light: light['06'],
	},
	tab_control_selected: {
		dark: dark['00'],
		light: light['07'],
	},
	tab_close_button: {
		dark: dark['03'],
		light: light['04'],
	},
	tab_close_button_hover: {
		dark: dark['08'],
		light: light['08'],
	},
	tab_close_button_dirty: {
		dark: dark['0A'],
		light: light['09'],
	},
	tab_label: {
		// font.size: 11.0
		dark: dark['03'],
		light: light['03'],
	},
	tab_label_hover: {
		dark: dark['05'],
		light: light['02'],
	},
	tab_label_selected: {
		dark: dark['06'],
		light: light['01'],
	},
	// tab_close_button_pressed: {
	// 	// Opacity 0.5
	// },
	fold_button_control: {
		dark: dark['04--0.5'],
		light: light['04--0.5'],
	},
	fold_button_control_hover: {
		dark: dark['04'],
		light: light['04'],
	},
	scroll_bar_control: {
		dark: dark['-01'],
		light: light['06'],
	},
	sheet_container_control: { // empty window background
		dark: dark['00'],
		light: light['05'],
	},
	grid_layout_control: {
		dark: dark['-00'],
		light: light['05'],
	},
	minimap_control: {
		dark: 'rgba(255, 255, 255, 0.05882353)',
		light: 'rgba(192, 197, 206, 0.15686275)',
	},
	label_control: {
		dark: dark['03'],
		light: light['03-04'],
	},
	label_button_control: {
		dark: dark['0C'],
		light: light['0E'],
	},
	tool_tip_control: {
		dark: dark['02'],
		light: light['02'],
	},
	tool_tip_label_control: {
		dark: dark['07'],
		light: light['07'],
	},
	status_bar: {
		dark: dark['-00'],
		light: light['06'],
	},
	status_bar_label_control: {
		dark: dark['02'],
		light: light['03-04'],
	},
	sidebar_container: {
		dark: dark['-01'],
		light: light['06'],
	},
	sidebar_heading: {
		dark: dark['02'],
		light: light['04'],
	},
	tree_row_selected: {
		dark: dark['01'],
		light: light['05'],
	},
	sidebar_label: {
		// font.size: 11.0
		dark: dark['03'],
		light: light['03-04'],
	},
	sidebar_label_hover: {
		dark: dark['05'],
		light: light['01'],
	},
	sidebar_label_selected: {
		dark: dark['06'],
		light: light['white'],
	},
	close_button: { // do not show if not selected or hover
		dark: dark['03'],
		light: light['03'],
	},
	close_button_dirty: { // always show
		dark: dark['0A'],
		light: light['09'],
	},
	close_button_hover: { // do not show if not selected or hover
		dark: dark['08'],
		light: light['08'],
	},
	disclosure_button_control: {
		dark: dark['02'],
		light: light['04'],
	},
	disclosure_button_control_hover: {
		dark: dark['04'],
		light: light['02'],
	},
	icon_folder: {
		dark: dark['04--0.5'],
		light: light['03--0.7'],
	},
	icon_folder_hover: {
		dark: dark['04'],
		light: light['03'],
	},
	// icon_file_type: {
	// 	// dark: opacity-0.6
	// 	// light: TODO
	// },
	// icon_file_type_hover: {
	// 	// dark: opacity-1
	// 	// light: TODO
	// },
	// icon_file_type_selected: {
	// 	// dark: opacity-1
	// 	// light: TODO
	// },
	button_control: {
		dark: dark['-00'],
		light: light['06'],
	},
	button_control_hover: {
		dark: dark['-01'],
		light: light['06-07'],
	},
	button_control_pressed: {
		dark: dark['-00'],
		light: light['06'],
	},
	text_line_control: {
		dark: dark['-01'],
		light: light['06'],
	},
	panel_control: {
		dark: dark['-00'],
		light: light['06'],
	},
	overlay_control: {
		dark: dark['-01'],
		light: light['06'],
	},
	quick_panel: {
		dark: 'rgb(51, 61, 70)',
		light: 'rgb(223, 225, 232)',
	},
	quick_panel_row: {
		dark: dark['01'],
		light: light['06'],
	},
	quick_panel_row_selected: {
		dark: dark['-01'],
		light: light['05'],
	},
	quick_panel_label_fg: {
		dark: dark['04'],
		light: light['03'],
	},
	quick_panel_label_match_fg: {
		dark: dark['05'],
		light: light['02'],
	},
	quick_panel_label_selected_fg: {
		dark: dark['05'],
		light: light['02'],
	},
	quick_panel_label_selected_match_fg: {
		dark: dark['07'],
		light: light['00'],
	},
	quick_panel_path_label_fg: {
		dark: dark['03'],
		light: light['04'],
	},
	quick_panel_path_label_match_fg: {
		dark: dark['04'],
		light: light['03-04'],
	},
	quick_panel_path_label_selected_fg: {
		dark: dark['03'],
		light: light['03-04'],
	},
	quick_panel_path_label_selected_match_fg: {
		dark: dark['04'],
		light: light['03'],
	},
	quick_panel_score_label: {
		dark: dark['03'],
		light: light['04'],
	},
	quick_panel_score_label_selected: {
		dark: dark['03'],
		light: light['03-04'],
	},
	popup_control: {
		dark: dark['01'],
		light: light['07'],
	},
	auto_complete_label_fg: {
		dark: dark['03'],
		light: light['04'],
	},
	auto_complete_label_match_fg: {
		dark: dark['05'],
		light: light['02'],
	},
	auto_complete_label_selected_fg: {
		dark: dark['03'],
		light: light['03'],
	},
	auto_complete_label_selected_match_fg: {
		dark: dark['05'],
		light: light['01'],
	},
	table_row_selected: { // no color for unselected
		dark: dark['02'],
		light: light['06'],
	},
	icon_button: {
		dark: dark['02'],
		light: light['04'],
	},
	icon_button_selected: {
		dark: dark['07'],
		light: light['01'],
	},
} satisfies Record<string, { dark: string; light: string }>;
