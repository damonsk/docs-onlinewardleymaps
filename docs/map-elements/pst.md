# Pioneers, Settlers, & Town Planners (PST)

Wardley Maps support the visualization of organizational structure and evolution using the Pioneers, Settlers, and Town Planners (PST) model. These elements help you represent teams or roles responsible for different stages of evolution.

## Syntax

```text
pioneers [x, y] width height
settlers [x, y] width height
townplanners [x, y] width height
```

- `pioneers`, `settlers`, `townplanners` are keywords.
- `[x, y]` are coordinates for placement on the map.
- `width` and `height` control the size of the block.

## Example

```text
pioneers [0.95, 0.83] 120 30
settlers [0.88, 0.83] 120 30
townplanners [0.81, 0.83] 120 30
```

## Usage

- **Pioneers**: Innovators who explore the unknown and create new ideas.
- **Settlers**: Refine and productize what pioneers discover.
- **Town Planners**: Industrialize and scale what settlers have proven.

You can use these elements to create a legend or annotate your map with organizational context.

## Visual Example

![Pioneers, Settlers and Town Planners in action](/img/pst-example.jpeg)

![Pioneers, Settlers and Town Planner Legend Example](/img/tt2-pst.png)

---

[Using Pioneers, Settlers and Town Planners](/blog/2020-06-06-pioneers-settlers-townplanners/).
