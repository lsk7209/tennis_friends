# TESTS

## Measurement And Product Improvement Checks (2026-08-27)

- Full regression: `npm run verify` — PASS, 3,076 pages.
- Exact static host: `npm run audit:static-export` — PASS, custom-domain root paths and GA marker verified.
- NTRP ad/result contract: `npm run audit:ntrp-result-ad` — PASS.
- Blog payload/navigation: `npm run audit:blog-index-experience` — PASS.
- Analytics/ad source: `npm run audit:ads-analytics:source` — PASS.
- Browser smoke: `/blog/page/2/` returned the expected page title; NTRP result contained one visible `data-ad-slot="4809500982"` element.
- Git hygiene: `git diff --check` — PASS (CRLF conversion notices only).

## Completion Checklist (2026-08-27)

- [x] Available checks were run.
- [x] Substantiated reviewer findings were repaired and revalidated.
- [x] Acceptance criteria have direct evidence.
- [ ] Commit is pushed and remote `main` SHA matches local HEAD.

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
