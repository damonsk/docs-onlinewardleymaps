---
slug: 2025-06-15-release-note
title: Release - June 2025 - Major Modernisation
authors: damon
tags: [maps-as-code, release, onlinewardleymaps, typescript, ui-improvements, dsl-changes, modernisation]
---

Welcome to the June 2025 release of OnlineWardleyMaps! This is our most significant modernisation update to date, featuring a complete TypeScript migration, enhanced user interface, and streamlined DSL syntax.

## 🎯 Key Highlights

### ✨ Resizable Editor and Map Interface

We've introduced a brand new **resizable split pane interface** that puts you in control of your workspace layout. Now you can dynamically adjust the space between the text editor and map canvas to suit your working style.

![Editor Resize Feature](/img/divider.png)

**How it works:**
- **Hover over the divider** between editor and map to see the resize cursor
- **Click and drag** left or right to adjust panel sizes
- **Automatic persistence** - your preferred layout is saved in your browser
- **Smart constraints** - 20% minimum to 60% maximum editor width to keep both panels functional

**Perfect for different workflows:**
- **More editor space** (50-60%): Ideal for complex maps with detailed annotations
- **Balanced layout** (33% default): Great for most mapping tasks
- **More map space** (20-25%): Perfect when you primarily interact with the visual map

:::tip
The resize feature works seamlessly across light and dark themes, with the divider automatically adapting to your chosen interface style.
:::

## 🔧 DSL Syntax Modernisation

We've simplified and modernised the Domain Specific Language (DSL) to make it more consistent and intuitive.

### Market and Ecosystem Components

**Legacy syntax (now removed):**
```text
market CustomerBase [0.9, 0.3]
ecosystem TechPlatform [0.4, 0.7]
```

**New unified syntax:**
```text
component CustomerBase [0.9, 0.3] (market)
component TechPlatform [0.4, 0.7] (ecosystem)
```

**Benefits of the new approach:**
- **Consistent syntax** across all component types
- **Decorator support** - combine market/ecosystem with build/buy/outsource
- **Better tooling** - improved syntax highlighting and auto-completion
- **Enhanced semantics** - markets and ecosystems are clearly specialised components

### Enhanced Decorator Combinations

The new syntax enables powerful combinations:

```text
component SupplierMarket [0.8, 0.4] (market, outsource)
component TechEcosystem [0.6, 0.2] (ecosystem, build)
component Platform [0.5, 0.8] (market, buy)
```

:::note
**Migration Guide:** Existing maps using the legacy `market` and `ecosystem` syntax will continue to work, but we recommend updating to the new decorator syntax for future compatibility and enhanced features.
:::

## 🚀 Complete TypeScript Migration

OnlineWardleyMaps has undergone a **complete migration from JavaScript to TypeScript**, bringing significant improvements to code quality, developer experience, and application reliability.

### What This Means for Users

- **Enhanced Performance** - Better optimisation and faster rendering
- **Improved Reliability** - Stronger type checking prevents runtime errors
- **Better Error Messages** - More helpful feedback when something goes wrong
- **Future-Proof Architecture** - Foundation for upcoming features and improvements

### Technical Improvements

- **Unified Component Architecture** - Consistent interfaces across all map elements
- **Type-Safe Link Strategies** - Robust handling of component relationships
- **Modern React Patterns** - Improved state management and component lifecycle
- **Enhanced Symbol System** - Modular, performant SVG-based map elements

## 🛠️ Architecture Enhancements

### Unified Map Elements

The new TypeScript architecture introduces a **unified component system** that treats all map elements consistently:

```typescript
interface UnifiedComponent {
  id: string;
  name: string;
  type: string; // 'component' | 'anchor' | 'market' | 'ecosystem'
  maturity: number;
  visibility: number;
  decorators?: ComponentDecorator;
  // ... additional properties
}
```

### Improved Link Processing

Enhanced link strategies provide more reliable component connections:
- **Strategy Pattern Implementation** - Clean separation of link determination logic
- **Evolution State Handling** - Elegant support for evolved and evolving components  
- **Performance Optimised** - Efficient filtering and processing of complex maps

### Modern Symbol Components

All map symbols have been modernised with:
- **React.memo Optimisation** - Prevents unnecessary re-renders
- **Consistent Theming** - Better support for light/dark modes
- **Type Safety** - Full TypeScript coverage with proper interfaces
- **Modular Design** - Easy to extend and maintain

## 📈 Performance Improvements

The TypeScript migration brings noticeable performance improvements:

- **Faster Map Rendering** - Optimised component lifecycle and memoisation
- **Reduced Memory Usage** - Better garbage collection and state management  
- **Improved Responsiveness** - Smoother interactions and transitions
- **Enhanced Scalability** - Better performance with large, complex maps

## 🔮 Looking Forward

This release establishes a solid foundation for future enhancements:

- **Plugin Architecture** - Framework for community extensions
- **Advanced Analytics** - Enhanced map analysis and insights
- **Collaboration Features** - Real-time collaborative editing capabilities
- **Mobile Optimisation** - Improved experience on tablets and mobile devices

## 📚 Documentation Updates

Our documentation has been updated to reflect all changes:
- [Editor and Map Resizing Guide](/docs/map-features/editor-map-resize)
- [Updated DSL Reference](/docs/dsl-reference)  
- [Component Syntax Guide](/docs/map-elements/component)
- [Market & Ecosystem Elements](/docs/map-elements/market)

## 🔗 Supporting the Project

OnlineWardleyMaps remains free and open-source. If you find it valuable, consider supporting its development:

[![Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/mapsascode/overview)

Follow [@MapsAsCode](https://x.com/mapsascode) on X (Twitter) for updates and Wardley mapping insights!

---

**Ready to explore the new features?** Visit [OnlineWardleyMaps](https://onlinewardleymaps.com) and experience the modernised interface and enhanced DSL capabilities. Your maps have never looked better or been easier to create!
