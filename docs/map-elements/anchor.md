# Anchor

Every map starts with an **anchor**—the user or stakeholder need. This sets the context for all dependencies and components below.

```text
anchor Business [0.95, 0.63]
```

:::tip
Start every map by identifying the anchor and their needs. This sets the context for all dependencies and components below.
:::

A Wardley Map always starts with an **anchor**—the user or stakeholder need. The anchor represents the situation you want to influence, often called the "battle at hand." It is the top-most element in the value chain and all other components ultimately serve this need.

In a competitive business landscape map, instead of magnetic North, the anchor is the User being served and their corresponding needs. This context-specific focus ensures the map reflects the right perspective and strategic priorities.

## Syntax

```text
anchor Name [Visibility (Y Axis), Maturity (X Axis)]
```

- **Name**: The user, stakeholder, or need.
- **Visibility (Y Axis)**: How visible the anchor is (usually 1.0 for the user).
- **Maturity (X Axis)**: The stage of evolution (often 0 for the anchor).

## Example

```text
anchor Customer [0.95, 0.63]
anchor Business [0.95, 0.53]
```

## Visual Example

![Anchor Example](/img/anchor.png)
