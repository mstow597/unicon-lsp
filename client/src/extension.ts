/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as cp from "child_process";
import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind,
	SocketTransport,
	Executable
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	const transport: SocketTransport = { kind: TransportKind.socket, port: 8080 };
	// const options: ExecutableOptions = { detached: true, shell: true };
<<<<<<< HEAD
	const unicon: Executable = { command: '/home/mark/unicon-lspfork/unicon/uni/ulsp/launch-lsp', transport: transport };
=======
	const unicon: Executable = { command: '/home/mark/Documents/unicon/uni/ulsp/launch-lsp', transport: transport };
>>>>>>> 5ac359b8a3196e2e62c24496edfd6e0b0a776e50
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
