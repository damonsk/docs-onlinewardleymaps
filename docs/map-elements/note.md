# Notes

**Notes** are versatile text elements that you can place anywhere on your map to add information, context, or reminders. They can be used to clarify intent, highlight risks, record insights, create legends, or provide additional context for your map.

## Syntax

```text
note Note Text [Visibility, Maturity]
```

- **Note Text**: The text you want to display on the map
- **Visibility, Maturity**: The coordinates where the note will appear on the map [0.0 - 1.0]

## Examples

### Basic Note

```text
note +future development [0.9, 0.5]
```

### Creating a Legend

Notes can be used to create legends that explain map elements:

```text
note Pioneers [0.91, 0.85]
note Settlers [0.84, 0.85]
note Town Planners [0.77, 0.85]
```

### Maturity Labels

You can use notes to label different maturity stages:

```text
note Novel [0.01, 0.01]
note Emerging [0.01, 0.18]
note Good [0.01, 0.41]
note Best [0.01, 0.71]
```

## Best Practices

1. **Strategic Placement**: Position notes where they won't interfere with map components
2. **Clear Labeling**: Use concise but descriptive text
3. **Consistent Styling**: Maintain consistent positioning for related notes
4. **Documentation**: Use notes to document assumptions and decisions

:::tip
Notes are perfect for capturing your thinking and improving collaboration with others.
:::
