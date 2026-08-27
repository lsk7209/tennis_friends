# TESTS

## Cafe-First Ad-Free Content Checks (2026-08-27)

- `npm run audit:ad-free` - PASS: no active AdSense/affiliate source or contract; direct GA4 and `naver_cafe_visit` remain.
- `npm run audit:article-tables` - PASS: all 29 known raw tables convert; representative wall-practice article converts 4/4; ordinary pipe prose remains unchanged; image is 77,910 bytes.
- `npm run audit:article-experience`, `npm run audit:visual-layout-risk`, `npm run audit:performance-config`, `npm run audit:cafe-funnel`, and `node scripts/audit-ntrp-result.mjs` - PASS.
- `npm run lint` and `npm run type-check` - PASS.
- `npm run verify` - PASS: zero production vulnerabilities, all audits, lint, typecheck, and a 3,076-page production build.
- `npm run audit:static-export` - PASS: exact GitHub Pages environment, 3,076 pages, no `ads.txt`, semantic table, local image, cafe CTA, and `/tennis_friends` image path. The first attempt encountered a transient Windows `EBUSY` output-file lock; the unchanged retry passed.
- Playwright at 390x844 - PASS: document width 382, four tables, no raw separator, hero loaded, four cafe links, and zero console errors/warnings. Desktop hero/table inspection also passed.
- `npm run audit:site-content-design-review` - PASS after replacing its deleted advertising-report input with the cafe-first ad-free report.
- `git diff --check` - PASS: no whitespace errors; line-ending notices only.

## Naver Cafe Conversion Checks (2026-08-27)

- `npm run audit:cafe-funnel` — PASS.
- `npm run lint` — PASS.
- `npm run type-check` — PASS.
- `npm run verify` — PASS: all audits, lint, typecheck, and 3,076-page build.
- `npm run audit:static-export` — PASS: exact GitHub Pages environment and 3,076-page export.
- Generated home and NTRP-result HTML cafe URL/new-tab/rel/unsupported-banner checks — PASS.
- Generated admin/privacy/terms HTML sitewide-banner exclusion checks — PASS.
- Historical Playwright GitHub Pages base-path smoke - PASS at that baseline; the affiliate region referenced then has now been removed.
- Final `git diff --check` and worktree review — PASS; CRLF conversion notices only, no whitespace errors.

## SEO, GEO, and AEO Checks (2026-08-27)

- `npm run audit:search-artifacts` — PASS: 1,467 entries, 1,133 articles, 64 tools, 260 players, one document.
- `npm run audit:sitemap-coverage` — PASS: 1,465 URLs, 1,133 blogs, 63 utilities, 260 players.
- `npm run audit:indexability-boundaries` — PASS: 24 state routes and blog-render boundary.
- `npm run verify` — PASS: audits, lint, typecheck, build, 3,076 pages.
- Follow-up `npm run type-check && npm run build` — PASS after blog-render repair.
- Generated HTML — PASS: result/internal-renderer noindex; public article index; one breadcrumb JSON-LD.
- `git diff --check` — PASS; line-ending notices only.

## Historical Measurement And Product Improvement Checks (superseded 2026-08-27)

- Full regression: `npm run verify` — PASS, 3,076 pages.
- Exact static host: `npm run audit:static-export` — PASS after post-deploy repair; `/tennis_friends` asset/navigation paths and GA marker verified across 3,076 pages.
- Historical NTRP result/advertising contract — PASS at that earlier baseline; advertising was intentionally removed later.
- Blog payload/navigation: `npm run audit:blog-index-experience` — PASS.
- Historical analytics/advertising source audit — PASS at that earlier baseline; replaced by `audit:ad-free`.
- Historical browser smoke: `/blog/page/2/` returned the expected page title; the former NTRP advertising slot is no longer part of the product.
- Git hygiene: `git diff --check` — PASS (CRLF conversion notices only).

## Completion Checklist (2026-08-27)

- [x] Available checks were run.
- [x] Substantiated reviewer findings were repaired and revalidated.
- [x] Acceptance criteria have direct evidence.
- [x] Primary implementation commit is pushed and remote `main` SHA matches `cfcc8214bdc01f15da1a3b4a44e1f62fe446b8b3`.
- [ ] Post-deploy GitHub Pages base-path repair is committed, pushed, and verified.

---

## Current Review Checks (2026-08-26)

- Dependency install: `npm ci`
- Static quality: `npm run lint`, `npm run type-check`
- Repository audit suite: `npm run verify` (contains build; external-write scripts are not invoked)
- Git integrity: `git status --short --branch`, `git rev-parse HEAD`, `git ls-remote origin refs/heads/main`

---

## Historical Canonical And Advertising Checks (superseded 2026-08-27)

- Run/start: N/A; production HTTP smoke checks cover the affected static metadata route.
- Lint: `npm run lint`
- Typecheck: `npm run type-check`
- Unit tests: N/A; this repository has no unit-test script for URL defaults.
- Build: `npm run build`
- Historical smoke test included the player hosts, discovery routes, trust routes, and the former `/ads.txt` endpoint.
- Historical domain checks used URL/metadata audits; the deleted advertising audit is replaced by `npm run audit:ad-free`.

## Error And Edge Cases

- The www host must redirect to the non-www canonical host.
- Existing player title and description must remain query-relevant for `알렉산드라 이알라`.
- Superseded advertising condition: the current contract requires no `ads.txt` and no advertising loader or slot.

## User Scenario Tests

## Completion Checklist

- [ ] Available checks have been run or marked N/A with reasons.
- [ ] Failed checks have been fixed or documented as blocked.
- [ ] Acceptance criteria have matching evidence.
