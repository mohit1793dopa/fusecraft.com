# Fusecrafts Pvt. Ltd. — Web Platform

> Bespoke architectural furniture, precision joinery, lighting, and facade engineering crafted under one roof in Nagpur, India.

---

## ✦ Overview

This repository hosts the official, production-ready web platform for **Fusecrafts Pvt. Ltd.** It showcases their portfolio of commercial and residential architectural projects, bespoke workshop craft collections, engineering processes, and studio collaborations.

Designed with an editorial warm-modern aesthetic:
- **Typography:** GT Walsheim Trial (Regular, Medium, Bold) with proportional architectural leading.
- **Color Palette:** Warm architectural paper cream (`#F4EFE6`), deep studio charcoal (`#1C1917`), rich terracotta (`#8C4A2F`), and refined olive accents.
- **Interactions:** Precision micro-interactions, responsive carousel sliders, tactile category grids, and animated blueprint drafting grids.

---

## ✦ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org) with Turbopack
- **UI Library:** [React 19](https://react.dev)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict typing, zero emit errors)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) + PostCSS
- **Animations:** [Motion](https://motion.dev) & [GSAP](https://gsap.com)
- **Carousels:** [Embla Carousel](https://www.embla-carousel.com) with AutoScroll
- **Icons:** [Lucide React](https://lucide.dev)

---

## ✦ Project Structure

```text
├── public/                     # Static web assets & optimized media
│   ├── fonts/                  # Self-hosted GT Walsheim Trial webfonts
│   ├── favicons/               # Brand favicon suite & app icons
│   └── images/                 # Web-optimized imagery (~63 MB)
│       ├── about/              # Studio, workshop, and founder photography
│       ├── blog/               # Architectural essay imagery
│       ├── browse-by-craft/    # Category collection cover imagery
│       ├── collaborators/      # Architectural studio partner logos
│       ├── craft/              # Design catalog by collection
│       ├── hero/               # High-fidelity hero background media
│       ├── project-media/      # Named project photo series & catalogs
│       └── workshop/           # Materiality, joinery, and fabrication media
├── src/
│   ├── app/                    # Next.js App Router routes & layouts
│   │   ├── layout.tsx          # Root layout, font definitions & smooth scroll
│   │   ├── page.tsx            # Flagship homepage
│   │   ├── about/              # About Fusecrafts, philosophy & leadership
│   │   ├── approach/           # Process, engineering & manufacturing stages
│   │   ├── collections/        # Comprehensive collections directory
│   │   ├── contact/            # Inquiry form, studio contact & Google Maps link
│   │   ├── craft/[category]/   # Dynamic SSG collection gallery pages
│   │   ├── projects/           # Named client projects directory (Commercial/Residential)
│   │   ├── projects/[slug]/    # Dynamic SSG project case studies
│   │   ├── work/               # Workshop collections index with 3×5 interactive grid
│   │   └── workshop/           # Workshop capabilities, machines & material gallery
│   ├── components/             # Modular, typed UI components
│   │   ├── about/              # About-specific layouts
│   │   ├── approach/           # Engineering timeline & process flows
│   │   ├── common/             # Reusable cards, grids, buttons, and BottomFadeGrid
│   │   ├── craft/              # Craft grids, interactive toggles & viewers
│   │   ├── home/               # Homepage hero, showcases, & features
│   │   ├── layout/             # SiteHeader, SiteFooter, and navigation
│   │   ├── projects/           # Project hero, filters & detail galleries
│   │   └── workshop/           # Workshop gallery, material tabs & machine cards
│   ├── data/                   # Structured data sources & JSON catalogs
│   │   ├── craft/              # 16 collection data files (beds, chairs, etc.)
│   │   ├── craft-portfolio.ts  # Types & dynamic category loaders
│   │   ├── project-media.json  # Project gallery assets
│   │   └── site.ts             # Global site metadata, nav links & collaborators
│   └── types/                  # Global TypeScript definitions
├── .gitignore                  # Production Git ignore rules
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies & run scripts
├── postcss.config.mjs          # PostCSS configuration
└── tsconfig.json               # TypeScript configuration
```

---

## ✦ Getting Started

### Prerequisites

- **Node.js:** v20.x or v22.x recommended
- **Package Manager:** `npm`, `pnpm`, or `yarn`

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd main\ branch_fusecraft

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### Type Checking & Linting

```bash
# Verify TypeScript typing (0 errors)
npm run check

# Run ESLint
npm run lint
```

### Production Build

```bash
npm run build
npm run start
```

All 39 pages are statically generated (SSG) at build time for optimal performance, instant page loads, and SEO rankings.

---

## ✦ Key Architectural Features

1. **Self-Contained Web Assets:**
   - 100% of images and fonts reside within `/public/`. Zero broken external asset dependencies.
   - Redundant and raw duplicate assets removed, keeping the total asset footprint lean and web-friendly (~63 MB).
2. **Dynamic SSG Collections & Projects:**
   - Pre-renders all 22 craft collection routes (`/craft/*`) and all 5 client project case studies (`/projects/*`).
3. **Drafting Blueprint Grid Pattern:**
   - Custom SVG drafting grid overlaid on hero sections and inverted on bottom CTA banners for tactile craftsmanship aesthetics.
4. **Interactive Filters:**
   - Client-side filtering across Commercial and Residential projects with responsive chips and badges.
5. **Studio Contact Integration:**
   - Direct Google Maps routing to Fusecrafts' headquarters and workshop in Nagpur, India.

---

## ✦ License & Ownership

© 2026 Fusecrafts Pvt. Ltd. All rights reserved. Private and proprietary.
