---
sidebar_position: 3
---

# Quick Reference

OnlineWardleyMaps uses a Domain Specific Language (DSL) to define Wardley Maps in a concise, readable format. This DSL allows you to create, edit, and share maps as plain text, enabling version control and easy collaboration.

**The OnlineWardleyMaps (*.owm) DSL has become the most widely adopted format for Wardley Maps**, powering multiple tools across the ecosystem including:
- **VS Code Extension** - Full syntax highlighting and auto-completion
- **Obsidian.md Plugin** - Embedded maps within your notes
- **Large Language Models** - AI assistants like ChatGPT, Claude, and others can generate OWM format maps

This widespread adoption means maps created in OnlineWardleyMaps can be seamlessly used across different tools and workflows, making it the de facto standard for maps-as-code.

Wardley Mapping is a framework for visualizing your environment so you can make better decisions. The DSL captures key concepts such as components, pipelines, evolution stages, and relationships.

## Basic Syntax

### Components

Define components with optional visibility and maturity values:

```dsl
component Customer [1, 0.4]
component Server [0.5, 0.8]
```

### Pipelines

Define pipelines to group components and show maturity boundaries:

```dsl
pipeline PaymentSystem [0.15, 0.65]
```

### Evolve

Mark components as evolving or evolved with maturity and optional labels:

```dsl
component Foo [0.9, 0.1]
evolve Foo 0.9 label [66, 99]
```

### Links

Create links between components with optional flow and context:

```dsl
Customer->Server
Customer+>Server
Customer->Server; Additional context
```

- `->` creates a link from one component to another.
- `+>` indicates a flow direction in the link.
- You can add additional context or notes to a link using a semicolon `;` followed by the context text.

Example:

```dsl
Customer->Server; Additional context
```

This creates a link from `Customer` to `Server` with the note "Additional context" attached to the link.

### Notes and Annotations

Add notes and annotations with visibility and maturity:

```dsl
note This is a note [0.9, 0.1]
annotation 1 [.38, .4] Standardising power allows Kettles to evolve faster
```

### Submaps

Define submaps with optional coordinates, labels, and URLs:

```dsl
submap Order [0.11, 0.31] label [-15, 30]
submap Order url(urlId)
```

### Accelerators

Define accelerators and deaccelerators:

```dsl
accelerator randomkey [0.9, 0.1]
deaccelerator randomkey [0.9, 0.1]
```

### URLs and Anchors

Define URLs and anchors:

```dsl
url Foo [https://example.com]
anchor Foo []
```

### Map Size and Style

Set map size and style:

```dsl
size [1024, 768]
style wardley
```

## Positioning Elements

You can specify label positions for elements using the `label` keyword:

```dsl
component Foo [0.9, 0.1] label [66, 99]
```

## Decorators

Use decorators like `build`, `buy`, `outsource` to add metadata to components:

```dsl
evolve Foo 0.9 (buy)
```

## Renaming Elements

When you rename a component, related elements such as pipelines, evolves, markets, and ecosystems are automatically updated.

## Tips

- Whitespace and comments are ignored.
- Pipelines without boundaries are hidden by default.
- Use flow (`+>`) in links to indicate flow direction.

---

For more detailed examples, see the [Examples](./examples.md) page.
