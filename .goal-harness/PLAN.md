# PLAN

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
