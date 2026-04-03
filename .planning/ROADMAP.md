# Roadmap: Curriculo Erick

## Overview

Build a static, conversion-focused personal portfolio in five phases: establish the structure and visual system, fill the page with bilingual recruiter-facing content, harden the release path, simplify content authoring through translation tooling, and then apply final visual refinement.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [x] **Phase 1: Foundation Shell** - Establish the single-page structure, approved visual language, and primary CTA layout
- [x] **Phase 2: Bilingual Content System** - Connect all real portfolio content and language switching through `config.js`
- [x] **Phase 3: Ship Readiness** - Finalize responsiveness, deployment path, and verification for release
- [ ] **Phase 4: Auto-translate config.js PT-BR to EN** - Add PT-BR-first YAML authoring and generated bilingual config output
- [x] **Phase 5: Style and layout refinement** - Final visual polish pass on layout, spacing, and presentation

## Phase Details

### Phase 1: Foundation Shell
**Goal**: Deliver the static page shell with the chosen visual identity, clear recruiter-facing hierarchy, and conversion-first CTA placement.
**Depends on**: Nothing (first phase)
**Requirements**: [CONV-01, CONV-03, CONF-01, UX-01]
**Success Criteria** (what must be TRUE):
  1. Visitor lands on a complete single-page layout with hero and portfolio sections in place
  2. Resume download and contact CTAs are visible in the primary viewport hierarchy
  3. The page reflects the approved dark warm-amber direction with the specified typography
  4. Content architecture is wired so future edits are sourced from `config.js`
**Plans**: 2 plans

Plans:
- [ ] 01-01: Create base page structure, section layout, and CTA hierarchy
- [ ] 01-02: Implement visual theme tokens, typography setup, and `config.js` content contract

### Phase 2: Bilingual Content System
**Goal**: Populate the site with real portfolio content and make the PT-BR/EN switch fully functional without leaving the page.
**Depends on**: Phase 1
**Requirements**: [CONT-01, CONT-02, CONT-03, CONT-04, L10N-01, L10N-02, L10N-03, CONV-02, CONF-02]
**Success Criteria** (what must be TRUE):
  1. Visitor can switch between PT-BR and EN and see all major portfolio copy update correctly
  2. Real bio, experience, skills, metrics, and resume link data render from `config.js`
  3. Resume CTA downloads the real PDF target
  4. No content section requires manual editing outside `config.js`
**Plans**: 2 plans

Plans:
- [ ] 02-01: Define bilingual content schema in `config.js` and render all portfolio sections from it
- [ ] 02-02: Implement language toggle behavior and connect the real resume asset/link

### Phase 3: Ship Readiness
**Goal**: Make the page production-ready through responsive polish, static deployment setup, and verification.
**Depends on**: Phase 2
**Requirements**: [UX-02, UX-03, DEPL-01]
**Success Criteria** (what must be TRUE):
  1. The portfolio remains usable and visually coherent on mobile and desktop breakpoints
  2. Static deployment to Netlify or GitHub Pages works with one command
  3. Basic verification confirms HTML integrity, responsive behavior, and release readiness
**Plans**: 2 plans

Plans:
- [ ] 03-01: Polish responsive behavior and eliminate layout issues across target viewport sizes
- [ ] 03-02: Add one-command deployment flow and run final verification

### Phase 4: Auto-translate config.js PT-BR to EN
**Goal**: Create a YAML-based content authoring workflow where PT-BR content is written once and automatically translated to EN via DeepL API, generating the full bilingual `config.js`.
**Depends on**: Phase 3
**Requirements**: [TRANS-01, TRANS-02, TRANS-03]
**Success Criteria** (what must be TRUE):
  1. Content is authored once in PT-BR YAML and compiled into the bilingual runtime config
  2. Build tooling can translate EN content through DeepL with manual overrides
  3. `index.html` continues to work unchanged against the generated `config.js`
**Plans**: 1 plan

Plans:
- [ ] 04-01: Create `content.yaml`, build script with DeepL translation, and npm build pipeline

### Phase 5: Style and layout refinement
**Goal**: Deliver a full visual redesign replacing the warm-amber gradient aesthetic with a flat dark editorial system: new color tokens, restructured layout (topbar / hero 2-col / body-grid / footer), and refined typography using Fraunces italic, Plus Jakarta Sans 300, and expanded JetBrains Mono usage.
**Depends on**: Phase 4
**Requirements**: [UX-01, UX-02, UX-03]
**Plans**: 3 plans

Plans:
- [x] 05-01-PLAN.md — Restructure index.html to new layout with data-* survival and font URL update
- [x] 05-02-PLAN.md — Rewrite styles.css with new token system and all component styles
- [x] 05-03-PLAN.md — Human visual verification checkpoint

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation Shell | 2/2 | Complete | 2026-04-03 |
| 2. Bilingual Content System | 2/2 | Complete | 2026-04-03 |
| 3. Ship Readiness | 2/2 | Complete | 2026-04-03 |
| 4. Auto-translate config.js PT-BR to EN | 1/1 | Awaiting Human Verification | - |
| 5. Style and layout refinement | 3/3 | Complete | 2026-04-03 |
