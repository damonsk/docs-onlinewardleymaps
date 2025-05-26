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
