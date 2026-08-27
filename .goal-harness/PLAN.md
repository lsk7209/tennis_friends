# PLAN

## Cafe-First Ad-Free Content Plan (2026-08-27)

Status: COMPLETE

1. [x] Run two non-overlapping Luna/max read-only audits: AdSense/affiliate removal scope and raw-table/image rendering scope.
2. [x] Update the durable harness and project state with the new R2 objective, acceptance criteria, rollback, and verification plan.
3. [x] Remove active AdSense and advertising-only source/configuration while preserving GA4 and Naver Cafe measurement.
4. [x] Fix the shared article rendering path so Markdown tables become accessible responsive tables; add a deterministic regression audit across published content.
5. [x] Generate and integrate one representative realistic tennis image only after confirming the exact article, image contract, and static-export path.
6. [x] Run focused audits, lint, typecheck, full verification, exact GitHub Pages export, and representative static/runtime checks; repair failures.
7. [x] Complete independent review, update evidence/status/project state, and stop before any new push unless separately authorized.

Classification: medium-to-large R2 web/content implementation; domain profile: general with SEO-content checks. Rollback is a normal Git revert. No Vercel, GA4 admin, Naver account, or other external mutation is authorized.

## Naver Cafe Conversion Plan (2026-08-27)

Status: implementation and local verification complete; external release and analytics-admin actions remain outside this workstream.

1. Audit current CTA coverage and analytics patterns in two non-overlapping Luna/max read-only lanes.
2. Define the primary conversion, evidence boundary, page hierarchy, event contract, and rollback-safe scope.
3. Implement one tracked external-link component and use it across home, desktop/mobile navigation, footer, and sitewide end-of-content CTA.
4. Remove unsupported creative claims and page-level duplicate banners; keep legal/admin pages free from promotion.
5. Add deterministic source and static-export checks, run full validation, and record evidence.

Classification: medium-to-large R2 conversion implementation; domain profile: general/web. Rollback is a normal Git revert. No external account or deployment mutation.

## SEO, GEO, and AEO Plan (2026-08-27)

1. Run parallel Luna/max technical SEO and GEO/AEO read-only audits.
2. Repair static indexability, AI inventory drift, entity/schema consistency, and homepage answer structure.
3. Add regression checks and run focused audits, full verification, final build, and generated-HTML assertions.
4. Record verified results and limitations in the harness, project state, and GEO report.

Classification: large repository audit and multi-file R2 implementation; no external mutation or deployment.

## Historical Measurement and Product Improvement Plan (superseded 2026-08-27)

1. Establish current GitHub Pages output, GA4/GSC/GTM code paths, logged-in console availability, and a rollback-safe mutation boundary.
2. Implement direct GA4 production configuration and the smallest static-export-compatible blog pagination/search split.
3. Repair the NTRP ad/statistics presentation, remove or scope global cache reset, and add reduced-motion handling.
4. Verify focused behavior, lint, typecheck, runtime build, GitHub Pages static export, payload reduction, analytics markers, and accessibility behavior.
5. Apply only required GA4/GSC/GTM console settings, record evidence, run independent review, repair substantiated findings, then commit and push to GitHub `main`.

Classification: large; domain profile: web; risk: R2 local code plus R3 authenticated external analytics settings. GitHub push is authorized. Vercel operations remain prohibited.

---

## Historical Improvement Plan (2026-08-26)

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
