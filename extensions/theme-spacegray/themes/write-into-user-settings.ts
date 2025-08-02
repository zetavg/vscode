/* eslint-disable header/header */

import fs from 'fs';
import { generateTheme } from './generateTheme';

// let DEFAULT_THEME_TYPE: 'light' | 'dark';

// DEFAULT_THEME_TYPE = 'light';
// DEFAULT_THEME_TYPE = 'dark'; // comment out this line to switch to light theme

const userSettingsJSONFilePath = process.argv[2];
// const themeType = process.argv[3] || DEFAULT_THEME_TYPE;

if (!userSettingsJSONFilePath) {
	throw new Error('Please pass the user settings JSON file path as the first argument.');
}

// if (themeType !== 'light' && themeType !== 'dark') {
// 	throw new Error(`Invalid theme type: ${themeType}`);
// }

const userSettings = JSON.parse(fs.readFileSync(userSettingsJSONFilePath, 'utf8'));

// const theme = generateTheme(themeType, { name: 'Spacegray' });
const darkTheme = generateTheme('dark', { name: 'Spacegray' });
const lightTheme = generateTheme('light', { name: 'Spacegray' });

const updatedUserSettings = {
	...userSettings,
	'workbench.colorCustomizations': {
		...userSettings['workbench.colorCustomizations'],
		...({
			'[Spacegray Dark]': darkTheme.colors,
			'[Spacegray Light]': lightTheme.colors,
		}),
	},
	'editor.tokenColorCustomizations': {
		...userSettings['editor.tokenColorCustomizations'],
		...({
			'[Spacegray Dark]': { textMateRules: darkTheme.tokenColors },
			'[Spacegray Light]': { textMateRules: lightTheme.tokenColors },
		}),
	},
};

fs.writeFileSync(userSettingsJSONFilePath, JSON.stringify(updatedUserSettings, null, 4));
