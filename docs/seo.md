# SEO — Casa Pitaya

> Search engine optimization guidelines and metadata for the Casa Pitaya website.
>
> SEO content must be based on factual information from `docs/client.md` and website content from `docs/content.md`.

---

# SEO Strategy

## Primary Objective

Make Casa Pitaya discoverable for people searching for vacation accommodation and houses for groups in Puerto Vallarta.

## Primary Location

Puerto Vallarta, Jalisco, Mexico.

## Primary Entity

Casa Pitaya.

## Primary Search Intent

Users looking for:

- Vacation accommodation in Puerto Vallarta
- Houses for groups in Puerto Vallarta
- Vacation homes in Puerto Vallarta
- Accommodation for large groups in Puerto Vallarta
- Houses with a pool in Puerto Vallarta

> These are target search intents, not claims about current search volume or rankings.

---

# Primary Keywords

## Primary

- Casa Pitaya Puerto Vallarta
- vacation rental Puerto Vallarta
- vacation home Puerto Vallarta
- house rental Puerto Vallarta

## Secondary

- house for groups Puerto Vallarta
- accommodation for large groups Puerto Vallarta
- vacation house with pool Puerto Vallarta
- Puerto Vallarta vacation home
- alojamiento Puerto Vallarta
- casa vacacional Puerto Vallarta
- casa para grupos Puerto Vallarta
- alojamiento para grupos Puerto Vallarta

## Local Terms

- Puerto Vallarta
- Jalisco
- Las Gaviotas
- Mexico

---

# Homepage Metadata

## Title

### Proposed

Casa Pitaya | Vacation Home in Puerto Vallarta

### Alternative

Casa Pitaya | Casa Vacacional en Puerto Vallarta

> Select the final language strategy once the website's primary audience and language are confirmed.

## Meta Description

### Proposed

Casa Pitaya is a complete vacation home in Puerto Vallarta with 6 bedrooms, 8 beds, 4 bathrooms and a pool for groups of more than 16 guests.

> Verify final character length and adjust during implementation.

---

# Open Graph

## Title

Casa Pitaya | Puerto Vallarta

## Description

A complete vacation home in Puerto Vallarta with space for large groups, a pool and outdoor areas.

## Image

TODO:

```text
/public/images/seo/og-image.jpg
```

Recommended dimensions:

```text
1200 × 630
```

The image should:

- Clearly identify Casa Pitaya.
- Use real property photography.
- Include the Casa Pitaya brand.
- Remain readable when displayed as a social preview.

---

# Twitter / Social Metadata

Use the same core messaging as Open Graph unless a specific social strategy is defined.

## Card

```text
summary_large_image
```

## Title

Casa Pitaya | Puerto Vallarta

## Description

A complete vacation home in Puerto Vallarta for groups of more than 16 guests.

---

# Canonical URL

## Production Domain

TODO

Example:

```text
https://www.example.com/
```

The canonical URL must be updated once the production domain is confirmed.

Do not use placeholder URLs in production metadata.

---

# Language

## Primary Language

Spanish.

## Locale

```text
es-MX
```

## HTML

```html
<html lang="es-MX"></html>
```

## Future Language Support

English may be added in a future version.

If English content is implemented, use:

```text
en
```

and implement proper `hreflang` relationships.

---

# Local SEO

## Business / Property Name

Casa Pitaya

## Address

C. Pez Espada 114, Las Gaviotas, 49328 Puerto Vallarta, Jal., Mexico

## City

Puerto Vallarta

## State

Jalisco

## Country

Mexico

## Business Type

Vacation rental / lodging accommodation.

> The exact schema.org type should be selected carefully during implementation based on the property's actual business model.

---

# Structured Data

Structured data should be implemented only for information that is actually present and verified on the website.

Potential schema types to evaluate:

- `LodgingBusiness`
- `Accommodation`
- `WebSite`
- `WebPage`
- `BreadcrumbList`

Potential information:

- Name
- Address
- Image
- URL
- Telephone, if confirmed
- Social profiles
- Description

Do not add unsupported structured data.

Do not fabricate:

- Aggregate ratings
- Prices
- Availability
- Review counts
- Star classifications
- Amenities

If the Airbnb rating and 197 reviews are displayed and their source/usage is legally and technically appropriate, their structured-data treatment should be evaluated separately.

---

# Sitemap

The production application should expose:

```text
/sitemap.xml
```

The sitemap should include only canonical, indexable URLs.

Do not include:

- Draft pages
- Internal utility routes
- API routes
- Duplicate URLs
- Query-parameter variations

---

# Robots

The production website should expose:

```text
/robots.txt
```

The robots configuration should allow search engines to crawl public pages while preventing indexing of private/internal routes where appropriate.

---

# URL Structure

URLs should be:

- Short
- Descriptive
- Lowercase
- Stable
- Human-readable

Recommended homepage:

```text
/
```

Potential future pages:

```text
/amenities
/location
/gallery
/contact
/reservations
```

Avoid unnecessary URL nesting.

---

# Images

All important images should have descriptive alternative text.

Example:

```text
Casa Pitaya exterior in Puerto Vallarta
```

Avoid:

```text
image1
IMG_3847
photo
```

Decorative images should use empty alt attributes when appropriate.

---

# Image SEO

Prefer:

- WebP or AVIF where appropriate
- Responsive image sizes
- Explicit dimensions
- Optimized file sizes
- Descriptive filenames

Example:

```text
casa-pitaya-pool-puerto-vallarta.webp
```

Avoid:

```text
IMG_20260919_182731.jpg
```

---

# Performance

SEO implementation must consider Core Web Vitals and general page performance.

Priorities:

- Optimize hero images.
- Avoid unnecessarily large assets.
- Use responsive images.
- Minimize client-side JavaScript.
- Prefer Server Components where appropriate.
- Lazy-load non-critical images.
- Reserve image dimensions to reduce layout shifts.
- Avoid unnecessary third-party scripts.

---

# Accessibility & SEO

Accessibility and SEO should be implemented together where possible.

Requirements:

- Semantic HTML
- Correct heading hierarchy
- Descriptive link text
- Accessible navigation
- Meaningful image alt text
- Keyboard accessibility
- Good color contrast

Do not add keywords unnaturally for SEO purposes.

---

# Internal Linking

Relevant pages should link to each other naturally.

Examples:

- Homepage → Amenities
- Homepage → Location
- Homepage → Contact
- Amenities → Contact
- Location → Contact
- Gallery → Contact
- Future Reservations → Contact / Booking flow

Internal links should help users navigate rather than exist solely for search engines.

---

# Content Guidelines

SEO content should:

- Be useful to visitors first.
- Clearly describe the property.
- Use natural language.
- Mention Puerto Vallarta where contextually appropriate.
- Include relevant property characteristics.
- Avoid keyword stuffing.
- Avoid unsupported claims.

Do not create content solely to target search terms.

---

# Search Engine Restrictions

Never make unsupported claims such as:

- "Best vacation rental in Puerto Vallarta"
- "Top-rated house in Puerto Vallarta"
- "Number one vacation home"
- "Most luxurious house"
- "Cheapest accommodation"
- "Best location"

unless such claims can be objectively substantiated and are approved for publication.

---

# Future SEO Opportunities

Potential future improvements:

- English version
- Dedicated location page
- Dedicated amenities page
- Reservation landing page
- FAQ content
- Local travel guide
- Structured data refinement
- Google Business Profile integration, if applicable
- Search Console monitoring
- Analytics
- Conversion tracking

These should be implemented based on actual business needs rather than creating unnecessary pages.

---

# SEO TODO

- [ ] Confirm production domain.
- [ ] Confirm primary website language.
- [ ] Create final OG image.
- [ ] Confirm logo and favicon.
- [ ] Confirm phone number for structured data.
- [ ] Confirm whether Airbnb rating/reviews can and should be displayed.
- [ ] Confirm direct booking strategy.
- [ ] Define final page structure.
- [ ] Implement sitemap.
- [ ] Implement robots.txt.
- [ ] Implement metadata.
- [ ] Evaluate structured data.
- [ ] Configure Search Console after deployment.
- [ ] Configure analytics after deployment.
