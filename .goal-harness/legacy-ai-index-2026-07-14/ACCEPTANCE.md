# ACCEPTANCE

## Feature Criteria

| Criteria | Status | Evidence |
|---|---|---|
| Generated discovery files contain no redirect-only `-legacy` player URL. | PASS | JSON assertion after generation: 0 legacy pages. |
| Artifact audit expects and validates the canonical-only player set. | PASS | `node scripts/audit-search-artifacts.mjs` passed. |
| Sitemap coverage remains valid. | PASS | `node scripts/audit-sitemap-coverage.mjs` passed. |
| TypeScript and lint remain clean. | PASS | `npm run type-check` and `npm run lint` passed. |
| Production build succeeds. | PENDING | Local Turbopack cannot use the temporary external `node_modules` junction; verify in isolated Vercel preview. |

## User Flow Criteria

| Criteria | Status | Evidence |
|---|---|---|
| Live public index excludes legacy pages and legacy redirect remains available. | PENDING | Verify after Git-connected deployment. |

## Stability And Error Handling

## Documentation Criteria

## Final Report Requirements

- implementation summary
- changed files
- validation level
- commands run
- acceptance status
- known limitations
- how to run
