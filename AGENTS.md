<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

Casa Pitaya is a vacation rental website for a property located in Puerto Vallarta, Jalisco, Mexico.

The project is built with Next.js and TypeScript and may evolve from a marketing website into a web application with backend functionality such as contact forms, email notifications and reservations.

---

# Knowledge Base

The `/docs` directory contains the project's source of truth.

Before making decisions or implementing functionality, consult the relevant documentation.

## Client Information

Read:

`docs/client.md`

Use this document when you need information about:

- The property
- Location
- Capacity
- Rooms
- Beds
- Bathrooms
- Amenities
- Services
- House rules
- Check-in / check-out
- Safety information
- Contact channels

### Rule

Never invent or assume client information.

If information required for implementation or content is missing, ask for clarification instead of fabricating it.

---

## Brand

Read:

`docs/brand.md`

Use this document when working on:

- UI
- Layout
- Colors
- Typography
- Components
- Photography
- Animations
- Visual direction
- Responsive design
- Accessibility

### Rule

Follow the established visual language before introducing new design patterns.

Do not introduce arbitrary colors, typography or visual styles.

---

## Content

Read:

`docs/content.md`

Use this document when working on:

- Page copy
- Headlines
- Descriptions
- Calls to action
- Section content
- Marketing messages
- Property information displayed to visitors

### Rule

Use approved content whenever available.

Do not invent:

- Prices
- Amenities
- Services
- Testimonials
- Distances
- Ratings
- Property features
- Policies
- Availability
- Business claims

If content is not available, identify it as missing.

---

## SEO

Read:

`docs/seo.md`

Use this document when working on:

- Metadata
- Page titles
- Descriptions
- Open Graph
- Structured data
- Keywords
- Search engine optimization

Do not introduce SEO claims that are not supported by the project documentation.

---

## Assets

Read:

`docs/assets.md`

Use this document when working with:

- Images
- Logos
- Icons
- Fonts
- Videos
- Public assets

Prefer existing project assets over external or generated assets unless explicitly requested.

---

## Requirements

Read:

`docs/requirements.md`

Use this document when implementing:

- Features
- User interactions
- Functional requirements
- Responsive behavior
- Forms
- Navigation
- Future application functionality

Requirements should be treated as product requirements, not suggestions.

---

## Technical Context

Read:

`docs/technical.md`

Use this document when making architectural or implementation decisions.

It defines:

- Framework
- Application a
