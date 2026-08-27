# TESTS

## Naver Cafe Conversion Checks (2026-08-27)

- `npm run audit:cafe-funnel` — PASS.
- `npm run lint` — PASS.
- `npm run type-check` — PASS.
- `npm run verify` — PASS: all audits, lint, typecheck, and 3,076-page build.
- `npm run audit:static-export` — PASS: exact GitHub Pages environment and 3,076-page export.
- Generated home and NTRP-result HTML cafe URL/new-tab/rel/unsupported-banner checks — PASS.
- Generated admin/privacy/terms HTML sitewide-banner exclusion checks — PASS.
- Playwright GitHub Pages base-path smoke — PASS: home banner `1`, cafe links `5`, banner before affiliate; privacy banner `0`, persistent cafe links `3`.
- Final `git diff --check` and worktree review — PASS; CRLF conversion notices only, no whitespace errors.

## SEO, GEO, and AEO Checks (2026-08-27)

- `npm run audit:search-artifacts` — PASS: 1,467 entries, 1,133 articles, 64 tools, 260 players, one document.
- `npm run audit:sitemap-coverage` — PASS: 1,465 URLs, 1,133 blogs, 63 utilities, 260 players.
- `npm run audit:indexability-boundaries` — PASS: 24 state routes and blog-render boundary.
- `npm run verify` — PASS: audits, lint, typecheck, build, 3,076 pages.
- Follow-up `npm run type-check && npm run build` — PASS after blog-render repair.
- Generated HTML — PASS: result/internal-renderer noindex; public article index; one breadcrumb JSON-LD.
- `git diff --check` — PASS; line-ending notices only.

## Measurement And Product Improvement Checks (2026-08-27)

- Full regression: `npm run verify` — PASS, 3,076 pages.
- Exact static host: `npm run audit:static-export` — PASS after post-deploy repair; `/tennis_friends` asset/navigation paths and GA marker verified across 3,076 pages.
- NTRP ad/result contract: `npm run audit:ntrp-result-ad` — PASS.
- Blog payload/navigation: `npm run audit:blog-index-experience` — PASS.
- Analytics/ad source: `npm run audit:ads-analytics:source` — PASS.
- Browser smoke: `/blog/page/2/` returned the expected page title; NTRP result contained one visible `data-ad-slot="4809500982"` element.
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

## Required Checks

- Run/start: N/A; production HTTP smoke checks cover the affected static metadata route.
- Lint: `npm run lint`
- Typecheck: `npm run type-check`
- Unit tests: N/A; this repository has no unit-test script for URL defaults.
- Build: `npm run build`
- Smoke test: Fetch `https://tennisfrens.com/players/alexandra-eala`, `https://www.tennisfrens.com/players/alexandra-eala`, `/ads.txt`, `/robots.txt`, `/sitemap.xml`, and trust routes.
- Domain-specific validation: `npm run audit:url-consistency`, `npm run audit:metadata-coverage`, and `npm run audit:ads-analytics:source`.

## Error And Edge Cases

- The www host must redirect to the non-www canonical host.
- Existing player title and description must remain query-relevant for `알렉산드라 이알라`.
- ads.txt must retain the expected publisher line and the global loader must not be duplicated.

## User Scenario Tests

## Completion Checklist

- [ ] Available checks have been run or marked N/A with reasons.
- [ ] Failed checks have been fixed or documented as blocked.
- [ ] Acceptance criteria have matching evidence.
