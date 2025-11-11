# Data Model: Enhanced Language Support and Demo Content

**Date**: 2025-11-11  
**Feature**: Enhanced Language Support and Demo Content  
**Phase**: 1 - Design & Contracts

## Overview

This document defines the data structures for translations and demo data. The feature enhances existing data models without introducing new entities.

## Entities

### Translation

**Purpose**: Stores all user-facing text translations for 11 official South African languages

**Structure**:
```typescript
type Translations = {
  [lang in Language]: {
    [key: string]: string;
  };
};
```

**Fields**:
- `lang`: Language enum value (one of 11 official languages)
- `key`: Translation key string (e.g., "nav_profile", "fines_status_paid")
- `value`: Translated text string

**Relationships**:
- One-to-many: One Language → Many translation keys
- Many-to-one: Many translation keys → One Language

**Validation Rules**:
- All languages must have the same set of translation keys
- Missing keys automatically fall back to English via fallback mechanism
- Translation keys follow naming convention: `{section}_{element}_{detail}`
- Translation values must be non-empty strings (empty strings are treated as missing)

**State Transitions**: N/A (static data structure)

**Location**: `data/translations.ts`

### Language

**Purpose**: Represents one of South Africa's 11 official languages

**Structure**:
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

**Fields**:
- `code`: ISO 639-1 language code (2-3 characters)
- `name`: Native language name (e.g., "isiZulu", "Setswana")

**Relationships**:
- One-to-many: One Language → Many Translations

**Validation Rules**:
- Language code must be valid ISO 639-1 code
- Language name must be in native script/autoglossonym

**State Transitions**: N/A (enum constant)

**Location**: `types.ts`

### Demo User

**Purpose**: Represents a sample user profile for demonstration purposes

**Structure**:
```typescript
interface User {
  name: string;
  idNumber: string;
  address: string;
  phone: string;
  email: string;
  profilePhotoUrl: string;
}
```

**Fields**:
- `name`: Full name (string)
- `idNumber`: South African ID number, 13-digit format (YYYYMMDDGSSSCAZ)
- `address`: Full address in South African format (string)
- `phone`: Phone number in South African format (string, e.g., "082 123 4567")
- `email`: Email address (string)
- `profilePhotoUrl`: URL to profile photo (string)

**Validation Rules**:
- ID number must be 13 digits
- Phone number must follow South African format
- Address must include postal code
- Email must be valid format

**State Transitions**: N/A (static demo data)

**Location**: `data/mockData.ts`

### Demo License

**Purpose**: Represents a sample driver's license for demonstration purposes

**Structure**:
```typescript
interface License {
  licenseNumber: string;
  licenseClass: string;
  issueDate: string;
  expiryDate: string;
  restrictions: string[];
}
```

**Fields**:
- `licenseNumber`: License number (string, typically ID number + suffix)
- `licenseClass`: License class with code (string, e.g., "B (Code 08)")
- `issueDate`: Issue date in YYYY-MM-DD format (string)
- `expiryDate`: Expiry date in YYYY-MM-DD format (string)
- `restrictions`: Array of restriction codes/descriptions (string[])

**Validation Rules**:
- Dates must be in YYYY-MM-DD format
- Expiry date must be after issue date
- License class must include valid South African code (Code 08, Code 10, etc.)
- Restrictions array can be empty (no restrictions)

**State Transitions**: N/A (static demo data)

**Location**: `data/mockData.ts`

### Demo Fine

**Purpose**: Represents a sample traffic fine for demonstration purposes

**Structure**:
```typescript
interface Fine {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: FineStatus;
  location: string;
}

enum FineStatus {
  Paid = 'Paid',
  Unpaid = 'Unpaid',
  Disputed = 'Disputed',
}
```

**Fields**:
- `id`: Unique fine identifier (string, e.g., "F001")
- `date`: Fine date in YYYY-MM-DD format (string)
- `description`: Description of violation (string)
- `amount`: Fine amount in South African Rand (number, minimum R250)
- `status`: Fine status enum (FineStatus.Paid | FineStatus.Unpaid | FineStatus.Disputed)
- `location`: Location where fine was issued (string, South African location)

**Validation Rules**:
- Date must be in YYYY-MM-DD format
- Amount must be positive number (minimum R250 for demo data)
- Status must be one of: Paid, Unpaid, Disputed
- Location must be realistic South African location
- Description must describe common South African traffic violation

**State Transitions**: N/A (static demo data, but status represents different states)

**Location**: `data/mockData.ts`

## Data Relationships

```
Language (1) ──→ (many) Translation
  │
  └─── LanguageNames (1:1 mapping)

User (1) ──→ (1) License
  │
  └─── (many) Fine
```

**Notes**:
- Demo data represents a single user with one license and multiple fines
- Translations are independent of demo data
- Language selection affects UI display but not demo data structure

## Translation Key Structure

### Key Naming Convention

**Pattern**: `{section}_{element}_{detail}`

**Sections**:
- `nav_*` - Navigation labels
- `profile_*` - Profile page elements
- `license_*` - License page elements
- `fines_*` - Fines page elements
- `settings_*` - Settings page elements

**Examples**:
- `nav_profile` - Navigation label for Profile
- `fines_status_paid` - Paid status text
- `settings_appearance` - Appearance section header

### Complete Translation Key List

**Navigation (4 keys)**:
- `nav_profile`
- `nav_license`
- `nav_fines`
- `nav_settings`

**Profile (6 keys)**:
- `profile_title`
- `profile_name`
- `profile_id`
- `profile_address`
- `profile_phone`
- `profile_email`

**License (7 keys)**:
- `license_title`
- `license_number`
- `license_class`
- `license_issued`
- `license_expires`
- `license_restrictions`
- `license_no_restrictions`

**Fines (12 keys)**:
- `fines_title`
- `fines_total`
- `fines_outstanding`
- `fines_filter_by_status`
- `fines_sort_by`
- `fines_date`
- `fines_amount`
- `fines_status_all`
- `fines_status_paid`
- `fines_status_unpaid`
- `fines_status_disputed`
- `fines_no_fines_found`

**Settings (10 keys)**:
- `settings_title`
- `settings_language`
- `settings_app_info`
- `settings_version`
- `settings_build`
- `settings_appearance` (NEW)
- `settings_appearance_dark_mode` (NEW)
- `settings_appearance_dark_mode_desc` (NEW)
- `settings_language_section` (NEW)
- `settings_app_info_section` (NEW)

**Total**: 39 existing keys + 5 new keys = 44 keys (Note: Research doc mentioned 55 keys, but actual count is 44 after consolidation)

## Demo Data Requirements

### Fine Records Requirements

**Minimum Requirements**:
- At least 6 fine records
- At least 2 examples of each status type (Paid, Unpaid, Disputed)
- At least 5 different South African locations
- At least 5 different fine types
- Amounts spanning R250 to R1500+ range
- Dates spanning multiple months

**Current State**: ✅ All requirements met with 6 existing fines

**Enhancement Opportunities**:
- Add 1-2 more fines for better variety (optional)
- Ensure all fine types are represented (speeding, parking, mobile phone, vehicle defects, traffic violations)

### License Requirements

**Requirements**:
- Valid South African license class (Code 08, Code 10, etc.)
- Proper date formatting (YYYY-MM-DD)
- Common restriction types (e.g., corrective lenses)

**Current State**: ✅ All requirements met

### Profile Requirements

**Requirements**:
- Valid South African ID number format
- Realistic address with postal code
- South African phone number format
- Complete contact information

**Current State**: ✅ All requirements met

## Data Format Standards

### South African Conventions

**Currency**:
- Format: R{amount} (e.g., R500, R1,500)
- No decimal places for whole amounts
- Display in Rand regardless of language

**Dates**:
- Format: YYYY-MM-DD (ISO 8601)
- Display format may vary by language (future consideration)
- Consistent storage format

**ID Numbers**:
- Format: 13 digits (YYYYMMDDGSSSCAZ)
- YYYYMMDD: Birth date
- G: Gender (0-4 = female, 5-9 = male)
- SSS: Sequence number
- C: Citizenship (0 = SA, 1 = other)
- A: Race (historical, not used)
- Z: Check digit

**Phone Numbers**:
- Mobile: "082 123 4567" or "0821234567"
- Landline: "011 123 4567" or "0111234567"
- Format: 3-digit area code + 7-digit number

**Postal Codes**:
- Format: 4 digits (e.g., 2196)
- No spaces or dashes

## Validation Rules Summary

### Translation Validation

1. All languages must have same key set
2. Keys must follow naming convention
3. Values must be non-empty strings
4. Fallback mechanism handles missing keys

### Demo Data Validation

1. ID number: 13 digits
2. Phone: South African format
3. Dates: YYYY-MM-DD format
4. Fine amounts: Positive numbers, minimum R250
5. Fine status: One of Paid/Unpaid/Disputed
6. License class: Valid South African code
7. Expiry date > Issue date

## Implementation Notes

- All data is static (no API calls)
- Translations loaded at app startup
- Demo data loaded at app startup
- Language preference persisted in localStorage
- No data mutations (read-only demo data)

