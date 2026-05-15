# [ZP-D15A] Disable patches via user setting

Provides the `z.patches.disabled` user setting — an array of patch codes (4-char hex, e.g. `"D15A"`) that should be disabled at runtime.

For each code in the array, the class `disable-patch-<code>` is added to `<body>`. Every `*.patch.css` rule is wrapped in `body:not(.disable-patch-<code>)`, so CSS patches turn off automatically. Code-based patches can opt into the same mechanism by checking the body class or reading the setting.

See `AGENTS.md` for the convention code patches should follow to participate.
