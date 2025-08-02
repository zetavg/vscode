/* eslint-disable header/header */

import { base16Colors as c } from './base16Colors';
import { lighten } from './utils';

export const tokenColors = [
	{
		settings: {
			foreground: {
				dark: c.base05,
				light: c.base02_l,
			},
			// lineHighlight: '#65737e30',
			// background: '#2b303b',
			// activeGuide: c.base0C,
			// stackGuide: '#343d46',
			// caret: c.base05,
			// selection: c.base02,
			// invisibles: '#65737e',
			// guide: '#3b5364',
		},
	},
	{
		settings: {
			foreground: { dark: c.base05, light: c.base02_l }
		},
		name: 'Text',
		scope: 'variable.parameter.function',
	},
	{
		settings: {
			foreground: {
				dark: c.base03,
				light: c.base04,
			},
		},
		name: 'Comments',
		scope: 'comment, punctuation.definition.comment',
	},
	{
		settings: {
			foreground: { dark: c.base05, light: c.base02_l }
		},
		name: 'Punctuation',
		scope:
			'punctuation.definition.string, punctuation.definition.variable, punctuation.definition.string, punctuation.definition.parameters, punctuation.definition.string, punctuation.definition.array',
	},
	{
		settings: {
			foreground: { dark: c.base05, light: c.base02_l }
		},
		name: 'Delimiters',
		scope: 'none',
	},
	{
		settings: {
			foreground: { dark: c.base05, light: c.base02_l }
		},
		name: 'Operators',
		scope: 'keyword.operator',
	},
	{
		settings: {
			foreground: { dark: c.base0E, light: c.base0E_l },
		},
		name: 'Keywords',
		scope: 'keyword',
	},
	{
		settings: {
			foreground: c.base08,
		},
		name: 'Variables',
		scope: 'variable',
	},
	{
		settings: {
			foreground: { dark: c.base0D, light: c.base0D_l },
		},
		name: 'Functions',
		scope: 'entity.name.function, meta.require, support.function.any-method',
	},
	{
		settings: {
			foreground: { dark: c.base0A, light: lighten(c.base0A_l, -0.1) },
		},
		name: 'Classes',
		scope: 'support.class, entity.name.type.class',
	},
	{
		settings: {
			foreground: { dark: c.base0A, light: lighten(c.base0A_l, -0.1) },
		},
		name: 'Classes',
		scope: 'meta.entity.new.name.expr',
	},
	{
		settings: {
			foreground: { dark: c.base0D, light: c.base0D_l },
		},
		name: 'Methods',
		scope: 'keyword.other.special-method',
	},
	{
		settings: {
			foreground: { dark: c.base0E, light: c.base0E_l },
		},
		name: 'Storage',
		scope: 'storage',
	},
	{
		settings: {
			foreground: { dark: c.base0C, light: c.base0C_l },
		},
		name: 'Support',
		scope: 'support.function',
	},
	{
		settings: {
			foreground: { dark: c.base0B, light: c.base0B_l },
		},
		name: 'Strings, Inherited Class',
		scope: 'string, constant.other.symbol, entity.other.inherited-class',
	},
	{
		settings: {
			foreground: c.base09,
		},
		name: 'Integers',
		scope: 'constant.numeric',
	},
	{
		settings: {
			foreground: c.base09,
		},
		name: 'Floats',
		scope: 'none',
	},
	{
		settings: {
			foreground: c.base09,
		},
		name: 'Boolean',
		scope: 'none',
	},
	{
		settings: {
			foreground: c.base09,
		},
		name: 'Constants',
		scope: 'constant',
	},
	{
		settings: {
			foreground: c.base08,
		},
		name: 'Tags',
		scope: 'entity.name.tag',
	},
	{
		settings: {
			foreground: c.base09,
		},
		name: 'Attributes',
		scope: 'entity.other.attribute-name',
	},
	{
		settings: {
			foreground: { dark: c.base0D, light: c.base0D_l },
		},
		name: 'Attribute IDs',
		scope: 'entity.other.attribute-name.id, punctuation.definition.entity',
	},
	{
		settings: {
			foreground: { dark: c.base0E, light: c.base0E_l },
		},
		name: 'Selector',
		scope: 'meta.selector',
	},
	{
		settings: {
			foreground: c.base09,
		},
		name: 'Values',
		scope: 'none',
	},
	{
		settings: {
			fontStyle: '',
			foreground: { dark: c.base0D, light: c.base0D_l },
		},
		name: 'Headings',
		scope: 'markup.heading punctuation.definition.heading, entity.name.section',
	},
	{
		settings: {
			foreground: c.base09,
		},
		name: 'Units',
		scope: 'keyword.other.unit',
	},
	{
		settings: {
			fontStyle: 'bold',
			foreground: { dark: c.base0A, light: lighten(c.base0A_l, -0.1) },
		},
		name: 'Bold',
		scope: 'markup.bold, punctuation.definition.bold',
	},
	{
		settings: {
			fontStyle: 'italic',
			foreground: { dark: c.base0E, light: c.base0E_l },
		},
		name: 'Italic',
		scope: 'markup.italic, punctuation.definition.italic',
	},
	{
		settings: {
			foreground: { dark: c.base0B, light: c.base0B_l },
		},
		name: 'Code',
		scope: 'markup.raw.inline',
	},
	{
		settings: {
			foreground: c.base08,
		},
		name: 'Link Text',
		scope: 'string.other.link',
	},
	{
		settings: {
			foreground: c.base09,
		},
		name: 'Link Url',
		scope: 'meta.link',
	},
	{
		settings: {
			foreground: c.base08,
		},
		name: 'Lists',
		scope: 'markup.list',
	},
	{
		settings: {
			foreground: c.base09,
		},
		name: 'Quotes',
		scope: 'markup.quote',
	},
	{
		settings: {
			background: { dark: c.base02, light: c.base05 },
			foreground: { dark: c.base05, light: c.base02_l }
		},
		name: 'Separator',
		scope: 'meta.separator',
	},
	{
		settings: {
			foreground: { dark: c.base0B, light: c.base0B_l },
		},
		name: 'Inserted',
		scope: 'markup.inserted, markup.inserted.git_gutter',
	},
	{
		settings: {
			foreground: c.base08,
		},
		name: 'Deleted',
		scope: 'markup.deleted, markup.deleted.git_gutter',
	},
	{
		settings: {
			foreground: { dark: c.base0E, light: c.base0E_l },
		},
		name: 'Changed',
		scope: 'markup.changed, markup.changed.git_gutter',
	},
	{
		settings: {
			foreground: { dark: c.base02, light: c.base05 },
		},
		name: 'Ignored',
		scope: 'markup.ignored, markup.ignored.git_gutter',
	},
	{
		settings: {
			foreground: { dark: c.base02, light: c.base05 },
		},
		name: 'Untracked',
		scope: 'markup.untracked, markup.untracked.git_gutter',
	},
	{
		settings: {
			foreground: { dark: c.base0C, light: c.base0C_l },
		},
		name: 'Colors',
		scope: 'constant.other.color',
	},
	{
		settings: {
			foreground: { dark: c.base0C, light: c.base0C_l },
		},
		name: 'Regular Expressions',
		scope: 'string.regexp',
	},
	{
		settings: {
			foreground: { dark: c.base0C, light: c.base0C_l },
		},
		name: 'Escape Characters',
		scope: 'constant.character.escape',
	},
	{
		settings: {
			foreground: c.base0F,
		},
		name: 'Embedded',
		scope: 'punctuation.section.embedded, variable.interpolation',
	},
	{
		settings: {
			background: c.base08,
			foreground: {
				dark: '#ffffff',
				light: '#000000',
			},
		},
		name: 'Invalid',
		scope: 'invalid.illegal',
	},
	{
		settings: {
			// foreground: '#F92672',
			foreground: c.base08,
		},
		name: 'GitGutter deleted',
		scope: 'markup.deleted.git_gutter',
	},
	{
		settings: {
			// foreground: '#A6E22E',
			foreground: { dark: c.base0B, light: c.base0B_l },
		},
		name: 'GitGutter inserted',
		scope: 'markup.inserted.git_gutter',
	},
	{
		settings: {
			// foreground: '#967EFB',
			foreground: { dark: c.base0E, light: c.base0E },
		},
		name: 'GitGutter changed',
		scope: 'markup.changed.git_gutter',
	},
	{
		settings: {
			foreground: '#56565600',
		},
		name: 'GitGutter ignored',
		scope: 'markup.ignored.git_gutter',
	},
	{
		settings: {
			foreground: '#56565600',
		},
		name: 'GitGutter untracked',
		scope: 'markup.untracked.git_gutter',
	},
];
