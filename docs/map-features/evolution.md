---
sidebar_position: 6
---

# Evolution Axis

The evolution axis is a core concept in Wardley Maps, representing how components evolve from left to right through four main stages: Genesis, Custom Built, Product, and Commodity. This axis helps visualize and understand the maturity and predictability of components in your map.

## Understanding Evolution

- **Movement is generally left to right**: Components naturally evolve from genesis toward commodity over time
- **Position is relative**: The exact position depends on your context and timescale
- **Evolution can vary**: Different industries or contexts may evolve at different rates
- **Commoditization**: Movement toward commodity status often leads to standardization and cost reduction

:::tip
Use the evolution axis to challenge assumptions about component maturity and plan for future changes in your landscape.
:::

## Evolution Stage Variations

Different types of components may use different evolution terminology depending on their nature. Here are the common variations:

### Activities

```text
evolution Genesis->Custom->Product->Commodity
```

### Practices

```text
evolution Novel->Emerging->Good->Best
```

### Data

```text
evolution Unmodelled->Divergent->Convergent->Modelled
```

### Knowledge

```text
evolution Concept->Hypothesis->Theory->Accepted
```

## Syntax and Usage

You can customize the evolution labels in your map:

```text
evolution Genesis->Custom->Product->Commodity
```

### Mix & Match

You can mix and match these terms based on what you're mapping. For example:

```text
# For a technology-focused map
evolution Novel->Custom->Product->Commodity

# For a data-centric map
evolution Unmodelled->Divergent->Convergent->Modelled

# For a research/knowledge map
evolution Concept->Hypothesis->Theory->Accepted
```

### Using Emoji in Evolution Labels

You can use emoji to make evolution stages more visually distinctive:

```text
evolution 🧪 Genesis -> ⚒️ Custom -> 🛒 Product -> ⛽ Commodity
```

## Evolving Components

Components can move along the evolution axis as they mature. Use the evolve syntax to show this movement:

```text
# Move a component to a new evolution position
evolve ComponentName 0.8

# Move and rename a component
evolve OldName->NewName 0.8
```

### Example

```text
component Physical Space [0.91, 0.46]
evolve Physical Space->Virtual Space 0.8
```
