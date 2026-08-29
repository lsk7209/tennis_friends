# Handoff

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
