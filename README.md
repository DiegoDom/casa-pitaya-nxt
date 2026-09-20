# Casa Pitaya

Website for **Casa Pitaya**, a vacation residence in Puerto Vallarta, Jalisco, Mexico.

The project is being developed as a modern, responsive web experience focused on presenting the property, its spaces, amenities, location, house rules, and contact/booking options.

> **Development status:** In progress

---

## About Casa Pitaya

Casa Pitaya is a complete vacation residence located in Puerto Vallarta.

Current documented property information includes:

- More than 16 guests
- 6 bedrooms
- 8 beds
- 4 bathrooms
- Private pool
- Equipped kitchen
- Outdoor areas
- Wi-Fi
- Pet-friendly accommodation
- Location in Las Gaviotas, Puerto Vallarta

For the complete and authoritative property information, see:

`docs/client.md`

---

## Tech Stack

- **Next.js**
- **TypeScript**
- **React**
- **Tailwind CSS 4.x**

The architecture is intentionally kept simple for the initial marketing website while allowing future evolution toward features such as contact forms, email notifications, availability inquiries, and reservation-related functionality.

---

## Project Structure

```text
.
├── AGENTS.md
│
├── docs/
│   ├── client.md
│   ├── brand.md
│   ├── content.md
│   ├── seo.md
│   ├── assets.md
│   ├── requirements.md
│   ├── technical.md
│   └── decisions.md
│
├── public/
│   ├── images/
│   │   ├── mocks/
│   │   ├── generated/
│   │   └── client/
│   └── fonts/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── config/
│   ├── lib/
│   └── types/
│
├── package.json
└── README.md
```

---

## Documentation

Project knowledge is intentionally separated from agent instructions.

| Document               | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `AGENTS.md`            | Instructions for AI coding agents              |
| `docs/client.md`       | Authoritative property information             |
| `docs/brand.md`        | Brand identity and visual direction            |
| `docs/content.md`      | Content strategy and website messaging         |
| `docs/seo.md`          | SEO strategy and metadata                      |
| `docs/assets.md`       | Asset strategy and mock/production assets      |
| `docs/requirements.md` | High-level functional scope                    |
| `docs/technical.md`    | Technical architecture                         |
| `docs/decisions.md`    | Important project decisions                    |
| `docs/specs/`          | Feature specifications and acceptance criteria |

### Source of truth

Different documents have different responsibilities.

- Property facts → `docs/client.md`
- Visual identity → `docs/brand.md`
- Content → `docs/content.md`
- SEO → `docs/seo.md`
- Functional behavior → `docs/specs/`
- Architecture → `docs/technical.md`
- Architectural decisions → `docs/decisions.md`

Do not treat this README as the source of truth for detailed project information.

---

## Development Approach

The project follows **Spec-Driven Development (SDD)**.

New functionality should generally follow:

```text
Idea
  ↓
Specification
  ↓
Implementation
  ↓
Validation
  ↓
Documentation / Decision
```

Feature specifications are stored under:

```text
docs/specs/
```

A specification defines the expected behavior and acceptance criteria for its feature.

---

## Assets

Official property photography has not yet been provided by the client.

For this reason, the initial development uses mock assets.

Mock assets are stored under:

```text
public/images/mocks/
```

They are temporary development assets and **must not be presented as official Casa Pitaya photography**.

Official client-provided assets will be stored under:

```text
public/images/client/
```

See `docs/assets.md` for the complete asset strategy.

---

## Getting Started

### Requirements

Install:

- Node.js LTS
- npm, pnpm, yarn, or another supported package manager

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

---

## Environment Variables

Environment variables should be stored in a local environment file:

```text
.env.local
```

Do not commit secrets or private credentials to the repository.

At the current stage, environment variables should only be introduced when required by an implemented feature.

---

## Development Principles

- Do not invent property information.
- Do not present mock imagery as authentic property photography.
- Follow the approved project specifications.
- Prefer Server Components unless client-side interactivity is required.
- Keep components focused and reusable.
- Use TypeScript throughout the application.
- Preserve accessibility and responsive behavior.
- Avoid unnecessary dependencies and abstractions.
- Do not implement speculative future functionality.
- Update the relevant documentation when important project decisions change.

---

## AI-Assisted Development

This project is developed with AI-assisted coding tools.

AI agents should read `AGENTS.md` before modifying the project.

Agents should consult the relevant documentation under `docs/` before making decisions about:

- Property information
- Content
- Branding
- Assets
- SEO
- Requirements
- Architecture

When implementing a feature, the relevant specification under `docs/specs/` should be treated as the authoritative behavioral reference.

---

## Project Status

### Current

- [x] Project architecture defined
- [x] Client/property information documented
- [x] Brand direction documented
- [x] Content strategy documented
- [x] SEO strategy documented
- [x] Asset strategy documented
- [x] Technical architecture documented
- [x] Spec-Driven Development adopted
- [ ] Feature specifications
- [ ] Initial page implementation
- [ ] Responsive validation
- [ ] Accessibility validation
- [ ] SEO implementation
- [ ] Production assets
- [ ] Production deployment

---

## License

This project is developed for Casa Pitaya.

Unless otherwise specified, project code and assets should not be assumed to be available for redistribution or commercial reuse.
