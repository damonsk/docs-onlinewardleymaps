---
sidebar_position: 4
---

# DSL Reference

OnlineWardleyMaps uses a Domain Specific Language (DSL) that enables you to create Wardley Maps using text. This reference guide covers all the available DSL commands and their syntax.

## Map Components

### Components

Components are the basic building blocks of a Wardley Map. They represent the various elements in your value chain.

```dsl
component Customer [1, 0.4]
component Server [0.5, 0.8]
component Database [0.3, 0.6]
```

The numbers in brackets represent [visibility, maturity]:
- Visibility: 0 (invisible) to 1 (visible)
- Maturity: 0 (genesis) to 1 (commodity)

:::tip Tip
You can omit the coordinates to use default values: `component Database`
:::

### Evolution and Inertia

Mark components as evolving or facing inertia:

```dsl
component Authentication [0.9, 0.1] inertia
component Database [0.3, 0.6] evolve 0.8
```

The number after `evolve` indicates the target maturity.

### Pipelines

Group related components into pipelines:

```dsl
pipeline Payment [0.05, 0.95]
component Authentication [0.3, 0.6]
component PaymentGateway [0.3, 0.8]
```

The numbers represent [start maturity, end maturity] of the pipeline.

:::note
Components within the maturity range will be grouped in the pipeline
:::

## Relationships

### Links

Create connections between components:

```dsl
Customer->Server
Database+>Server
Authentication->PaymentGateway; Secure connection
```

- `->` Basic link
- `+>` Flow link (with arrow)
- Add context after `;`

### Submaps

Create nested maps or references to other maps:

```dsl
submap OrderSystem [0.11, 0.31]
submap PaymentFlow [0.83, 0.50] url(submapUrl)
url submapUrl [https://onlinewardleymaps.com/#clone:qu4VDDQryoZEnuw0ZZ]
```

:::tip Positioning
Add label positioning with `label [x, y]`:
```dsl
submap OrderSystem [0.11, 0.31] label [-15, 30]
```
:::

## Annotations

### Notes

Add text notes to your map:

```dsl
note This is a map note [0.9, 0.1]
note Technical debt area [0.2, 0.8]
```

### Annotations

Create numbered annotations with multiple points:

```dsl
annotation 1 [[.38, .4],[0.44, 0.33]] Standardising power allows evolution
annotation 2 [[.5, .5]] Critical decision point
```

## Map Settings

### Size and Style

Configure map dimensions and appearance:

```dsl
size [1024, 768]
style wardley
```

### Accelerators and Deaccelerators

Mark areas of acceleration or deceleration:

```dsl
accelerator innovation [0.2, 0.6]
deaccelerator legacy [0.8, 0.2]
```

### URLs and Anchors

Define reference points and links:

```dsl
url Documentation [https://onlinewardleymaps.com/docs]
anchor ReferencePoint [0.9, 0.1]
```

## Best Practices

1. **Organisation**: Group related components together using pipelines
2. **Evolution**: Use `evolve` to show planned changes
3. **Context**: Add notes to explain complex relationships
4. **Visibility**: Place user needs near the top (high visibility)
5. **Maturity**: Align components along the x-axis based on their evolution stage

:::danger Common Mistakes
- Avoid overlapping components by spacing coordinates
- Don't mix up visibility (y) and maturity (x) coordinates
- Remember to define URLs before referencing them in submaps
:::

## Example Map

Here's a complete example combining various elements:

```dsl
title Payment System Map
style wardley

component Customer [0.95, 0.2]
component Website [0.8, 0.6]
component Payment [0.6, 0.8]
component Database [0.4, 0.7]

pipeline Processing [0.5, 0.9]
component Authentication [0.6, 0.6] inertia
component Gateway [0.6, 0.8] evolve 0.9

Customer->Website
Website->Payment
Payment->Authentication
Authentication->Gateway
Gateway->Database

note Legacy system [0.4, 0.7]
annotation 1 [[0.6, 0.8]] Modernisation needed

submap PaymentFlow [0.7, 0.5] label [-10, 20]
```
