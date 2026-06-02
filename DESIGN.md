# Design

## Source of Truth

- Status: Active
- Last refreshed: 2026-06-02
- Primary product surfaces: home, blog index, article detail, utility tools, quizzes, player pages
- Evidence reviewed: `src/app/page.tsx`, `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`, `src/app/utility/page.tsx`, `src/templates/players/PlayerPageTemplate.tsx`, `src/app/globals.css`, `docs/reports/site-content-design-review-latest.md`

## Brand

- Personality: practical, tennis-literate, calm, and decision-oriented
- Trust signals: Korean editorial clarity, local utility workflows, GSC/GA4-backed optimization, structured schema, visible related tools and sources
- Avoid: decorative gradients as the main experience, nested cards, oversized hero sections on utility/editorial pages, repeated article templates, ad placements that interrupt comprehension

## Product Goals

- Goals: help Korean tennis players choose drills, equipment, tactics, recovery routines, and content paths quickly
- Non-goals: marketing-first landing pages, purely atmospheric visuals, generic mass-produced article layouts
- Success signals: faster first scan, higher CTR on high-impression pages, lower mobile friction, stable SEO/indexing audits, clear next action from each page

## Personas and Jobs

- Primary personas: club players, beginners, intermediate players, tennis parents, equipment shoppers, and player-profile searchers
- User jobs: find a quick answer, compare options, prepare for a match, diagnose a skill issue, choose a related tool, read a useful article without visual friction
- Key contexts of use: mobile before practice, desktop research, post-match review, lesson/equipment planning

## Information Architecture

- Primary navigation: utility, blog, players
- Core routes/screens: `/`, `/blog`, `/blog/[slug]`, `/utility`, `/utility/*`, `/players`, `/players/[slug]`, `/tennis-rules-quiz`
- Content hierarchy: task surface first, concise explanation second, related action/link third

## Design Principles

- Put the working surface first: calculators, tools, article lists, and player data come before marketing copy.
- Keep scan density high: compact headings, short labels, stable controls, and restrained spacing on repeat-use pages.
- Preserve editorial trust: article structures vary by topic and avoid repeated boilerplate link blocks.
- Keep mobile stable: no horizontal button floods, overflowing tables, cramped ad slots, or text trapped inside small controls.
- Use one primary accent and one support accent per view; avoid one-note palettes and dominant decorative gradients.

## Visual Language

- Color: restrained court greens and slate neutrals, with small amber/blue status accents where useful
- Typography: compact headings for tools/cards, larger type only for true page-level heroes
- Spacing/layout rhythm: full-width bands with constrained inner content; no cards inside cards
- Shape/radius/elevation: cards and controls use 8px radius or less unless inherited component behavior requires otherwise
- Motion: subtle hover movement only; no decorative motion that distracts from tools or reading
- Imagery/iconography: lucide icons for common actions; tennis imagery only when it clarifies product, player, or gameplay context

## Components

- Existing components to reuse: `Button`, `Badge`, `Card`, `Input`, `AdSenseSlot`, `RelatedContent`, `RelatedUtilitiesSection`, player templates
- New/changed components: blog index client filter island for search, category filtering, compact pagination
- Variants and states: active/inactive filters, empty search state, disabled pagination, mobile wrapping states
- Token/component ownership: Tailwind classes and global article/table rules live in app/components CSS surfaces; avoid one-off visual systems per page

## Accessibility

- Search and pagination controls need clear labels and disabled states.
- Article tables must remain overflow-safe on mobile.
- Ads must not block the first answer, summary, table comprehension, or core tool controls.
- Text must fit inside buttons/cards at mobile widths without relying on viewport-scaled font sizes.

## Verification

- Required local command: `npm run verify`
- Design-specific checks: blog index server/client split, compact pagination, article width, ad placement count, table wrapper, related links, Korean UX text audit
- Screenshot QA targets for visual implementation passes: `/`, `/blog`, one article page, `/utility`, one utility detail page, `/tennis-rules-quiz`
- Production-adjacent actions such as GSC sitemap submission, IndexNow, GA4, or AdSense tuning are verified separately after deploy.
