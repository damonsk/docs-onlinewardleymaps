---
sidebar_position: 6
---

# Evolution & Inertia

The **evolution** axis (horizontal) shows how components move from genesis (novel, unpredictable) to commodity (well-known, ubiquitous). Mapping the stage of evolution helps you understand certainty, market maturity, and strategic options.

> "Evolution is a horizontal axis. Left hand-side is totally unpredictable and rare, right hand side - well-known and ubiquitous." ([wardleymaps.com](https://www.wardleymaps.com/intro))

## Syntax

```text
evolve Name (X Axis)
evolve Name->NewName (X Axis)
component Name [..] inertia
```

- **evolve**: Move a component to a new stage of evolution, optionally renaming it.
- **inertia**: Mark a component as facing resistance to change.

## Example

```text
evolve Physical 0.8
component Customer [0.95, 0.5] inertia
```

**Tip:** Use the evolution axis to challenge assumptions and plan for change.

<!-- moved to map-features/evolution.md -->
