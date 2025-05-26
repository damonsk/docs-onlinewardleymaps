---
sidebar_position: 1
---

# OnlineWardleyMaps

The source code that runs [www.OnlineWardleyMaps.com](https://www.onlinewardleymaps.com). Also available as a standalone Visual Studio Code extension—[vscode-wardley-maps](https://github.com/damonsk/vscode-wardley-maps)—and as an [Obsidian plugin](https://github.com/damonsk/obsidian-wardley-maps).

Wardley Mapping courtesy of Simon Wardley, CC BY-SA 4.0. To learn more, see [Simon's book](https://medium.com/wardleymaps/on-being-lost-2ef5f05eb1ec).

## What is OnlineWardleyMaps?

OnlineWardleyMaps is a tool for creating, editing, and sharing Wardley Maps directly in your browser. It helps you visualize value chains, component evolution, and strategic context using a simple, expressive DSL (Domain Specific Language).

- **Interactive map editor**
- **Text-based DSL for versioning and sharing**
- **Export/import, submaps, and more**

## Running Locally

You will need [Node.js](https://nodejs.org/en/download/) and Yarn.

First, clone the repository:

```bash
git clone https://github.com/damonsk/onlinewardleymaps.git
cd onlinewardleymaps
```

Install Yarn (if you don't have it):

```bash
npm install yarn -g
```

Change directory to the frontend:

```bash
cd frontend/
```

Install dependencies:

```bash
yarn install
```

To run locally (for development/editing), open your browser at [http://localhost:3000](http://localhost:3000):

```bash
yarn dev
```

To create a minified build:

```bash
yarn build
```

To run all tests:

```bash
yarn test
```

To create a package for use in [vscode-wardley-maps](https://github.com/damonsk/vscode-wardley-maps) or [obsidian-wardley-maps](https://github.com/damonsk/obsidian-wardley-maps):

```bash
yarn package
```

## Support the Project

If you find [obsidian-wardley-maps](https://github.com/damonsk/obsidian-wardley-maps), [OnlineWardleyMaps](https://github.com/damonsk/onlinewardleymaps), or [vscode-wardley-maps](https://github.com/damonsk/vscode-wardley-maps) valuable, consider supporting its development:

[![Become a Patron](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/mapsascode/overview)

Follow on X (Twitter) [@MapsAsCode](https://x.com/mapsascode) for updates and announcements!

Your support helps maintain and improve this plugin as well as OnlineWardleyMaps and vscode-wardley-maps. Every contribution is appreciated. Thank you for your support!

---

Mentioned in [Awesome Wardley Maps](https://github.com/wardley-maps-community/awesome-wardley-maps#apps)

Developed by [Damon Skelhorn](https://linkedin.com/in/skels).
