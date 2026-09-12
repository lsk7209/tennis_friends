# Handoff

## Current handoff — AdSense technical installation

- Timestamp: 2026-09-12 KST
- User goal: repair the missing AdSense technical installation for currently registered sites, continuing from the dashboard evidence.
- Exact current state: repair commit `fd4a995b381b23bb0fd3f350c09141acd1034b70` is on `origin/main`; Git-connected Vercel deployment `dpl_FrAPaspfCHNnLPWAX3RryveCEWWb` completed successfully. The public homepage now contains the confirmed loader and `https://tennisfrens.com/ads.txt` returns the exact row with `200 text/plain`.
- Completed work: added only loader `ca-pub-3050601904412736`, exact ads.txt row `google.com, pub-3050601904412736, DIRECT, f08c47fec0942fa0`, and narrowly required CSP origins. Cafe CTA and GA4 remain present; no manual ad slots were added. The obsolete ad-free regression audit was replaced by source and static-output installation checks.
- Fresh validation evidence: source installation audit, lint, type-check, normal Next production build, and GitHub Pages static-output audit passed. Public validation confirms the ads.txt row, homepage loader, loader/iframe CSP origins, and active Vercel deployment ID.
- Side effects / rollback: one Git commit and Git-connected deployment only; no direct Vercel CLI/API, AdSense account action, ad-slot placement, or indexing action. Roll back with `git revert fd4a995` if required.
- Blockers / risks: technical installation does not prove ad fill or account-level Auto ads configuration; those remain outside this repair.
- Single next step: no further technical installation work is required for the currently registered managed sites; reassess only after a future fresh dashboard collection signals a new gap.

## Current handoff — 30 reviewed articles scheduled every 12 hours

- Timestamp: 2026-09-08 17:15 KST
- User goal: schedule the accepted TennisFriends 30-article package for automatic publication every 12 hours and stop after this site.
- Exact current state: local release candidate is based on fetched `origin/main` `2e1bcf8d82013bd61dde654a2b2f5f54a1ad0910`; 30 future posts run from `2026-09-09T09:00:00+09:00` through `2026-09-23T21:00:00+09:00` at 12-hour intervals.
- Completed work: converted the accepted MDX bodies into the site's HTML data contract without duplicate H1s; registered metadata/content; added per-file schedule auditing; verified all 18 internal article dependencies publish their targets first; enabled 60-second ISR across every scheduled-content surface and on-demand generation for future pagination.
- Changed files / live systems: reviewed September metadata/content, import and audit scripts, blog index routes, schedule reports, and package verification command. No live system has been changed at this checkpoint.
- Fresh validation evidence: `npm run verify` passed; after final cache hardening, dedicated schedule audit, lint, type-check, normal build, and GitHub Pages export-mode build passed. Export build generated 3,079/3,079 pages, including future pagination capacity, and reports one-minute revalidation for every canonical scheduled surface. The dedicated audit reports 30 posts, 12-hour spacing, 18 ordered dependencies, and publish-gate counts 0 before/1 at/2 after the first interval.
- Side effects / rollback: only this isolated release clone is changed. Roll back by reverting the eventual single release commit. The primary `E:\web\tennisfrens` checkout remains untouched.
- Blockers / risks: push, Git-connected deployment, and public smoke verification remain. Local `npm ci` reports one moderate production advisory; the configured high-severity production audit passes.
- Single next step: receive final independent GO, commit/push main, then verify the exact Git-connected deployment and public pre-release 404 gate.
- Deliberately not run or sent: no Vercel CLI/API mutation, manual workflow dispatch, production DB write, indexing notification, account change, or external message.

## Current handoff — duplicate Hong Seong-chan profile consolidation

- Timestamp: 2026-08-30 02:01 KST
- User goal: audit and optimize the dashboard fleet from fresh evidence, checking GitHub first for TennisFriends and removing confirmed SEO duplication without disturbing unrelated work.
- Exact current state: runtime commit `49ef50eabf8fe8a438f4e302ae50c2da7747833e` is live on the canonical Vercel domain. The canonical survivor is `/players/seongchan-hong`; `/players/hong-seong-chan` is a permanent alias.
- Completed work: added the alias mapping; excluded redirect-only player slugs from the player directory and site search; regression-locked the mapping and internal-discovery exclusions; regenerated current audit, sitemap, AI-index, and LLM discovery artifacts.
- Changed files / live systems: four redirect/internal-discovery source files, generated search assets under `public/`, current audit reports under `docs/reports/`, and current-state documents; GitHub `main`, GitHub Actions, GitHub Pages, and the Git-connected Vercel Production deployment were updated.
- Fresh validation evidence: focused redirect/player/sitemap/site-review/type checks and full `npm run verify` passed with zero production vulnerabilities and 3,077/3,077 generated pages. Vercel Production `6157989447`, GitHub Pages `6157980452`, and all three push workflows succeeded for `49ef50e`. Public HTTP proof returned alias `308`, survivor `200`, one survivor H1, self-canonical metadata, and no alias leakage in sitemap or AI index. Public Playwright checks showed one canonical result in both player filtering and site search with zero console errors or warnings.
- Side effects / rollback: production search routing and generated discovery inventory now use the canonical survivor. Roll back with a narrow revert of `49ef50e`; no production database or account state changed.
- Blockers / risks: no production blocker. The GitHub Pages static mirror disables Next.js redirects and therefore returns `404` for the alias, while its pages canonicalize to the Vercel domain. GitHub also reports five open development-scope Dependabot alerts; `npm audit --omit=dev` remains zero and this SEO release did not broaden dependency scope.
- Single next step: record this live proof in the multi-dashboard fleet harness/ledger, then continue with the next confirmed fleet defect.
- Deliberately not run or sent: no manual workflow dispatch, IndexNow submission, production database write, Vercel CLI/API call, analytics-admin change, or external message. The ignored `.playwright-cli/` snapshot directory is local test output only and was not committed.

Branch: `codex/tennisfrens-ctr-20260714`.

Completed: source canonical URLs and generated discovery assets use `https://tennisfrens.com`; www redirects are configured to the same host.

Historical 2026-07 baseline, superseded by the 2026-08-27 cafe-first ad-free decision: PR #6 merged as `3e52b0c`; its live player, www redirect, former `ads.txt`, robots.txt, and sitemap.xml checks passed at that time.

Next: revisit the direct GSC player-page query cohort after 2–4 weeks; do not rewrite the exact-match Alexandra Eala title without new CTR evidence.

Validation: see `.goal-harness/EVIDENCE.md`.

Follow-up completed: PR #11 merged as `5300c3a`; Vercel production deployment `dpl_DE41hKP8WqtZtKX9C4RueAyv3dQs` is Ready. AI discovery has 546 pages/260 player profiles and zero redirect-only `-legacy` URLs; canonical Marta Kostyuk is 200 and its legacy URL is a 308 redirect.

Follow-up in progress: `codex/tennisfrens-ai-index-20260714` removes redirect-only `-legacy` player URLs from AI discovery artifacts only. It preserves canonical player pages and live redirects; local artifact, sitemap, lint, and type checks pass. Await Vercel preview build and public smoke verification.
