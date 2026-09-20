# Casa Pitaya — Design System

**Version:** 1.0
**Status:** Approved visual direction
**Source:** Casa Pitaya Brand Identity System generated in Stitch
**Last updated:** 2026-09-19

---

## 1. Purpose

This document translates the approved Casa Pitaya visual identity into implementation-oriented design rules for the website.

It is the bridge between the brand identity defined in `docs/brand.md` and the UI implementation.

The design system defines:

- Color tokens
- Typography
- Spacing
- Borders and radii
- Shadows
- Buttons
- Cards
- Iconography
- Decorative elements
- Layout principles
- Responsive behavior
- Accessibility requirements

The visual identity originates from the Casa Pitaya logo and the approved Stitch brand identity system.

---

## 2. Design Direction

Casa Pitaya combines:

**Mexican tropical warmth + contemporary editorial design + relaxed hospitality.**

The interface should feel:

- Warm
- Welcoming
- Contemporary
- Authentic
- Relaxed
- Editorial
- Colorful but controlled
- Photography-driven

Avoid:

- Corporate aesthetics
- Generic hotel/resort aesthetics
- Excessive luxury styling
- Cartoonish tropical imagery
- Excessive gradients
- Heavy shadows
- Cluttered layouts
- Excessive decorative elements

The design should communicate quality through typography, composition, photography and spacing rather than visual excess.

---

## 3. Color Tokens

### 3.1 Primary Brand

| Token            | HEX       | Usage                              |
| ---------------- | --------- | ---------------------------------- |
| `primary`        | `#C83F79` | Primary CTA, brand accents, emblem |
| `primary-dark`   | `#67213E` | Dark brand surfaces, hover states  |
| `primary-mauve`  | `#AE508B` | Secondary pink accent              |
| `primary-bright` | `#EC4684` | Occasional vibrant accent          |
| `primary-soft`   | `#F8E9F0` | Soft brand backgrounds             |

### 3.2 Terracotta

| Token              | HEX       | Usage                                |
| ------------------ | --------- | ------------------------------------ |
| `terracotta`       | `#BC7D6F` | Eyebrows, secondary accents, borders |
| `terracotta-light` | `#F4ECE9` | Soft warm backgrounds                |
| `terracotta-dark`  | `#93584B` | Dark terracotta applications         |

### 3.3 Coastal Accents

| Token               | HEX       | Usage                |
| ------------------- | --------- | -------------------- |
| `coastal-sky`       | `#5AAFDF` | Light coastal accent |
| `coastal-pacific`   | `#2D91D4` | Strong blue accent   |
| `coastal-jacaranda` | `#7D63A2` | Purple/floral accent |

These colors are supporting accents and should not compete with the primary pink/burgundy identity.

### 3.4 Surfaces and Neutrals

| Token               | HEX       | Usage                       |
| ------------------- | --------- | --------------------------- |
| `surface-arena`     | `#FFF9F5` | Primary page background     |
| `surface-white`     | `#FFFFFF` | Cards and elevated surfaces |
| `surface-charcoal`  | `#2B2025` | Primary text                |
| `surface-driftwood` | `#6F6267` | Secondary/muted text        |
| `surface-border`    | `#E8DDE0` | Borders and dividers        |

### 3.5 Color Hierarchy

Use the palette with strong hierarchy rather than equal distribution.

Approximate visual balance:

- 60% warm cream / white surfaces
- 25% dark typography and grounding elements
- 7% Pitaya Pink
- 5% Terracotta
- 3% Coastal Blue

These proportions are a visual guideline, not a strict mathematical requirement.

---

## 4. Typography

### 4.1 Display Typeface

**Noto Serif**

Use for:

- Hero headlines
- Section headings
- Editorial statements
- Important brand moments
- Selected card titles

Preferred character:

- Elegant
- Warm
- Editorial
- Human
- Refined

### 4.2 Functional Typeface

**Plus Jakarta Sans**

Use for:

- Body text
- Navigation
- Buttons
- Labels
- Metadata
- Forms
- Utility information

Prioritize readability and accessibility.

### 4.3 Type Scale

| Token     | Size | Recommended use       |
| --------- | ---: | --------------------- |
| `display` | 48px | Hero headline         |
| `h1`      | 36px | Major section heading |
| `h2`      | 24px | Subsection            |
| `h3`      | 18px | Component title       |
| `body`    | 16px | Main content          |
| `cta`     | 14px | Buttons               |
| `eyebrow` | 12px | Labels / metadata     |

Responsive implementations may reduce display sizes on smaller screens.

### 4.4 Typography Rules

- Serif establishes editorial personality.
- Sans-serif communicates functional information.
- Avoid using serif for dense UI or long body copy.
- Use generous line-height for paragraphs.
- Use letter spacing selectively, primarily for uppercase labels and navigation.
- Avoid excessive font weights.

---

## 5. Spacing

Use Tailwind's spacing system as the implementation foundation.

Preferred composition:

- Small spacing: `4px–12px`
- Component spacing: `16px–24px`
- Section spacing: `48px–80px`
- Major page transitions: `80px–112px`

Large sections should have generous vertical whitespace.

Spacing should create an editorial rhythm rather than a dense dashboard-like interface.

---

## 6. Borders and Radius

Preferred radii:

| Token         | Radius | Usage                       |
| ------------- | -----: | --------------------------- |
| `radius-sm`   |    6px | Buttons, compact controls   |
| `radius-md`   |    8px | Small UI elements           |
| `radius-lg`   |   12px | Cards                       |
| `radius-xl`   |   16px | Feature cards               |
| `radius-2xl`  |   24px | Hero/content containers     |
| `radius-full` | 9999px | Pills and circular elements |

Do not apply large rounded corners indiscriminately.

Organic forms should be used intentionally.

---

## 7. Shadows

Casa Pitaya uses subtle warm shadows.

### Warm Small

```css
0 2px 8px -2px rgba(103, 33, 62, 0.05),
0 1px 4px -1px rgba(188, 125, 111, 0.08)
```

### Warm Medium

```css
0 12px 24px -6px rgba(103, 33, 62, 0.07),
0 4px 12px -2px rgba(188, 125, 111, 0.06)
```

### Warm Large

```css
0 20px 40px -12px rgba(43, 32, 37, 0.08)
```

Shadows should remain subtle.

Avoid:

- Heavy black shadows
- Neon glows
- Strong elevation effects
- Excessive layered shadows

---

## 8. Buttons

### Primary Button

Characteristics:

- `primary` background
- White text
- Semibold sans-serif
- 14px
- Slight letter spacing
- Small/medium radius
- Subtle hover transition

Example:

```tsx
<Button variant="primary">Ask About Availability</Button>
```

### Secondary Button

Characteristics:

- Transparent or surface background
- Terracotta border
- Terracotta text
- Same typography as primary CTA

Example:

```tsx
<Button variant="secondary">Explore Casa Pitaya</Button>
```

### Interaction States

All interactive controls must define:

- Default
- Hover
- Focus-visible
- Active
- Disabled

Focus-visible states must remain clearly visible for keyboard users.

---

## 9. Cards

Preferred card characteristics:

- White or warm surface
- Subtle border
- Soft radius
- Minimal warm shadow
- Generous internal spacing

Cards should support content hierarchy without becoming visually heavy.

Avoid excessive nesting of cards.

---

## 10. Iconography

The icon system uses:

- Outline style
- Approximately 1.5px stroke
- Rounded line caps
- Rounded line joins
- Simple geometric construction

Icons should be:

- Minimal
- Consistent
- Accessible
- Easy to recognize

Preferred semantic categories include:

- Bedrooms
- Beds
- Bathrooms
- Guests
- Pool
- Kitchen
- Wi-Fi
- Location
- Parking
- Pets
- Outdoor spaces
- Check-in

Do not use emoji as primary UI iconography.

Do not create custom icons when an existing approved icon can be reused.

---

## 11. Decorative Motifs

The visual language may use:

### Pitaya Motif

The pitaya emblem may be reused as a subtle decorative element.

Do not alter the official logo when it is used as a logo.

Decorative usage must remain visually distinct from the official brand signature.

### Organic Arches

Soft semicircular arches may be used as framing devices inspired by Mexican architectural forms.

Use sparingly.

### Organic Shapes

Rounded and curved shapes may support:

- Image framing
- Hero compositions
- Section decoration
- Background accents

Decorative elements should never reduce content readability.

---

## 12. Photography

Photography is a primary part of the Casa Pitaya visual language.

Preferred characteristics:

- Natural light
- Warm tones
- Authentic property photography
- Human-scale compositions
- Tropical vegetation
- Relaxed atmosphere
- Editorial composition

Real client photography must be prioritized for production.

Mock or generated imagery must never be presented as authentic Casa Pitaya photography.

Do not invent property characteristics through imagery.

---

## 13. Layout

The website should use an editorial composition rather than a rigid dashboard structure.

Preferred principles:

- Large photographic moments
- Generous whitespace
- Clear content hierarchy
- Controlled asymmetry
- Strong alignment
- Responsive grids
- Full-width sections when appropriate
- Constrained readable text widths

The main content container should remain consistent throughout the site.

Recommended maximum width:

```text
max-width: 1280px
```

with responsive horizontal padding.

---

## 14. Navigation

The primary navigation should be:

- Clean
- Lightweight
- Highly readable
- Sticky when appropriate
- Supported by the warm cream background

The logo should remain visually prominent without dominating the interface.

Mobile navigation should prioritize simplicity and accessibility.

---

## 15. Responsive Behavior

Design mobile-first.

### Mobile

Prioritize:

- Readability
- Touch targets
- Simple navigation
- Reduced decorative density
- Appropriate image crops
- Comfortable spacing

### Tablet

Gradually introduce:

- Multi-column grids
- Larger imagery
- More complex compositions

### Desktop

Use:

- Editorial asymmetry
- Large hero compositions
- Multi-column layouts
- Large typography
- Generous whitespace

Do not simply shrink desktop layouts for mobile.

---

## 16. Accessibility

The design system must comply with practical WCAG-oriented accessibility principles.

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible `:focus-visible`
- Sufficient color contrast
- Accessible button/link states
- Descriptive image alt text
- Do not communicate meaning through color alone
- Respect `prefers-reduced-motion`
- Minimum comfortable touch target sizes

Decorative images should use appropriate empty alt attributes.

---

## 17. Animation and Motion

Motion should be subtle and purposeful.

Preferred:

- Short opacity transitions
- Small transform transitions
- Button hover transitions
- Gentle image reveals

Avoid:

- Excessive parallax
- Large bouncing animations
- Continuous decorative animation
- Motion that distracts from content

Respect `prefers-reduced-motion`.

---

## 18. Implementation Rules

### Tailwind CSS

The design system should be implemented using Tailwind CSS 4.x.

Design tokens should be centralized rather than repeatedly hard-coded throughout components.

Avoid:

```tsx
className = "bg-[#C83F79]";
```

when an equivalent semantic token exists.

Prefer:

```tsx
className = "bg-primary";
```

### Components

Reusable visual primitives should live under:

```text
src/components/ui/
```

Examples:

```text
Button
Container
Heading
Badge
Card
Icon
Section
```

Page-specific compositions should live under:

```text
src/components/sections/
```

Examples:

```text
Hero
PropertyHighlights
Gallery
Amenities
Location
HouseRules
Contact
```

---

## 19. Source of Truth Hierarchy

When implementing UI, use this priority:

1. `AGENTS.md`
2. `docs/specs/` for feature behavior
3. `docs/design-system.md` for visual implementation
4. `docs/brand.md` for brand direction
5. `docs/content.md` for approved content
6. `docs/client.md` for factual property information
7. Existing project patterns
8. General implementation best practices

If sources conflict, do not silently invent a solution. Identify the conflict and resolve it explicitly.

---

## 20. Content Integrity

The Design System contains visual examples generated by Stitch.

Some example content may describe features or property characteristics that are not confirmed by the client.

Examples of content that must **not** automatically be treated as factual include:

- Air conditioning
- Fiber Wi-Fi speeds
- Keyless entry
- Specific furniture materials
- Specific hospitality services
- Food or beverage offerings
- Specific architectural materials
- Specific guest experiences

Factual property information must always come from:

```text
docs/client.md
```

The visual design may be reused independently from the example content.

---

## 21. Design System Principles

When creating new UI:

1. Reuse existing design tokens.
2. Reuse existing components.
3. Prefer composition over one-off styling.
4. Preserve the typography hierarchy.
5. Preserve the color hierarchy.
6. Keep decorative elements subtle.
7. Prioritize photography.
8. Maintain accessibility.
9. Avoid unnecessary visual complexity.
10. Do not introduce new styles without a clear reason.

The objective is not to make every section visually identical.

The objective is to make every section feel unmistakably like **Casa Pitaya**.
