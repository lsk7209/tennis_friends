# TESTS

## Required Checks

- Run/start: N/A; public deployed artifact smoke test is the relevant runtime check.
- Lint: `npm run lint`.
- Typecheck: `npm run type-check`.
- Unit tests: JSON assertion after generation.
- Build: `npm run build`.
- Smoke test: Public AI index has no `-legacy`; canonical sample is 200; legacy sample redirects.
- Domain-specific validation: `node scripts/audit-search-artifacts.mjs` and `node scripts/audit-sitemap-coverage.mjs`.

## Error And Edge Cases

- A legacy slug must not be listed even if it still exists in source player data.
- The audit must expect the same canonical set as the generator.
- Canonical player page and legacy redirect behavior must not change.

## User Scenario Tests

## Completion Checklist

- [ ] Available checks have been run or marked N/A with reasons.
- [ ] Failed checks have been fixed or documented as blocked.
- [ ] Acceptance criteria have matching evidence.
