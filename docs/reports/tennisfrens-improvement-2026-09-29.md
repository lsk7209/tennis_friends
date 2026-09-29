# TennisFriends local improvement report

## Stop record — 2026-09-29 17:21 KST

The user requested that TennisFriends work be recorded and stopped. Local changes and evidence remain uncommitted on `main` at `6048347583820837eba74fef1cabe0e0effdf120`. The last full verification passed as documented below; `git diff --check` also exited 0 at stop time. No external action was taken. The generated build backups previously moved to C: for E: space recovery are now retained under `D:\e-drive-cache-archive\2026-09-29`; the repository and evidence remain on E:. Further work starts with a fresh worktree and runtime check.

## Basis and boundary

- Requested handoff: `D:\다운로드\tennisfrens_codex_handoff_2026-09-28.md`.
- Starting and ending HEAD: `6048347583820837eba74fef1cabe0e0effdf120` on `main`; no commit or external release was made. The handoff's `fcaefec…` baseline was older than this checkout.
- The existing cafe visit objective and `https://cafe.naver.com/homecookie` remain available without using a tool first. A cafe click measures outbound intent, not membership.
- The existing 15 question NTRP sum and existing injury calculation were not replaced with new models. The public deployment, analytics account, search index, and ad account were not changed or reconciled in this run.

## Changed files

- NTRP result/flow/storage: `src/app/utility/ntrp-test/result/page.tsx`, `src/app/utility/ntrp-test/test/page.tsx`, `src/lib/ntrp-result-contract.ts`, `src/lib/ntrp-results.ts`, `scripts/audit-ntrp-result-contract.mjs`, `scripts/audit-ntrp-storage.mjs`.
- Tracking: `src/components/Tracking.tsx`, `src/lib/analytics.ts`, `scripts/audit-tracking-semantics.mjs`, `CAFE-FUNNEL.md`.
- Blog navigation: `src/app/blog/BlogIndexPageContent.tsx`, `src/app/blog/topic/[topic]/page.tsx`, `src/app/blog/topic/[topic]/page/[page]/page.tsx`, `src/lib/blog-index.ts`, `src/lib/blog-utils.ts`, `scripts/audit-blog-topic-navigation.mjs`, `scripts/audit-blog-index-experience.mjs`.
- Search/player: `src/lib/sitemap-entries.ts`, `scripts/audit-sitemap-coverage.mjs`, `src/app/players/[slug]/page.tsx`, `src/data/players/scheduled-20.ts`, `src/types/player.ts`.
- Injury guidance: `src/app/utility/injury-risk/layout.tsx`, `page.tsx`, `test/page.tsx`, `result/page.tsx`, `src/lib/injuryRiskCalc.ts`.
- Workflow/documentation: `package.json`, `README.md`, `.goal-harness/STATUS.md`, this report, test logs and local browser captures. Generated tracked audits and AI-index files were restored after verification because they only changed from regeneration.

## Issues

| ID | Before | Local result | State |
| --- | --- | --- | --- |
| TF-01/02/17 | Share links omitted required data; score parser accepted decimals/out-of-range values; no receiver proof | Versioned read-only share URL, integer 15–75 contract, fresh browser receiver check; sharing does not write a result | FIXED_LOCAL |
| TF-03 | Current character/other-sport/self-report answers influence the legacy sum | Existing formula retained; version marked `legacy-sum-v2`, result labeled unofficial | MODEL_REVIEW_REQUIRED |
| TF-04 | Storage exceptions could block result and completion measurement | Exception-safe pending proof, quota/corruption handling, result available after storage failure; local completion measurement independent of durable write | FIXED_LOCAL |
| TF-05 | Progress showed 7% before answer and transition timers could outlive question | Answered-count progress, timer cleanup, input lock during transition | FIXED_LOCAL |
| TF-06/07 | Navigation intent confused with start; list page counted as article; read timer included hidden time | `assessment_started` v2 on first valid answer; article-only view/read events with visible time and depth; legacy intent kept separate | FIXED_LOCAL |
| TF-08 | Light surface pagination outline text could disappear | Blog pagination contrast fixed in light/dark; global button variant redesign deferred because it affects other surfaces | PARTIAL_LOCAL |
| TF-09/10 | Manual share modal/clipboard failure; fake progress, player comparison and personalized links | Radix dialog with Escape/focus, awaited clipboard and manual URL; truthful result labels and generic resources | FIXED_LOCAL |
| TF-11/12 | Sitemap could use current time as a modification date and reread post source repeatedly | Publication/update dates only, unknown date omitted, cached active post metadata; 1,495 URL audit retained | FIXED_LOCAL |
| TF-13 | Blog topic count had no full topic navigation | Eight topic routes, server pagination, stable page URLs, conservative `noindex,follow`; all 1,164 published/indexable posts accounted for | FIXED_LOCAL |
| TF-14 | Iva Jovic sample lacked a sourced actual match and title spelling diverged | AO match source and verified 2026-01-23 result added; SEO title includes both Korean spellings and Iva Jovic | FIXED_LOCAL_SAMPLE |
| TF-15 | Player schema/indexing concerns were proposed, not fully reproduced | No unsupported schema or bulk index change made | VERIFY_LATER |
| TF-16 | Injury tool copy treated unvalidated score as individual prediction | Score and formula retained; page/result/share text now calls it a reference, avoids medical certainty and health details in share URL; NHS guidance linked | GUIDANCE_FIXED_MODEL_REVIEW_REQUIRED |
| TF-18 | Measurement and feature claims were inconsistent | `CAFE-FUNNEL.md` event definitions and `README.md` product claims corrected | PARTIAL_LOCAL |

Already addressed in the current checkout and preserved: cool-down destination, recent content/link repairs, play-style completion behavior, canonical domain, cafe links, consent gate, and noindex boundaries. Relevant existing audits passed; those items were not reimplemented.

## Verification actually run

| Check | Result |
| --- | --- |
| First `npm run verify` | Exit 1 at build with `ENOSPC`. Old generated `out` and failed `.next` were moved to named C: backups after process/path checks. No source data was deleted. |
| Final `npm run verify` | Exit 0. Lint: 0 errors, 4 pre-existing warnings in `output/playwright` helpers. TypeScript and Next.js build passed; 3,239 static pages. Log: `.goal-harness/verify-final-topic-2026-09-29.log`. |
| Focused audits | Blog topic navigation, blog index, NTRP result contract/storage, tracking semantics, sitemap coverage, utility boundaries/experience, schema semantics: PASS. `git diff --check`: exit 0. |
| Local Chrome | Fresh share link displayed score without NTRP history storage; invalid decimal rejected; share dialog opened/closed with Escape and emitted a versioned URL. Mobile blog light/dark had no horizontal overflow; topic strategy had 12 cards, `/page/2` navigation, `noindex,follow`, and invalid topic 404. Iva page linked official AO source; injury result showed reference language and NHS source. Local result navigation recorded zero external requests in the observed request window. |
| Dependency audit | `npm audit --omit=dev --audit-level=high` exited 0; two moderate advisories remain (`baseline-browser-mapping`, `fflate`). No dependency change was requested. |

Browser captures: [mobile blog](tennisfrens-blog-mobile-2026-09-28.png), [mobile dark blog](tennisfrens-blog-mobile-dark-2026-09-28.png), [mobile topic](tennisfrens-blog-topic-mobile-2026-09-29.png), [shared result](tennisfrens-ntrp-shared-2026-09-28.png). These are local build captures, not production screenshots.

## Limits and approvals

- NOT_RUN: physical device, complete 15-answer browser flow under blocked storage, production site smoke, real GA4/GSC data reconciliation, Core Web Vitals field data, full player/content factual review, and global button-surface contrast audit.
- REVIEW_REQUIRED: revised NTRP scoring and any clinically validated injury model; neither was activated. Official [AO match record](https://ausopen.com/match/2026-iva-jovic-vs-jasmine-paolini-ws304) and [NHS injury advice](https://www.nhs.uk/conditions/sprains-and-strains/) support only the cited content and general warning, not the existing scores.
- NOT_RUN: git push, PR creation/merge, preview or production deployment, search-engine submission, GA4 administrator change, ad activation, cafe posting or signup. Each external action needs its own authorization and verification.
