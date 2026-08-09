# Design System

## Theme

- **Base:** cream and white
- **Accent:** loud red with warm yellow accents
- **Mode:** light/dark via `next-themes`
- **Fonts:** Geist for UI/body, Geist Mono for metadata, The Seasons for editorial headings
- **Motion:** GSAP + `@gsap/react` for all animations

## Color Usage

- Backgrounds: cream/white
- Text: near-black on light
- Accents/CTAs/borders: brand red
- Secondary accents: warm yellow
- No glassmorphism

## Typography Rules

- Use The Seasons exclusively for major editorial headings
- Tight tracking and line height for headings: `letter-spacing: -0.04em`, `line-height: 0.88`
- Use Geist for UI, body, buttons, labels, descriptions, forms, metadata, cards
- Use Geist Mono for numbers, dates, times, prices, location codes

## Layout Rules

- No `src/` directory
- App router with route groups
- No import alias
- ShadCN components only, styled via CSS token value overrides
- No token removal
- Mobile-first responsive design
- Editorial whitespace, strong grid, asymmetrical layouts where specified

## Components

- Public: Nav, Hero, Marquee, About, Menu, Experience, Schedule, Catering, SocialProof, Instagram, FinalCTA, Footer, Loader
- Shared: ThemeToggle

## Maps

- Use Mapcn for all map embeddings
- Public locations page shows event markers
- Use red markers, cream popups

## SEO

- OG image from brand IG via ImageKit
- Local business schema
