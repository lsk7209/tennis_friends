# PROJECT_STATE

## Purpose

TennisFriends is a public, no-login Next.js tennis content and utility site. Supabase, accounts, and a shared user database are not part of the current product contract.

## Current Work

- Date: 2026-08-27
- Goal: technical SEO, GEO, and AEO optimization with static indexability controls, aligned AI discovery, coherent entities, and answer-first homepage content.
- Authorized external scope: none in this workstream; local source, generated artifacts, and verification only.
- Deployment boundary: stop at `git push`; no Vercel project, deployment, domain, alias, or environment mutation.

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

- Local NTRP history is intentionally device/browser-local and is not a public leaderboard.
- Static export ignores server-only redirects, headers, middleware, and API routes. GitHub Pages is a repository-path fallback; `tennisfrens.com` currently resolves to Vercel and must remain root-based.
- Localhost cannot prove the remote AdSense script response; source/output audits prove loader placement, and post-push live observation remains separate.
- Historical product documents may mention a planned Supabase design; they are not the active implementation contract.

## Next Actions

1. Commit and push the verified GitHub Pages base-path repair to `main`.
2. Verify the remote SHA and repository-path fallback after its workflow completes.
3. Continue measurement observation in GA4/GSC; do not mutate Vercel.
