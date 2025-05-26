# Market & Ecosystem

A **market** is a special type of component that represents a market context or environment in your map. Markets help you visualize where competition, maturity, and commoditization are taking place.

An **ecosystem** represents a broader interconnected system of markets, components, and actors that interact and influence each other. Ecosystems highlight the complex relationships and dependencies beyond individual markets, showing how multiple markets and components co-evolve.

## Syntax

```text
market Name [Visibility, Maturity]
ecosystem Name [Visibility, Maturity]
```

- **Name**: The market or ecosystem being represented.
- **Visibility (Y Axis)**: How visible the market or ecosystem is to the anchor/user.
- **Maturity (X Axis)**: The market or ecosystem's stage of evolution.

## Example

```text
anchor Client [0.94, 0.56]
component User Experience [0.81, 0.67] 
component Application [0.62, 0.68] 
component Payments [0.53, 0.45] 
market AppStore [0.32, 0.65] 

Client->User Experience
User Experience->Application
Application->AppStore
Application->Payments
Payments->AppStore

note Source: [0.05, 0.01]
note joapen.com/blog/2020/10/02/wardley-maps-the-payment-war-in-the-mobile-app-ecosystem/ [0.02, 0.01]
```

**Tip:** Use markets to highlight where value chains interact with broader environments, and ecosystems to show the larger interconnected systems influencing your map.

## Visual Example

![Market Component Example](/img/market.png)

## Decorators

Markets can be combined with decorators to indicate execution strategy:

```text
evolve MarketName 0.9 (market, buy)
```

When using decorators with markets:

- Use the `market` keyword with a method decorator (`buy`, `build`, or `outsource`)
- The label spacing automatically adjusts for better visibility
- Label position is optimized (x: +10, y: -20) to prevent overlap

### Examples with Decorators

```text
evolve CustomerMarket 0.9 (market, buy)
evolve SupplierMarket 0.8 (market, outsource)
```

:::note
The label spacing adjustment is automatic when using method decorators (`buy`, `build`, `outsource`) with markets.
:::
