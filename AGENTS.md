# VS Code Agents Instructions

This file provides instructions for AI coding agents working with the VS Code codebase.

For detailed project overview, architecture, coding guidelines, and validation steps, see the [Copilot Instructions](.github/copilot-instructions.md).

## Special Instructions (Important)

You are not working with the official VS Code. You are working with a **customized fork** designed to support specific use cases and experiment with new features. All changes to upstream code must be made in a way that survives future rebases on upstream with minimal conflicts.

**Before modifying any upstream code, follow the `patch-software` skill.** #USE_PATCH_SOFTWARE_SKILL

### Project-specific overrides on the skill

- **Patch ID prefix:** Use `ZP-` for this project (not the skill's default `PT-`). Patch IDs look like `[ZP-804C]`, and patch commit messages look like `[patch][ZP-804C] <canonical-description>`.

Everything else — rebase-ability principles, canonical descriptions, comment syntax per file type, patch isolation, the technique for minimizing changed lines, and the "before you finish" checklist — is defined by the skill. Do not restate it here.

## Project-specific patch conventions

These are conventions that are not covered by the `patch-software` skill.

### CSS patches: wrap rules in `body:not(.disable-patch-<code>)`

Every rule inside a `*.patch.css` file must be wrapped so that the patch can be disabled at runtime by adding the class `disable-patch-<code>` to the `<body>` element. The `<code>` is the same hex code as the patch ID.

Example — [src/vs/workbench/contrib/codeEditor/browser/outline/documentSymbolsTree.patch.css](src/vs/workbench/contrib/codeEditor/browser/outline/documentSymbolsTree.patch.css):

```css
/* [ZP-TL0C] Do not let error or warnings affect the title label color. */
body:not(.disable-patch-TL0C) {
	.monaco-list .outline-element .monaco-highlighted-label {
		color: inherit;
	}
}
```

If a single `*.patch.css` file contains rules from multiple patches, each block gets its own `body:not(.disable-patch-<code>)` wrapper with the code that matches its own patch ID.

### Split the `.patch.css` skeleton from rule commits

When introducing a new `*.patch.css` file, separate the **skeleton** (file creation + import wiring) from the **rules**:

1. **Skeleton commit** — create an empty `*.patch.css` next to the upstream file, and update **every** place that imports the original CSS to also import the patch CSS file immediately after the original import. This commit contains no rules and no patch ID.

   Commit message: `[patch][.patch.css] add empty <name>.patch.css and wire import`

2. **Rule commits** — each logical CSS change is a separate commit with its own `[ZP-XXXX]` patch ID, adding a `body:not(.disable-patch-XXXX) { … }` block to the patch file.

   Commit message: `[patch][ZP-XXXX] <canonical-description>`

This way, rule commits can be dropped or reordered without losing the import wiring underneath them. The skeleton is intentionally foundational; rule commits build on top of it.

### Changes to code we own — no patch ID

Code that originates with us (not upstream) does **not** need a patch ID. Each change still goes in its own commit, separate from upstream patches.

Currently the only such area is:

- `extensions/theme-spacegray`

Commit message format: `[patch][<scope>] <description>`, where `<scope>` is the area name. For example: `[patch][theme-spacegray] tweak comment color`. The bracketed scope replaces the patch ID slot.

### Changes to `product.json` — no patch ID

Edits to `product.json` do **not** need a patch ID. Use the commit message format:

```
[patch][product.json] <description>
```

Example: `[patch][product.json] add trustedExtensionAuthAccess in product.json to fix Copilot Chat login issue`.

### Code patches: opt into `z.patches.disabled` when reasonable

The `[ZP-D15A]` infrastructure adds the user setting `z.patches.disabled` (array of 4-char alphanumeric patch codes). For each code present, the class `disable-patch-<code>` is added to the `<body>` element.

CSS patches automatically participate because every `*.patch.css` rule is wrapped in `body:not(.disable-patch-<code>)`.

**Code-based patches** (TypeScript) that change behavior in a way a user might reasonably want to turn off should also opt into this mechanism, unless the patch already has its own dedicated setting. Two equivalent approaches:

1. Read the setting directly via `IConfigurationService`:

   ```ts
   const disabled = configurationService.getValue<string[]>('z.patches.disabled') ?? [];
   if (disabled.map(c => c.trim().toUpperCase()).includes('XXXX')) {
       return; // skip patch logic
   }
   ```

2. Check the body class (no DI needed if you already have a DOM reference):

   ```ts
   if (mainWindow.document.body.classList.contains('disable-patch-XXXX')) {
       return;
   }
   ```

A patch is **not required** to support this — small, low-risk, or load-bearing patches can ignore it. When in doubt, opt in.
