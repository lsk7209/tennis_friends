# Status

## 2026-08-30 — Duplicate player URL live-verified

- State: implementation, local verification, Git push, Git-connected deployments, and public production verification complete.
- Canonical decision: keep `/players/seongchan-hong`; permanently redirect `/players/hong-seong-chan` and suppress the alias from internal search/discovery.
- Evidence: all focused audits, the refreshed site/content/design review, and `npm run verify` passed; generated inventory is 1,465 sitemap entries, 1,134 blogs, and 259 canonical players. Public behavior is alias `308`, survivor `200` with one H1/self-canonical, canonical-only sitemap/AI index, and one canonical result in both player filtering and site search.
- External state: runtime commit `49ef50eabf8fe8a438f4e302ae50c2da7747833e`; Vercel Production `6157989447`; GitHub Pages `6157980452`; all three push workflows succeeded for the same SHA.
- Next: update the fleet-level harness and ledger, then continue with the next confirmed SEO defect.

Current goal: keep TennisFriends ad-free and make the Naver Cafe the primary measurable destination while preserving useful public tennis content.

State: local implementation and verification completed on 2026-08-27. No commit, Git push, deployment, Vercel mutation, or analytics-admin mutation occurred in this workstream.

Implemented: removed AdSense, affiliate UI, `ads.txt`, and advertising-only configuration; preserved direct GA4 and `naver_cafe_visit`; converted 29 known raw Markdown tables; added one optimized realistic wall-practice image pilot.

Evidence: `npm run verify` and the exact GitHub Pages static export passed with 3,076 pages. Responsive browser smoke showed four semantic tables, no raw separator, a loaded hero image, four cafe links, and zero console errors or warnings.

Remaining external boundary: commit/push only after explicit authorization, then verify one genuine cafe-click event in production GA4. Cafe membership and downstream activity require separate Naver Cafe evidence.
