/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as path from 'path';
import * as fs from 'fs';

/**
 * Returns the sha1 commit version of a repository or undefined in case of failure.
 */
export function getVersion(repo: string): string | undefined {
	// Might be set by vscodium's GitHub Action.
	// A correct VSCode commit version is needed for some extensions such as GitHub Codespaces to work.
	const possibleVersionFileLocations = [
		path.join(repo, 'stable.json'),
		path.join(repo, '..', 'stable.json'),
		path.join(repo, '..', '..', 'stable.json'),
	];
	const versionFile = possibleVersionFileLocations.find(location => fs.existsSync(location));
	console.log('[git] getVersion...');
	if (versionFile) {
		try {
			// Will be something like {"url":"https://vscode.download.prss.microsoft.com/dbazure/download/stable/eaa41d57266683296de7d118f574d0c2652e1fc4/VSCode-darwin.zip","name":"1.92.1","version":"eaa41d57266683296de7d118f574d0c2652e1fc4","productVersion":"1.92.1","hash":"a7a077a55c579220c49593804c9405696e4548b9","timestamp":1723061900553,"sha256hash":"ebce6cd31b725ee597e65abd27471a48ffe6882095cee3373051467e27cce0f7","supportsFastUpdate":true}
			const versionFileJson = JSON.parse(fs.readFileSync(versionFile, 'utf8'));
			const { version } = versionFileJson || {};
			if (!version) {
				throw new Error('No version found');
			}
			console.log(`Using commit version from ${versionFile}: ${version}`);
			return version;
		} catch (e) {
			console.warn(`Failed to read version from ${versionFile}`, e);
		}
	}

	const git = path.join(repo, '.git');
	const headPath = path.join(git, 'HEAD');
	let head: string;

	try {
		head = fs.readFileSync(headPath, 'utf8').trim();
	} catch (e) {
		return undefined;
	}

	if (/^[0-9a-f]{40}$/i.test(head)) {
		return head;
	}

	const refMatch = /^ref: (.*)$/.exec(head);

	if (!refMatch) {
		return undefined;
	}

	const ref = refMatch[1];
	const refPath = path.join(git, ref);

	try {
		return fs.readFileSync(refPath, 'utf8').trim();
	} catch (e) {
		// noop
	}

	const packedRefsPath = path.join(git, 'packed-refs');
	let refsRaw: string;

	try {
		refsRaw = fs.readFileSync(packedRefsPath, 'utf8').trim();
	} catch (e) {
		return undefined;
	}

	const refsRegex = /^([0-9a-f]{40})\s+(.+)$/gm;
	let refsMatch: RegExpExecArray | null;
	const refs: { [ref: string]: string } = {};

	while (refsMatch = refsRegex.exec(refsRaw)) {
		refs[refsMatch[2]] = refsMatch[1];
	}

	return refs[ref];
}
