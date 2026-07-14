# PLAN

## Classification

- Size: medium
- Domain Profile: adsense-audit

## Phase 1

- Objective: Confirm live redirect behavior and legacy URLs in public AI discovery files.
- Tasks: Inspect generator/audit; verify a canonical player is 200 and its `-legacy` variant redirects.
- Expected Files: Scripts and generated public artifacts only.
- Completion Criteria: Scope is limited to AI discovery, not routing/content.
- Test Point: JSON assertion for zero legacy pages.
- Rollback/Recovery: Revert the focused commit.

## Phase 2

- Objective: Generate only canonical player URLs.
- Tasks: Patch generator/audit and regenerate tracked artifacts.
- Expected Files: `scripts/generate-ai-index.js`, `scripts/audit-search-artifacts.mjs`, `public/ai-index.json`, `public/llms*.txt`.
- Completion Criteria: No legacy player URL remains in generated artifacts.
- Test Point: `npm run audit:search-artifacts`.
- Rollback/Recovery: Revert the patch and generated artifacts together.

## Phase 3

- Objective: Verify and release through the Git-connected PR flow.
- Tasks: Run sitemap/type/lint/build checks, review diff, create PR, merge only after preview, and smoke-test production.
- Expected Files: Harness and project continuity documents.
- Completion Criteria: Acceptance and evidence documents are complete.
- Test Point: Public `ai-index.json` plus canonical/legacy player HTTP checks.
- Rollback/Recovery: Standard Git revert and Vercel rollback if production smoke fails.
