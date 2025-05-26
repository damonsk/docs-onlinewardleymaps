# Annotations

**Annotations** allow you to add numbered notes or comments to specific locations on your Wardley Map.

## Syntax

You can define annotations using the `annotation` keyword followed by a number, one or more coordinate pairs, and optional text.

### Examples

Single occurrence annotation with text:

```plaintext
annotation 1 [[0.85,0.64],[0.85,0.68]] Standardising power allows Kettles to evolve faster
```

Single occurrence annotation without text:

```plaintext
annotation 2 [0.78, 0.64] Hot water is obvious and well known
```

Multiple occurrences annotation without text:

```plaintext
annotation 1 [[0.43,0.49],[0.08,0.79]] Standardising power allows Kettles to evolve faster
annotation 2 [0.48, 0.85] Hot water is obvious and well known
annotations [0.72, 0.03]
```

## Visual Example

![Annotations](/img/annotations.png)

## Behaviour

Annotations are displayed on the map at the specified coordinates and can be used to provide additional context or explanations.

## Reference

This feature is demonstrated in the Example Map text on OnlineWardleyMaps.com.