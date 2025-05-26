# Component

A **component** is any situation-relevant thing on a Wardley Map. Components can be activities (what you do), practices (how you do it), data, or knowledge. There is no single right level of granularity—if something is important, it deserves a symbol on the map. Components can be broken down into smaller components as needed.

## Syntax

```text
component Name [Visibility, Maturity]
```

- **Name**: The label for the component.
- **Visibility (Y Axis)**: How visible the component is to the anchor/user.
- **Maturity (X Axis)**: The component's stage of evolution (see Evolution).

## Example

```text
component Component 1 [0.68, 0.54]
component Component 2 [0.78, 0.54]
component Component 3 [0.59, 0.54]
component Component 4 [0.50, 0.54]
```

## Visual Example

![Component Example](/img/component.png)


:::tip
If you get the granularity wrong, you will learn and adjust. Mapping is an iterative craft.
:::

## Interactive Features

### Moving and Renaming Components

Components can be moved and renamed both through the text editor and directly on the map interface. For details about these interactive features, see [Component Drag and Drop](../map-features/drag-drop-rename.md).
