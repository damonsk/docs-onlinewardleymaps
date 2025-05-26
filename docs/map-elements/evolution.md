# Evolution

The **evolution** axis (horizontal) shows how components move from genesis (novel, unpredictable) to commodity (well-known, ubiquitous). Mapping the stage of evolution helps you understand certainty, market maturity, and strategic options.

- **evolve**: Move a component to a new stage of evolution. You can optionally specify a new name for the evolved component using the `->` syntax.

## Syntax

```text
evolve Name (X Axis)
evolve Name->NewName (X Axis)
component Name [..] inertia
```

## Examples

### Basic Evolution

```text
component Physical Space [0.1, 0.4]
evolve Physical Space 0.8
```

### Evolution with Renaming

```text
evolve Physical Space->Virtual Space 0.8
```

## Decorators with Evolution

You can combine evolution statements with decorators to indicate both movement and execution strategy:

```text
evolve ComponentName 0.9 (buy)
evolve ComponentName 0.9 (market, buy)
evolve OldName->NewName 0.8 (outsource)
```

When using decorators with evolution:

- You can use method decorators (`buy`, `build`, `outsource`)
- You can combine with `market` decorator
- Label spacing automatically adjusts as with regular components
- Works with both simple evolution and evolution with renaming

### Examples with Decorators

```text
component Campfire Kettle [0.90, 0.10] (build) 
evolve Campfire Kettle->Electric Kettle 0.62 (buy)
```

:::note
When using method decorators, the label position and spacing automatically adjust for better visibility (x: +10, y: -20).
:::

## Visual Example

![Component Evolution Example](/img/evolution.png)

This example shows how a component can evolve and be renamed, reflecting both its movement along the evolution axis and its transformation into a new form.