# HoodBachi App — AGENTS.md

This file is the source of truth for project docs, stack rules, and workflow.

## Source of Truth

- `docs/PRODUCT.md` — product overview, users, core flows
- `docs/DESIGN.md` — theme, layout rules, components, SEO
- `docs/CHANGELOG.md` — versioned changes
- `docs/ROADMAP.md` — planned work and priorities

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind
- No `src/` directory
- No import alias
- ShadCN UI only
- BetterAuth
- Prisma + Neon
- TipTap
- ImageKit
- Mapcn for maps
- GSAP for motion

## Rules

- Do not invent unapproved tech
- Do not skip BetterAuth setup steps
- Do not add paid APIs without explicit approval
- All edits must be followed by git push
- Pull before editing shared files
