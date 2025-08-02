/* eslint-disable header/header */

import fs from 'fs';
import path from 'path';

import { generateTheme } from './generateTheme';

const additionalHeadingProperties = {
	'// 1.': 'THIS FILE IS AUTO GENERATED. DO NOT EDIT!',
	'// 2.':
		'Run `yarn ts-node extensions/theme-spacegray/themes/generate.ts` to update this file.',
};

const darkTheme = generateTheme('dark', {
	name: 'Spacegray Dark',
	additionalHeadingProperties,
});
const lightTheme = generateTheme('light', {
	name: 'Spacegray Light',
	additionalHeadingProperties,
});

fs.writeFileSync(
	path.join(__dirname, 'spacegray-dark-color-theme.json'),
	JSON.stringify(darkTheme, null, 4)
);
fs.writeFileSync(
	path.join(__dirname, 'spacegray-light-color-theme.json'),
	JSON.stringify(lightTheme, null, 4)
);
