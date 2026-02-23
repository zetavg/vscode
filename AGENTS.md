# VS Code Agents Instructions

This file provides instructions for AI coding agents working with the VS Code codebase.

For detailed project overview, architecture, coding guidelines, and validation steps, see the [Copilot Instructions](.github/copilot-instructions.md).

## Special Instructions (Important)

You are not working with the official VS Code. Instead, you are working with a customized version of VS Code designed to support specific use cases and to experiment with new features. Therefore, we need to make our changes easily rebase-able on top of the upstream. To achieve this, follow these guidelines:

1. **Minimize the scope of your changes.** Prefer approaches that touch fewer files and fewer existing lines of code. When possible, achieve your goal by adding new files or new code blocks rather than weaving modifications into existing upstream code — additions are far less likely to cause merge conflicts than edits to existing lines.

2. **Mark every change with a patch identifier.** For each logically distinct change, add a comment with the format `[ZP-<patch-identifier>] <description of the change>`. This allows us to identify, track, and manage our patches across the codebase.

   * Use the comment syntax appropriate to the file type:
     * CSS: `/* [ZP-804C] Hide the remote icon on the status bar when not connected to a remote. */`
     * TypeScript: `// [ZP-804C] Hide the remote icon on the status bar when not connected to a remote.`
		 * Pure JSON: `"//": "[ZP-804C] Hide the remote icon on the status bar when not connected to a remote.",`
   * A single patch identifier should be used consistently across all files for changes that serve the same purpose.
   * **Every `[ZP-<id>]` comment must include a short description** — never leave a bare identifier like `// [ZP-XXXX]`. Always write `// [ZP-XXXX] Short description of what this patch does` so the purpose of the change is immediately clear without having to search for context.
   * **The description on the `[ZP-<id>]` line must be the same canonical text everywhere the patch ID appears.** Pick one concise description when creating the patch and repeat it verbatim at every occurrence. If a particular site needs additional context, put that explanation on subsequent comment lines — never vary the text that follows the `[ZP-<id>]` tag itself.
   * To generate a new patch identifier, run: `openssl rand -hex 2 | tr '[:lower:]' '[:upper:]'`. After generating one, search the codebase for existing identifiers to avoid duplicates.

3. **Do not delete or modify upstream code lines.** Instead, comment them out, and add your new code below. This preserves the original code for later reference and allows us to easily identify our changes.

4. **Never modify upstream `*.css` files directly.** Instead, edit the corresponding `*.patch.css` file next to the original. If the `*.patch.css` file does not exist yet, create it and then update **every place** that imports the original CSS file so that it also imports the patch CSS file immediately after the original import. This keeps upstream CSS files untouched and conflict-free during rebases.

5. **Always prioritize rebase-ability.** Before implementing a change, ask yourself:
   * Can this change survive upstream updates with minimal or no conflicts?
   * Is there a less invasive approach that achieves the same goal?
   * Am I modifying a file or code path that is likely to change frequently upstream?

   Prefer strategies that decouple our modifications from upstream code as much as possible.

### Writing Patch Descriptions

Patch descriptions (the text after `[ZP-<id>]`) should be **high-level and user-facing** — written so that someone without knowledge of the implementation can understand what the change does. Describe the *what* and *why* from the user's perspective, not the *how*.

   * **Good:** `Let quick file navigation (Cmd+P) respect search.exclude un-ignored (false) patterns`
   * **Bad:** `Supplemental ripgrep for search.exclude un-ignored (false) patterns` — mentions internal tooling (ripgrep) that is an implementation detail, not a user-visible concept.

Implementation details (e.g. which tool is spawned, which API is called) belong in subsequent comment lines below the `[ZP-<id>]` tag, not in the canonical description itself.

### Tricks to Minimize Changed Lines

Instead of doing this:

```diff
                state1.repositoryHasChangesToCommit === state2.repositoryHasChangesToCommit &&
-               state1.repositoryHasUnresolvedConflicts === state2.repositoryHasUnresolvedConflicts;
+               state1.repositoryHasUnresolvedConflicts === state2.repositoryHasUnresolvedConflicts &&
+               state1.repositoryHasStagedChanges === state2.repositoryHasStagedChanges; // <comment>
```

Do this:

```diff
                state1.repositoryHasChangesToCommit === state2.repositoryHasChangesToCommit &&
+               state1.repositoryHasStagedChanges === state2.repositoryHasStagedChanges && // <comment>
                state1.repositoryHasUnresolvedConflicts === state2.repositoryHasUnresolvedConflicts;
```

Instead of doing this:

```diff
		this._state = {
                        repositoryHasChangesToCommit: false,
-                       repositoryHasUnresolvedConflicts: false
+                       repositoryHasUnresolvedConflicts: false,
+                       repositoryHasStagedChanges: false // <comment>
                };
```

Do this:

```diff
		this._state = {
+                       repositoryHasStagedChanges: false // <comment>
                        repositoryHasChangesToCommit: false,
                        repositoryHasUnresolvedConflicts: false
                };
```
