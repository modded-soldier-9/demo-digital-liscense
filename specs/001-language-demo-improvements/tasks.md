---
description: "Task list for Enhanced Language Support and Demo Content feature implementation"
---

# Tasks: Enhanced Language Support and Demo Content

**Input**: Design documents from `/specs/001-language-demo-improvements/`
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅

**Tests**: Tests are NOT requested in the feature specification - this is a demo project with manual testing only.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: Files at repository root (components/, data/, pages/, etc.)
- Paths shown below use actual project structure from plan.md

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and verification

- [X] T001 Verify TypeScript 5.8.2+ and React 19.2.0+ are installed
- [X] T002 [P] Verify existing translation infrastructure in data/translations.ts is functional
- [X] T003 [P] Verify existing demo data structure in data/mockData.ts is accessible

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Add 5 new translation keys to English translations in data/translations.ts (settings_appearance, settings_appearance_dark_mode, settings_appearance_dark_mode_desc, settings_language_section, settings_app_info_section)
- [X] T005 Replace hardcoded English strings with translation keys in pages/Settings.tsx (5 replacements: "Dark Mode", "Toggle theme appearance", "Appearance", "Language", "App Information")

**Checkpoint**: Foundation ready - translation keys exist and Settings page uses them. User story implementation can now begin.

---

## Phase 3: User Story 1 - Complete Language Translations (Priority: P1) 🎯 MVP

**Goal**: Complete translations for all 11 official South African languages so users can access the app in their preferred language without English fallback text.

**Independent Test**: Switch to any of the 8 incomplete languages (isiNdebele, isiXhosa, Sepedi, Sesotho, Setswana, siSwati, Tshivenda, Xitsonga) and verify all UI text displays correctly in the selected language rather than falling back to English. Navigate through all screens (Profile, License, Fines, Settings) and confirm no English text appears.

### Implementation for User Story 1

- [X] T006 [P] [US1] Add 5 new translation keys to Afrikaans translations in data/translations.ts (settings_appearance, settings_appearance_dark_mode, settings_appearance_dark_mode_desc, settings_language_section, settings_app_info_section)
- [X] T007 [P] [US1] Add 5 new translation keys to isiZulu translations in data/translations.ts (settings_appearance, settings_appearance_dark_mode, settings_appearance_dark_mode_desc, settings_language_section, settings_app_info_section)
- [X] T008 [US1] Complete all 44 translation keys for isiNdebele in data/translations.ts (add all navigation, profile, license, fines, and settings keys)
- [X] T009 [US1] Complete all 44 translation keys for isiXhosa in data/translations.ts (add all navigation, profile, license, fines, and settings keys)
- [X] T010 [US1] Complete all 44 translation keys for Sepedi in data/translations.ts (add all navigation, profile, license, fines, and settings keys)
- [X] T011 [US1] Complete all 44 translation keys for Sesotho in data/translations.ts (add all navigation, profile, license, fines, and settings keys)
- [X] T012 [US1] Complete all 44 translation keys for Setswana in data/translations.ts (add all navigation, profile, license, fines, and settings keys)
- [X] T013 [US1] Complete all 44 translation keys for siSwati in data/translations.ts (add all navigation, profile, license, fines, and settings keys)
- [X] T014 [US1] Complete all 44 translation keys for Tshivenda in data/translations.ts (add all navigation, profile, license, fines, and settings keys)
- [X] T015 [US1] Complete all 44 translation keys for Xitsonga in data/translations.ts (add all navigation, profile, license, fines, and settings keys)
- [X] T016 [US1] Verify all 11 languages have complete translation coverage by testing language switching in the app

**Checkpoint**: At this point, User Story 1 should be fully functional. All 11 languages display complete translations with no English fallback text visible. Language switching works immediately and language preference persists across sessions.

---

## Phase 4: User Story 2 - Enhanced Demo Data Variety (Priority: P2)

**Goal**: Enhance demo data with realistic variety of scenarios to help stakeholders evaluate the app and testers identify edge cases. Current demo data meets minimum requirements but can be enhanced for better variety.

**Independent Test**: Examine the mock data in data/mockData.ts and verify that it includes diverse scenarios such as various license classes and restrictions, multiple fine types and statuses, different date ranges, and varying amounts (all within a single enhanced user profile). View the fine list, filter by different statuses, and verify multiple examples of each status with varying amounts and locations.

### Implementation for User Story 2

- [X] T017 [US2] Review current demo data in data/mockData.ts and verify it meets all requirements (6+ fines, all status types, 5+ locations, 5+ fine types, amounts R250-R1500+)
- [X] T018 [US2] Optionally add 1-2 additional fine records to data/mockData.ts for better variety (ensure all fine types are represented: speeding, parking, mobile phone, vehicle defects, traffic violations)
- [X] T019 [US2] Verify all fine records in data/mockData.ts have realistic South African locations (cities, highways, streets)
- [X] T020 [US2] Verify license data in data/mockData.ts has valid South African license class format and common restriction types
- [X] T021 [US2] Verify profile data in data/mockData.ts has complete contact information in South African format (ID number, phone, address with postal code)

**Checkpoint**: At this point, User Story 2 should be complete. Demo data includes diverse, realistic scenarios that help stakeholders evaluate the app and testers identify different states. All data follows South African conventions and formats.

---

## Phase 5: User Story 3 - Language Display Names in Native Script (Priority: P3)

**Goal**: Display language names in their native script/language in the language selector. This is already implemented correctly - language names like "isiZulu" and "Setswana" are already displayed in native script.

**Independent Test**: Open the language selector in Settings and verify that each language option displays its name in its native script (e.g., "isiZulu" for Zulu, "Setswana" for Tswana). Non-English speaking users should be able to identify their language without understanding English.

### Implementation for User Story 3

- [X] T022 [US3] Verify LanguageNames object in types.ts already uses native script names (e.g., "isiZulu", "Setswana") - no changes needed
- [X] T023 [US3] Test language selector in pages/Settings.tsx displays all language names in native script correctly
- [X] T024 [US3] Verify current language is clearly indicated in the language selector when a non-English language is selected

**Checkpoint**: At this point, User Story 3 should be verified. Language names display in native script as required. This story is already satisfied by the current implementation - verification tasks only.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and improvements that affect the entire feature

- [X] T025 [P] Verify TypeScript compilation succeeds with no errors (run `npm run build` or equivalent)
- [ ] T026 [P] Manual testing: Switch to each of 11 languages and verify all UI text displays correctly
- [ ] T027 [P] Manual testing: Verify language preference persists after browser reload
- [ ] T028 [P] Manual testing: Verify language switching is immediate (no reload required)
- [ ] T029 [P] Manual testing: Test all screens (Profile, License, Fines, Settings) in all languages
- [ ] T030 [P] Manual testing: Verify demo data displays correctly with proper formatting (currency, dates, addresses)
- [ ] T031 Verify no console errors appear when switching languages or navigating between screens
- [ ] T032 Verify mobile responsiveness is maintained (no layout breaks from longer translated text)
- [ ] T033 Run quickstart.md validation checklist to ensure all implementation steps are complete

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories. This is the MVP.
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independent of US1, can be implemented in parallel
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Already satisfied, verification only. Can be done in parallel with US1/US2

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority (unless working in parallel)
- Translation keys must be added before they can be used

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Translation tasks for different languages (T008-T015) can be worked on in parallel by different team members
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch translation tasks for different languages in parallel:
Task: "Complete all 44 translation keys for isiNdebele in data/translations.ts"
Task: "Complete all 44 translation keys for isiXhosa in data/translations.ts"
Task: "Complete all 44 translation keys for Sepedi in data/translations.ts"
Task: "Complete all 44 translation keys for Sesotho in data/translations.ts"
Task: "Complete all 44 translation keys for Setswana in data/translations.ts"
Task: "Complete all 44 translation keys for siSwati in data/translations.ts"
Task: "Complete all 44 translation keys for Tshivenda in data/translations.ts"
Task: "Complete all 44 translation keys for Xitsonga in data/translations.ts"

# Note: These can be done in parallel since they modify different language objects
# within the same file, but care should be taken to avoid merge conflicts
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Complete Language Translations)
4. **STOP and VALIDATE**: Test User Story 1 independently - switch to all 8 incomplete languages and verify complete translations
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready (translation keys exist, Settings uses them)
2. Add User Story 1 → Test independently → Deploy/Demo (MVP! All 11 languages work)
3. Add User Story 2 → Test independently → Deploy/Demo (Enhanced demo data)
4. Add User Story 3 → Test independently → Deploy/Demo (Verify native script names - already done)
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (isiNdebele, isiXhosa translations)
   - Developer B: User Story 1 (Sepedi, Sesotho translations)
   - Developer C: User Story 1 (Setswana, siSwati translations)
   - Developer D: User Story 1 (Tshivenda, Xitsonga translations)
   - Developer E: User Story 2 (Demo data enhancements)
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies (or different sections of same file that don't conflict)
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Translation tasks for different languages can be done in parallel but may require careful merge coordination
- Commit after each task or logical group (e.g., after completing one language's translations)
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- User Story 3 is already satisfied - only verification tasks needed
- Demo data enhancements in User Story 2 are optional but recommended for better stakeholder evaluation

---

## Task Summary

**Total Tasks**: 33
- **Phase 1 (Setup)**: 3 tasks
- **Phase 2 (Foundational)**: 2 tasks
- **Phase 3 (User Story 1)**: 11 tasks
- **Phase 4 (User Story 2)**: 5 tasks
- **Phase 5 (User Story 3)**: 3 tasks
- **Phase 6 (Polish)**: 9 tasks

**Task Count per User Story**:
- **User Story 1**: 11 tasks (translation completion for 8 languages + 2 complete languages + verification)
- **User Story 2**: 5 tasks (demo data review and optional enhancements)
- **User Story 3**: 3 tasks (verification only - already implemented)

**Parallel Opportunities Identified**:
- Setup tasks: 2 parallel tasks
- Foundational tasks: 1 parallel task
- User Story 1: 8 languages can be translated in parallel (with merge coordination)
- User Story 2: Can be done in parallel with User Story 1
- User Story 3: Can be done in parallel with User Stories 1 and 2
- Polish tasks: 5 parallel testing tasks

**Independent Test Criteria**:
- **User Story 1**: Switch to any of 8 incomplete languages and verify all UI text displays correctly in selected language (no English fallback)
- **User Story 2**: Examine mock data and verify diverse scenarios (various fine types, statuses, locations, amounts) are represented
- **User Story 3**: Open language selector and verify language names display in native script (already satisfied)

**Suggested MVP Scope**: User Story 1 (Complete Language Translations) - This provides the most critical value by making the app accessible in all 11 official South African languages.

**Format Validation**: ✅ All tasks follow the strict checklist format with checkbox, Task ID, optional [P] marker, optional [Story] label, and file paths in descriptions.

