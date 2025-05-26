---
sidebar_position: 7
---

# Inertia

**Inertia** represents resistance to change for components on your Wardley Map. Components marked with inertia indicate areas where change is slow or difficult.

## Syntax

You can mark a component with inertia by adding the `inertia` keyword or by enclosing it in parentheses.

### Examples

```plaintext
component Component 1 [0.68, 0.34] (inertia)
component Component 2 [0.78, 0.54] inertia
component Component 3 [0.59, 0.54] (inertia)
component Component 4 [0.50, 0.54] inertia 
evolve Component 1->NewComponent 0.9
evolve Component 2 0.9
```

## Visual Example

![Inertia Example](/img/inertia.png)


## Behaviour

Components with inertia are visually distinguished on the map to highlight resistance to change.