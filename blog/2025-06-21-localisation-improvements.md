---
title: Complete UI Localisation - Making OWM Truly Multilingual
authors: [damon]
date: 2025-06-21
slug: localisation-improvements
tags: [ui, internationalisation, localisation, multilingual, react]
---

# Complete UI Localisation - Making OWM Truly Multilingual

We're excited to announce a major milestone in Online Wardley Maps' internationalisation journey! We've just completed a comprehensive overhaul of our React UI components to provide seamless multilingual support across all 10 supported languages.

<!--truncate-->

## What's Changed?

Previously, whilst OWM supported multiple languages, some UI components had hardcoded English text or weren't properly reacting to language changes. Users would switch languages only to find certain parts of the interface remained in English, or wouldn't update until the page was refreshed.

**This is now completely resolved!** 🎉

## Key Improvements

### 🔄 Instant Language Switching

All UI components now respond immediately when you change the language via the Language Selector. No more page refreshes or stuck English text!

### 🧩 Complete Component Coverage

We've ensured every user-facing component uses our translation system:

- **Header Navigation** - All buttons, tooltips, and modal dialogs
- **Map Environment** - Save states, usage guides, and editor controls  
- **Footer** - Attribution links and external references
- **Breadcrumbs** - Map titles and status indicators
- **Map Iterations** - Dialog boxes with proper text interpolation
- **Left Navigation** - Menu items and theme toggles
- **Quick Add Components** - Form labels and validation messages
- **Map Canvas Toolbar** - All tool buttons and accessibility labels

## Supported Languages

OWM now provides a seamless experience in:

- 🇬🇧 **English** (British spelling)
- 🇪🇸 **Spanish** (Español)
- 🇫🇷 **French** (Français)
- 🇩🇪 **German** (Deutsch)
- 🇮🇹 **Italian** (Italiano)
- 🇵🇹 **Portuguese** (Português)
- 🇯🇵 **Japanese** (日本語)
- 🇰🇷 **Korean** (한국어)
- 🇨🇳 **Chinese Simplified** (简体中文)
- 🇹🇼 **Chinese Traditional** (繁體中文)

## Real-World Impact

This improvement means:

- **Global Teams** can collaborate in their preferred language
- **Educational Use** becomes more accessible worldwide  
- **Enterprise Adoption** is easier in non-English organisations
- **Community Growth** can expand beyond English-speaking regions

## Try It Out!

Head over to [onlinewardleymaps.com](https://onlinewardleymaps.com) and test the language switching using the selector in the left navigation. You'll see the entire interface update instantly - from menu items to dialog boxes to toolbar tooltips.

:::tip

If you spot any translation issues or want to contribute translations for additional languages, please [open an issue on GitHub](https://github.com/damonsk/onlinewardleymaps).

:::
