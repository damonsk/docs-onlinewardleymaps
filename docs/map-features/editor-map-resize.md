---
sidebar_position: 9
---

# Editor and Map Resizing

OnlineWardleyMaps provides a resizable split pane interface that allows you to adjust the relative sizes of the text editor and map canvas by dragging the divider between them.

## How to Resize

To resize the editor and map areas:

1. **Locate the divider** - Position your cursor over the thin vertical divider line between the text editor (left panel) and the map canvas (right panel)
2. **Hover for resize cursor** - When you hover over the divider, your cursor will change to a resize cursor (↔)
3. **Click and drag** - Click and hold on the divider, then drag left or right to adjust the panel sizes:
   - Drag **left** to make the editor smaller and give more space to the map
   - Drag **right** to make the editor larger and reduce the map space

:::tip
The resize cursor appears when you hover directly over the divider area. If you don't see it, try moving your cursor slowly along the edge between the panels.
:::

## Constraints and Limits

The resizing feature includes sensible constraints to ensure both panels remain usable:

- **Minimum editor width**: 20% of the total width
- **Maximum editor width**: 60% of the total width  
- **Default split**: 33% editor, 67% map canvas

These limits prevent you from accidentally making either panel too small to be functional.

![Resize Window](/img/divider.png)

## Persistence

Your preferred panel sizes are automatically saved to your browser's local storage and will be restored the next time you visit OnlineWardleyMaps. This means:

- ✅ Your layout preference persists across browser sessions
- ✅ Each browser maintains its own layout settings
- ✅ No account or login required - settings are stored locally

:::note
Panel size preferences are stored in your browser's local storage using the key `wardleyMapEditor_splitPaneWidth`. Clearing your browser data will reset the layout to default proportions.
:::

## Theme Support

The resize divider adapts to your chosen theme:
- **Light theme**: Subtle light-coloured divider
- **Dark theme**: Darker divider that blends with the dark interface

## Technical Behaviour

When you resize the panels:

1. The map canvas automatically recalculates its dimensions
2. Map elements maintain their relative positions and scale
3. The text editor adjusts its width whilst maintaining full functionality
4. Both panels remain fully interactive during and after resizing

:::danger
Be aware that very narrow editor widths (approaching the 20% minimum) may make it difficult to work with longer lines of map text. Consider your typical map complexity when choosing your preferred layout.
:::

## Use Cases

Different panel proportions work better for different workflows:

- **More editor space** (50-60% editor): Ideal when writing complex maps with many components, long annotations, or detailed notes
- **Balanced layout** (33% editor, default): Works well for most mapping tasks with moderate complexity
- **More map space** (20-25% editor): Perfect when you primarily interact with the visual map and make only minor text edits

The resizable interface ensures OnlineWardleyMaps adapts to your preferred working style and screen size.
