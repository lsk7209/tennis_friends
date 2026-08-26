# PROJECT_STATE

## Purpose

TennisFriends is a public, no-login Next.js tennis content and utility site. Supabase, accounts, and a shared user database are not part of the current product contract.

## Current Work

- Date: 2026-08-27
- Goal: restore trustworthy analytics on the GitHub Pages artifact and improve the highest-value static-site UX paths.
- Authorized external scope: authenticated GA4/GSC/GTM inspection, necessary measurement settings, commit, and GitHub push.
- Deployment boundary: stop at `git push`; no Vercel project, deployment, domain, alias, or environment mutation.

## Implemented

- Direct GA4 (`G-W1K51D8SBX`) now loads in every production build, including GitHub Pages.
- GitHub Pages builds use the custom-domain root contract and assert that repository-name base paths do not leak into exported URLs.
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
- PASS: `npm run audit:static-export` (3,076 custom-domain root pages, GA loader, paginated blog, no `/tennis_friends/` path leakage).
- PASS: production dependency audit with zero vulnerabilities.
- PASS: `/blog` exported HTML reduced from about 874 KB to about 111 KB.
- PASS: browser smoke on `/blog/page/2/` and one visible NTRP result ad slot.
- PASS: `git diff --check` (line-ending notices only).

## Risks And Boundaries

- Local NTRP history is intentionally device/browser-local and is not a public leaderboard.
- Static export ignores server-only redirects, headers, middleware, and API routes; the verified GitHub Pages contract is static output only.
- Localhost cannot prove the remote AdSense script response; source/output audits prove loader placement, and post-push live observation remains separate.
- Historical product documents may mention a planned Supabase design; they are not the active implementation contract.

## Next Actions

1. Commit and push the verified change set to GitHub `main`.
2. Verify the remote `main` SHA after push.
3. Observe the public GitHub Pages result after its normal workflow completes; do not mutate Vercel.
