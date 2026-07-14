# Evidence

## Baseline

- Dashboard GSC page-query report generated `2026-07-14T02:34:24.503Z`: canonical `https://tennisfrens.com/players/alexandra-eala` has query `알렉산드라 이알라`, 1,311 impressions, 0 clicks, CTR 0%, and average position 8.05 for 2026-06-15 through 2026-07-13.
- Live baseline: HTTP 200; title `알렉산드라 이알라(Alexandra Eala) 프로필 | WTA 랭킹·전적·플레이스타일`; canonical `https://tennisfrens.com/players/alexandra-eala`; robots `index, follow`; JSON-LD present.
- Scope: only `SEARCH_METADATA_OVERRIDES["alexandra-eala"]`; no article data, page body, schema, canonical, ads.txt, or ad layout changed.

## Commands

| Command | Result | Notes |
|---|---|---|
| Live public metadata fetch | PASS | Captured the canonical baseline before the change. |
| `npm run lint` | PASS | No lint errors. |
| `npm run type-check` | PASS | TypeScript completed without errors. |
| `npm run audit:metadata-coverage` | PASS | `status=ok`, 10 static routes, 63 utility routes, and 59 player static routes. |
| `npm run build` | PASS | Next.js production build compiled, type-checked, and generated all 1,528 static pages. |
| Local production route smoke | PASS | HTTP 200; intended Korean title and description; canonical remains `https://tennisfrens.com/players/alexandra-eala`. |

## Deployment Recovery Evidence

- First GitHub Pages run `29305904425` failed before deployment because `/rss.xml` declared `force-dynamic`, which is incompatible with the workflow's `output: export` mode.
- After static RSS conversion, the local GitHub Pages-mode build passed compilation and TypeScript, then exposed a second pre-existing static-export requirement: `/blog-render/[slug]` did not re-export `generateStaticParams` from its canonical blog route.
- After re-exporting the canonical static params, the same local Pages-mode build completed static generation for 2,673 routes and emitted `out/rss.xml` plus the `out/blog-render/` tree. Redirect/header export warnings remain expected limitations of GitHub Pages static hosting; no build error remained.
