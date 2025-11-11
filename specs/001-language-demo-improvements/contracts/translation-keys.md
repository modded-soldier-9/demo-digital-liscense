# Translation Keys Contract

**Version**: 1.0.0  
**Date**: 2025-11-11  
**Feature**: Enhanced Language Support and Demo Content

## Overview

This document defines the contract for translation keys used in the SA Digital License & Fine Tracker application. Since this is a frontend-only feature with no API, this contract defines the structure and usage of translation keys rather than API endpoints.

## Translation System Contract

### Type Definition

```typescript
type Translations = {
  [lang in Language]: {
    [key: string]: string;
  };
};
```

### Language Enum

```typescript
enum Language {
  Afrikaans = 'af',
  English = 'en',
  isiNdebele = 'nr',
  isiXhosa = 'xh',
  isiZulu = 'zu',
  Sepedi = 'nso',
  Sesotho = 'st',
  Setswana = 'tn',
  siSwati = 'ss',
  Tshivenda = 've',
  Xitsonga = 'ts',
}
```

### Translation Function Contract

**Function Signature**:
```typescript
t(key: string): string
```

**Behavior**:
1. Looks up translation key in current language
2. Falls back to English if key not found in current language
3. Returns key name as last resort if not found in English

**Usage**:
```typescript
const { t } = useTranslations();
const translatedText = t('nav_profile');
```

## Translation Key Schema

### Key Naming Convention

**Pattern**: `{section}_{element}_{detail}`

- `section`: Main app section (nav, profile, license, fines, settings)
- `element`: UI element within section
- `detail`: Specific detail or modifier (optional)

### Complete Key List

#### Navigation Keys

| Key | English Value | Description |
|-----|--------------|-------------|
| `nav_profile` | "Profile" | Navigation label for Profile page |
| `nav_license` | "License" | Navigation label for License page |
| `nav_fines` | "Fines" | Navigation label for Fines page |
| `nav_settings` | "Settings" | Navigation label for Settings page |

#### Profile Keys

| Key | English Value | Description |
|-----|--------------|-------------|
| `profile_title` | "User Profile" | Profile page title |
| `profile_name` | "Full Name" | Name field label |
| `profile_id` | "ID Number" | ID number field label |
| `profile_address` | "Address" | Address field label |
| `profile_phone` | "Phone" | Phone field label |
| `profile_email` | "Email" | Email field label |

#### License Keys

| Key | English Value | Description |
|-----|--------------|-------------|
| `license_title` | "Digital Driver's License" | License page title |
| `license_number` | "License Number" | License number field label |
| `license_class` | "License Class" | License class field label |
| `license_issued` | "Issue Date" | Issue date field label |
| `license_expires` | "Expiry Date" | Expiry date field label |
| `license_restrictions` | "Restrictions" | Restrictions section label |
| `license_no_restrictions` | "None" | Text when no restrictions |

#### Fines Keys

| Key | English Value | Description |
|-----|--------------|-------------|
| `fines_title` | "Fine Tracker" | Fines page title |
| `fines_total` | "Total Fines" | Total fines label |
| `fines_outstanding` | "Outstanding" | Outstanding fines label |
| `fines_filter_by_status` | "Filter by Status:" | Status filter label |
| `fines_sort_by` | "Sort by:" | Sort options label |
| `fines_date` | "Date" | Date column/sort label |
| `fines_amount` | "Amount" | Amount column/sort label |
| `fines_status_all` | "All" | All status filter option |
| `fines_status_paid` | "Paid" | Paid status label |
| `fines_status_unpaid` | "Unpaid" | Unpaid status label |
| `fines_status_disputed` | "Disputed" | Disputed status label |
| `fines_no_fines_found` | "No fines found matching your criteria." | Empty state message |

#### Settings Keys

| Key | English Value | Description |
|-----|--------------|-------------|
| `settings_title` | "Settings" | Settings page title |
| `settings_language` | "App Language" | Language selector label |
| `settings_app_info` | "App Information" | App info section label |
| `settings_version` | "Version" | Version label |
| `settings_build` | "Build" | Build label |
| `settings_appearance` | "Appearance" | Appearance section header |
| `settings_appearance_dark_mode` | "Dark Mode" | Dark mode toggle label |
| `settings_appearance_dark_mode_desc` | "Toggle theme appearance" | Dark mode description |
| `settings_language_section` | "Language" | Language section header |
| `settings_app_info_section` | "App Information" | App info section header |

## Contract Requirements

### Completeness

- **REQUIRED**: All 44 translation keys must exist in all 11 languages
- **REQUIRED**: Missing keys automatically fall back to English
- **REQUIRED**: All keys must have non-empty string values (empty strings treated as missing)

### Consistency

- **REQUIRED**: All languages must have the same set of keys
- **REQUIRED**: Key names must follow naming convention
- **REQUIRED**: Translation values must be culturally appropriate

### Usage

- **REQUIRED**: All user-facing text must use translation keys
- **REQUIRED**: No hardcoded English strings in UI components
- **REQUIRED**: Translation function must handle missing keys gracefully

## Implementation Contract

### File Location

**Translations**: `data/translations.ts`

### Structure

```typescript
export const translations: Translations = {
  [Language.English]: {
    // All 44 keys with English values
  },
  [Language.Afrikaans]: {
    // All 44 keys with Afrikaans values
  },
  // ... repeat for all 11 languages
};
```

### Fallback Mechanism

```typescript
// Automatic fallback implemented in translations.ts
const englishTranslations = translations[Language.English];
const englishKeys = Object.keys(englishTranslations);

Object.values(Language).forEach(lang => {
  if (lang !== Language.English) {
    const langTranslations = translations[lang];
    if (langTranslations) {
      englishKeys.forEach(key => {
        if (!(key in langTranslations)) {
          langTranslations[key] = englishTranslations[key];
        }
      });
    }
  }
});
```

## Validation

### Key Completeness Check

All languages must have all 44 keys. Missing keys are automatically filled with English via fallback mechanism.

### Type Safety

TypeScript ensures:
- Language enum values are valid
- Translation keys are strings
- Translation values are strings
- Type system prevents invalid language codes

## Breaking Changes

### Version 1.0.0 (Current)

- Initial translation key set (39 keys)
- Added 5 new keys for Settings page hardcoded text
- Total: 44 keys across 11 languages

### Future Considerations

- New keys must be added to all languages simultaneously
- Key removal requires deprecation period
- Key renaming requires migration strategy

## Usage Examples

### Component Usage

```typescript
import { useTranslations } from '../hooks/useTranslations';

const MyComponent = () => {
  const { t } = useTranslations();
  
  return (
    <div>
      <h1>{t('profile_title')}</h1>
      <label>{t('profile_name')}</label>
    </div>
  );
};
```

### Adding New Translation Key

1. Add key to English translations
2. Add key to all other languages (or rely on fallback)
3. Use key in component via `t('new_key')`

## Notes

- This is a frontend-only contract (no API)
- Translations are static data loaded at app startup
- Language switching is immediate (no reload required)
- Language preference persisted in localStorage

