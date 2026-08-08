# Design System

## Theme

- **Base:** near-black and white only
- **Accent:** red from HoodBachi brand
- **Mode:** light/dark via `next-themes`
- **Fonts:** Geist, Geist Mono, local `font-serif` fallback for "The Seasons"
- **Motion:** GSAP + `@gsap/react` for all animations

## Color Usage

- Backgrounds: near-black or white
- Text: white on dark, near-black on light
- Accents/CTAs/borders: brand red
- No extra colors outside this system

## Layout Rules

- No `src/` directory
- App router with route groups
- No import alias
- ShadCN components only, styled via CSS token value overrides
- No token removal
- Static export for GitHub Pages
- Mobile-first responsive design

## Components

- Public: Nav, Hero, Menu, Schedule, Gallery, Contact, Loader
- Admin: AdminNav, StatsCard, OrderTable, InventoryRow, MediaLibrary
- Shared: MapEmbed, Lightbox, ThemeToggle

## Maps

- Use Mapcn for all map embeddings
- Public schedule page shows daily locations
- Admin can update locations with Mapcn integration

## SEO

- OG image from brand IG via ImageKit
- Local business schema
- Google Maps embed on contact page
