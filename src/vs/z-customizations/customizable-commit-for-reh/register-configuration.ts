/* eslint-disable header/header */

import { ConfigurationScope, Extensions, IConfigurationRegistry } from 'vs/platform/configuration/common/configurationRegistry';
import { Registry } from 'vs/platform/registry/common/platform';

import { REMOTE_EXTENSION_HOST_COMMIT_KEY } from './consts';


export function registerConfiguration() {
	const registry = Registry.as<IConfigurationRegistry>(Extensions.Configuration);
	registry.registerConfiguration({
		scope: ConfigurationScope.APPLICATION,
		properties: {
			[REMOTE_EXTENSION_HOST_COMMIT_KEY]: {
				'markdownDescription': 'To avoid a Remote Extension Host (REH) [refusing a connection with the `version mismatch` error](https://github.com/microsoft/vscode/blob/1.90.0/src/vs/server/node/remoteExtensionHostAgentServer.ts#L369-L374), set this to the commit hash of the REH you want to connect to. The commit hash of the REH can be found in the `product.json` file of the REH.',
				'type': 'string',
				'default': '',
				'tags': ['zetavg'],
			}
		}
	});
}
