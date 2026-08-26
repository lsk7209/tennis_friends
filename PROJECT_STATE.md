# PROJECT_STATE

## Purpose

TennisFrens is a Next.js tennis utility, player-information, and editorial site. The current task is to download and technically review the GitHub repository.

## Current Work

- Date: 2026-08-26
- Scope: completed security, automation, routing, index, dependency, encoding, and verification improvements
- Boundary: no deployment, Git push, external service mutation, or product code change
- Checkout at start: `main` / `3f2b474` from `https://github.com/lsk7209/tennis_friends`

## Changed Files

- `.goal-harness/GOAL.md`
- `.goal-harness/PLAN.md`
- `.goal-harness/STATUS.md`
- `.goal-harness/ACCEPTANCE.md`
- `.goal-harness/TESTS.md`
- `.goal-harness/CHANGELOG.md`
- `PROJECT_STATE.md`

Application behavior and repository safety gates are improved. The completed change set is authorized for a GitHub push; no deployment or hosting mutation is included.

## Baseline Review Validation (Before Improvements)

- PASS: `npm ci` (633 packages)
- PASS: `npm run lint`
- PASS: `npm run type-check`
- PASS: `npm run build` (2,990 static pages)
- FAIL: `npm audit --json` (9 advisories: 6 high, 2 moderate, 1 low)
- FAIL: `npm run verify` stopped on stale bundled GSC/GA4 reports and a redirect-audit mismatch
- FAIL: source encoding audit found seven pages containing Unicode replacement characters
- CONSTRAINED: several audits require local analytics/content-generation artifacts not included in the checkout

### Improvement Validation

- PASS: `npm run verify` including lint, typecheck, audits, and runtime build (2,982 pages)
- PASS: exact GitHub Pages static-export audit (2,982 pages)
- PASS: production dependency audit (0 vulnerabilities)
- PASS: generated HTML/workflow safety audit
- PASS: source and active-content encoding audits
- PASS: search artifact audit (1,305 pages, 971 articles)
- PASS: deterministic generated-artifact hashes and custom article export assertion

## Risks

- Existing repository documentation includes older deployment evidence and may not reflect current live state.
- Review results are local-code evidence unless explicitly identified otherwise.
- HIGH: client-side admin password is exposed through `NEXT_PUBLIC_ADMIN_PASSWORD`.
- HIGH: automated Gemini content can be written as HTML/TSX and pushed without a strict validation gate.
- HIGH: production dependencies include actionable advisories, including Next.js 16.2.7.
- HIGH: GitHub Pages static export and Vercel/Node runtime features do not share one deployment contract.
- HIGH: blog proxy rewrites can bypass custom static pages and may render empty bodies where `blogContentMap` is missing.
- HIGH/MEDIUM: tracked `.omx` contains operational/OAuth-flow artifacts and should be removed from public history after credential review.
- MEDIUM: generated AI index materially undercounts published/indexable blog posts.

## Next Actions

1. Review and commit the local changes when ready; push separately if desired.
2. Privately audit Git history for `.omx` sensitivity before deciding on credential rotation or history rewrite.
3. Confirm Supabase RLS in the live project under a separately authorized migration plan.
4. Monitor image/CSS behavior because patched Sharp/PostCSS overrides are outside Next's declared ranges despite passing both local build modes.
