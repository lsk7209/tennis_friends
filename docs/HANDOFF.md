# Handoff

## Current handoff — TF-039 release authorized

- Timestamp: 2026-09-15 KST
- User goal: proceed with the remaining TF-039 release after being told the exact blocker was Git push, deployment, and production smoke.
- Exact current state: user authorized continuation; local verification remains green and release preparation is active.
- Completed work: reconfirmed `main`, `origin`, baseline SHA, and that `.github/workflows/deploy.yml` deploys GitHub Pages on push to `main`.
- Changed files/live systems: durable status only at this checkpoint; no push has occurred yet.
- Fresh validation evidence: preverify, utility boundaries, blog schedule, visual layout, output AdSense audit, typecheck, diff check, build, and 3,105-page exact static export pass.
- Side effects/rollback: next external action will be a scoped release commit and push; rollback will use `git revert <release-sha>` and the connected workflow, never a destructive reset.
- Blockers/risks: account/CMP mutation is not included. AdSense remains fail closed because `NEXT_PUBLIC_ADS_CONSENT_READY` is not set to `verified`.
- Single next step: commit and push the verified worktree, then track the resulting deployment and public endpoints.
- Deliberately not run or sent: no account/CMP mutation, live mail/database write, URL deletion/redirect/noindex mutation, or manual indexing notification.

## Current handoff — docs/11 local completion and TF-039 approval gate

- Timestamp: 2026-09-15 KST
- User goal: complete the entire `docs/11` TennisFriends package.
- Exact current state: TF-001–TF-038 and TF-040 are locally complete. TF-039 is `BLOCKED_APPROVAL`; the overall 40-task package is therefore not yet operationally complete.
- Completed work: closed content, metadata, publication, utility, storage, URL/schema, accessibility, consent isolation, privacy, performance, security, CI, analytics-import, rollback, and healthcheck evidence. Fixed 15 duplicate titles and made AdSense fail closed unless production external effects and verified consent readiness are both present.
- Changed files/live systems: local source, tests/audits, reports, workflows, and durable documentation only. No live system changed. Recoverable old build output is at `E:\tennisfrens-build-backup-20260915-0647`.
- Fresh validation evidence: `npm run build` and `npm run audit:static-export` pass with 3,105 pages; 63/63 utility routes pass the mobile/browser contract; focused audits, typecheck, and lint pass (lint has four output-artifact warnings and zero errors).
- Side effects/rollback: preserve this dirty worktree; use scoped patches or a later `git revert`, never broad reset/checkout. See `docs/tennisfrens-audit/ROLLBACK_AND_APPROVAL.md`.
- Blockers/risks: no authorization exists for commit/push/deployment/account/CMP mutation. GSC, GA4, AdSense account/CMP, PSI, RUM, and current-worktree live HTTP remain unverified. Static export does not apply Next runtime redirects/headers/middleware/API behavior.
- Single next step: receive explicit TF-039 scope, then push/deploy only that scope and run the documented production smoke; otherwise stop without claiming complete.
- Deliberately not run or sent: no commit, push, deployment, account mutation, consent-ready flag, live email/database write, URL mutation, or indexing notification.

## Current handoff — TF-024 contextual next-actions checkpoint

- Timestamp: 2026-09-15 KST
- User goal: complete the full `docs/11` package within current local authority.
- Exact current state: TF-024 is locally complete; work continues on accessibility and remaining release evidence.
- Completed this checkpoint: verified all nine utility result pages expose an internal next action without forced content splitting; verified every discovered utility target exists; locked three primary home paths to NTRP, string tension, and injury tools; retained the existing contextual blog-to-tool relevance engine; localized the shared result-link default title/action.
- Changed files/live systems: shared result links, next-action audit, package preverify, internal-link report, and durable status. No live system changed.
- Fresh validation evidence: `audit:next-action-links` passes for nine result pages and three home paths; `audit:internal-links` passes for ten core candidates, 63 routes, and four relevance fixtures; typecheck passes.
- Side effects/rollback: reversible local source/report changes only.
- Blockers/risks: this source-level link proof does not replace the browser keyboard/mobile flow required by TF-026/034.
- Single next step: complete TF-026 mobile, focus, input/error, and chart text-fallback accessibility evidence.
- Deliberately not run or sent: no push, deployment, account action, live analytics/ads/mail, indexing notification, payment, or booking.

## Current handoff — TF-023 URL and crawl contract checkpoint

- Timestamp: 2026-09-15 KST
- User goal: complete the full `docs/11` package within current local authority.
- Exact current state: TF-023 is complete for local/source/generated-output authority; live HTTP is explicitly `NOT_VERIFIED` because the current worktree is not deployed.
- Completed this checkpoint: defined canonical-public, public-noindex, private-disallowed, legacy-redirect, and missing URL policies; separated source, previous exact static-export, and live HTTP evidence axes; locked canonical host, robots private paths, permanent redirect ownership, sitemap exclusion logic, and the GitHub Pages redirect limitation.
- Changed files/live systems: URL/HTTP contract, contract audit, package preverify, generated sitemap report, and durable status. No live system changed.
- Fresh validation evidence: URL contract, canonical-host, redirect-config, and sitemap-coverage audits pass. Current sitemap inventory is 1,478 entries: 1,147 blogs, 182 physical blog routes with 54 noindex, 63 utilities, and 259 players.
- Side effects/rollback: reversible local documentation/audit/report changes only.
- Blockers/risks: current-worktree live status cannot be proven without deployment, so live HTTP remains null/`NOT_VERIFIED`; this is separated from a local defect. The last exact static-export checkpoint produced 3,105 pages before the latest scheduled post crossed its release time.
- Single next step: complete TF-024 internal next-action context and TF-026 accessibility evidence.
- Deliberately not run or sent: no push, deployment, live HTTP claim for this worktree, account action, URL mutation, indexing notification, payment, or booking.

## Current handoff — TF-025 schema semantics checkpoint

- Timestamp: 2026-09-15 KST
- User goal: complete the full `docs/11` package within current local authority.
- Exact current state: TF-025 is locally complete; the overall matrix remains active.
- Completed this checkpoint: removed fabricated `dateModified = datePublished` fallback from both blog schema implementations; aligned visible dynamic-blog authorship with Organization rather than Person; changed organizational author URL from a nonexistent `/about` path to the canonical site; documented rating, breadcrumb, author, date, player-Person, and obsolete FAQ-rich-result policy; added semantic regression auditing.
- Changed files/live systems: two blog schema components, dynamic blog microdata, structured-data policy, semantic audit, package preverify, and durable status. No live system changed.
- Fresh validation evidence: `audit:schema-semantics`, `audit:schema-coverage`, typecheck, and focused ESLint pass.
- Side effects/rollback: reversible local source/documentation changes only.
- Blockers/risks: existing FAQ markup remains reader-facing structured data but is explicitly not a promised rich-result feature or KPI. No first-party rating evidence exists, so rating schema remains prohibited.
- Single next step: complete URL/HTTP/robots/sitemap contract evidence for TF-023, separating local output from inaccessible/unverified live state.
- Deliberately not run or sent: no push, deployment, account action, live analytics/ads/mail, URL mutation, indexing notification, payment, or booking.

## Current handoff — TF-019/020/021 tool-integrity checkpoint

- Timestamp: 2026-09-15 KST
- User goal: complete the full `docs/11` package within current local authority.
- Exact current state: TF-019–TF-021 are materially advanced but remain open pending inventory/coverage of remaining inline calculator surfaces.
- Completed this checkpoint: disclosed that weather/court tools use user-entered local rules and do not fetch live data; marked price comparison as static example data with no real purchase links; disabled unsupported save/purchase actions; fixed the inverted string-tension power/control rule and comparison copy; added strict enum validation, a dated model version, formula/unit/rounding disclosure, and regression checks; removed artificial delays from injury, equipment, training, nutrition, and match result pages; made their URL parsing synchronous and fail closed; added match count-consistency, training time/division, equipment non-mutation/age, and recoverable form-error handling.
- Changed files/live systems: three utility pages, string tension library/result, injury result, utility contract classification, data-integrity/boundary audits, package preverify, and durable status. No live system changed.
- Fresh validation evidence: `audit:utility-data-integrity` covers nine data/result surfaces and zero retained artificial delays; expanded `audit:utility-boundaries` covers five calculation libraries; `audit:utility-contracts`, typecheck, and focused ESLint pass.
- Side effects/rollback: reversible local code and report changes only.
- Blockers/risks: broader inline calculator formula/boundary coverage remains incomplete. The independent read-only audit exceeded its useful timebox and was stopped without edits.
- Single next step: inventory remaining inline calculators and add deterministic finite/unit/contradiction coverage or explicit non-calculator classification.
- Deliberately not run or sent: no push, deployment, account action, live analytics/ads/mail, URL mutation, indexing notification, payment, or booking.

## Current handoff — TF-016/017 publication and pagination checkpoint

- Timestamp: 2026-09-15 KST
- User goal: complete the full `docs/11` package within current local authority.
- Exact current state: TF-016/017 are locally implemented and fixture-proved; the overall TF-001–TF-040 matrix remains active.
- Completed this checkpoint: made invalid publish dates fail closed; added explicit draft/private publication states; proved `updatedAt` cannot change publish eligibility; replaced out-of-range page clamping with an empty/out-of-range contract and route-level 404 handling; aligned metadata handling and verified the shared 60-second list/detail cache policy and shared list/detail/sitemap publication gate.
- Changed files/live systems: blog types, publication and index helpers, paginated route/content, publication fixture audit, index source audit, package scripts, generated audit reports, and durable status. No live system changed.
- Fresh validation evidence: `audit:blog-publication-contract` passes publication fixtures and a 25-post production-size 12/12/1 page set with exact URL windows and no duplicate/omitted IDs; `audit:blog-index-experience` passes across six list/detail/sitemap files; typecheck passes. The curated home shelf no longer claims chronological recency.
- Side effects/rollback: reversible local source/report changes only.
- Blockers/risks: Node 24 emits the existing typeless-package warning when directly importing TypeScript for the fixture audit; it does not affect the passing result. Tool fleet, URL/schema/accessibility/performance/E2E, and release evidence remain.
- Single next step: complete TF-019–TF-021 tool behavior, formula disclosure, and remaining boundary coverage.
- Deliberately not run or sent: no push, deployment, account action, live analytics/ads/mail, URL mutation, indexing notification, payment, or booking.

## Current handoff — TF-011/012-015/031-032 checkpoint

- Timestamp: 2026-09-15 KST
- User goal: complete the full `docs/11` package within current local authority.
- Exact current state: implementation continues locally; no external mutation occurred and the final matrix remains open.
- Completed this checkpoint: corrected the article provenance model so organizational authorship is real and `dateModified` is emitted only from an explicit `updatedAt`; documented duplicate/topic and player/article intent candidates with false-positive decisions; created a non-authorized URL-change dry-run manifest; recorded unresolved image/data rights without inventing permission; defined separate fetch/effective/verification times plus bounded supplier failure behavior. During this work, discovered broader dynamic Korean-particle defects, repaired every part16-26 generator to use the shared helper, and regenerated 506 entries.
- Changed files/live systems: blog types/renderer, 11 quality-rewrite generators and their generated content/metadata, particle migration/audit, provenance/candidate/URL/rights/freshness reports, provenance audit, package verification, and durable status. No live system changed.
- Fresh validation evidence: provenance/URL audit, expanded particle generator audit, typecheck, active-content encoding audit, and generated HTML safety audit pass. Direct known-defect scan reports no remaining `타이밍는/를`, `사람가/는`, `서브은/을`, `기준를/와`, `루틴는/를`, and related generated errors.
- Side effects/rollback: reversible local source/generated-data changes. The generator repair is retained so regeneration does not reintroduce the defects.
- Blockers/risks: per-image rights evidence is absent, correctly recorded as unresolved. Account/live deployment evidence remains inaccessible and unclaimed. Cache/pagination, fleet-wide tool states/formulas, accessibility/E2E, and release preparation remain.
- Single next step: finish cache/pagination and tool formula/state checks, followed by URL/schema/accessibility/performance/E2E and final verification.
- Deliberately not run or sent: no push, deployment, URL mutation, account action, live analytics/ads/mail, indexing notification, payment, or booking.

## Current handoff — TF-018/022/033 checkpoint

- Timestamp: 2026-09-15 KST
- User goal: complete the full `docs/11` package within current local authority.
- Exact current state: local work continues; the completion matrix remains open and no external system was changed.
- Completed this checkpoint: added purpose/release/data-origin/verification contracts and visible status labels for all 72 utility metadata entries; upgraded NTRP records to a versioned storage envelope with legacy migration, corrupt-data recovery, finite-score validation, truthful unavailable state, JSON export, and confirmed deletion; added a reusable publication quality gate that separates hard failures from review warnings and connected it to the reviewed-draft importer.
- Changed files/live systems: utility contracts/index, NTRP storage/stats UI, publication gate/importer, three audit scripts, package verification, and durable status files. No live system changed.
- Fresh validation evidence: `audit:utility-contracts` covers 72 entries; `audit:ntrp-storage` covers migration, corruption, duplicate completion, export, delete, and storage failure; `audit:publication-quality-gate` covers invalid slug, blocked status, PII/unsupported review claim, broken link, and warning-only fixtures. Typecheck and quiet lint pass.
- Side effects/rollback: reversible local source/data changes only. Existing v1 NTRP data migrates locally on first read and is then removed after a successful v2 write.
- Blockers/risks: other storage used by optional tracking is disabled outside explicitly authorized production and is not represented as user result history. Fleet-wide tool error/empty/stale proof, provenance/freshness, accessibility/E2E, and release evidence remain.
- Single next step: complete author/provenance/freshness and duplicate/URL decision artifacts, then accessibility/E2E and final verification.
- Deliberately not run or sent: no push, deployment, account mutation, live analytics/ads/mail, URL mutation, indexing notification, payment, or booking.

## Current handoff — TF-002/003/004 and utility-boundary checkpoint

- Timestamp: 2026-09-15 KST
- User goal: complete the full `docs/11` package within current local authority.
- Exact current state: work continues locally; full TF-001–TF-040 proof is not yet closed and no external mutation occurred.
- Completed this checkpoint: added denominator-aware URL/content/tool/player inventory; added a machine-readable baseline that keeps inaccessible GSC/GA4/AdSense/RUM values null; documented the permission/secret/external-effect boundary; added a deterministic governance audit to `verify`. Found and repaired an unreachable 50+ injury-risk branch, rejected non-finite/out-of-range ages, and added reproducibility/boundary tests for injury risk and string tension.
- Changed files/live systems: three audit evidence documents, governance and utility-boundary scripts, package scripts, injury-risk calculation, goal/handoff status. No live system changed.
- Fresh validation evidence: `npm run audit:docs11-governance`, `npm run audit:utility-boundaries`, and `npm run type-check` exit 0.
- Side effects/rollback: reversible local source and documentation changes only.
- Blockers/risks: TF-012–TF-040 still contain unclosed local evidence, with TF-039 explicitly approval-gated. The supplied `docs/11` directory lacks the referenced package JSON/fixture files, so the integrated master/checklist is the available specification authority.
- Single next step: complete tool registry/storage/provenance and publishing-gate contracts, followed by accessibility/E2E and the full verify/export suite.
- Deliberately not run or sent: no push, deployment, account access/mutation, live analytics/ads/mail, URL mutation, indexing notification, payment, or booking.

## Current handoff — TF-010/011/028 completion checkpoint

- Timestamp: 2026-09-15 14:07 KST
- User goal: complete the full `docs/11` improvement package and report truthfully whether it is done.
- Exact current state: local implementation remains active; the complete TF-001–TF-040 evidence matrix is not yet closed. No commit, push, deployment, or account mutation occurred.
- Completed this checkpoint: repaired article lead repetition at both generator and renderer boundaries; changed the 30 reviewed articles from duplicated lead summaries to their preserved conclusion claims; added exact/prefix/markup/first-paragraph regression cases; hardened analytics with event/parameter allowlists and rejection of email/phone-like values; removed raw search terms from events. TF-011 particle repair from the prior checkpoint remains green.
- Changed files/live systems: reviewed-draft importer, current reviewed content data, article HTML normalizer/blog renderer, analytics/search event sources, three focused audit scripts, package verification, and durable status files. No live system changed.
- Fresh validation evidence: content repetition audit, 30-post schedule audit, analytics privacy audit, TypeScript check, and quiet ESLint all exit 0. Schedule remains 30 posts, 12-hour intervals, and 18 ordered dependencies.
- Side effects/rollback: local source/generated-data changes only; normal Git revert of this working diff is sufficient.
- Blockers/risks: the accepted source package used by the reviewed-draft importer is not present in this checkout, so current data was mechanically migrated from its already-preserved `highlight` conclusion values. Full docs/11 backlog and final full verification remain outstanding; account/RUM/deployment claims remain unverified without explicit authority/evidence.
- Single next step: continue the evidence-ranked remaining local TF items, then run the full verify/export evidence suite.
- Deliberately not run or sent: no commit/push, deployment, account mutation, live email, reservation/payment, indexing notification, or external message.

## Current handoff — full docs/11 continuation

- Timestamp: 2026-09-15 KST
- User goal: complete the full `docs/11` improvement package, not only TF-009.
- Exact current state: active local implementation continues on the preserved dirty worktree; no commit, push, or deployment occurred.
- Completed this checkpoint: made `/api/og` request-independent and static-export compatible; exact GitHub Pages audit now passes with 3,105 pages. Added a reusable Korean particle selector with Hangul, rieul, digit, and Latin boundaries; regenerated/integrated the 300 part12 articles, removing 300 metadata and 600 body placeholder particles; source audit and typecheck pass.
- Changed files/live systems: OG route, particle helper/audit, part12 generator and generated metadata/content, package verification, build/report artifacts. No live system changed.
- Fresh validation evidence: `npm run audit:static-export` exit 0; `npm run audit:korean-particles` exit 0; `npm run type-check` exit 0. The failing-first particle audit found the 900 stale placeholders before regeneration.
- Side effects/rollback: local generated article/build artifacts only; normal Git revert of this working diff is sufficient.
- Blockers/risks: full TF-001–TF-040 matrix is not complete. Optional `audit:generated-content-quality` reports three missing historical output artifacts unrelated to the regenerated part12 manifest, which itself passes at 300/300 and score 100.
- Single next step: implement TF-010 repetition/root-cause inventory and repair confirmed active-source defects.
- Deliberately not run or sent: no commit/push, deployment, account mutation, live mail, reservation/payment, indexing notification, or external message.

## Current handoff — TF-009 external-effect isolation

- Timestamp: 2026-09-15 KST
- User goal: continue the next safe `docs/11` slice and isolate analytics/ads/mail/booking effects in preview and tests.
- Exact current state: TF-009 is implemented locally on baseline `408ddd081914241c99f8da8c9d6237f122db319d`; no commit, push, or deployment occurred.
- Completed work: introduced explicit production authorization for GA4, AdSense, their preconnects, and `Tracking`; wired GitHub Pages production; added the isolation audit to `verify`; confirmed contact uses only user-initiated mailto and booking uses no application network mutation.
- Changed files/live systems: layout, new external-effect policy, deployment build env, static/export audit env, package verification, and durable records. No live system changed.
- Fresh validation evidence: focused audit/lint/typecheck and full `npm run verify` pass; disabled and explicitly enabled server builds each generated 3,103 pages and showed the expected absent/present markers.
- Side effects/rollback: local build outputs and regenerated reports only; recover with a normal revert of this local diff.
- Blockers/risks: exact `npm run audit:static-export` fails because `/api/og` uses `request.url` under export-mode `dynamic = "error"`; account/RUM/ad delivery remain unverified.
- Single next step: make `/api/og` static-export compatible and rerun the exact export audit.
- Deliberately not run or sent: no commit/push, deployment, account mutation, live email, reservation/payment, indexing notification, or external message.

## Current handoff — docs/11 confirmed trust-contract slice

- Timestamp: 2026-09-14 KST
- User goal: execute the `docs/11` TennisFriends improvement package within safe local authority.
- Exact current state: the first evidence-backed S1 slice is implemented locally on baseline `408ddd081914241c99f8da8c9d6237f122db319d`; no commit, push, or deployment occurred.
- Completed work: TF-001 local baseline; TF-005 contact title; TF-006 actual 15-question/non-official NTRP language; TF-007/019 booking simulation and synthetic distribution labels; TF-008 accurate mailto/privacy flow and active-ad disclosure; TF-030 compatible Next.js/sharp security updates. Added `audit:trust-contracts` to full verification.
- Changed files/live systems: public-copy/state source files, package manifest/lockfile, audit/harness/handoff records, and normal generated search/audit artifacts. No live system changed.
- Fresh validation evidence: final `npm run verify` passed; Next.js 16.3.5 built 3,103 pages. Production audit has no high/critical finding and retains two moderate advisories.
- Side effects/rollback: local npm tree/package updates and generated reports only; recover with a normal revert of this diff. The user-provided `docs/11/` package remains preserved and untracked.
- Blockers/risks: broader backlog is not claimed complete; GSC/GA4/AdSense account/RUM/business outcomes are unverified. No browser interaction smoke was run.
- Single next step: audit TF-009 analytics and external-request isolation locally, preserving this verified slice.
- Deliberately not run or sent: no commit/push, deployment, Vercel mutation, account change, live mail, DB/data mutation, URL/indexing change, or external message.

## Current handoff — AdSense technical installation

- Timestamp: 2026-09-12 KST
- User goal: repair the missing AdSense technical installation for currently registered sites, continuing from the dashboard evidence.
- Exact current state: repair commit `fd4a995b381b23bb0fd3f350c09141acd1034b70` is on `origin/main`; Git-connected Vercel deployment `dpl_FrAPaspfCHNnLPWAX3RryveCEWWb` completed successfully. The public homepage now contains the confirmed loader and `https://tennisfrens.com/ads.txt` returns the exact row with `200 text/plain`.
- Completed work: added only loader `ca-pub-3050601904412736`, exact ads.txt row `google.com, pub-3050601904412736, DIRECT, f08c47fec0942fa0`, and narrowly required CSP origins. Cafe CTA and GA4 remain present; no manual ad slots were added. The obsolete ad-free regression audit was replaced by source and static-output installation checks.
- Fresh validation evidence: source installation audit, lint, type-check, normal Next production build, and GitHub Pages static-output audit passed. Public validation confirms the ads.txt row, homepage loader, loader/iframe CSP origins, and active Vercel deployment ID.
- Side effects / rollback: one Git commit and Git-connected deployment only; no direct Vercel CLI/API, AdSense account action, ad-slot placement, or indexing action. Roll back with `git revert fd4a995` if required.
- Blockers / risks: technical installation does not prove ad fill or account-level Auto ads configuration; those remain outside this repair.
- Single next step: no further technical installation work is required for the currently registered managed sites; reassess only after a future fresh dashboard collection signals a new gap.

## Current handoff — 30 reviewed articles scheduled every 12 hours

- Timestamp: 2026-09-08 17:15 KST
- User goal: schedule the accepted TennisFriends 30-article package for automatic publication every 12 hours and stop after this site.
- Exact current state: local release candidate is based on fetched `origin/main` `2e1bcf8d82013bd61dde654a2b2f5f54a1ad0910`; 30 future posts run from `2026-09-09T09:00:00+09:00` through `2026-09-23T21:00:00+09:00` at 12-hour intervals.
- Completed work: converted the accepted MDX bodies into the site's HTML data contract without duplicate H1s; registered metadata/content; added per-file schedule auditing; verified all 18 internal article dependencies publish their targets first; enabled 60-second ISR across every scheduled-content surface and on-demand generation for future pagination.
- Changed files / live systems: reviewed September metadata/content, import and audit scripts, blog index routes, schedule reports, and package verification command. No live system has been changed at this checkpoint.
- Fresh validation evidence: `npm run verify` passed; after final cache hardening, dedicated schedule audit, lint, type-check, normal build, and GitHub Pages export-mode build passed. Export build generated 3,079/3,079 pages, including future pagination capacity, and reports one-minute revalidation for every canonical scheduled surface. The dedicated audit reports 30 posts, 12-hour spacing, 18 ordered dependencies, and publish-gate counts 0 before/1 at/2 after the first interval.
- Side effects / rollback: only this isolated release clone is changed. Roll back by reverting the eventual single release commit. The primary `E:\web\tennisfrens` checkout remains untouched.
- Blockers / risks: push, Git-connected deployment, and public smoke verification remain. Local `npm ci` reports one moderate production advisory; the configured high-severity production audit passes.
- Single next step: receive final independent GO, commit/push main, then verify the exact Git-connected deployment and public pre-release 404 gate.
- Deliberately not run or sent: no Vercel CLI/API mutation, manual workflow dispatch, production DB write, indexing notification, account change, or external message.

## Current handoff — duplicate Hong Seong-chan profile consolidation

- Timestamp: 2026-08-30 02:01 KST
- User goal: audit and optimize the dashboard fleet from fresh evidence, checking GitHub first for TennisFriends and removing confirmed SEO duplication without disturbing unrelated work.
- Exact current state: runtime commit `49ef50eabf8fe8a438f4e302ae50c2da7747833e` is live on the canonical Vercel domain. The canonical survivor is `/players/seongchan-hong`; `/players/hong-seong-chan` is a permanent alias.
- Completed work: added the alias mapping; excluded redirect-only player slugs from the player directory and site search; regression-locked the mapping and internal-discovery exclusions; regenerated current audit, sitemap, AI-index, and LLM discovery artifacts.
- Changed files / live systems: four redirect/internal-discovery source files, generated search assets under `public/`, current audit reports under `docs/reports/`, and current-state documents; GitHub `main`, GitHub Actions, GitHub Pages, and the Git-connected Vercel Production deployment were updated.
- Fresh validation evidence: focused redirect/player/sitemap/site-review/type checks and full `npm run verify` passed with zero production vulnerabilities and 3,077/3,077 generated pages. Vercel Production `6157989447`, GitHub Pages `6157980452`, and all three push workflows succeeded for `49ef50e`. Public HTTP proof returned alias `308`, survivor `200`, one survivor H1, self-canonical metadata, and no alias leakage in sitemap or AI index. Public Playwright checks showed one canonical result in both player filtering and site search with zero console errors or warnings.
- Side effects / rollback: production search routing and generated discovery inventory now use the canonical survivor. Roll back with a narrow revert of `49ef50e`; no production database or account state changed.
- Blockers / risks: no production blocker. The GitHub Pages static mirror disables Next.js redirects and therefore returns `404` for the alias, while its pages canonicalize to the Vercel domain. GitHub also reports five open development-scope Dependabot alerts; `npm audit --omit=dev` remains zero and this SEO release did not broaden dependency scope.
- Single next step: record this live proof in the multi-dashboard fleet harness/ledger, then continue with the next confirmed fleet defect.
- Deliberately not run or sent: no manual workflow dispatch, IndexNow submission, production database write, Vercel CLI/API call, analytics-admin change, or external message. The ignored `.playwright-cli/` snapshot directory is local test output only and was not committed.

Branch: `codex/tennisfrens-ctr-20260714`.

Completed: source canonical URLs and generated discovery assets use `https://tennisfrens.com`; www redirects are configured to the same host.

Historical 2026-07 baseline, superseded by the 2026-08-27 cafe-first ad-free decision: PR #6 merged as `3e52b0c`; its live player, www redirect, former `ads.txt`, robots.txt, and sitemap.xml checks passed at that time.

Next: revisit the direct GSC player-page query cohort after 2–4 weeks; do not rewrite the exact-match Alexandra Eala title without new CTR evidence.

Validation: see `.goal-harness/EVIDENCE.md`.

Follow-up completed: PR #11 merged as `5300c3a`; Vercel production deployment `dpl_DE41hKP8WqtZtKX9C4RueAyv3dQs` is Ready. AI discovery has 546 pages/260 player profiles and zero redirect-only `-legacy` URLs; canonical Marta Kostyuk is 200 and its legacy URL is a 308 redirect.

Follow-up in progress: `codex/tennisfrens-ai-index-20260714` removes redirect-only `-legacy` player URLs from AI discovery artifacts only. It preserves canonical player pages and live redirects; local artifact, sitemap, lint, and type checks pass. Await Vercel preview build and public smoke verification.
