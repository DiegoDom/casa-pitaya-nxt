# Brand — Casa Pitaya

> Visual identity and design guidelines for the Casa Pitaya website.
>
> This document defines the visual direction of the brand and provides guidance for design and AI-assisted development.

---

# Brand Identity

## Brand Name

Casa Pitaya

## Brand Concept

Casa Pitaya is a vacation residence in Puerto Vallarta designed for groups looking for a comfortable place to stay, relax and enjoy time together.

The visual identity should communicate:

- Tropical atmosphere
- Warmth
- Relaxation
- Hospitality
- Personality
- Freedom
- Connection
- Mexican coastal character
- A memorable vacation experience

The design should feel distinctive and personal rather than looking like a generic vacation-rental template.

---

# Brand Personality

Casa Pitaya should feel:

- Warm
- Tropical
- Relaxed
- Friendly
- Colorful
- Authentic
- Playful
- Contemporary
- Welcoming

The brand should **not** feel:

- Corporate
- Formal
- Cold
- Generic
- Overly luxurious
- Childish
- Excessively commercial
- Visually chaotic

---

# Visual Direction

## Overall Style

The visual language should combine:

**Mexican tropical character + contemporary editorial design.**

The website should feel like discovering a colorful and welcoming house in Puerto Vallarta rather than browsing a conventional hotel website.

Use photography, typography, color and whitespace to create a sense of place.

## Design Principles

### 1. Strong visual identity

Casa Pitaya should be recognizable from its colors, typography and visual composition.

### 2. Photography first

Real photography should be one of the primary visual elements.

Do not hide the property's personality behind excessive UI decoration.

### 3. Color with intention

The brand palette is colorful, but colors should have clear roles.

Avoid using all colors simultaneously in every section.

### 4. Organic composition

Prefer slightly organic or human compositions over rigid corporate layouts.

Examples:

- Asymmetric image layouts
- Organic shapes
- Large typography
- Overlapping elements
- Rounded or naturally curved sections
- Editorial spacing

These techniques should be used carefully and should not compromise usability.

### 5. Comfortable spacing

The website should feel spacious and relaxed.

Avoid overly dense layouts.

---

# Color System

## Original Palette

The client-provided palette contains the following colors:

| Name     | HEX        |
| -------- | ---------- |
| Color 01 | `#C83F79`  |
| Color 02 | `#5AA FDF` |
| Color 03 | `#2D91D4`  |
| Color 04 | `#67213E`  |
| Color 05 | `#BC7D6F`  |
| Color 06 | `#7D63A2`  |
| Color 07 | `#AE508B`  |
| Color 08 | `#EC4684`  |

> Note: `#5AA FDF` above contains an accidental space. The canonical value is `#5AA FDF` only if explicitly confirmed. The original supplied value was `5aafdf`, therefore the canonical HEX is `#5AA FDF` without the space: `#5AA FDF` is invalid. Use `#5AAFDF`.

### Canonical Palette

```text
#C83F79
#5AAFDF
#2D91D4
#67213E
#BC7D6F
#7D63A2
#AE508B
#EC4684
```

---

# Semantic Color Roles

The original colors should be mapped to semantic roles rather than referenced directly throughout the application.

## Primary

### Primary

`#C83F79`

Use for:

- Primary brand actions
- Important interactive elements
- Selected states
- Key visual accents

Suggested CSS variable:

```text
--color-primary
```

---

## Primary Dark

### Primary Dark

`#67213E`

Use for:

- Strong headings
- Dark brand surfaces
- High-contrast sections
- Footer backgrounds
- Important decorative elements

Suggested CSS variable:

```text
--color-primary-dark
```

---

## Secondary

### Secondary

`#2D91D4`

Use for:

- Secondary actions
- Links
- Supporting accents
- Interactive elements where appropriate

Suggested CSS variable:

```text
--color-secondary
```

---

## Secondary Light

### Secondary Light

`#5AAFDF`

Use for:

- Soft blue surfaces
- Background accents
- Decorative elements
- Hover states where appropriate

Suggested CSS variable:

```text
--color-secondary-light
```

---

## Warm Accent

### Warm Accent

`#BC7D6F`

Use for:

- Warm backgrounds
- Secondary decorative elements
- Supporting sections
- Photography overlays where appropriate

Suggested CSS variable:

```text
--color-warm
```

---

## Purple Accent

### Purple

`#7D63A2`

Use sparingly for:

- Decorative accents
- Illustrative elements
- Special highlights
- Visual transitions

Suggested CSS variable:

```text
--color-purple
```

Purple should not become a dominant UI color.

---

## Pink Accent

### Pink

`#AE508B`

Use for:

- Decorative elements
- Gradients
- Secondary brand moments
- Photography-related accents

Suggested CSS variable:

```text
--color-pink
```

---

## Bright Pink

### Bright Pink

`#EC4684`

Use sparingly for:

- Small accents
- Decorative highlights
- Special CTA moments
- Gradient endpoints

Suggested CSS variable:

```text
--color-pink-bright
```

Avoid using this color extensively for text because of contrast considerations.

---

# Neutral Colors

The original palette does not provide suitable neutral colors for all interface purposes.

The UI should therefore introduce a small neutral system.

## Background

```text
#FFF9F5
```

Warm off-white.

Use instead of pure white for large surfaces where appropriate.

## Surface

```text
#FFFFFF
```

Use for:

- Cards
- Forms
- Content surfaces
- High-contrast UI elements

## Text

```text
#2B2025
```

Warm dark neutral.

Use for primary text.

## Muted Text

```text
#6F6267
```

Use for:

- Secondary text
- Descriptions
- Metadata

## Border

```text
#E8DDE0
```

Use for subtle borders and separators.

---

# Color Usage

## Recommended Distribution

The website should generally follow a restrained distribution:

- Neutral colors: primary UI foundation
- Primary pink: main brand accent
- Dark burgundy: strong contrast
- Blue: secondary accent
- Warm brown: environmental/warm accent
- Purple and additional pinks: decorative accents

The complete palette should **not** be used equally.

A section may use one dominant accent plus neutral colors.

---

# Gradients

Gradients are allowed but should be used intentionally.

Recommended combinations:

### Pink → Purple

```text
#C83F79 → #7D63A2
```

### Pink → Blue

```text
#EC4684 → #5AAFDF
```

### Warm → Pink

```text
#BC7D6F → #C83F79
```

Gradients should primarily be used for:

- Decorative backgrounds
- Hero overlays
- Small visual accents
- Illustrative elements

Avoid using gradients for large amounts of body text or critical UI controls unless contrast is guaranteed.

---

# Typography

## Primary Typeface

The project includes a custom font stored in:

```text
/public/fonts/
```

This font is the primary typeface for the brand.

### Usage

Use the custom typeface for:

- Headings
- Hero typography
- Navigation where appropriate
- Brand statements
- Important visual text

The font should be registered using `@font-face`.

> TODO: Document the exact font family name and available weights once confirmed.

---

## Typography Hierarchy

The design should prioritize strong editorial hierarchy.

### Display

Used for:

- Hero headlines
- Major section titles
- Large brand statements

Characteristics:

- Large
- Expressive
- High visual impact

### Heading

Used for:

- Section headings
- Card titles
- Feature headings

### Body

Used for:

- Descriptions
- Information
- Forms
- Supporting content

Body text must prioritize readability over visual personality.

### Caption

Used for:

- Metadata
- Image descriptions
- Small supporting information

---

# Typography Principles

- Avoid excessive font weights.
- Maintain clear hierarchy.
- Keep body text highly readable.
- Do not use decorative typography for long paragraphs.
- Avoid all-caps for large amounts of text.
- Use letter spacing intentionally.
- Large typography can be expressive, but accessibility must remain a priority.

---

# Photography Direction

Photography is a fundamental part of the Casa Pitaya identity.

## Desired Characteristics

Images should communicate:

- Natural light
- Tropical environment
- Warmth
- Human presence
- Relaxation
- Authentic spaces
- Puerto Vallarta atmosphere

Prefer real photographs of:

- Exterior
- Pool
- Bedrooms
- Kitchen
- Outdoor areas
- Details of the property
- Surrounding environment
- Local atmosphere

## Image Treatment

Prefer:

- Natural colors
- Warm light
- Authentic composition
- Minimal filters

Avoid:

- Heavy color grading
- Excessive HDR
- Generic stock photography
- Artificial-looking images
- Excessive overlays

---

# Shapes

The design can use organic shapes inspired by:

- Tropical leaves
- Waves
- Sun
- Water
- Natural forms

Possible techniques:

- Soft rounded corners
- Organic image masks
- Curved section transitions
- Blob-like decorative shapes

Do not overuse de
