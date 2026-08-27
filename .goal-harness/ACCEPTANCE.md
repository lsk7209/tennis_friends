# ACCEPTANCE

## Naver Cafe Conversion Criteria (2026-08-27)

| Criteria | Status | Evidence |
|---|---|---|
| The approved Naver Cafe URL is the primary homepage CTA. | PASS | Static output and Playwright home smoke show the exact cafe URL as the hero's primary action. |
| Desktop and mobile visitors can reach the cafe from persistent navigation. | PASS | Header, mobile menu/bottom navigation, and footer source audit; home runtime reports five cafe links. |
| Every eligible public page has one sitewide end-of-content CTA. | PASS | Root layout owns one banner; Playwright reports one on home and zero on the excluded privacy route, including GitHub Pages base-path behavior. |
| Each cafe click uses `naver_cafe_visit` with the agreed properties. | PASS | Source audit and typecheck. |
| External links use safe new-tab attributes and accessible labels. | PASS | Static HTML inspection reports every sampled cafe link with `_blank` and `noopener noreferrer`; Playwright exposes the destination label. |
| Unsupported “No.1” creative is not rendered. | PASS | Exact static-export audit and five-page HTML inspection find no legacy banner image. |
| Existing SEO, utilities, content, analytics, and build behavior do not regress. | PASS | Final `npm run verify` and `npm run audit:static-export` pass across 3,076 pages. |

## SEO, GEO, and AEO Criteria (2026-08-27)

| Criteria | Status | Evidence |
|---|---|---|
| Interactive result/state routes are excluded from indexing. | PASS | 24-route audit and representative generated HTML. |
| Internal `/blog-render/*` duplicates are non-indexable. | PASS | Page metadata override outputs `noindex, follow`. |
| Public articles remain indexable with one breadcrumb graph. | PASS | Representative output has `index, follow` and one BreadcrumbList script. |
| AI index and sitemap use the same blog inventory. | PASS | Both report 1,133 indexable blogs. |
| Entity markup is coherent and does not invent a person author. | PASS | Stable entity IDs and Organization authorship compile into output. |
| Homepage provides a server-rendered answer-first block. | PASS | Generated homepage contains the heading and `article-summary`. |
| Full repository verification succeeds. | PASS | Full verify, follow-up typecheck/build, and diff check passed. |

## Measurement And Product Improvement Criteria (2026-08-27)

| Criteria | Status | Evidence |
|---|---|---|
| GitHub Pages output loads direct GA4 without Vercel-only detection. | PASS | Workflow environment, root layout, and repository-path static-export audit assert `G-W1K51D8SBX`. |
| Current GA4/GSC/GTM state is inspected and unrelated GTM state is preserved. | PASS | Authenticated console evidence recorded; GTM container belongs to another domain and was not changed. |
| Blog index is static, paginated, crawlable, and materially smaller. | PASS | 95 static pages; public page 2 browser smoke passed; exported HTML reduced from about 874 KB to 111 KB. |
| NTRP copied result URLs do not create false completions or shared statistics. | PASS | Unique same-session token contract and focused audit pass; UI labels records as local-only. |
| AdSense loader is mounted once and the NTRP result slot renders. | PASS | Source audit and browser DOM smoke report one visible slot. |
| Ordinary visits do not clear all caches or unregister service workers. | PASS | Global cache reset component and mount removed. |
| Reduced-motion preference is honored. | PASS | Root `MotionConfig`, CSS, counter, and ticker handling compile and pass focused review. |
| Full verification and exact static export pass. | PASS | `npm run verify` and `npm run audit:static-export` passed with 3,076 pages. |

---

## Active Improvement Criteria (2026-08-26)

| Criteria | Status | Evidence |
|---|---|---|
| Browser bundles contain no admin password comparison or public password environment variable. | PASS | Focused `rg` audit returned no references. |
| Generated content must pass a strict local validation gate before workflow commit/push. | PASS | Allowlist validator and workflow safety audit pass; workflows are manual/read-only and upload review patches. |
| Custom blog routes preserve their intended content under the active runtime contract. | PASS | Proxy rewrite removed; article audit and exported custom-page body assertion pass. |
| AI index includes the published/indexable blog inventory. | PASS | Search-artifact audit passes with 971 articles and deterministic hashes. |
| Source encoding audit reports zero findings. | PASS | 77 replacement characters repaired; both encoding audits pass. |
| Default code verification is independent of private analytics freshness. | PASS | `npm run verify` passes; analytics freshness remains under `audit:analytics`. |
| Operational artifacts are no longer tracked for future commits while local files are preserved. | PASS | `git ls-files .omx` returns zero; local report file still exists. |
| Lint, typecheck, build, and applicable security audit pass. | PASS | Full verify, runtime build, static-export audit, and production dependency audit pass. |

---

## Current Review Criteria (2026-08-26)

| Criteria | Status | Evidence |
|---|---|---|
| Repository is downloaded into `D:\web\tennisfrenscom` and checkout identity is recorded. | PASS | `main`, `origin`, and commit captured in current evidence. |
| Lockfile-based dependency installation completes. | PASS | `npm ci` installed 633 packages. |
| Static checks and production build complete or exact failures are recorded. | PASS | lint, typecheck, and build passed; audit failures are recorded in `EVIDENCE.md`. |
| Review findings are prioritized and cite exact source locations. | PASS | Consolidated review cites source and workflow locations. |
| No deployment or external write operation occurs. | PASS | Review boundary recorded in status. |

---

## Feature Criteria

| Criteria | Status | Evidence |
|---|---|---|
| Source-generated canonical URLs match the live non-www host. | PASS | `npm run audit:url-consistency` passed. |
| Redirect configuration has no host-policy contradiction. | PASS | `npm run audit:redirect-config` passed. |

## User Flow Criteria

| Criteria | Status | Evidence |
|---|---|---|
| Existing www visitors reach the non-www canonical pages. | PASS | Live redirect audit passed all five cases. |

## Stability And Error Handling

- PASS: lint and TypeScript checks passed.
- PASS: static, utility, and player metadata coverage audit passed.

## Documentation Criteria

- PASS: Harness evidence and project handoff documents record the decision and validation state.

## Final Report Requirements

- implementation summary
- changed files
- validation level
- commands run
- acceptance status
- known limitations
- how to run
