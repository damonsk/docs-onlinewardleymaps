---
sidebar_position: 5
---

# Links & Flows

**Links** (or flows) represent dependencies between components. In Wardley Mapping, a component higher on the map depends on a component lower down. These dependencies form the value chain, showing how needs are met through supporting capabilities.

> "Components might depend on each other. Usually, a component which is higher on the map depends on a component that is lower on the map." ([wardleymaps.com](https://www.wardleymaps.com/intro))

On a map, you do not usually write "depends on"—the direction of the link implies the dependency.

## Syntax

```text
Start Component->End Component
Start Component+<>End Component
Start Component+<End Component
Start Component+>End Component
Start Component+'label'>End Component
```

## Example

```text
Customer->Cup of Tea
Hot Water+'$0.10'>Kettle
```

**Tip:** Only add dependencies that are important for your story. Mapping is about revealing what matters.
