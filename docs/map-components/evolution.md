---
sidebar_position: 6
---

# Evolution & Inertia

The **evolution** axis (horizontal) shows how components move from genesis (novel, unpredictable) to commodity (well-known, ubiquitous). Mapping the stage of evolution helps you understand certainty, market maturity, and strategic options.

## Syntax

```text
evolve Name (X Axis)
evolve Name->NewName (X Axis)
component Name [..] inertia
```

- **evolve**: Move a component to a new stage of evolution. You can optionally specify a new name for the evolved component using the `->` syntax.
- **inertia**: Mark a component as facing resistance to change.

## Examples

### Basic Evolution

```text
evolve Physical 0.8
component Customer [0.95, 0.5] inertia
```

### Evolution with Renaming

```text
evolve Physical Space->Virtual Space 0.8
```