---
name: patch-software
description: "Only use this skill if you are **explicitly** tasked with patching software. You MUST use this skill if your instructions contains the full keyword `#USE_PATCH_SOFTWARE_SKILL` (not including the backtick)."
---

# Patch Software

You are working with a **customized fork** of upstream software. All changes must survive future rebases with minimal unnecessary conflicts. This document defines how to make changes safely and traceably.

## Core Principle: Rebase-ability First

Before implementing any change, ask yourself:

- Can this change survive upstream updates with minimal or no conflicts?
- Is there a less invasive approach that achieves the same goal?
- Am I modifying a file or code path that is likely to change frequently upstream?

Always prefer strategies that decouple our modifications from upstream code.

Prefer approaches that touch fewer files and fewer existing lines. When possible, **add new files or new code blocks** rather than weaving modifications into existing upstream code — additions are far less likely to cause merge conflicts than edits.

### ⚠️ Exception: When Conflicts Are Desirable

The rules above focus on avoiding unnecessary conflicts. But sometimes a conflict is exactly what you want. The worst outcome is not a merge conflict — it is a silent merge that succeeds but breaks at runtime. If an upstream change could invalidate your patch's assumptions, your patch should be structured so that change triggers a conflict or a compile error, rather than merging cleanly and failing later.

## Patch ID

Every patch is marked with a **patch ID** (e.g. `[PT-804C]`) in code comments. This makes each patch visible and traceable — especially when creating new patches in a codebase that already has many, so one can recognize which code belongs to existing patches and avoid coupling unrelated changes. This keeps patches isolated: any patch can be dropped, reordered, or squashed independently.

## Rules You MUST Follow

### 1. Mark Every Change with a Patch ID

Every logically distinct change must carry a comment containing a **patch ID** and a **canonical description**:

```
[<prefix>-<code>] <canonical-description>
```

A patch ID has two parts:

- **Prefix**: Identifies the source of the patches. The default is `PT`, but follow your instructions if a different prefix is specified.
- **Code**: A randomly generated hex string that uniquely identifies this patch. To generate one, run `openssl rand -hex 2 | tr '[:lower:]' '[:upper:]'`, then search the codebase to confirm no duplicates. If you are updating an existing patch, reuse the same patch ID.

The **canonical description** is a short, user-facing summary of the change. It is very likely to be the git commit message for this change.

- Canonical descriptions should be **high-level and user-facing** — written so that someone without knowledge of the implementation can understand what the change does. Describe the _what_ and _why_, not the _how_.
  - **Good:** `[PT-A1B2] Let quick file navigation (Cmd+P) respect search.exclude un-ignored (false) patterns`
  - **Bad:** `[PT-A1B2] Supplemental ripgrep for search.exclude un-ignored (false) patterns` — mentions an implementation detail (ripgrep) that is not a user-visible concept. Implementation details belong in subsequent comment lines below the patch ID.

**Comment syntax by file type for reference:**

| File Type  | Example                                                                         |
| ---------- | ------------------------------------------------------------------------------- |
| TypeScript | `// [PT-804C] Hide the remote icon on the status bar when not connected.`       |
| CSS        | `/* [PT-804C] Hide the remote icon on the status bar when not connected. */`    |
| Pure JSON  | `"//": "[PT-804C] Hide the remote icon on the status bar when not connected.",` |

**Rules for patch comments:**

- Every chunk of code you add or modify must lead with a patch comment. This includes new lines of code and any existing lines you modify.
- Every patch comment should include the canonical description — unless an inline comment is used and including it would reduce readability.
- Use the **same canonical description text** everywhere a patch ID appears. If a specific site needs extra context, put it on subsequent comment lines below.

**Special note:**

- Treat the smallest edited unit as the chunk that needs the patch comment. If you change an import line, decorator, annotation, field declaration, template tag, control-flow line, or similar syntax-only line, that line still counts as a modified chunk and must be led by a patch comment.
- If a single patch edits multiple non-adjacent chunks in the same file, each chunk must carry its own leading patch comment. Do not rely on one earlier comment to cover later edits.
- When in doubt, err on the side of adding one more patch comment. Missing markers are harder to recover from during review than slightly repetitive comments.

#### Why Patch IDs Matter

Patch IDs let us (and future agents reading the code) recognize that a piece of code belongs to a specific patch. This has several practical benefits:

- **Bug fixes can be squashed with their parent patch.** If you fix a bug and notice from the patch comment that the bug was introduced by a specific patch, the fix commit should generally be squashed with that patch's commit. This keeps the total number of commits small and simplifies future rebases.
- **Patch isolation and interaction.** We want the ability to drop any single patch without breaking the others, or to reorder patch commits freely. When you are writing a new patch and encounter code that was modified by a different patch, avoid touching it if possible. If two unrelated patches modify the same lines, they become coupled — dropping or reordering either one becomes difficult.
  - The exception is when a patch is **foundational** — intentionally designed as a base that later patches build upon. In that case, the dependency is by design and acceptable. The concern is unintentional coupling between patches that are supposed to be independent.

### 2. Check for Existing Patch IDs Before Modifying Patched Code

When you are about to modify code that already carries a different patch ID, pause and decide how to proceed:

- **Unrelated change → keep them separate.** Avoid modifying lines that belong to another patch. If two unrelated patches touch the same lines, they become coupled — dropping or reordering either one becomes difficult.
- **Same logical change → reuse the patch ID.** If your current task is an extension or refinement of the existing patch, reuse its patch ID and plan to squash the commits together later. Always ask for advice or confirmation before moving on.
- **Building on a foundational patch → the dependency is acceptable.** Some patches are intentionally designed as a base that later patches build upon. In that case, modifying or extending code from that patch is expected — the dependency is by design, not accidental coupling. When in doubt, ask for advice.

### 3. Avoid Deleting or Directly Modifying Upstream Code

Instead of deleting upstream lines, **comment them out** and add your new code below. This preserves the original for reference and makes our changes easy to identify.

This preservation rule also applies to **upstream comments** when they are still relevant context. Do not overwrite or silently replace an upstream comment with your patch comment. Keep the upstream comment in place, then add your patch comment immediately above the new code you are introducing.

### 4. Keep Patches Isolated — No Opportunistic Changes

A patch must touch only the **minimal surface** required to achieve its goal. Do not sneak in unrelated changes, even if they look like improvements. Specifically:

- **No drive-by type or lint fixes.** Do not correct type annotations, eslint warnings, or formatting issues in surrounding code unless the patch cannot compile or work without them.
- **No opportunistic refactors or cleanups.** Renaming variables, extracting helpers, reordering imports, or restructuring code that is not part of the patch's purpose must be avoided.
- **No unrelated bug fixes.** If you spot a bug nearby, file it separately — do not fold it into the current one. It's the upstream's responsibility to fix their bugs, not yours.
- **No style or whitespace normalization.** Avoid reformatting lines, adjusting indentation, or changing quote styles on code outside the patch's scope.
- **No dependency or configuration upgrades.** Bumping versions, toggling compiler flags, or updating config files is out of scope unless required by the patch.

**Why this matters:** Every extra changed line increases merge-conflict risk during rebases, makes the patch harder to review, and couples it to unrelated code — all of which undermine the goal of patches being easy to drop, reorder, or port forward.

If an adjacent change truly _is_ necessary for the patch, include it but call it out explicitly in the commit message or patch comment so reviewers understand why.

### 5. Commit Conventions for Patches

When making a commit for a patch, use the following format for the commit message:

```
[patch][PT-XXXX] <canonical-description>
```

Each commit must contain exactly **one logical change** — one patch ID, one purpose. Do not bundle unrelated changes into the same commit, even if they are small. Clean, single-purpose commits make rebasing, squashing, and dropping patches significantly easier.

## Technique: Minimizing Changed Lines

When adding a new field to a series of expressions or object properties (when the coding style doesn't have a trailing comma), **insert your addition before the last existing line** instead of after it. This avoids modifying the last upstream line (e.g. to add a trailing comma or `&&`).

**Example — boolean chain:**

Bad: modifies the last upstream line to append `&&`:

```diff
                state1.repositoryHasChangesToCommit === state2.repositoryHasChangesToCommit &&
-               state1.repositoryHasUnresolvedConflicts === state2.repositoryHasUnresolvedConflicts;
+               state1.repositoryHasUnresolvedConflicts === state2.repositoryHasUnresolvedConflicts &&
+               state1.repositoryHasStagedChanges === state2.repositoryHasStagedChanges; // <comment>
```

Good: inserts before the last line, no upstream line touched:

```diff
                state1.repositoryHasChangesToCommit === state2.repositoryHasChangesToCommit &&
+               state1.repositoryHasStagedChanges === state2.repositoryHasStagedChanges && // <comment>
                state1.repositoryHasUnresolvedConflicts === state2.repositoryHasUnresolvedConflicts;
```

**Example — object literal:**

Bad: modifies the last upstream line to add a trailing comma:

```diff
		this._state = {
                        repositoryHasChangesToCommit: false,
-                       repositoryHasUnresolvedConflicts: false
+                       repositoryHasUnresolvedConflicts: false,
+                       repositoryHasStagedChanges: false // <comment>
                };
```

Good: inserts at the top, no upstream line touched:

```diff
		this._state = {
+                       repositoryHasStagedChanges: false // <comment>
                        repositoryHasChangesToCommit: false,
                        repositoryHasUnresolvedConflicts: false
                };
```

## Before You Finish

When you are going to make a change, put this quick check as the last item in your TODO list:

- Did every modified chunk get its own leading patch comment?
- Did I preserve upstream code by commenting it out instead of replacing it directly, when that was practical?
- Did I preserve upstream comments instead of overwriting them?
- Did I minimize changed lines, especially around trailing commas, boolean chains, imports, and template control flow?
- Did I made opportunistic lint, cleanup, or bug-fix changes outside the minimal surface required for the patch?
