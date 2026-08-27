# GOAL

## Active Search Acquisition And Conversion Goal (2026-08-27)

### Final Deliverable

Improve the current local TennisFriends site so qualified search visitors can discover the right indexable landing page, receive a clear answer or tool path, and reach the primary measurable destination, the TennisFriends Naver Cafe, without weakening the public no-login product or the existing static-host contracts.

### User Value

Search visitors land on trustworthy tennis guidance or utilities, can continue into the most relevant next action, and encounter a consistent, measurable Cafe path after receiving value.

### Required Features

- Recheck technical SEO, sitemap/robots/canonical/schema, rendered source, performance configuration, and static export against the current dirty worktree.
- Recheck the search-to-Cafe funnel, GA4 event contract, mobile path, and page-type attribution.
- Prefer evidence-backed improvements to current landing templates and shared measurement over speculative bulk content or duplicate keyword pages.
- Preserve the root-hosted `tennisfrens.com` canonical and `/tennis_friends` GitHub Pages asset/base-path contract.
- Record current public-site drift separately from local implementation proof.

### Non-Goals

- No Vercel mutation, deployment, Git push, Search Console submission, GA4 admin change, bulk article rewrite, invented search data, or Naver Cafe automation.

### Done Conditions

- Relevant focused audits, lint, typecheck, production build, static-export checks, and representative search-to-conversion smoke checks pass.
- Any changed measurement contract has a source audit and clear denominator.
- `PROJECT_STATE.md`, harness evidence, and acceptance status record local proof, public drift, and the dated remeasurement boundary.

### User-Visible Result

The locally optimized site presents stronger crawlable search landing paths and a clearer, measurable route from useful content or tools to the TennisFriends Naver Cafe.

## Completed Cafe-First Ad-Free Content Goal (2026-08-27)

### Final Deliverable

Remove AdSense and other revenue-first advertising surfaces from TennisFriends, repair raw Markdown table syntax that leaks into published blog pages, and validate one editorially appropriate realistic AI-image pilot without weakening the Naver Cafe conversion path.

### User Value

Visitors get cleaner tennis guidance without broken table markup or distracting ads, then encounter a clear and measurable path to the TennisFriends Naver Cafe.

### Required Features

- No AdSense loader, slot, publisher metadata, `ads.txt` contract, ad-only component, or ad-dependent audit remains in the active site or build path.
- Removing ads does not remove direct GA4 or the `naver_cafe_visit` event contract.
- Markdown tables render as accessible HTML tables or an equally readable responsive structure instead of raw `|` and separator lines.
- The repository detects representative raw-table leakage before release.
- One realistic tennis image pilot, if generated, has a truthful scene, local optimized asset, explicit dimensions, descriptive Korean alt text, and no fabricated person, logo, result, or endorsement.
- Existing SEO/GEO/AEO, static export, canonical URLs, and `/tennis_friends` GitHub Pages paths remain valid.

### Non-Goals

- No bulk image generation for 1,000+ posts, no invented photography claims, no paid image API, no article-body bulk rewrite, and no Vercel or external-account mutation.

### Done Conditions

- Focused ad-removal and blog-rendering audits, lint, typecheck, full `npm run verify`, exact static export, and representative runtime/static HTML checks pass.
- Harness and `PROJECT_STATE.md` record changed files, evidence, remaining production/GA4 boundaries, and the selective image rollout rule.

### User-Visible Result

The site is ad-free and cafe-first; affected blog guidance is readable, and the pilot article uses a credible, performant visual rather than decorative or misleading stock-like filler.

## Completed Naver Cafe Conversion Goal (2026-08-27)

### Final Deliverable

Make `https://cafe.naver.com/homecookie` the site's primary measurable destination through a consistent, accessible, truthful CTA system.

### User Value

Visitors can consume the article, player, or utility value they came for and then find the official TennisFriends Naver Cafe without searching for a hidden image banner.

### Required Features

- Primary event `naver_cafe_visit` with location, text, destination, and page-path properties.
- Cafe CTA in the home hero, desktop header, mobile menu/navigation, footer, and one sitewide end-of-content section.
- Safe new-tab behavior and accessible destination labels.
- No unverified ranking, membership, benefit, testimonial, or urgency claim.
- No duplicate page-level banners and no sitewide promotional banner on admin/privacy/terms routes; persistent navigation links remain available.

### Non-Goals

- No forced redirect, modal, form, Naver account automation, GA4 admin mutation, deployment, or invented downstream conversion claim.

### Done Conditions

- Source audit, lint, typecheck, full verify, exact GitHub Pages export, and generated HTML checks pass.
- The funnel blueprint, harness evidence, and project state define the event denominator and unverified boundaries.

### User-Visible Result

The site clearly presents the Naver Cafe as the primary next step while keeping public content and tools usable without a gate.

## Completed SEO, GEO, and AEO Goal (2026-08-27)

Improve TennisFriends search and AI-answer readiness without bulk rewriting content: close static-export indexability gaps, align sitemap and AI discovery inventories, make entity markup consistent, and add an extractable homepage answer supported by internal links.

Done conditions: result/state and internal-renderer routes are `noindex, follow`; normal articles remain indexable with one breadcrumb graph; schema entities use stable IDs and truthful organizational authorship; sitemap and AI index agree on 1,133 indexable blogs; crawler policy is aligned; audits, lint, typecheck, build, and generated-HTML checks pass.

Non-goals: no bulk article rewrite, invented author identity, unverified `sameAs`, ranking promise, deployment, or Vercel mutation.

## Historical Measurement and Product Improvement Goal (superseded 2026-08-27)

Improve TennisFriends as a public, no-login tennis content and utility site by restoring trustworthy GA4/GSC measurement on GitHub Pages, applying only necessary GA4/GTM/GSC console settings, reducing the oversized blog index payload, repairing the NTRP advertising/statistics experience, and removing avoidable cache and motion risks.

### Historical Done Conditions

- The GitHub Pages production artifact loads the intended GA4 measurement configuration and key page/tool events can be verified without relying on Vercel-specific environment detection.
- Current GA4, GSC, and GTM console state is inspected through an authenticated browser where available; only necessary, evidence-backed settings are changed and each mutation is recorded.
- `/blog` no longer serializes the complete published-post catalog into the initial page and provides crawlable, shareable page navigation compatible with static export.
- The NTRP result advertisement has a valid AdSense loader path, and statistics/leaderboard UI does not present disconnected or sample data as live user data.
- Global cache cleanup does not unregister unrelated service workers or delete every origin cache on ordinary visits.
- Infinite and entrance motion respects `prefers-reduced-motion`.
- Focused tests, lint, typecheck, runtime build, exact GitHub Pages static export, and generated-artifact audits pass.
- Harness evidence and `PROJECT_STATE.md` distinguish local proof, console proof, GitHub push, and hosting deployment state.

### Active Non-Goals

- No login, account, Supabase migration, or user database is introduced.
- No Vercel project, deployment, domain, alias, or environment setting is changed.
- No speculative content expansion or bulk editorial rewrite.
- GTM is not added unless current console/code evidence shows a concrete need beyond direct GA4.

---

## Active Improvement Goal (2026-08-26)

Resolve the locally verifiable high- and medium-priority findings from the repository review: remove false client-side authentication, gate automated generated content before push, update vulnerable dependencies, make routing/static-host behavior explicit, correct blog and AI-index coverage, repair source encoding, isolate external-data audits, and prevent operational artifacts from being committed.

### Active Done Conditions

- No password or credential-like value is shipped through `NEXT_PUBLIC_ADMIN_PASSWORD`.
- Automated generated-content workflows cannot push unvalidated HTML/TSX.
- Production dependency audit has no known high-severity finding that can be fixed compatibly.
- Custom blog pages are not silently replaced by an empty shared renderer.
- AI index article coverage matches the published/indexable dataset and generated outputs are deterministic when inputs are unchanged.
- All known Unicode replacement characters in scanned source are repaired.
- Default code verification does not require fresh private analytics exports; operational freshness remains available as a separate check.
- `.omx` operational artifacts are ignored and removed from the Git index without deleting local copies.
- lint, typecheck, focused audits, production build, and regression checks pass or exact residual constraints are documented.

### Non-Goals

- No production deployment, Vercel mutation, external submission, credential use, database migration, or Git push.
- No Git-history rewrite; historical `.omx` removal requires separate explicit authorization.
- No bulk editorial rewrite beyond repairing confirmed corrupted characters.

---

## Current Review Goal (2026-08-26)

Download `lsk7209/tennis_friends` into the local workspace and produce an evidence-backed repository review covering installability, build quality, architecture, security, operations, and material follow-up priorities without deploying or changing product behavior.

## Current Done Conditions

- Local checkout is clean and matches the fetched `origin/main` commit.
- Dependencies install from the lockfile.
- Project-native lint, typecheck, audit/verification, and build checks are run where practical.
- Review findings cite exact files/lines and distinguish confirmed defects from residual risks.
- `PROJECT_STATE.md` and harness evidence record the downloaded state and next actions.

## Prior Goal (2026-07-14)

TennisFrens player-page CTR and AdSense readiness improvement based on fresh direct GSC evidence

## User Value

Search users reach one stable canonical player URL, and future builds do not reintroduce a conflicting host into metadata or generated discovery assets.

## Required Features

- Verify current GSC opportunity data directly, without relying on a stale dashboard snapshot.
- Keep the Alexaandra Eala player page's proven query match intact; do not make an ungrounded title rewrite.
- Align the source default canonical host with the live Vercel canonical host.
- Remove the obsolete Cloudflare redirect artifact that declares the opposite host policy.
- Audit AdSense installation, ads.txt, crawl access, and trust pages; record remaining editorial risks separately.

## Non-Goals

- No claim that a ranking, CTR, or AdSense approval will change immediately.
- No article-body rewrites, ad placement changes, bulk content generation, or production data changes.
- No direct Cloudflare deployment or service configuration.

## Done Conditions

- Fresh direct GSC data and live URL checks identify the target and baseline.
- Source default URL and checked generated URL assets use the live canonical host.
- The obsolete Cloudflare redirect rule is removed.
- Lint, typecheck, relevant SEO audits, and production build pass.
- A Vercel preview or Git-connected deployment is smoke-tested before reporting.

## User-Visible Result

TennisFrens consistently presents `https://tennisfrens.com` as the canonical host while preserving the high-impression player page's query relevance.
