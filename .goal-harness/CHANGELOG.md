# CHANGELOG

## 2026-08-27 Naver Cafe Primary Conversion

| Area | Change | Reason |
|---|---|---|
| Conversion hierarchy | Made the approved Naver Cafe URL the primary home action and added persistent desktop/mobile/footer access. | Align the site with the owner's primary traffic objective. |
| Sitewide CTA | Replaced the image banner with a truthful text CTA, rendered once before the affiliate banner on eligible pages. | Improve clarity, remove duplicate placement, and keep the primary action ahead of monetization. |
| Measurement | Added the `naver_cafe_visit` event with CTA location, link text, destination URL, and page path. | Establish an attributable outbound-intent baseline. |
| Claims and accessibility | Removed the unsupported “No.1” creative; added safe new-tab attributes and accessible destination labels. | Preserve trust and keyboard/screen-reader usability. |
| Static/runtime boundaries | Added source/static audits and a base-path-aware hydrated route exclusion for admin and legal pages. | Prevent shared-layout leakage and GitHub Pages pathname regressions. |
| Funnel contract | Added `CAFE-FUNNEL.md` with evidence, metric denominator, hypotheses, and downstream proof boundaries. | Separate verified outbound clicks from unverified Naver Cafe joins or member quality. |

## 2026-08-27 SEO, GEO, and AEO Optimization

| Area | Change | Reason |
|---|---|---|
| Indexability | Added noindex to 24 state routes and internal blog renderer. | Prevent thin and duplicate indexing. |
| Discovery | Fixed rewritten-blog filtering; regenerated AI artifacts with 1,133 articles. | Match sitemap inventory. |
| Structured data | Added stable entity IDs, Organization authorship, real icon URLs, and one breadcrumb owner. | Improve entity coherence. |
| AEO | Added a server-rendered homepage answer block. | Provide an extractable answer. |
| AI policy | Aligned crawler directives and remote checks. | Prevent policy drift. |
| Verification | Added indexability regression audit and GEO report. | Preserve proof. |

## 2026-08-27 Measurement And Public-Site Improvements

| Area | Change | Reason |
|---|---|---|
| Analytics/static deployment | Added production GA4 fallback and explicit custom-domain GitHub Pages variables and assertions. | Make analytics independent of Vercel-only detection and prevent base-path leakage. |
| Blog index | Replaced full client catalog with 12-item static pages and crawlable pagination. | Reduce initial HTML/client payload and improve stable navigation. |
| NTRP | Added same-session completion tokens, local-only result history, honest statistics, and no-public-leaderboard copy. | Prevent copied URLs from polluting events and avoid presenting sample/shared data as real. |
| Ads/cache/motion | Mounted AdSense once, removed global cache reset, and added reduced-motion handling. | Avoid duplicate loaders, destructive cache behavior, and accessibility regressions. |
| Dependencies/docs | Removed unused Supabase client/dependency and aligned active documentation with the public no-login product. | Keep the implementation contract accurate and smaller. |

---

## Changed Files

| File | Change | Reason |
|---|---|---|
| `.goal-harness/*` | Added 2026-08-26 review goal, plan, status, checks, and acceptance criteria. | Preserve durable review state while retaining prior SEO work evidence. |
| `PROJECT_STATE.md` | Added current checkout/review handoff. | Provide repository-level continuity for this review. |
| Security/admin/workflows | Removed client password, gated generated HTML, stopped scheduled auto-push, and made patches review-only. | Eliminate false authentication and automated unreviewed content publication. |
| Routing/index/player data | Preserved custom routes, loaded canonical blog inventory, expanded legacy redirects, and regenerated discovery assets. | Prevent empty articles and incomplete/stale indexes. |
| Dependencies/content/audits | Updated patched dependencies, repaired encoding, separated operational audits, and added runtime/static gates. | Restore deterministic local verification with security coverage. |
| `.gitignore` and `.omx` index | Ignored `.omx` and removed 52 paths from the Git index while keeping local files. | Prevent future publication of operational artifacts. |
