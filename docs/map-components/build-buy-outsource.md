---
sidebar_position: 7
---

# Build, Buy, Outsource

**Build, Buy, Outsource** are execution strategies for components. They help you highlight how a component will be delivered—whether you will build it in-house, buy it from a supplier, or outsource it to a third party.

> "Highlight a component with a build, buy, or outsource method of execution." ([wardleymaps.com](https://www.wardleymaps.com/intro))

## Syntax

```text
build <component>
buy <component>
outsource <component>
component Name [..] (buy)
```

- **build**: Indicates the component is to be built in-house.
- **buy**: Indicates the component is to be purchased.
- **outsource**: Indicates the component is to be outsourced.
- You can also annotate a component directly with (build), (buy), or (outsource).

## Example

```text
component Customer [0.9, 0.2] (buy)
```

**Tip:** Use these strategies to clarify sourcing decisions and communicate intent.
