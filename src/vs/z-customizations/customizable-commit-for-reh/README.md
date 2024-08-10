# [ZP-F39A] Customizable commit hash for REH

To avoid [the Remote Extension Host (REH) rejecting the connection](https://github.com/microsoft/vscode/blob/1.90.0/src/vs/server/node/remoteExtensionHostAgentServer.ts#L369-L374), this patch allows the user to customize the commit hash that VSCode reports while connecting to the REH.
