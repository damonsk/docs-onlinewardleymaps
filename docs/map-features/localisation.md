---
sidebar_position: 10
---

# Localisation & Language Support

Online Wardley Maps provides comprehensive multilingual support, allowing you to use the interface in your preferred language and collaborate with global teams effectively.

## Overview

OWM supports **10 languages** with complete interface localisation:

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

## Changing Language

### Using the Language Selector

1. **Open the Left Navigation** - Click the menu icon (☰) in the top-left corner
2. **Find Language Section** - Scroll down to the "Language" dropdown
3. **Select Your Language** - Choose from the available options
4. **Instant Update** - The entire interface updates immediately

:::tip

The language change is **instant** - no page refresh required! All UI elements, menus, dialogs, and tooltips will immediately switch to your selected language.

:::

### Language Persistence

Your language preference is automatically saved and will be remembered **across browser sessions**. Your choice persists when you close and reopen the browser.

## What's Localised

### Complete Interface Coverage

Every user-facing element is translated:

**Navigation & Menus**
- Header navigation buttons
- Left sidebar menu items
- Context menus and dropdowns

**Map Editor**
- Save/load status indicators
- Editor toolbar buttons
- Quick Add component dialog

**Map Canvas**
- Canvas toolbar (Select, Pan, Zoom controls)
- Component tooltips
- Accessibility labels

**Dialogs & Forms**
- Map iteration management
- Component creation forms
- Confirmation dialogs
- Error messages

**Footer & Links**
- Attribution text
- External link descriptions
- Help and documentation links

### Smart Fallbacks

If a translation is missing or still loading:
- **Fallback text** ensures the interface remains functional
- **English defaults** provide consistent experience
- **Gradual loading** prevents interface jumps

## Technical Implementation

### Translation Architecture

OWM uses a robust translation system built on:

```typescript
// Example translation usage
import { useI18n } from '../../hooks/useI18n';

const Component = () => {
    const { t } = useI18n();
    
    return (
        <button>
            {t('common.save', 'Save')}
        </button>
    );
};
```

### Reactive Language Switching

- **Instant updates** when language changes
- **Component re-rendering** ensures all text updates
- **State preservation** maintains your work during language switches

### Translation Keys

Translations are organised by namespace:

- `common.*` - Shared UI elements (Save, Cancel, etc.)
- `navigation.*` - Menu and navigation items
- `map.*` - Map-specific features
- `editor.*` - Editor controls and features
- `components.*` - Component-related actions
- `sharing.*` - Map sharing features
- `footer.*` - Footer content

### Current Limitations

**DSL Keywords**
- Map syntax keywords remain in English (`component`, `anchor`, etc.)
- This ensures compatibility across all language versions
- Maps created in any language can be shared universally

**Documentation**
- Primary documentation is in English
- Community translations are welcome contributions

## Contributing Translations

### Help Improve Translations

Found a translation issue or want to suggest improvements?

1. **GitHub Issues** - Report translation problems
3. **Pull Requests** - Contribute translation improvements

### Adding New Languages

Interested in adding support for additional languages?

1. **Language Files** - Translation JSON files for the new language
2. **Testing** - Comprehensive testing across all UI components  
3. **Community Review** - Native speaker validation
4. **Documentation** - Usage guides in the target language

:::note

All translations maintain the same technical accuracy while adapting to local language conventions and cultural preferences.

:::
