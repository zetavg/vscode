/* eslint-disable header/header */

// [ZP-D03B] Globally accessible configuration service.
// This simplifies access to the configuration service for other patches, eliminating the need to figure out how to pass it through the app.

import { IConfigurationService } from 'vs/platform/configuration/common/configuration';

// This is to make configurationService globally accessible.

let configurationService: IConfigurationService | null = null;

/**
 * Set the configuration service and make it globally accessible via the `getConfigurationService()` function.
 */
export function setConfigurationService(service: IConfigurationService) {
	configurationService = service;
}

/**
 * Returns the globally accessible configuration service set by the `setConfigurationService()` function.
 */
export function getConfigurationService(): IConfigurationService | null {
	return configurationService;
}
