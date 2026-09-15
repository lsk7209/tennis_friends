# Current repository inventory

Measured: 2026-09-15 KST  
Baseline commit: `408ddd081914241c99f8da8c9d6237f122db319d`  
Scope: current local source tree and generated discovery reports; this is not a claim about Google indexation.

| Surface | Value | Denominator / coverage | Authoritative source | Implementation |
|---|---:|---|---|---|
| Indexable sitemap entries | 1,477 | all entries emitted by the sitemap audit | `docs/reports/sitemap-coverage-audit-latest.json` | `src/app/sitemap.ts`, `src/lib/sitemap-entries.ts` |
| Indexable blog entries | 1,146 | sitemap blog inventory | same report | `src/data/blog-posts*.js`, `src/data/blog-content/**` |
| Physical blog route files | 182 | `src/app/blog/**/page.tsx` routes | same report | `src/app/blog/**` |
| Physical noindex blog routes | 54 | physical blog route files | same report | quality/indexability gates |
| Utility routes in sitemap | 63 | indexable utility inventory | same report | `src/app/utility/**` |
| Utility metadata | 72 | 63 completed + 9 planned | `docs/reports/utility-experience-audit-latest.json` | `src/app/utility/page.tsx` |
| Player profiles | 259 | sitemap player inventory | sitemap report | `src/data/players*`, `src/app/players/[slug]` |
| App Router page files | 345 | all local `page.tsx` files | PowerShell recursive file count | `src/app/**/page.tsx` |

`public/ai-index.json` is a generated consumer, not the counting authority. It currently reports 1,480 total pages, 64 tools, 1,147 articles, and 259 profiles because it also includes non-sitemap discovery surfaces. These different denominators are intentionally not collapsed into one “total pages” number.

URL types in scope are homepage/static pages, blog indexes and detail pages, utility indexes/tests/results, player index/details, feeds, robots, sitemaps, and API-generated assets. Dynamic truth is derived from repository datasets and publish/indexability helpers; there is no CMS or production database in this checkout.

Known coverage gap: public HTTP status/final-URL evidence is a separate operational check. Local inventory proves source/output coverage, not live deployment or search-engine indexation.
