/* eslint-disable header/header */

import { getConfigurationService } from 'vs/z-customizations/configurationService';
import { REMOTE_EXTENSION_HOST_COMMIT_KEY } from './consts';

export function getCustomizedREHCommit() {
	const configurationService = getConfigurationService();

	if (!configurationService) {
		console.warn('[CustomizedREHCommit] No configurationService available, skipping.');
		return null;
	}

	const value = configurationService.getValue<string>(REMOTE_EXTENSION_HOST_COMMIT_KEY);

	if (!value) {
		console.log('[CustomizedREHCommit] No custom commit set.');
		return null;
	} else {
		console.log(`[CustomizedREHCommit] Using custom commit: "${value}".`);
		return value;
	}
}
