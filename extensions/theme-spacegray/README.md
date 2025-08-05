Run `npx tsx extensions/theme-spacegray/themes/generate.ts` to generate the themes.

You can also use this if you have `chokidar-cli` installed:

```
chokidar "extensions/theme-spacegray/themes/**/*.ts" -c "npx tsx extensions/theme-spacegray/themes/generate.ts"
```

To get something like the "Fast Refresh" development experience, you can have the generated theme be written into the `workbench.colorCustomizations` key under your VS Code settings file. This way, you can see the changes in real-time:

```
chokidar "extensions/theme-spacegray/themes/**/*.ts" -c "npx tsx extensions/theme-spacegray/themes/write-into-user-settings.ts ~/Library/Application\ Support/code-oss-dev/User/settings.json"
```

Replace `~/Library/Application\ Support/code-oss-dev/User/settings.json` with the path to your VS Code settings file. Please note that this will overwrite the `workbench.colorCustomizations` key in your settings file, and re-format it.

To switch between light and dark themes while using this, modify the `DEFAULT_THEME_TYPE` constant in `write-into-user-settings.ts`.
