# STATUS

## 2026-09-30 01:00 KST — 404 hydration fix, Emma Navarro sources, tool links
- PR #38 (`dfb893e`): Header now always renders the active-nav underline and toggles its opacity. It was the cause of React #418 on prerendered 404s. A local production build reproduced the error on 3 of 7 paths and showed 0 after the fix. The production re-check is 0 on all 7 (`/blog/page/999`, unknown topic, unknown utility, root 404, `/utility`, `/blog`, `/`). Guarded by `audit:not-found-status`, which fails on the old Header.
- PR #39 (`a1482ba`): the Emma Navarro profile is now sourced from WTA articles (2024 US Open SF vs Sabalenka 6-3 7-6(2) as the No.13 seed; career high No.8; titles Hobart 2024, Merida 2025, Strasbourg 2026 — 3-0 in finals). The signature match is Strasbourg 2026 vs Mboko, 6-0 5-7 6-2. The unsupported "3-set win rate" claim is removed; production confirms the source link is present and the old claim is absent.
- PR #40 (`d3ba2ee`): contextual links added (scoring guide → scoring quiz, dictionary → terms quiz, doubles positioning → rotation generator). All three are present on production.

CI passed for every PR, and Vercel production status is success.

Rollback: revert the individual commits.

## 2026-09-30 00:05 KST — terms quiz and beginner series released
PR #36 was squash-merged as `ffb9e42`:
- `/utility/tennis-terms-quiz`: 10 random terms from the 47-term dictionary, with the answer's own name masked.
- Three beginner posts in the 입문 가이드 category (`tennis-beginner-first-month-lessons`, `-second-month-gear`, `-third-month-first-club-game`), linked to each other and to the new tools.
- Dictionary: service-line definition corrected and a typo fixed. Utility count is 66.

PR CI passed (verify, seo-check, hosting-cost, Vercel). Deployment: GitHub Pages success, Vercel success.

Production checks:
- The quiz, all three posts and `/blog/topic/situation` return 200. The posts have 1 h1, 7 h2, an HTML table, no raw pipes and a self canonical.
- The sitemap includes the new URLs, and `/utility` shows 66.
- Production browser run at 390px: the quiz runs 10 answers → result → review of 10 → new set; 0 console errors, no overflow.

Rollback: `git revert ffb9e42`.

## 2026-09-29 21:40 KST — new tools released
PR #34 was squash-merged as `2c793d7`, adding two tools:
- `/utility/doubles-rotation-generator`: 4–24 players, 1–6 courts, even rests, partner-repeat minimization, text copy, cafe CTA.
- `/utility/tennis-scoring-quiz`: 12 questions verified against the ITF 2026 Rules of Tennis PDF.

The utility count is now 65, and `audit:utility-contracts` checks that the public count matches the number of routes. New audits: `audit:doubles-rotation` and `audit:scoring-quiz`.

PR CI passed (verify, seo-check, hosting-cost, Vercel). Deployment: GitHub Pages success, Vercel success.

Production checks:
- Both pages return 200 with a self canonical and are in the sitemap; `/utility` shows 65.
- Production browser run at 390px: rotation validation and rest distribution work; the quiz runs 12/12 answers → result → review of 12 → retry; 0 console errors, no overflow.

Rollback: `git revert 2c793d7`.

## 2026-09-29 20:50 KST — soft 404 and claims fix released
PR #32 was squash-merged as `6fdd0b1`. GitHub Pages run `36562978406` and the Vercel commit status both succeeded.

Before the fix, production served unknown `/blog/<slug>` and `/players/<slug>` URLs as 200 + noindex (soft 404). The cause was route-level `loading.tsx` Suspense streaming the status before `notFound()`. After the fix, fresh random unknown blog, player and utility URLs, `/blog/page/999` and an unknown topic all return 404, and real pages return 200.

The unverifiable claims were removed from the live pages; the equipment page no longer contains `5,000+` or `전문가 검증`.

New guards: `audit:not-found-status` (fails when a loading boundary is restored) and a sitewide unsupported-claim scan in `audit:trust-contracts` (fails on the old equipment page).

The production storage-blocked NTRP re-run still passes (45/45, 0 page errors).

Open issue: React #418 hydration error on the 404 render of `/blog/topic/<unknown>`, `/blog/page/999` and `/utility/<unknown>` (the status codes are correct). It was not reproducible in dev, and a production build needs about 2.5 GB free on E:.

Rollback: `git revert 6fdd0b1`.

## 2026-09-29 20:20 KST — blocked-storage crash fixed and released
A production E2E with `localStorage`/`sessionStorage` throwing showed "This page couldn't load" on every page (pageerror from the shared Header theme read and Tracking). PR #30 fixed this, and it was squash-merged as `912c63d`:
- adds the never-throwing `src/lib/safe-storage.ts` helpers;
- uses them in Header, Tracking, device id and play-style completion;
- adds `audit:storage-safety` to `verify` (it fails on the old source and passes on the new).

PR CI passed (verify 3m26s, seo-check, hosting-cost, Vercel). The Vercel production status for `912c63d` is success.

The production re-run with storage blocked answered all 15 NTRP questions and reached `/utility/ntrp-test/result` with score 45/45, a completion id, the score displayed and 0 page errors.

The button visual check on production (light/dark `/players`, home hero, `/utility/focus-training`) found no unreadable button. Captures are `docs/reports/tf-buttons-*-2026-09-29.png`.

Rollback: `git revert 912c63d`.

## 2026-09-29 19:45 KST — released
State: RELEASED. PR #28 was squash-merged into #27. #27 was squash-merged into `main` as `7069b4dcd0ea2bd95e134c71d492caefa6e7d8d2`, after merging 12 newer `origin/main` commits. The one NTRP result-page conflict was resolved in favor of the versioned result contract. PR CI passed (verify, seo-check, hosting-cost, Vercel preview). Deployments succeeded: GitHub Pages `6732615096` (run `36556527482`) and Vercel Production `6732608041`.

Public smoke results:
- `/`, `/blog`, `/blog/topic/strategy` (noindex), `/utility/ntrp-test`, `/players/iva-jovic` (WebPage about Person, no ProfilePage, AO source) and `/sitemap.xml` (1,495 URLs, no topic URLs) all return 200. The missing route returns 404.
- GA and the cafe link are present; the AdSense loader is absent (fail-closed).

Rollback: `git revert 7069b4d`. The NTRP and injury model reviews remain owner decisions, and the blocked-storage browser flow is NOT_RUN.

## 2026-09-29 18:55 KST — remaining handoff items (Kiro)
State: COMPLETE_LOCAL_PR_OPEN. PR #27 (`feature/tf-handoff-improvements-2026-09-29`) holds the Codex work. The follow-up PR (`fix/tf-remaining-2026-09-29`) closes TF-08, TF-15 and TF-18 locally. `npm run verify` passed with 3,239 pages. The browser blocked-storage flow is NOT_RUN because the tool hung. There was no merge, no deployment and no external account change. The NTRP and injury model reviews still need owner decisions. Details are in `docs/reports/tennisfrens-improvement-2026-09-29.md`.

## 2026-09-29 17:21 KST — user-requested stop
State: STOPPED_AFTER_LOCAL_COMPLETION. The local improvement work is recorded in `docs/reports/tennisfrens-improvement-2026-09-29.md`; no further TennisFriends implementation or release work is authorized in this run. Branch `main`, HEAD `6048347583820837eba74fef1cabe0e0effdf120`; the local changes and evidence files remain uncommitted. The last full `npm run verify` passed with 3,239 static pages, and `git diff --check` passed at stop time. No push, PR, deployment, search submission, GA4 administrator change, advertising activation, or cafe posting was performed. Reopen from the report and fresh worktree inspection if explicitly requested.

## 2026-09-28 handoff improvement (local only)
Current State: COMPLETE_LOCAL. Reproduced issues from the attached TF-01..TF-18 handoff were fixed in bounded local changes; unvalidated scoring/model and wider UI work are explicitly deferred in `docs/reports/tennisfrens-improvement-2026-09-29.md`. The cafe destination, public URLs, and existing scoring were preserved. `npm run verify` exited 0 with 3,239 static pages; targeted audits and local Chrome checks passed. No push, PR, deployment, search submission, GA administration, advertising, or cafe posting occurred. Earlier completed docs/11 scope below is historical.

Current State: COMPLETE
Current Phase: TF-001–TF-040 closed
Completed: TF-001–TF-038 and TF-040 locally. Build and exact static export pass at 3,105 pages; all 63 utility routes passed the defined mobile/browser audit; release, rollback, completion, and disabled healthcheck evidence is recorded.
In Progress: None.
Remaining: None in the required TF-001–TF-040 scope. TF-041/042 remain optional LATER items.
Blocked: No. Account/CMP settings remain outside the release and stay fail closed.
Last Verification: exact SHA `d7b2f403…` is deployed successfully to GitHub Pages (`6455573560`) and Vercel Production (`6455592155`). Public smoke passed for representative pages, 404, robots, sitemap, ads.txt, GA, and fail-closed AdSense.
Next Action: none required; monitor the documented healthchecks. Account/CMP evidence remains unverified and ads stay disabled.
