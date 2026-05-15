/* eslint-disable local/code-import-patterns */
/* eslint-disable header/header */

import { ConfigurationScope, Extensions, IConfigurationRegistry } from '../../platform/configuration/common/configurationRegistry.js';
import { Registry } from '../../platform/registry/common/platform.js';

import { DISABLED_PATCHES_KEY } from './consts.js';


export function registerConfiguration() {
	const registry = Registry.as<IConfigurationRegistry>(Extensions.Configuration);
	registry.registerConfiguration({
		scope: ConfigurationScope.APPLICATION,
		properties: {
			[DISABLED_PATCHES_KEY]: {
				'markdownDescription': 'List of patch codes to disable. Each patch in this fork has a 4-character code (e.g. `D15A`, `FID7`) shown in commit messages (`[patch][ZP-XXXX] …`) and in the surrounding source comment (`/* [ZP-XXXX] … */`). Add a code here — **without** the `ZP-` prefix — to disable that patch.\n\n**Not every patch supports being disabled this way** — only patches that explicitly opt in (all `.patch.css` rules, plus code patches that check the body class or this setting).',
				'type': 'array',
				'items': {
					'type': 'string',
					'pattern': '^[0-9A-Za-z]{2,8}$'
				},
				'uniqueItems': true,
				'default': [],
				'tags': ['zetavg'],
			}
		}
	});
}
