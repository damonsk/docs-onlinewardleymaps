# Build, Buy, Outsource

**Build, Buy, Outsource** are execution strategies for components. They help you highlight how a component will be delivered—whether you will build it in-house, buy it from a supplier, or outsource it to a third party.

## Syntax

```text
component <component> [visibility, maturity] (build)
component <component> [visibility, maturity] (buy)
component <component> [visibility, maturity] (outsource)
```

- **build**: Indicates the component is to be built in-house.
- **buy**: Indicates the component is to be purchased.
- **outsource**: Indicates the component is to be outsourced.
- You can also annotate a component directly with (build), (buy), or (outsource).

## Example

```text
component Customer [0.9, 0.2] (buy)
```

:::tip
Use these strategies to clarify sourcing decisions and communicate intent.
:::

When using method decorators, the component's label spacing is automatically adjusted:

- Label position shifts (x: +10, y: -20)
- Spacing increases to improve visibility
- This applies to both regular components and markets

:::tip
The label spacing adjustment happens automatically for any component using `build`, `buy`, `market` or `outsource` decorators.
:::
