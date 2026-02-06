# zetavg/vscode

This is a fork of [Visual Studio Code](https://github.com/microsoft/vscode) with various patches and customizations.

## Download

Built binaries can be found in the [Releases page of the zetavg/vscode-build repo](https://github.com/zetavg/vscode-build/releases). You may need to click `Show all ... assets` to see all available downloads.

You may need to click on "Show all ... assets" to find the one you need.

> [!NOTE]
> Note that the downloads there are basically VSCodium releases, which are not quite the same as Microsoft's Visual Studio Code. You may need to check VSCodium's documentation for help. Some topics in [Troubleshooting](https://github.com/VSCodium/vscodium/blob/master/docs/troubleshooting.md) related to [Remote SSH](https://github.com/VSCodium/vscodium/blob/c7b5ab02b1d76f75beca55ea2c7a3b232afdec4d/docs/troubleshooting.md#remote-ssh-doesnt-work), [`Apple cannot check it for malicious software`](https://github.com/VSCodium/vscodium/blob/c7b5ab02b1d76f75beca55ea2c7a3b232afdec4d/docs/troubleshooting.md#app-cant-be-opened-because-apple-cannot-check-it-for-malicious-software) or [`app is damaged and can’t be opened`](https://github.com/VSCodium/vscodium/blob/c7b5ab02b1d76f75beca55ea2c7a3b232afdec4d/docs/troubleshooting.md#macos-quarantine) errors might be useful.


### Extensions

Some extensions (e.g., GitHub Copilot and GitHub Copilot Chat) aren’t available on Open VSX, so you need to install them manually.
Download Visual Studio Code with the same version number (links [here](https://stackoverflow.com/a/76018303/3416647)), install the required extensions there, then export them as VSIX files.
Finally, install those VSIX files in your editor.


## Development

> [!WARNING]
>
> **Do NOT merge or sync `main` with `microsoft:main`.**
> Doing so can break services that automatically build the latest stable VS Code (from a release tag) with this repository’s `main` branch merged into it. This may introduce merge conflicts and pull in code intended for a future release.
>
> Instead, rebase main onto the commit where microsoft:main and the latest stable release branch diverged (i.e. the common ancestor commit).
> To find that common ancestor, check the parent commit of the first commit in:
> `https://github.com/microsoft/vscode/compare/main...release/x.xx`, or use `git merge-base upstream/main upstream/release/x.xx` (replace `x.xx` with the latest stable release version, such as `1.108`).

> [!TIP]
> See https://github.com/microsoft/vscode/wiki/How-to-Contribute#build-and-run for more information.

You'll need to have a Node.js version manager that supports `.nvmrc` installed.

After cloning the repository, run the following commands:

```bash
npm install
npm run compile
npm run watch
```

Wait for `npm run watch` to finish the initial compilation. You should see `Finished compilation with 0 errors`. If you see `Finished compilation extensions with 0 errors` instead, the compilation is not yet complete.

Then, in another terminal:

```bash
./scripts/code.sh
```

> [!NOTE]
> While developing with [Open Remote - SSH](https://github.com/jeanp413/open-remote-ssh), note that it will [load product info from the `product.json` file directly](https://github.com/jeanp413/open-remote-ssh/blob/v0.0.45/src/serverConfig.ts#L8), and [use that info to compose the installation script](https://github.com/jeanp413/open-remote-ssh/blob/v0.0.45/src/serverSetup.ts#L208-L211). So by default it may not work during development, and you'll see error messages such as `Could not establish connection`, `Couldn't install vscode server on remote server`, `server contents are corrupted`.
>
> To workaround this, you'll need to edit the `product.json` file in the project root to add a `"commit"` field, and change the `"serverApplicationName"` field from `"code-server-oss"` to `"codium-server"`, also the `"serverDataFolderName"` field from `".vscode-server-oss"` to `".vscodium-server"`.


---

Below is the original README of the Microsoft Visual Studio Code repository.

---


# Visual Studio Code - Open Source ("Code - OSS")
[![Feature Requests](https://img.shields.io/github/issues/microsoft/vscode/feature-request.svg)](https://github.com/microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
[![Bugs](https://img.shields.io/github/issues/microsoft/vscode/bug.svg)](https://github.com/microsoft/vscode/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3Abug)
[![Gitter](https://img.shields.io/badge/chat-on%20gitter-yellow.svg)](https://gitter.im/Microsoft/vscode)

## The Repository

This repository ("`Code - OSS`") is where we (Microsoft) develop the [Visual Studio Code](https://code.visualstudio.com) product together with the community. Not only do we work on code and issues here, we also publish our [roadmap](https://github.com/microsoft/vscode/wiki/Roadmap), [monthly iteration plans](https://github.com/microsoft/vscode/wiki/Iteration-Plans), and our [endgame plans](https://github.com/microsoft/vscode/wiki/Running-the-Endgame). This source code is available to everyone under the standard [MIT license](https://github.com/microsoft/vscode/blob/main/LICENSE.txt).

## Visual Studio Code

<p align="center">
  <img alt="VS Code in action" src="https://user-images.githubusercontent.com/35271042/118224532-3842c400-b438-11eb-923d-a5f66fa6785a.png">
</p>

[Visual Studio Code](https://code.visualstudio.com) is a distribution of the `Code - OSS` repository with Microsoft-specific customizations released under a traditional [Microsoft product license](https://code.visualstudio.com/License/).

[Visual Studio Code](https://code.visualstudio.com) combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle. It provides comprehensive code editing, navigation, and understanding support along with lightweight debugging, a rich extensibility model, and lightweight integration with existing tools.

Visual Studio Code is updated monthly with new features and bug fixes. You can download it for Windows, macOS, and Linux on [Visual Studio Code's website](https://code.visualstudio.com/Download). To get the latest releases every day, install the [Insiders build](https://code.visualstudio.com/insiders).

## Contributing

There are many ways in which you can participate in this project, for example:

* [Submit bugs and feature requests](https://github.com/microsoft/vscode/issues), and help us verify as they are checked in
* Review [source code changes](https://github.com/microsoft/vscode/pulls)
* Review the [documentation](https://github.com/microsoft/vscode-docs) and make pull requests for anything from typos to additional and new content

If you are interested in fixing issues and contributing directly to the code base,
please see the document [How to Contribute](https://github.com/microsoft/vscode/wiki/How-to-Contribute), which covers the following:

* [How to build and run from source](https://github.com/microsoft/vscode/wiki/How-to-Contribute)
* [The development workflow, including debugging and running tests](https://github.com/microsoft/vscode/wiki/How-to-Contribute#debugging)
* [Coding guidelines](https://github.com/microsoft/vscode/wiki/Coding-Guidelines)
* [Submitting pull requests](https://github.com/microsoft/vscode/wiki/How-to-Contribute#pull-requests)
* [Finding an issue to work on](https://github.com/microsoft/vscode/wiki/How-to-Contribute#where-to-contribute)
* [Contributing to translations](https://aka.ms/vscodeloc)

## Feedback

* Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/vscode)
* [Request a new feature](CONTRIBUTING.md)
* Upvote [popular feature requests](https://github.com/microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
* [File an issue](https://github.com/microsoft/vscode/issues)
* Connect with the extension author community on [GitHub Discussions](https://github.com/microsoft/vscode-discussions/discussions) or [Slack](https://aka.ms/vscode-dev-community)
* Follow [@code](https://x.com/code) and let us know what you think!

See our [wiki](https://github.com/microsoft/vscode/wiki/Feedback-Channels) for a description of each of these channels and information on some other available community-driven channels.

## Related Projects

Many of the core components and extensions to VS Code live in their own repositories on GitHub. For example, the [node debug adapter](https://github.com/microsoft/vscode-node-debug) and the [mono debug adapter](https://github.com/microsoft/vscode-mono-debug) repositories are separate from each other. For a complete list, please visit the [Related Projects](https://github.com/microsoft/vscode/wiki/Related-Projects) page on our [wiki](https://github.com/microsoft/vscode/wiki).

## Bundled Extensions

VS Code includes a set of built-in extensions located in the [extensions](extensions) folder, including grammars and snippets for many languages. Extensions that provide rich language support (inline suggestions, Go to Definition) for a language have the suffix `language-features`. For example, the `json` extension provides coloring for `JSON` and the `json-language-features` extension provides rich language support for `JSON`.

## Development Container

This repository includes a Visual Studio Code Dev Containers / GitHub Codespaces development container.

* For [Dev Containers](https://aka.ms/vscode-remote/download/containers), use the **Dev Containers: Clone Repository in Container Volume...** command which creates a Docker volume for better disk I/O on macOS and Windows.
  * If you already have VS Code and Docker installed, you can also click [here](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/microsoft/vscode) to get started. This will cause VS Code to automatically install the Dev Containers extension if needed, clone the source code into a container volume, and spin up a dev container for use.

* For Codespaces, install the [GitHub Codespaces](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) extension in VS Code, and use the **Codespaces: Create New Codespace** command.

Docker / the Codespace should have at least **4 Cores and 6 GB of RAM (8 GB recommended)** to run a full build. See the [development container README](.devcontainer/README.md) for more information.

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the [MIT](LICENSE.txt) license.
