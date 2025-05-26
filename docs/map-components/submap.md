---
sidebar_position: 8
---

# Submaps & URLs

A **submap** allows you to link a component to another Wardley Map or an external resource. This is useful for breaking down complex systems into manageable parts, or for referencing related maps and documentation.

> "When you get stakeholders and their needs, you can use dependencies to identify relevant components, and create a visualisation of your environment." ([wardleymaps.com](https://www.wardleymaps.com/intro))

## Syntax

```text
submap Component [..] url(urlName)
url urlName [URL]
```

- **Component**: The element being linked.
- **urlName**: A label for the URL.
- **URL**: The external or submap link.

## Example

```text
submap Website [0.83, 0.50] url(submapUrl)
url submapUrl [https://onlinewardleymaps.com/#clone:qu4VDDQryoZEnuw0ZZ]
```

**Tip:** Use submaps to keep your maps focused and navigable, especially for large or complex environments.
