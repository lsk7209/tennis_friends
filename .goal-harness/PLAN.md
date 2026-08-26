# PLAN

## Active Improvement Plan (2026-08-26)

1. Record risk boundary and acceptance tests; obtain independent read-only security and routing/index designs.
2. Implement locally verifiable security and workflow gates, dependency updates, routing/index corrections, encoding repairs, and audit separation.
3. Run focused checks, full static validation, production build, dependency audit, and repair regressions.
4. Run proportional read-only final review, resolve substantiated HIGH/BLOCKER findings, and finish state/evidence documents.

Classification: large; domain profile: general; risk: R2 with security-sensitive code review. External/live actions remain prohibited.

---

## Current Review Plan (2026-08-26)

1. Confirm checkout identity, cleanliness, instructions, and project structure.
2. Run lockfile install and project-native static/build checks without deployment or external write operations.
3. Review architecture/product maintainability and security/operations in separate read-only lanes.
4. Consolidate prioritized findings, update evidence and project state, and report exact local run steps.

Classification: medium; domain profile: general; risk: R1 read-only/local validation.

---

## Classification

- Size: medium
- Domain Profile: web

## Phase 1

- Objective: Establish current, first-party search and AdSense evidence.
- Tasks: Collect the TennisFrens page-query report directly from GSC; test the player page, alternate host, robots, sitemap, ads.txt, and trust routes.
- Expected Files: `.goal-harness/EVIDENCE.md`, dashboard-generated GSC report (outside this repository).
- Completion Criteria: Target query, baseline, canonical host behavior, and AdSense readiness are recorded with timestamps.
- Test Point: Direct GSC collection and HTTP smoke checks.
- Rollback/Recovery: Read-only phase; if collection fails, do not use a stale dashboard queue.

## Phase 2

- Objective: Remove the canonical-host source contradiction without changing editorial content.
- Tasks: Change the shared default host to the live Vercel canonical host; align the legacy redirect artifact with the same www-to-non-www policy; regenerate affected discovery assets through the normal build path.
- Expected Files: `src/lib/site.ts`, `public/_redirects`, generated assets as produced by the existing build.
- Completion Criteria: Local default metadata and generated assets no longer introduce the opposite host.
- Test Point: Targeted URL/metadata audit plus build output inspection.
- Rollback/Recovery: Revert the small commit or restore the removed redirect file from Git history.

## Phase 3

- Objective: Verify and document the safe change for Git-connected deployment.
- Tasks: Run lint, typecheck, targeted SEO audits, build, and a preview/live smoke check; update acceptance and evidence documents.
- Expected Files: `.goal-harness/*`, project continuity documents if absent.
- Completion Criteria: All acceptance criteria have direct evidence and no unresolved technical blocker remains.
- Test Point: Commands in `TESTS.md` and live HTTP checks.
- Rollback/Recovery: Use a normal Git revert or Vercel deployment promotion if a deployed smoke check fails.
