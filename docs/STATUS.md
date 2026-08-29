# Status

## 2026-08-30 — Duplicate player URL release candidate

- State: implementation and full local verification complete; commit and deployment verification pending.
- Canonical decision: keep `/players/seongchan-hong`; permanently redirect `/players/hong-seong-chan` and suppress the alias from internal search/discovery.
- Evidence: all focused audits, the refreshed site/content/design review, and `npm run verify` passed; generated inventory is 1,465 sitemap entries, 1,134 blogs, and 259 canonical players; local production behavior is alias `308` and survivor `200`.
- External state: GitHub and production remain at `d815cf492bf4f8f7ccb2cabccd18c1d3db28f1e0`. No push, deployment, workflow dispatch, indexing submission, or Vercel CLI/API mutation has occurred for this release candidate.
- Next: independent diff review, exact staging, remote drift check, commit/push, then GitHub Actions, Git-connected deployments, and public-domain proof.

Current goal: keep TennisFriends ad-free and make the Naver Cafe the primary measurable destination while preserving useful public tennis content.

State: local implementation and verification completed on 2026-08-27. No commit, Git push, deployment, Vercel mutation, or analytics-admin mutation occurred in this workstream.

Implemented: removed AdSense, affiliate UI, `ads.txt`, and advertising-only configuration; preserved direct GA4 and `naver_cafe_visit`; converted 29 known raw Markdown tables; added one optimized realistic wall-practice image pilot.

Evidence: `npm run verify` and the exact GitHub Pages static export passed with 3,076 pages. Responsive browser smoke showed four semantic tables, no raw separator, a loaded hero image, four cafe links, and zero console errors or warnings.

Remaining external boundary: commit/push only after explicit authorization, then verify one genuine cafe-click event in production GA4. Cafe membership and downstream activity require separate Naver Cafe evidence.
