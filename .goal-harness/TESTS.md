# TESTS

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
