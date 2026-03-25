# CLAUDE.md - TennisFriends Codebase Guide

## Project Overview

TennisFriends (tennisfrens.com) is a Korean-language tennis content and tools platform built with Next.js. It provides tennis skill improvement resources, player profiles, interactive utilities/calculators, blog content, and a tennis rules quiz.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with `tailwindcss-animate`
- **UI Components**: Radix UI primitives + shadcn/ui pattern (`src/components/ui/`)
- **Database**: Supabase (PostgreSQL) - optional, falls back to dummy client
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Fonts**: Inter (Google Fonts) + Pretendard (CDN)
- **Deployment**: Vercel (primary), Cloudflare Pages, GitHub Pages (static export)
- **SEO**: Heavy SEO focus - structured data (JSON-LD), sitemaps, RSS, multi-search-engine verification

## Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header, Footer, MobileNav, analytics)
│   ├── page.tsx            # Homepage
│   ├── blog/               # Blog posts (~100 posts, mix of [slug] dynamic + static routes)
│   ├── players/            # Tennis player profiles (~55 players)
│   ├── utility/            # Interactive tools/calculators (~65 utilities)
│   ├── tennis-rules-quiz/  # Quiz feature
│   ├── search/             # Search page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── admin/              # Admin dashboard (password-protected analytics panel)
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   └── .well-known/        # ai.txt, security.txt for crawler/security policies
├── components/
│   ├── ui/                 # shadcn/ui base components (button, card, dialog, etc.)
│   ├── layout/             # Header, Footer, MobileNav
│   ├── blog/               # Blog-specific components (TOC, CTA)
│   ├── players/            # Player profile components (ProfileCard, HexagonStats, SkillRadar)
│   ├── seo/                # SEO schema components (OrganizationSchema, WebSiteSchema)
│   ├── BlogPost.tsx        # Blog post renderer
│   ├── CTASection.tsx      # Call-to-action sections
│   ├── Tracking.tsx        # Analytics tracking (localStorage + Cloudflare KV)
│   ├── AdSense.tsx         # Google AdSense integration
│   ├── JsonLd.tsx          # JSON-LD structured data
│   └── ScrollAnimation.tsx # Scroll-based animations
├── data/                   # Static data files
│   ├── players.ts          # Player database (~12K lines)
│   ├── blog-posts.js       # Blog post data
│   ├── blog-content.ts     # Blog content metadata
│   ├── tennis-terms.ts     # Tennis terminology dictionary
│   ├── PLAYER_PROFILE_TEMPLATE.ts  # Template for new player profiles
│   └── player-examples/    # Player example data
├── lib/                    # Shared utilities and logic
│   ├── site.ts             # Site constants (SITE_NAME, URLs, locale)
│   ├── supabaseClient.ts   # Supabase client setup (optional)
│   ├── utils.ts            # General utilities (cn helper via clsx + tailwind-merge)
│   ├── constants.ts        # App constants
│   ├── seo/                # SEO metadata helpers (generatePageMetadata, generateTitle)
│   ├── blog-utils.ts       # Blog helper functions
│   ├── related-content.ts  # Related content logic
│   ├── questions.ts        # Quiz/test questions
│   ├── tennisQuiz.ts       # Quiz logic
│   ├── tennisPlayers.ts    # Player data utils
│   ├── utilities.ts        # Utility page helpers
│   ├── equipmentRecommendation.ts  # Equipment recommendation logic
│   ├── injuryRiskCalc.ts   # Injury risk calculator
│   ├── matchAnalyzer.ts    # Match analysis logic
│   ├── nutritionGuide.ts   # Nutrition guide logic
│   ├── playStyleTest.ts    # Play style test logic
│   ├── tensionCalc.ts      # String tension calculator
│   ├── trainingPlanner.ts  # Training plan generator
│   ├── cloudflare-analytics.ts  # Cloudflare KV analytics
│   └── admin/              # Admin utilities (statistics.ts, helpers.ts)
├── templates/              # Player page templates
└── types/                  # TypeScript type definitions
    ├── admin.ts            # VisitorData, StatsData, CloudflareStatus
    ├── blog.ts             # BlogPostData, BlogPost
    └── player.ts           # PlayerData, TemplateType

scripts/                    # Build and utility scripts (not linted)
├── submit-indexnow.js      # Submit URLs to Bing IndexNow
├── batch_players.js        # Batch player profile generation
├── scaffold_posts.js       # Generate blog post scaffolds
├── enrich_new_players.js   # Auto-enrich player profiles
└── ...                     # 20+ other content/maintenance scripts

workers/                    # Cloudflare Workers (backend)
└── analytics/              # Analytics worker (Cloudflare KV)

docs/                       # Project documentation
├── PROJECT_MANUAL.md       # Comprehensive project guide
├── PLAYER_SYSTEM_GUIDE.md  # Player system documentation
├── player-template-guide.md # How to create player profiles
├── cloudflare-analytics-setup.md
└── reports/                # Audit and optimization reports

public/                     # Static assets
└── images/players/         # 100+ player profile images (PNG, SVG)
```

## Development Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
npm run cf-build     # Build for Cloudflare Pages
npm run cf-deploy    # Deploy to Cloudflare Pages
npm run deploy       # Deploy static output via Wrangler
npm run gh-pages     # Build and deploy to GitHub Pages

# SEO
npm run indexnow     # Submit URLs to IndexNow
```

## Key Conventions

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)

### Styling
- Use Tailwind CSS utility classes
- Use `cn()` helper from `@/lib/utils` for conditional class merging
- Dark mode supported via `dark:` Tailwind variants
- Responsive design: mobile-first with `md:` breakpoints

### Component Patterns
- UI primitives in `src/components/ui/` follow shadcn/ui conventions (Radix UI + CVA)
- Page-specific components organized by feature directory
- Layout components (Header, Footer, MobileNav) in `src/components/layout/`

### Routing
- Next.js App Router with file-based routing
- Dynamic routes use `[slug]` pattern for blog posts
- Static player profiles as individual route directories
- Each utility tool has its own directory under `src/app/utility/`

### SEO
- Every page should include proper metadata exports
- Use `SITE_NAME`, `getSiteUrl()`, `getAbsoluteUrl()` from `@/lib/site`
- JSON-LD structured data via `@/components/JsonLd` and seo components
- Sitemap generation in `src/app/sitemap.ts`
- RSS feed at `src/app/rss.xml/`

### Language
- Primary language is Korean (lang="ko")
- Code comments are often in Korean
- Content is Korean-language tennis content

### Database
- Supabase is optional - the app works without it using dummy fallbacks
- Environment variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Tables: `ntrp_results` (NTRP test results), `tension_results` (string tension results)
- Materialized view: `ntrp_top7d` (top 50 scores from past 7 days for leaderboard)

### Authentication
- No user login system for visitors
- Admin panel uses simple password auth via `NEXT_PUBLIC_ADMIN_PASSWORD` env var
- Device tracking via localStorage device IDs (for test result attribution)

### Testing
- No formal test framework configured (no Jest/Vitest)
- Verify changes via `npm run build` and `npm run lint`

### Environment Variables
- `NEXT_PUBLIC_SITE_URL` - Site URL override
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `GOOGLE_SITE_VERIFICATION` - Google Search Console
- `NAVER_SITE_VERIFICATION` - Naver Search Advisor
- `BING_SITE_VERIFICATION` - Bing Webmaster

### ESLint
- ESLint 9 flat config (`eslint.config.mjs`)
- Uses `eslint-config-next` with core-web-vitals and TypeScript rules

### Naming Conventions
- **Components**: PascalCase (`PlayerProfileCard.tsx`)
- **Utilities/lib**: camelCase functions, kebab-case filenames (`blog-utils.ts`)
- **Constants**: UPPER_SNAKE_CASE (`SITE_NAME`, `DEFAULT_SITE_URL`)
- **Types**: PascalCase (`PlayerData`, `BlogPostData`)

### Build Configuration
- Vercel deployment: default (no static export, image optimization enabled)
- GitHub Pages: static export with `output: 'export'`, unoptimized images
- Cloudflare Pages: via `@cloudflare/next-on-pages` with Wrangler
- Production builds remove console.log (keeps error/warn)
- Security headers configured in `next.config.ts`

### Architecture Notes
- Server Components for metadata generation and static content
- Client Components (`'use client'`) for interactive utilities, tests, and calculators
- No REST API endpoints - headless design using static data + client-side logic
- Calculation results stored optionally in Supabase, always available in localStorage

## Adding New Content

### New Utility Tool
1. Create directory: `src/app/utility/<tool-name>/`
2. Add `page.tsx` with metadata export and tool component
3. Add business logic to `src/lib/` if complex
4. Update related content links if applicable

### New Blog Post
1. Add post data to `src/data/blog-posts.js` or `src/data/blog-content.ts`
2. For static routes: create `src/app/blog/<slug>/page.tsx`
3. For dynamic routes: ensure slug is handled by `src/app/blog/[slug]/page.tsx`

### New Player Profile
1. Add player data to `src/data/players.ts`
2. Create directory: `src/app/players/<player-name>/page.tsx`
3. Reference `src/data/PLAYER_PROFILE_TEMPLATE.ts` and `docs/player-template-guide.md`
4. Add player image to `public/images/players/`
