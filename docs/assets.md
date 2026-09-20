# Assets

## Purpose

This document defines how visual and static assets are managed in the Casa Pitaya project.

At the current stage, the client has **not provided official property photography or a complete production asset package**. Therefore, development will use mock and placeholder assets.

Mock assets are intended exclusively for design and development and must not be presented as authentic representations of Casa Pitaya.

---

## Asset Sources

Assets are divided into four categories:

### 1. Mock Assets

Temporary assets used to develop and validate the visual experience before official client assets are available.

Examples:

- Mock property photography
- Placeholder room photography
- Generic tropical/Puerto Vallarta imagery
- Temporary decorative graphics
- Placeholder gallery images

Mock assets must communicate the intended visual composition without being treated as factual representations of the property.

Location:

```text
public/images/mocks/
```

### 2. Client Assets

Official assets provided or explicitly approved by the client.

Examples:

- Property photography
- Logo
- Brand materials
- Official graphics
- Approved promotional photography

Location:

```text
public/images/client/
```

Client assets take precedence over mock assets when they become available.

### 3. Generated Assets

Visual assets intentionally generated for the project when appropriate.

Examples:

- Decorative illustrations
- Background graphics
- Non-photographic visual elements
- Supporting marketing graphics

Location:

```text
public/images/generated/
```

Generated imagery that depicts the actual property must not be presented as authentic property photography unless explicitly approved by the client.

### 4. UI Assets

Assets belonging to the interface rather than the property itself.

Examples:

- Icons
- UI illustrations
- Favicon
- Open Graph image
- Decorative shapes

Location:

```text
public/
```

or an appropriate subdirectory under:

```text
public/images/
```

---

## Asset Rules

### Never misrepresent mock assets

Mock photography must never be described as an actual photograph of Casa Pitaya.

For example, avoid copy such as:

> "View the actual pool"

when the image is only a mock.

Instead, the mock should simply support the visual design during development.

### Never invent property characteristics

Visual assets must not introduce unsupported factual claims.

Do not use imagery that implies the property has features that are not documented in `docs/client.md`.

Examples of unsupported assumptions:

- Ocean views
- Beachfront location
- Luxury finishes
- Air conditioning
- Rooftop
- Jacuzzi
- Additional bedrooms
- Specific room configurations
- Specific architectural features

The visual asset may establish an atmosphere, but factual property information must come from the project documentation.

---

## Photography Strategy

The final website should prioritize authentic photography provided or approved by the client.

The intended visual hierarchy is:

1. Real property photography
2. Client-approved supporting photography
3. Approved generated/decorative assets
4. Mock assets only when necessary

When official photography becomes available, replace mocks without changing the underlying content architecture unless the new photography requires a design adjustment.

---

## Image Requirements

When preparing production assets:

- Use descriptive filenames.
- Prefer modern image formats such as WebP or AVIF when appropriate.
- Optimize images before production.
- Preserve sufficient resolution for large hero sections.
- Provide appropriate `alt` text.
- Avoid unnecessary duplication of the same image.
- Use responsive image delivery through Next.js image optimization where appropriate.

Example:

```text
public/images/client/
├── hero-casa-pitaya.webp
├── pool.webp
├── exterior.webp
├── bedroom-01.webp
└── bedroom-02.webp
```

---

## Asset Metadata

Where useful, maintain a simple inventory containing:

| Asset            | Source         | Status    | Intended use     |
| ---------------- | -------------- | --------- | ---------------- |
| Hero image       | Mock           | Temporary | Homepage hero    |
| Property gallery | Mock           | Temporary | Gallery          |
| Logo             | Client         | Pending   | Header / footer  |
| Open Graph image | Generated/Mock | Pending   | Social sharing   |
| Favicon          | Generated      | Pending   | Browser metadata |

This inventory should be updated when assets are replaced or approved.

---

## Production Readiness

Before production launch:

- Replace all temporary property photography.
- Confirm which generated assets are approved.
- Confirm logo and favicon.
- Confirm Open Graph image.
- Optimize production images.
- Review all `alt` text.
- Verify that no mock image is presented as official property photography.

---

## Source of Truth

Asset handling is governed by:

- `docs/client.md` — factual property information.
- `docs/brand.md` — visual identity.
- `docs/content.md` — content requirements.
- `docs/seo.md` — SEO image requirements.
- `docs/specs/` — feature-specific asset requirements.

When documentation conflicts, follow the priority defined in `AGENTS.md`.
