---
sidebar_position: 2
---

# Component

A **component** is any situation-relevant thing on a Wardley Map. Components can be activities (what you do), practices (how you do it), data, or knowledge. There is no single right level of granularity—if something is important, it deserves a symbol on the map. Components can be broken down into smaller components as needed.

> "Any situation-relevant thing can be a component. Simon Wardley differentiates between Activities, Practices, Data & Knowledge." ([wardleymaps.com](https://www.wardleymaps.com/intro))

## Syntax

```text
component Name [Visibility, Maturity]
```

- **Name**: The label for the component.
- **Visibility (Y Axis)**: How visible the component is to the anchor/user.
- **Maturity (X Axis)**: The component's stage of evolution (see Evolution).

## Example

```text
component Customer [0.9, 0.5]
```

**Tip:** If you get the granularity wrong, you will learn and adjust. Mapping is an iterative craft.

## Interactive Features

### Moving Components

You can move components on the map in two ways:

1. Edit the coordinates in the text editor
2. Use CMD+Drag (macOS) or CTRL+Drag (Windows/Linux) to move components directly on the map interface

:::note
If you accidentally move a component, you can press ESC to revert the last move operation.
:::

### Renaming Components

You can rename components in two ways:

1. Edit the component name in the text editor
2. Double-click the component label on the map to rename it directly
   - Press Enter to accept the new name
   - Press ESC to cancel the rename operation
