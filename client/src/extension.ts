import { ExtensionContext, OutputChannel, workspace } from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  SocketTransport,
  Executable,
  TransportKind,
  ExecutableOptions,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(context: ExtensionContext) {
  const transport: SocketTransport = { kind: TransportKind.socket, port: 8080 };
  // const options: ExecutableOptions = { detached: true, shell: true };
  const unicon: Executable = {
    command: "../../server/unicon-lsp-server",
    transport: transport,
  };
  const serverOptions: ServerOptions = {
    run: unicon,
    debug: unicon,
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "plaintext" }],
    synchronize: {
      // Notify the server about file changes to '.clientrc' files contained in the workspace
      fileEvents: workspace.createFileSystemWatcher("**/.clientrc"),
    },
  };
  client = new LanguageClient(
    "uniconClient",
    "Unicon Client",
    serverOptions,
    clientOptions
  );

  client.start();
}
export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
