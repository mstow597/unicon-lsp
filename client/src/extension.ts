/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as which from 'which';
import { workspace, ExtensionContext } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind,
	SocketTransport,
	Executable
} from 'vscode-languageclient/node';


const pathToLS = which.sync('ulsp');
console.log(pathToLS);

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	const transport: SocketTransport = { kind: TransportKind.socket, port: 8080 };
	// const options: ExecutableOptions = { detached: true, shell: true };
	const unicon: Executable = { command: pathToLS, transport: transport };
	const serverOptions: ServerOptions = {
		run: unicon,
		debug: unicon
	};


	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'plaintext' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'uniconLanguageServer',
		'Unicon Language Server',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start();
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
