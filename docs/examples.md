---
sidebar_position: 3
---

# Examples

Below are practical examples of the OnlineWardleyMaps DSL, demonstrating how to define maps, components, flows, and more. These examples are based on real usage patterns and test cases.

## Setting the Map Title

```text
title My Wardley Map
```

## Defining the Anchor (User Need)

```text
anchor User [0.95, 0.63]
```

## Creating Components

```text
component Customer [0.9, 0.5]
component Cup of Tea [0.9, 0.5]
```

## Adding Inertia to Components

```text
component Customer [0.95, 0.5] inertia
component Cup of Tea [0.9, 0.5] inertia
market Cup of Tea [0.9, 0.5] inertia
```

## Evolving Components

```text
evolve Physical 0.8
evolve Cup of Tea evolve 0.8
evolve Physical->Virtual 0.8
```

## Linking Components

```text
Customer->Cup of Tea
Start Component->End Component
```

## Indicating Flow

```text
Customer+<>Cup of Tea
Start Component+<>End Component
Hot Water+<Kettle
Hot Water+>Kettle
Hot Water+'$0.10'>Kettle
```

## Creating Markets

```text
market Customer [0.9, 0.5]
market Cup of Tea [0.9, 0.5]
evolve Customer 0.9 (market)
```

## Pipelines

```text
pipeline Customer [0.15, 0.9]
pipeline Customer
```

## Pioneers, Settlers, Townplanners

```text
pioneers [0.59, 0.43, 0.49, 0.63]
settlers [0.59, 0.43, 0.49, 0.63]
townplanners [0.31, 0.74, 0.15, 0.95]
```

## Build, Buy, Outsource

```text
build Customer
buy Customer
outsource Customer
component Customer [0.9, 0.2] (buy)
component Customer [0.9, 0.2] (build)
component Customer [0.9, 0.2] (outsource)
evolve Customer 0.9 (outsource)
evolve Customer 0.9 (buy)
evolve Customer 0.9 (build)
```

## Submaps & URLs

```text
submap Website [0.83, 0.50] url(submapUrl)
url submapUrl [https://onlinewardleymaps.com/#clone:qu4VDDQryoZEnuw0ZZ]
```

## Stages of Evolution

```text
evolution First->Second->Third->Fourth
evolution Novel->Emerging->Good->Best
```

## Notes

```text
note Note Text [0.9, 0.5]
note +future development [0.9, 0.5]
```

## Styles

```text
style wardley
style handwritten
style colour
style dark
```

## Accelerators & Deaccelerators

```text
accelerator foobar [0.1, 0.8]
deaccelerator barbaz [0.2, 0.7]
```

---

For a full reference, see the [DSL Overview](dsl-overview.md) or explore the [Features](features.md) page.
