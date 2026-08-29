# Handoff

## Current handoff — duplicate Hong Seong-chan profile consolidation

- Timestamp: 2026-08-30 01:40 KST
- User goal: audit and optimize the dashboard fleet from fresh evidence, checking GitHub first for TennisFriends and removing confirmed SEO duplication without disturbing unrelated work.
- Exact current state: clean remote-aligned `main` baseline `d815cf492bf4f8f7ccb2cabccd18c1d3db28f1e0` now has an uncommitted, locally verified release candidate. The canonical survivor is `/players/seongchan-hong`; `/players/hong-seong-chan` is a permanent alias.
- Completed work: added the alias mapping; excluded redirect-only player slugs from the player directory and site search; regression-locked the mapping and internal-discovery exclusions; regenerated current audit, sitemap, AI-index, and LLM discovery artifacts.
- Changed files: `src/data/players/legacy-redirects.json`, `src/app/players/page.tsx`, `src/app/search/SearchClient.tsx`, `scripts/audit-redirect-config.mjs`, current generated search artifacts under `public/`, current audit reports under `docs/reports/`, and the three current-state documents.
- Fresh validation evidence: focused redirect/player/sitemap/site-review/type checks passed; `npm run verify` passed with zero production vulnerabilities and 3,077/3,077 generated pages; local production smoke returned alias `308`, survivor `200`, one survivor H1, self-canonical metadata, and no alias leakage in sitemap or AI index.
- Side effects / rollback: local files only so far. Before push, rollback is the exact staged commit once created; after push, the mapping can be reverted with a narrow follow-up commit. No production database or account state is involved.
- Blockers / risks: no production blocker. The canonical Vercel target supports the `308`; the GitHub Pages static mirror disables Next.js redirects and therefore returns `404` for the alias, while its pages canonicalize to the Vercel domain. The remaining release gate is remote-drift check, exact-file staging, and Git-connected deployment verification.
- Single next step: finish the independent read-only review, stage only the coherent release files, commit, re-fetch `origin/main`, and push only if it still matches the verified baseline.
- Deliberately not run or sent: no manual workflow dispatch, IndexNow submission, production database write, Vercel CLI/API call, analytics-admin change, or external message.

Branch: `codex/tennisfrens-ctr-20260714`.

Completed: source canonical URLs and generated discovery assets use `https://tennisfrens.com`; www redirects are configured to the same host.

Historical 2026-07 baseline, superseded by the 2026-08-27 cafe-first ad-free decision: PR #6 merged as `3e52b0c`; its live player, www redirect, former `ads.txt`, robots.txt, and sitemap.xml checks passed at that time.

Next: revisit the direct GSC player-page query cohort after 2–4 weeks; do not rewrite the exact-match Alexandra Eala title without new CTR evidence.

Validation: see `.goal-harness/EVIDENCE.md`.

Follow-up completed: PR #11 merged as `5300c3a`; Vercel production deployment `dpl_DE41hKP8WqtZtKX9C4RueAyv3dQs` is Ready. AI discovery has 546 pages/260 player profiles and zero redirect-only `-legacy` URLs; canonical Marta Kostyuk is 200 and its legacy URL is a 308 redirect.

Follow-up in progress: `codex/tennisfrens-ai-index-20260714` removes redirect-only `-legacy` player URLs from AI discovery artifacts only. It preserves canonical player pages and live redirects; local artifact, sitemap, lint, and type checks pass. Await Vercel preview build and public smoke verification.
