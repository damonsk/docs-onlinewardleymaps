# Website Documentation for OnlineWardleyMaps

This documentation website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

This site provides comprehensive documentation for [onlinewardleymaps.com](https://onlinewardleymaps.com), including details about the Domain Specific Language (DSL) used to create Wardley Maps, as well as information on the related plugins available for Visual Studio Code and Obsidian.

## What is OnlineWardleyMaps?

OnlineWardleyMaps is a visual interpreter and editor for the Wardley Maps DSL, enabling users to create, edit, and visualise Wardley Maps interactively.

## Documentation Coverage

- The DSL syntax and usage examples
- Features and quick add links
- Plugins for VSCode and Obsidian
- Tips, tricks, and release notes

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
