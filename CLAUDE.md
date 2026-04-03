<!-- GSD:project-start source:PROJECT.md -->
## Project

**Curriculo Erick**

A single-page personal portfolio site for Erick aimed at recruiters arriving from LinkedIn. It presents a polished dark warm-amber visual identity, bilingual PT-BR/EN content, and a prominent curriculum download path so visitors can quickly understand the profile and convert to contact.

The site is intentionally low-maintenance: all editable content lives in `config.js`, while the page itself stays as a stable `index.html` experience that can be deployed as static hosting.

**Core Value:** Turn a recruiter visit into a resume download and contact with as little friction as possible.

### Constraints

- **Architecture**: Single-page static site using `index.html` and `config.js` - content edits must not require touching template structure
- **Localization**: PT-BR and EN content must be first-class - recruiters need a working language toggle instead of partial translation
- **Deployment**: Must deploy to Netlify or GitHub Pages with one command - handoff and publishing need to stay simple
- **Responsive Design**: Must work well on mobile - LinkedIn traffic may arrive from phones
- **Visual Direction**: Dark / warm amber palette with Fraunces, Plus Jakarta Sans, and JetBrains Mono - visual approval is part of done
<!-- GSD:project-end -->

<!-- GSD:stack-start source:STACK.md -->
## Technology Stack

Technology stack not yet documented. Will populate after codebase mapping or first phase.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
