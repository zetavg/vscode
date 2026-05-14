/* eslint-disable header/header */

import { colors } from './colors';
import { tokenColors } from './tokenColors';
import { colorToHex } from './utils';

export function generateTheme(
	type: 'dark' | 'light',
	{
		name,
		additionalHeadingProperties,
	}: {
		name: string;
		additionalHeadingProperties?: Record<string, string>;
	}
) {
	const processedColors = Object.fromEntries(
		Object.entries(colors)
			.filter(([, v]) => (typeof v === 'string' ? !!v && v !== 'TODO' : !!(v && v[type])))
			.map(([k, v]) => [k, colorToHex(typeof v === 'string' ? v : v[type])])
	);

	const processedTokenColors = tokenColors.map((cs) => {
		if (!cs.settings) {
			return cs;
		}

		return {
			...cs,
			settings: Object.fromEntries(
				Object.entries(cs.settings)
					.filter(([, v]) => (typeof v === 'string' ? !!v && v !== 'TODO' : !!(v && v[type])))
					.map(([k, v]) => [
						k,
						k === 'fontStyle' ? v : colorToHex(typeof v === 'string' ? v : v[type]),
					])
			),
		};
	});

	const commonProperties = {
		colorSpaceName: 'sRGB',
	};

	const theme = {
		name,
		...additionalHeadingProperties,
		...commonProperties,
		colors: processedColors,
		tokenColors: processedTokenColors,
	};

	return theme;
}
