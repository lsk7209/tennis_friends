# PROJECT_STATE

## Purpose

TennisFriends is a public, no-login Next.js tennis content and utility site. Supabase, accounts, and a shared user database are not part of the current product contract.

## Current Work

- Date: 2026-08-27
- Goal: make the TennisFriends Naver Cafe the site's primary measurable destination while preserving the completed SEO, GEO, AEO, utility, and content behavior.
- Authorized external scope: none in this workstream; local source, generated artifacts, and verification only.
- Deployment boundary: stop at `git push`; no Vercel project, deployment, domain, alias, or environment mutation.

## Naver Cafe Conversion Work Completed

- Centralized `https://cafe.naver.com/homecookie` in one tracked, accessible external-link component.
- Made the cafe the homepage's primary CTA and added persistent desktop header, mobile menu, mobile bottom-navigation, and footer entry points.
- Replaced the unsupported “No.1” image creative with a truthful sitewide text CTA that appears before the affiliate banner.
- Removed duplicate article/player banner ownership and moved the sitewide CTA to the root layout.
- Added `naver_cafe_visit` with `cta_location`, `link_text`, `destination_url`, and `page_path`.
- Excluded the promotional sitewide banner from admin/privacy/terms after hydration while retaining persistent navigation links; the predicate handles root-hosted and `/tennis_friends` base-path URLs.
- Added `CAFE-FUNNEL.md`, `audit:cafe-funnel`, static-export boundary checks, and harness evidence.

## Naver Cafe Conversion Validation

- PASS: final `npm run verify`, including all audits, lint, typecheck, zero production vulnerabilities, and a 3,076-page build.
- PASS: final `npm run audit:static-export` in the exact GitHub Pages base-path environment, also covering 3,076 pages.
- PASS: static home/NTRP HTML contains exact, safe cafe anchors and no legacy banner image; admin/privacy/terms HTML contains no sitewide banner heading.
- PASS: Playwright home runtime shows one sitewide banner, five cafe links, and the cafe section before the affiliate region.
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
- AdSense is mounted once at the root; the NTRP result slot remains available without a duplicate loader.
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
- PASS: public NTRP result rendered one visible ad slot and one GA4 loader.
- PASS: production dependency audit with zero vulnerabilities.
- PASS: `/blog` exported HTML reduced from about 874 KB to about 111 KB.
- PASS: browser smoke on `/blog/page/2/` and one visible NTRP result ad slot.
- PASS: `git diff --check` (line-ending notices only).

## Risks And Boundaries

- `naver_cafe_visit` measures outbound intent only; Naver Cafe membership, join quality, and downstream activity are not observable from this site's GA4.
- GA4 key-event marking and a genuine post-release baseline remain unverified external-admin/production actions.
- Local NTRP history is intentionally device/browser-local and is not a public leaderboard.
- Static export ignores server-only redirects, headers, middleware, and API routes. GitHub Pages is a repository-path fallback; `tennisfrens.com` currently resolves to Vercel and must remain root-based.
- Localhost cannot prove the remote AdSense script response; source/output audits prove loader placement, and post-push live observation remains separate.
- Historical product documents may mention a planned Supabase design; they are not the active implementation contract.

## Next Actions

1. Review and commit/push this verified local change only when explicitly authorized; no deployment or remote write occurred in this workstream.
2. After release, confirm a genuine `naver_cafe_visit` in GA4 and optionally mark it as a key event through an authorized GA4 admin session.
3. Establish a stable baseline by page path and `cta_location` before testing alternate CTA copy; use separate Naver Cafe evidence for joins and member quality.
