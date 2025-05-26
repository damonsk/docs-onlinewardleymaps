---
sidebar_position: 4
---

# VS Code Wardley Maps Extension

The [VS Code Wardley Maps extension](https://marketplace.visualstudio.com/items?itemName=damonsk.wardley-maps) enables you to create, edit, and visualize Wardley Maps directly within Visual Studio Code using the OnlineWardleyMaps DSL.

## Features

- Render Wardley Maps from DSL code blocks in `.wardleymap` or markdown files
- Live preview and editing
- Export maps as images
- Syntax highlighting and code completion
- Support for submaps, annotations, and more

## Getting Started

1. Install the extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=damonsk.wardley-maps)
2. Open a `.wardleymap` file or add a `wardleymap` code block to a markdown file
3. Start mapping!

## Example

````markdown
```wardleymap
title Tea Shop
anchor Business [0.95, 0.63]
anchor Public [0.95, 0.78]
component Cup of Tea [0.79, 0.61]
component Cup [0.73, 0.78]
component Tea [0.63, 0.81]
component Hot Water [0.52, 0.80]
component Water [0.38, 0.82]
component Kettle [0.43, 0.35]
evolve Kettle->Electric Kettle 0.62
component Power [0.1, 0.7]
evolve Power 0.89
Business->Cup of Tea
Public->Cup of Tea
Cup of Tea->Cup
Cup of Tea->Tea
Cup of Tea->Hot Water
Hot Water->Water
Hot Water->Kettle
Kettle->Power
note +a generic note appeared [0.23, 0.33]
style wardley
size [800,400]
```
````

## License

This project is licensed under the [AGPL-3.0 license](https://github.com/damonsk/vscode-wardley-maps/blob/master/LICENSE).

## Support the Project

If you find [vscode-wardley-maps](https://github.com/damonsk/vscode-wardley-maps), [OnlineWardleyMaps](https://github.com/damonsk/onlinewardleymaps), or [obsidian-wardley-maps](https://github.com/damonsk/obsidian-wardley-maps) valuable, consider supporting its development:

[![Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/mapsascode/overview)

Follow on X (Twitter) [@MapsAsCode](https://x.com/mapsascode) for updates and announcements!

Your support helps maintain and improve this extension as well as OnlineWardleyMaps and obsidian-wardley-maps. Every contribution is appreciated. Thank you for your support!
