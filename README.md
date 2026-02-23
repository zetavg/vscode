# zetavg/vscode

This is a fork of [Visual Studio Code](https://github.com/microsoft/vscode) with various patches and customizations.

## Key Features

- **Local Workspace Settings (`.vscode/settings.local.json`)** — Adds support for a `.vscode/settings.local.json` file that overrides `.vscode/settings.json`. Add it to `.gitignore` and every developer on the team gets their own workspace settings (font size, theme, formatters, etc.) without polluting the shared config.

- **Hold-to-Switch AI Model/Mode** — Hold Cmd/Ctrl or Alt/Option in the chat input to temporarily switch to a different AI model or agent mode, then release to revert. Configurable via `chat.editing.HoldCmdKeyAction` and `chat.editing.holdOptionKeyAction` with actions like `switchModel:<id>` and `switchMode:<id>`.

- **Token Usage & Model Name in Chat** — See the active model name while a response is streaming, and view token usage (prompt ↑ / completion ↓) in each response footer after completion. Provides visibility into AI costs and which model is being used.

- **Export All Chat Sessions** — A single command ("Export All Chat Sessions...") to bulk-export every chat session in the workspace as individual JSON files, useful for archiving, sharing, or auditing AI conversations.

- **Responsive Editor Font Size by Window Width** — The `editor.fontSizeByMaxWindowWidth` setting automatically adjusts font size based on window width breakpoints (e.g. `{"1440": 14.5, "1380": 14}`), so the editor stays readable on any display size without manual tweaking.

- **Disable Commit Button Without Staged Changes** — A `git.requireStagedChangesToCommit` setting that grays out the commit button when there are no staged changes, preventing accidental commits of unstaged files.

- **Cycle Secondary Side Bar Widths** — A "Cycle Secondary Side Bar Display" command that cycles the auxiliary bar through configurable widths (including hiding), with support for window-width breakpoints. Configured via `workbench.secondarySideBar.cycleWidths`.

- **Customizable REH Commit Hash** — Override the commit hash VS Code reports when connecting to a Remote Extension Host, preventing version-mismatch rejections when using custom builds with remote servers.

- **Copilot Extensions Run Locally by Default** — GitHub Copilot and Copilot Chat extensions are configured to run on the local machine by default when connected to a remote, improving responsiveness.

- **Customizable Diff Editor Font Size** — A dedicated `diffEditor.fontSize` setting, allowing the diff editor to use a different font size from the main editor.

- **"Set Syntax" Command Alias** — The "Change Language Mode" command is labeled "Change Language Mode (Set Syntax)", making it immediately discoverable for users coming from Sublime Text.

- **Spacegray Theme & Visual Polish** — Ships with a bundled Spacegray theme suite (dark/light color themes, file icons, Carbon product icons) set as defaults, along with various style refinements: rounded highlight corners, clean straight underlines instead of squigglies, dotted indent guides, eye-catching fold indicators, compact 28px panel headers, git diff gutter moved to the left of line numbers, and more.

## Full Key Features

### Workspace & Configuration

1. **Local workspace settings** — Support for settings.local.json, allowing per-developer workspace settings that aren't committed to the repository. Overrides settings.json, intended to be .gitignore'd.

2. **Customizable REH commit hash** (`ZP-F39A`) — Allows overriding the commit hash VS Code reports when connecting to a Remote Extension Host, preventing connection rejections due to version mismatch.

3. **Globally accessible configuration service** (`ZP-D03B`) — A lightweight utility that makes the configuration service globally accessible, simplifying patches that need to read settings without threading the service through.

### Chat / AI Enhancements

4. **Hold-to-switch model/mode** (`ZP-43D0`) — Hold Cmd/Ctrl or Alt/Option in the chat input to **temporarily** switch to a different AI model or agent mode. Release the key to revert. Configurable via `chat.editing.HoldCmdKeyAction` and `chat.editing.holdOptionKeyAction`. Supports `switchModel`, `switchModel:<id>`, and `switchMode:<id>` actions, including resolution of relative `vscode-userdata:` paths for custom agent modes.

5. **Show model name during streaming** (`ZP-05BF`) — Displays the active language model's name in the chat response footer while the response is still being generated, before `result.details` is available.

6. **Show cost/usage in chat messages** (`ZP-2C20`) — Displays token usage (prompt tokens ↑ / completion tokens ↓) in each chat response footer, with a compact `kt`/`mt` format. Controlled by `chat.showMoreResponseDetails`.

7. **Export all chat sessions** (`ZP-8B1A`) — Adds a "Export All Chat Sessions..." command (`workbench.action.chat.exportAll`) that bulk-exports every chat session in the workspace into individual JSON files in a chosen folder.

8. **Customizable chat view foreground color** (`ZP-A612`) — Registers a `chat.foreground` theme color, allowing themes to customize the foreground color of the chat panel independently from the sidebar.

### Editor Visual Refinements

9. **Rounded corners for highlights** (`ZP-B47C`) — Applies `border-radius: 3px` to word highlights, find matches, squiggly decorations, search results, and ghost text, giving them a softer look.

10. **Clean error/warning underlines (no squigglies)** (`ZP-0FE1`) — Replaces the wavy squiggly underlines for errors, warnings, info, and hints with clean straight underlines, resulting in a less noisy editor.

11. **Dotted indent guides** (`ZP-162E`) — Replaces the default solid indent guides with dotted lines, for a subtler visual appearance.

12. **Eye-catching folded code indicator** (`ZP-3B2F`) — Replaces the default `...` fold placeholder with a small rounded pill indicator (background-colored badge), inspired by Xcode and Sublime Text.

13. **Bracket matching underline only** (`ZP-051C`) — Changes bracket matching highlight to underline-only, removing the background highlight for a cleaner look.

14. **Responsive editor font size by window width** (`ZP-E468`) — A new `editor.fontSizeByMaxWindowWidth` setting (and `diffEditor.fontSizeByMaxWindowWidth`) that automatically adjusts font size based on breakpoints tied to window width. Example: `{"1440": 14.5, "1380": 14}` uses 14px when the window is ≤1380px wide.

15. **Customizable diff editor font size** (`ZP-DEFS`) — Adds a standalone `diffEditor.fontSize` setting, allowing the diff editor to use a different font size than the main editor.

16. **Git diff gutter on the left of line numbers** (`ZP-E30D`) — Moves the dirty diff (git change) gutter indicators to the left of the line numbers, similar to Sublime Text, so they don't collide with folding controls.

17. **Customizable bookmark glyph icon** (`ZP-C057`, `ZP-8E77`) — Includes the decoration description in the glyph margin CSS class name, enabling CSS-based customization of bookmark icons via patch CSS.

18. **Token background color fix** (`ZP-8A90`) — Backport of a fix ([PR #212294](https://github.com/microsoft/vscode/pull/212294)) for proper background color rendering in tokens.

### UI / Layout Polish

19. **Compact panel headers (28px)** (`ZP-3528`) — Reduces the height of sidebar/panel title headers from the default to 28px for a more compact UI.

20. **No pointer cursor on non-interactive elements** (`ZP-0782`) — Removes the pointer cursor from many non-interactive elements (sticky scroll, find widget, folding icons, status bar, tree views, toggles, dirty diff decorations, etc.) for more accurate cursor feedback.

21. **Hide remote icon when not connected** (`ZP-804C`) — Hides the remote indicator icon from the status bar when not connected to a remote, reducing visual noise.

22. **Auto-hide sidebar top tab** (`ZP-AF32`) — CSS to hide the top Activity Bar tab in the sidebar when only one item is present (currently commented out but ready to enable).

23. **Dimmed inactive toggle icons** (`ZP-A5E9`) — Dims toggle icons when they are not active, using the active border color as the inactive color, for clearer visual state.

24. **Sidebar tree item opacity** (`ZP-73AF`) — Applies subtle opacity treatment to sidebar tree items (not affecting things like the command palette list), working with the Spacegray theme for a refined look.

25. **Prioritize explorer pane on collapse** (`ZP-CF73`) — When collapsing a sidebar pane, redistributes the freed space to the Explorer pane instead of distributing it evenly, keeping the file tree maximally visible.

26. **Cycle auxiliary bar widths** (`ZP-CA8A`) — A "Cycle Secondary Side Bar Display" command that cycles the auxiliary bar through configurable widths (including hiding at width 0). Supports breakpoint-based widths like `{"0": 300, "1440": 320}` via `workbench.secondarySideBar.cycleWidths`.

27. **Inline chat border color fix** (`ZP-0221`) — Makes the inline chat border color properly configurable via theme colors.

### Theming & Defaults

28. **Spacegray theme suite** — A bundled first-party theme (`theme-spacegray`) providing:
    - **Spacegray Dark** and **Spacegray Light** color themes (set as defaults)
    - **Spacegray file icon theme** (default)
    - **Carbon Icons product icon theme** (default)

29. **Refined default settings** (`ZP-35AB`, `ZP-64AF`) — Opinionated out-of-the-box defaults:
    - Default font size: **15px** on macOS (up from 12), **16px** on other platforms
    - Default color theme: **Spacegray Dark/Light** instead of Default Dark/Light Modern
    - Default file icon theme: **Spacegray**
    - Default product icon theme: **Carbon Icons**
    - Line highlight: **gutter only** instead of full line
    - Minimap slider: **always visible** instead of on mouseover

30. **"Set Syntax" label** (`ZP-BEF1`) — Renames "Change Language Mode" to "Change Language Mode (Set Syntax)" in the command palette, making it more discoverable for users coming from Sublime Text.

31. **ThemeColors type generation** (`ZP-11FC`) — Auto-generates a TypeScript type definition (colors.ts) for all registered theme colors, providing type-safe access to color IDs for themed extensions.

### Git Enhancements

32. **Disable commit button without staged changes** (`ZP-0F44`) — Adds a `git.requireStagedChangesToCommit` setting. When enabled, the commit button is disabled if there are no staged changes, preventing accidental commits of all changes.

### Remote Development

33. **Copilot extensions run locally by default** (`ZP-86CE`) — Configures GitHub Copilot and Copilot Chat extensions to run on the local (UI) machine by default when connected to a remote, improving responsiveness.

### Content Typography

34. **Walkthrough content typography** (`ZP-FB7D`) — Applies enhanced typography styles to walkthrough/welcome content for better readability.

35. **Inline code block font size adjustment** (`ZP-4DEA`) — Uses 12px as the default font size for inline code blocks in markdown tooltips/hovers (since the increased 15px macOS default would be too large in those compact contexts).


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
