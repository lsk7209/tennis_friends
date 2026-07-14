# PLAN

## Classification

- Size: small
- Domain Profile: adsense-audit

## Phase 1

- Objective: Establish current evidence and metadata baseline.
- Tasks: Read fresh dashboard/GSC opportunity evidence; inspect the live route and local fallback/override logic; verify the isolated worktree and identify unrelated changes.
- Expected Files: Harness evidence documents only.
- Completion Criteria: Exact page signal, current title/description, canonical, robots, and code location are recorded.
- Test Point: Public HTTP/header/HTML inspection and local metadata source inspection.
- Rollback/Recovery: Keep unrelated report changes unstaged and do not alter page body or shared fallback behavior.

## Phase 2

- Objective: Make the smallest factual metadata improvement.
- Tasks: Add a slug-scoped `SEARCH_METADATA_OVERRIDES` entry for `alexandra-eala`; retain existing canonical/schema behavior; update harness changelog.
- Expected Files: `src/app/players/[slug]/page.tsx`, harness change records.
- Completion Criteria: Only the intended metadata override changes production behavior.
- Test Point: Focused metadata audit, lint, typecheck, and build.
- Rollback/Recovery: Revert the single commit if the title or description is inaccurate or a build check fails.

## Phase 3

- Objective: Merge and verify the normal GitHub Pages release.
- Tasks: Review the scoped diff, create a PR, merge it, confirm Actions deployment, and fetch the live canonical route.
- Expected Files: Harness evidence, acceptance, review, and status documents.
- Completion Criteria: Deployed page returns 200 with the expected title/description/canonical.
- Test Point: GitHub Actions status and live HTML metadata check.
- Rollback/Recovery: `git revert <merge-or-change-commit>` and push through the same Pages workflow.

## Deployment Recovery Amendment

- Objective: Repair the pre-existing GitHub Pages static-export blocker revealed by the release workflow.
- Tasks: Make `/rss.xml` and `/feed` GET route handlers explicitly static, re-export blog static params from the `/blog-render/[slug]` compatibility route, and reproduce the GitHub Pages build mode locally before retrying deployment.
- Expected Files: `src/app/rss.xml/route.ts`, `src/app/feed/route.ts`, `src/app/blog-render/[slug]/page.tsx`, harness evidence and review.
- Completion Criteria: `GITHUB_ACTIONS=true GITHUB_PAGES=true npm run build` completes and emits static RSS outputs.
- Test Point: GitHub Pages-mode build plus public RSS and player-page fetch after deployment.
- Rollback/Recovery: Revert only the static-route compatibility patch if RSS output changes unexpectedly.
