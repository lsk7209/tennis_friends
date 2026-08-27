# PROJECT_STATE

## Search Inventory And Funnel Measurement Closure (2026-08-28)

- Classified the 54 physical blog routes omitted from discovery as the existing low-quality set; kept them out of the 1,465-URL sitemap and 1,467-page AI index rather than inflating indexable inventory.
- Added `noindex, follow` route metadata to all 54 and repaired 23 page-level `index: true` overrides. Audits now fail on a missing route gate, an explicit page override, or sitemap/AI-index leakage.
- Added `tool_started` for same-origin utility entry clicks and deduplicated repeated `search_performed` emissions for the same path/query/result count. `CAFE-FUNNEL.md` records event semantics and session/user denominator guidance.
- PASS: sitemap coverage (1,133 indexable blogs, 54 physical noindex blogs), cafe funnel, typecheck, diff check, and exact GitHub Pages static export with 3,076 pages and 54/54 generated robots checks.
- Boundary: duplicate-intent articles still require editorial canonical/merge judgment. No commit, push, deployment, Vercel change, analytics-admin change, or indexing submission occurred.

## Purpose

TennisFriends is a public, no-login Next.js tennis content and utility site. Supabase, accounts, and a shared user database are not part of the current product contract.

## Current Work

- Date: 2026-08-27
- Goal: remove AdSense and other revenue-first advertising surfaces, repair raw Markdown table leakage in blog content, and validate one selective realistic AI-image pilot while preserving the Naver Cafe as the primary measurable destination.
- Authorized external scope: local source, generated image asset, generated artifacts, and verification only; a later Git push requires separate explicit authorization.
- Deployment boundary: stop at `git push`; no Vercel project, deployment, domain, alias, or environment mutation.

## Search Acquisition And Conversion Optimization (2026-08-27)

- Made the contextual Naver Cafe CTA part of statically rendered blog, player, and utility HTML while preserving its exclusion from admin, privacy, and terms pages.
- Added a global search navigation entry, `search_performed` measurement with result count, search-result click attribution, and useful NTRP/Cafe exits for zero-result searches.
- Aligned the homepage NTRP promise with the actual 15-question test and avoided describing the self-check as an official rating.
- Rewrote the privacy notice to match the public no-login product, GA4 processing, the bounded 200-record local browser history, and browser-side deletion controls.
- Added private-path disallows to the named AI-crawler robots group and added static `noindex, follow` metadata to admin and tennis-rules quiz state/result routes.
- Expanded source and static-export regression checks for the funnel promise, contextual CTA, state-route noindex, and AI private-path policy. Added `--output-only` to recheck a completed export without rebuilding 3,076 pages.

## Search And Conversion Validation

- PASS: focused URL, search artifact, sitemap (1,465 URLs), metadata, schema, indexability, player-search SEO, internal-link, performance-config, and Cafe-funnel audits.
- PASS: lint and TypeScript after the final changes.
- PASS: production build and exact GitHub Pages `/tennis_friends` static export, both generating 3,076 pages. The export required normal Next.js 180-second route retries and then completed.
- PASS: generated HTML contains the contextual Cafe CTA on representative blog/player/utility pages, excludes it from admin/privacy/terms, emits `noindex, follow` on admin and quiz state/result routes, and emits AI-group private-path disallows.
- Public-site check on 2026-08-27 still showed the previously deployed advertising/affiliate footer state. No deployment or Git push was authorized or performed, so current public HTML is expected to lag this local worktree.
- Remaining search architecture review: 54 physical blog routes are not represented in the data-driven sitemap/AI inventory, and at least one duplicate-intent pair (`aw-030-court` and `tennis-clay-court-sliding-guide`) needs an editorial canonical/merge decision before automatic redirect or noindex work.

## Cafe-First Ad-Free Content Work Completed

- User decision: AdSense revenue is not material and the site's primary business purpose is traffic to `https://cafe.naver.com/homecookie`.
- Removed the AdSense loader, all article/NTRP ad slots, publisher/preconnect metadata, the affiliate banner, advertising-only rewrite/CSP entries and audits, and `public/ads.txt`.
- Preserved direct GA4 and the `naver_cafe_visit` event with its existing location/text/destination/page-path properties.
- Added a shared article normalizer that converts all 29 known pipe-delimited Markdown tables into accessible, responsive tables; the reported wall-practice article converts four tables.
- Added one local realistic pilot image for `t09-20-minute-wall-practice-log`: 1600x900 WebP, 77,910 bytes, descriptive Korean alt/caption, explicit dimensions, social/schema reuse, and base-path-safe delivery.
- Selective image policy: add an image only where it materially helps comprehension, keep scenes truthful and anonymous, store optimized assets locally, and validate root plus `/tennis_friends` paths before expansion. Do not bulk-generate imagery or invent people, results, or endorsements.

## Cafe-First Ad-Free Validation

- PASS: `npm run audit:ad-free`, `npm run audit:article-tables`, article experience, visual layout, performance configuration, cafe funnel, and NTRP result audits.
- PASS: `npm run verify`, including zero production vulnerabilities, all audits, lint, typecheck, and a 3,076-page production build.
- PASS: `npm run audit:static-export` in the exact GitHub Pages environment with 3,076 pages; an initial transient Windows `EBUSY` lock cleared and the unchanged retry passed.
- PASS: generated output contains no `ads.txt` or active ad markers, contains semantic table output and the cafe CTA, and resolves the pilot image beneath `/tennis_friends`.
- PASS: Playwright at 390x844 reported document width 382, four tables, no raw separator, loaded hero, four cafe links, and zero console errors/warnings; desktop visual inspection also passed.
- PASS: independent review found no BLOCKER/HIGH. Its one actionable MEDIUM legacy-report dependency was repaired, and `npm run audit:site-content-design-review` passed.

## Naver Cafe Conversion Work Completed

- Centralized `https://cafe.naver.com/homecookie` in one tracked, accessible external-link component.
- Made the cafe the homepage's primary CTA and added persistent desktop header, mobile menu, mobile bottom-navigation, and footer entry points.
- Replaced the unsupported “No.1” image creative with a truthful sitewide text CTA; the former affiliate banner is now removed.
- Removed duplicate article/player banner ownership and moved the sitewide CTA to the root layout.
- Added `naver_cafe_visit` with `cta_location`, `link_text`, `destination_url`, and `page_path`.
- Excluded the promotional sitewide banner from admin/privacy/terms after hydration while retaining persistent navigation links; the predicate handles root-hosted and `/tennis_friends` base-path URLs.
- Added `CAFE-FUNNEL.md`, `audit:cafe-funnel`, static-export boundary checks, and harness evidence.

## Naver Cafe Conversion Validation

- PASS: final `npm run verify`, including all audits, lint, typecheck, zero production vulnerabilities, and a 3,076-page build.
- PASS: final `npm run audit:static-export` in the exact GitHub Pages base-path environment, also covering 3,076 pages.
- PASS: static home/NTRP HTML contains exact, safe cafe anchors and no legacy banner image; admin/privacy/terms HTML contains no sitewide banner heading.
- PASS: Playwright home runtime shows one sitewide banner and five cafe links; the later ad-free smoke confirms no competing affiliate region.
- PASS: Playwright `/tennis_friends/privacy/` runtime shows zero sitewide banners and three persistent cafe links.
- PASS: source audit confirms six attributed CTA locations and the agreed event properties.

## SEO/GEO/AEO Work Completed

- Added `noindex, follow` to 24 result/test/stats/leaderboard routes and internal `/blog-render/*` output, plus a regression audit.
- Corrected AI-index filtering so sitemap and AI discovery agree on 1,133 indexable blogs.
- Connected Organization, WebSite, publisher, and author entities with stable IDs; removed fictional Person authorship and duplicate breadcrumb generation.
- Aligned AI crawler signals and added a server-rendered homepage answer block with contextual tool links and an NTRP limitation.
- Added `GEO-ANALYSIS.md`; readiness is assessed at 80/100 with live AI citations and off-site mentions unverified.

## SEO/GEO/AEO Validation

- PASS: `npm run verify`, including all audits, lint, typecheck, and 3,076-page production build.
- PASS: follow-up typecheck/build after blog-render repair.
- PASS: sitemap 1,465 entries and AI index 1,467 entries; both contain 1,133 indexable blogs.
- PASS: representative generated HTML robots, one-breadcrumb, stable entity ID, and homepage answer checks.
- PASS: `git diff --check` with line-ending notices only.

## Implemented

- Direct GA4 (`G-W1K51D8SBX`) now loads in every production build, including GitHub Pages.
- GitHub Pages builds use the repository path `/tennis_friends`; the canonical production domain remains the root-hosted Vercel site.
- `/blog` now emits 12 posts per static page with crawlable `/blog/page/N/` navigation instead of serializing the full catalog to the client.
- NTRP completion events and local history require a unique same-session completion token; copied result URLs do not create false completions.
- NTRP statistics are explicitly local-only, and the former sample/public leaderboard claim is removed.
- All AdSense and affiliate surfaces/contracts are removed; direct GA4 and cafe conversion tracking remain active.
- The global cache/service-worker reset was removed.
- Motion honors the user's reduced-motion preference through `MotionConfig`, CSS, the number counter, and the live ticker.
- Supabase client code and dependency were removed because the site has no account or shared-data requirement.

## Console Evidence

- GA4 property `tennisfrens.com` (property `534356101`), web stream `14422139724`, measurement ID `G-W1K51D8SBX`; data received in the prior 48 hours and enhanced measurement enabled.
- GSC domain property `sc-domain:tennisfrens.com`; both canonical sitemaps succeeded with 1,473 discovered pages.
- GA4 and GSC are linked for the same domain/stream.
- The open GTM container `GTM-WJ3L5263` belongs to a different site (`lim01.soonsaak.co.kr`), so it was not modified and GTM was not added to TennisFriends.

## Validation

- PASS: `npm run verify` (lint, typecheck, focused audits, production build; 3,076 pages).
- PASS: corrected `npm run audit:static-export` generated 3,076 pages and verified the GA loader, `/tennis_friends/_next/` assets, and `/tennis_friends/blog/page/2/` navigation.
- PASS: public `https://tennisfrens.com/blog/page/2` rendered the new paginated page with one GA4 loader.
- SUPERSEDED: the earlier public NTRP ad-slot smoke belonged to the prior monetization baseline; the slot is intentionally absent from current local output while GA4 remains.
- PASS: production dependency audit with zero vulnerabilities.
- PASS: `/blog` exported HTML reduced from about 874 KB to about 111 KB.
- PASS: current representative browser smoke is ad-free, loads the pilot image, renders four semantic tables, preserves cafe links, and reports zero console errors/warnings.
- PASS: `git diff --check` (line-ending notices only).

## Risks And Boundaries

- `naver_cafe_visit` measures outbound intent only; Naver Cafe membership, join quality, and downstream activity are not observable from this site's GA4.
- GA4 key-event marking and a genuine post-release baseline remain unverified external-admin/production actions.
- Local NTRP history is intentionally device/browser-local and is not a public leaderboard.
- Static export ignores server-only redirects, headers, middleware, and API routes. GitHub Pages is a repository-path fallback; `tennisfrens.com` currently resolves to Vercel and must remain root-based.
- The pilot covers one article only. Other legacy image-reference or fallback social-image gaps were not expanded in this task and should be handled selectively with the same quality/path checks.
- Historical product documents may mention a planned Supabase design; they are not the active implementation contract.

## Next Actions

1. Review and commit/push this verified local change only when explicitly authorized; no deployment or remote write occurred in this workstream.
2. After release, confirm a genuine `naver_cafe_visit` in GA4 and optionally mark it as a key event through an authorized GA4 admin session.
3. Establish a stable baseline by page path and `cta_location` before testing alternate CTA copy; use separate Naver Cafe evidence for joins and member quality.
