# CHANGELOG

## 2026-08-28

- Closed the 54-route physical blog indexability gap with route metadata and full-output regression coverage.
- Repaired 23 page-level robots conflicts and added sitemap/AI-index leakage guards.
- Added `tool_started` measurement and deduplicated unchanged search events.
- Passed focused audits, typecheck, diff check, and the 3,076-page exact static export.

| File | Change | Reason |
|---|---|---|
| `src/components/blog/CafeBanner.tsx` | Removed the hydration-only render gate while retaining route exclusions. | Put the primary contextual conversion path in static HTML for search and no-JS visitors. |
| `src/app/search/SearchClient.tsx`, `src/components/layout/Header.tsx` | Added global search entry, search/result measurement, and zero-result exits. | Make internal demand and search-to-conversion leakage measurable. |
| `src/app/_components/home/ntrp-band.tsx`, `tools-mosaic.tsx` | Changed the promise from 10 to the actual 15 questions and softened rating language. | Match visitor expectation to product behavior. |
| `src/app/privacy/page.tsx` | Aligned collection, local storage, retention, and rights copy with actual behavior. | Remove a material trust mismatch before outbound conversion. |
| `src/app/robots.ts`, `.well-known/robots.txt/route.ts` | Applied private-path disallows to named AI crawlers. | Prevent specialized crawler groups from bypassing the shared private-path policy. |
| `src/app/admin/layout.tsx`, quiz child layouts | Added exported static noindex metadata. | Keep admin and query/state pages out of search results. |
| `scripts/audit-cafe-funnel.mjs`, `audit-indexability-boundaries.mjs`, `audit-static-export.mjs` | Added source/output regression gates and output-only recheck mode. | Turn the new acquisition and conversion contracts into repeatable proof. |

## 2026-08-27 Cafe-First Ad-Free Content Work

| File | Change | Reason |
|---|---|---|
| Layout, article, and NTRP result UI | Removed AdSense loaders/slots and the affiliate banner; retained direct GA4 and cafe click measurement. | Eliminate non-performing monetization distractions and prioritize the cafe. |
| `next.config.ts`, privacy policy, and public contract | Removed advertising-only rewrite/CSP domains, ad metadata/preconnects, and `public/ads.txt`; documented the ad-free analytics boundary. | Ensure configuration and policy match the active product. |
| `src/lib/article-html.mjs` and article styles | Convert the 29 known pipe-delimited Markdown tables into accessible responsive HTML tables. | Prevent raw separators and pipes from leaking into published articles. |
| Blog image registry and local WebP | Added one 1600x900 realistic wall-practice pilot with alt/caption, schema/social reuse, and host-aware paths. | Test a useful, truthful visual without committing to a risky bulk rollout. |
| Audit scripts and reports | Replaced ad-dependent checks with source/output ad-free checks, added table/image regression coverage, and updated static-export assertions. | Make the new cafe-first contract release-blocking and reproducible. |
| Site/content design audit | Replaced its deleted advertising-report input with the cafe-first ad-free report and removed current ad-spacing language. | Keep the optional aggregate audit runnable after monetization removal. |
| `.goal-harness/*` and `PROJECT_STATE.md` | Recorded completed scope, evidence, selective image rule, and post-release measurement boundary. | Preserve a resumable, evidence-led implementation contract. |

## 2026-08-27 Naver Cafe Primary Conversion

| Area | Change | Reason |
|---|---|---|
| Conversion hierarchy | Made the approved Naver Cafe URL the primary home action and added persistent desktop/mobile/footer access. | Align the site with the owner's primary traffic objective. |
| Sitewide CTA | Replaced the image banner with a truthful text CTA; the former affiliate banner was removed in the later cafe-first ad-free work. | Improve clarity, remove duplicate placement, and keep the primary action uncontested. |
| Measurement | Added the `naver_cafe_visit` event with CTA location, link text, destination URL, and page path. | Establish an attributable outbound-intent baseline. |
| Claims and accessibility | Removed the unsupported “No.1” creative; added safe new-tab attributes and accessible destination labels. | Preserve trust and keyboard/screen-reader usability. |
| Static/runtime boundaries | Added source/static audits and a base-path-aware hydrated route exclusion for admin and legal pages. | Prevent shared-layout leakage and GitHub Pages pathname regressions. |
| Funnel contract | Added `CAFE-FUNNEL.md` with evidence, metric denominator, hypotheses, and downstream proof boundaries. | Separate verified outbound clicks from unverified Naver Cafe joins or member quality. |

## 2026-08-27 SEO, GEO, and AEO Optimization

| Area | Change | Reason |
|---|---|---|
| Indexability | Added noindex to 24 state routes and internal blog renderer. | Prevent thin and duplicate indexing. |
| Discovery | Fixed rewritten-blog filtering; regenerated AI artifacts with 1,133 articles. | Match sitemap inventory. |
| Structured data | Added stable entity IDs, Organization authorship, real icon URLs, and one breadcrumb owner. | Improve entity coherence. |
| AEO | Added a server-rendered homepage answer block. | Provide an extractable answer. |
| AI policy | Aligned crawler directives and remote checks. | Prevent policy drift. |
| Verification | Added indexability regression audit and GEO report. | Preserve proof. |

## Historical 2026-08-27 Measurement And Public-Site Improvements

| Area | Change | Reason |
|---|---|---|
| Analytics/static deployment | Added production GA4 fallback and explicit custom-domain GitHub Pages variables and assertions. | Make analytics independent of Vercel-only detection and prevent base-path leakage. |
| Blog index | Replaced full client catalog with 12-item static pages and crawlable pagination. | Reduce initial HTML/client payload and improve stable navigation. |
| NTRP | Added same-session completion tokens, local-only result history, honest statistics, and no-public-leaderboard copy. | Prevent copied URLs from polluting events and avoid presenting sample/shared data as real. |
| Historical ads/cache/motion baseline | At that stage AdSense was deduplicated; the later cafe-first work removed it entirely. Cache reset removal and reduced-motion handling remain active. | Preserve the earlier change record without describing advertising as current behavior. |
| Dependencies/docs | Removed unused Supabase client/dependency and aligned active documentation with the public no-login product. | Keep the implementation contract accurate and smaller. |

---

## Changed Files

| File | Change | Reason |
|---|---|---|
| `.goal-harness/*` | Added 2026-08-26 review goal, plan, status, checks, and acceptance criteria. | Preserve durable review state while retaining prior SEO work evidence. |
| `PROJECT_STATE.md` | Added current checkout/review handoff. | Provide repository-level continuity for this review. |
| Security/admin/workflows | Removed client password, gated generated HTML, stopped scheduled auto-push, and made patches review-only. | Eliminate false authentication and automated unreviewed content publication. |
| Routing/index/player data | Preserved custom routes, loaded canonical blog inventory, expanded legacy redirects, and regenerated discovery assets. | Prevent empty articles and incomplete/stale indexes. |
| Dependencies/content/audits | Updated patched dependencies, repaired encoding, separated operational audits, and added runtime/static gates. | Restore deterministic local verification with security coverage. |
| `.gitignore` and `.omx` index | Ignored `.omx` and removed 52 paths from the Git index while keeping local files. | Prevent future publication of operational artifacts. |
