# `docs/technical.md`

## Purpose

This document describes the technical architecture and engineering principles of the Casa Pitaya website.

The project is intentionally designed to support the current marketing website while allowing future evolution toward backend-driven capabilities.

---

## Technology Stack

### Framework

**Next.js**

Next.js is the primary application framework.

The project should use the App Router architecture unless an accepted architectural decision specifies otherwise.

### Language

**TypeScript**

TypeScript should be used throughout the application.

Avoid introducing JavaScript files for application logic unless there is a documented reason.

### Styling

The project uses **Tailwind CSS 4.x**.

The visual system should be based on the tokens and direction documented in:

```text
docs/brand.md
```

### Runtime

The project should use a current Node.js LTS version compatible with the selected Next.js version.

The exact version should be recorded in the project configuration.

---

## Application Architecture

The initial architecture should favor a simple, maintainable structure.

Suggested organization:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
│
├── components/
│   ├── ui/
│   ├── layout/
│   └── sections/
│
├── lib/
├── config/
├── types/
└── ...
```

The exact structure may evolve as the application grows.

Do not create abstractions without a current use case.

---

## Next.js Rendering Strategy

Use **Server Components by default**.

Use Client Components only when browser-side interactivity is required.

Examples that may justify a Client Component:

- Interactive gallery
- Mobile navigation state
- Dialogs
- Carousels
- Form interactions
- Client-side animations requiring state
- Browser APIs

Avoid making entire pages Client Components unnecessarily.

---

## Data Strategy

Current property information is primarily static.

Property facts should originate from a controlled data structure or content source rather than being duplicated throughout components.

Example conceptual structure:

```text
Property data
     ↓
Content/data layer
     ↓
Page sections
     ↓
UI components
```

This reduces duplicated information and makes future content updates safer.

---

## Environment Variables

Secrets and environment-specific configuration must never be hardcoded into components.

Use environment variables for values such as:

- API credentials
- Email service credentials
- Reservation service credentials
- Database credentials
- Private integration tokens

Public configuration should use the appropriate Next.js public environment variable conventions.

Never expose secrets through client-side code.

---

## Future Backend Evolution

The architecture may eventually support:

```text
Frontend
   ↓
Application/API layer
   ↓
Business logic
   ↓
External services / database
```

Potential future services include:

- Email delivery
- Reservation management
- Availability
- Contact forms
- Guest inquiries
- Analytics
- External booking integrations

These should only be introduced when required by an approved specification.

---

## Component Principles

Prefer:

- Small components with clear responsibilities
- Reusable UI primitives
- Composition over excessive prop complexity
- Semantic HTML
- Explicit data structures
- Strong TypeScript types

Avoid:

- Giant page components
- Premature design systems
- Unnecessary abstractions
- Duplicate content
- Hardcoded repeated values
- Components that mix unrelated responsibilities

---

## Accessibility

Accessibility is a first-class technical requirement.

Implement:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Appropriate heading hierarchy
- Accessible interactive controls
- Meaningful labels
- Appropriate `alt` text
- Sufficient color contrast
- Reduced-motion support where applicable

Accessibility should be considered during implementation rather than added afterward.

---

## Performance

The website should prioritize:

- Optimized images
- Appropriate image dimensions
- Next.js image optimization
- Minimal client-side JavaScript
- Server Components where appropriate
- Lazy loading for non-critical content
- Efficient fonts
- Avoiding unnecessary dependencies

Performance decisions should consider the image-heavy nature of a vacation rental website.

---

## SEO

SEO requirements are documented separately in:

```text
docs/seo.md
```

Technical implementation should support:

- Metadata
- Open Graph
- Canonical URLs
- Sitemap
- Robots
- Structured data where applicable
- Semantic HTML
- Crawlable content

---

## Testing

Testing strategy should be introduced according to feature complexity and project needs.

When a specification requires automated validation, the appropriate testing strategy should be defined as part of that specification.

Do not claim test coverage that does not exist.

---

## Deployment

Deployment configuration should remain compatible with the selected hosting platform.

Production-specific decisions should be documented in `docs/decisions.md` once confirmed.

---

## Development Principles

1. Prefer the simplest solution that satisfies the specification.
2. Do not implement speculative functionality.
3. Do not introduce dependencies without a reason.
4. Keep business/content data separate from presentation where practical.
5. Preserve accessibility.
6. Optimize for maintainability.
7. Validate changes against the relevant specification.
8. Update documentation when an architectural decision changes.

---

# `docs/decisions.md`

# Architecture Decisions

## Purpose

This document records important technical and product decisions made during the development of the Casa Pitaya project.

The goal is to preserve context so future development does not repeatedly reconsider already accepted decisions.

---

## Decision Format

Important decisions should follow this structure:

```text
# Decision: [Title]

## Status
Accepted | Proposed | Superseded

## Context
Why the decision was necessary.

## Decision
What was decided.

## Consequences
Positive and negative consequences.

## Alternatives
Relevant alternatives considered.
```

---

## Decision: Use Next.js

### Status

Accepted

### Context

The project initially considered a simpler static-oriented architecture. However, the website may evolve beyond a purely informational landing page and could eventually require capabilities such as contact forms, email delivery, availability inquiries, and reservation-related functionality.

### Decision

Use **Next.js with TypeScript** as the primary application framework.

### Consequences

The project can begin as a relatively simple marketing website while retaining a clear path toward server-side functionality and backend integrations.

The initial implementation should remain simple and should not introduce backend complexity before it is required.

---

## Decision: Use Spec-Driven Development

### Status

Accepted

### Context

The project's functional requirements are expected to evolve during development.

Writing a large static requirements document before implementation could cause the documentation to become disconnected from the actual product.

### Decision

Use Spec-Driven Development.

Feature behavior and acceptance criteria will be defined under:

```text
docs/specs/
```

A feature specification becomes the authoritative source for that feature once accepted.

### Consequences

Development becomes iterative and feature-oriented.

The project can evolve without turning `requirements.md` into a continuously changing collection of undocumented assumptions.

---

## Decision: Use Mock Assets During Initial Development

### Status

Accepted

### Context

The client has not yet provided official property photography.

Waiting for final photography would unnecessarily block development of the visual experience.

### Decision

Use mock assets during development.

Mock assets must be stored separately from official client assets and must never be represented as authentic Casa Pitaya photography.

### Consequences

The visual design can be developed immediately.

Before production, temporary property imagery must be replaced with client-provided or client-approved assets.

---

## Decision: Do Not Invent Property Information

### Status

Accepted

### Context

A vacation-rental website depends heavily on factual information such as amenities, room configuration, capacity, policies, and location.

Invented information could misrepresent the property.

### Decision

All factual property claims must originate from `docs/client.md` or an explicitly approved source.

When information is unavailable, it must remain unspecified or be marked as pending confirmation.

### Consequences

Some sections may initially contain incomplete information.

This is preferable to introducing unsupported claims.

---

## Decision: Server Components by Default

### Status

Accepted

### Context

The initial website is primarily content-driven and does not require client-side JavaScript for every component.

### Decision

Use Next.js Server Components by default.

Client Components should only be introduced when browser-side interactivity or state is actually required.

### Consequences

The application can reduce unnecessary client-side JavaScript while retaining interactive components where needed.

---

## Decision: Separate Project Knowledge From Agent Instructions

### Status

Accepted

### Context

AI coding agents need both project context and behavioral instructions.

Putting all information into `AGENTS.md` would make it difficult to maintain.

### Decision

Use:

```text
AGENTS.md
```

for instructions about how the agent should work.

Use:

```text
docs/
```

for project knowledge and decisions.

### Consequences

Agents have a clear entry point while project knowledge remains modular and maintainable.

---

## Current Decision Status

| Decision                                    | Status   |
| ------------------------------------------- | -------- |
| Next.js + TypeScript                        | Accepted |
| Tailwind CSS 4.x                            | Accepted |
| Spec-Driven Development                     | Accepted |
| Mock assets during development              | Accepted |
| No invented property information            | Accepted |
| Server Components by default                | Accepted |
| Separate `AGENTS.md` from project knowledge | Accepted |
