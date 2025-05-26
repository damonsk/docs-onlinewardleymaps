# Build, Buy, Outsource

**Build, Buy, Outsource** are execution strategies for components. They help you highlight how a component will be delivered—whether you will build it in-house, buy it from a supplier, or outsource it to a third party.

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

:::tip
Use these strategies to clarify sourcing decisions and communicate intent.
:::

## Using with Markets

Method decorators can be combined with markets to indicate execution strategy for market components:

```text
evolve MarketName 0.9 (market, buy)
```

When using method decorators, the component's label spacing is automatically adjusted:

- Label position shifts (x: +10, y: -20)
- Spacing increases to improve visibility
- This applies to both regular components and markets

### Examples with Markets

```text
evolve CustomerMarket 0.9 (market, buy)
component SupplierMarket [0.8, 0.6] (market, outsource)
```

:::tip
The label spacing adjustment happens automatically for any component using `build`, `buy`, or `outsource` decorators.
:::
