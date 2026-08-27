# EVIDENCE

## 2026-08-28 Remaining Search Inventory And Measurement Evidence

- Read-only inventory review proved that the 54 physical blog routes missing from the sitemap are exactly low-quality-gated slugs, so they were not added to discovery feeds.
- Added route-level `NoIndexLayout` coverage for all 54 and changed 23 conflicting page metadata declarations from `index: true` to `index: false`.
- `audit:sitemap-coverage`: PASS with 1,465 entries, 1,133 indexable blogs, 182 physical blogs, 54 physical noindex blogs, 63 utilities, and 260 players; it also proves no sitemap/AI-index leakage or explicit page override.
- Added delegated utility-entry measurement (`tool_started`) and stable query/result deduplication for `search_performed`; `audit:cafe-funnel` and typecheck pass.
- Exact `npm run audit:static-export`: PASS after generating 3,076 pages; every one of the 54 physical low-quality outputs contains `noindex, follow`. The first pre-repair attempt generated all pages but hit a transient Windows `EBUSY` unlink; the final run completed cleanly.
- `git diff --check`: PASS with line-ending notices only.
- No commit, Git push, deployment, Vercel command, GA4/GSC admin mutation, or search-engine submission occurred.

## 2026-08-27 Search Acquisition And Conversion Optimization

- `npm run audit:url-consistency`, `audit:search-artifacts`, `audit:sitemap-coverage`, `audit:metadata-coverage`, `audit:schema-coverage`, `audit:indexability-boundaries`, `audit:player-search-seo`, `audit:cafe-funnel`, `audit:performance-config`, and `audit:internal-links`: PASS.
- `npm run lint`: PASS; only expected Babel large-file styling notes.
- `npm run type-check`: PASS.
- `npm run build`: PASS, 3,076 pages. Several late routes exceeded the first 180-second worker attempt and passed on retry.
- `npm run audit:static-export`: build/export generated 3,076 pages. The new output assertion initially false-failed because it matched `User-agent` case-sensitively; generated robots output was correct. The assertion was repaired to normalize case.
- `node scripts/audit-static-export.mjs --output-only`: PASS against the completed exact `/tennis_friends` export, including contextual Cafe CTA presence, excluded-route absence, admin/quiz state `noindex, follow`, AI private-path disallows, GA4/base-path/image/table/ad-free contracts.
- Public observation on 2026-08-27: `https://tennisfrens.com/` still exposed the earlier advertising/affiliate footer state. This is production drift, not local verification; no push or deployment occurred.
- Validation level: Level 4 (production/static build plus representative generated-output smoke assertions).

## 2026-08-27 Cafe-First Ad-Free Content Evidence

- Product decision: the site is a public tennis-content funnel whose primary measurable destination is `https://cafe.naver.com/homecookie`; advertising revenue is no longer part of the active product contract.
- Cost-first routing: two non-overlapping Luna/max read-only lanes audited advertising removal and table/image behavior; the primary agent owned all mutations, integration, browser proof, and final verification.

| Check | Result | Evidence |
|---|---|---|
| Active advertising removal | PASS | AdSense loader/slots/metadata, affiliate banner, advertising-only rewrite/CSP entries, related audits, and `public/ads.txt` were removed. `audit:ad-free` passes in source and generated output modes. |
| Measurement preservation | PASS | Direct GA4 `G-W1K51D8SBX`, the tracked cafe link component, and `naver_cafe_visit` with its required properties remain; cafe-funnel audit and typecheck pass. |
| Raw table repair | PASS | The shared normalizer converts all 29 known pipe tables; the representative wall-practice article converts 4/4 into captioned responsive tables with scoped headers. Generated HTML/runtime contain no raw separator. |
| Image pilot | PASS | `public/images/blog/20-minute-wall-practice.webp` is a locally stored 1600x900 WebP at 77,910 bytes with explicit dimensions, descriptive Korean alt/caption, schema/social reuse, and GitHub Pages-aware asset paths. |
| Full regression | PASS | `npm run verify` passes with zero production vulnerabilities and 3,076 generated pages. |
| Exact static export | PASS after retry | `npm run audit:static-export` passes with 3,076 pages and verifies no `ads.txt`, semantic table output, cafe CTA, and `/tennis_friends` image resolution. The first attempt hit a transient Windows `EBUSY` lock; an unchanged retry completed. |
| Responsive browser smoke | PASS | At 390x844: document width 382, four tables, no raw separator, hero loaded, four cafe links, and zero console errors/warnings. Desktop hero and table inspection also passed. |
| Independent review | PASS after repair | No BLOCKER/HIGH. One MEDIUM legacy design-audit dependency was changed from the deleted advertising report to the ad-free report; `npm run audit:site-content-design-review` then passed. Intermediate static-server 404 logs were superseded by the final zero-error browser run, and local Playwright artifacts are ignored. |

Selective image rule: add a local optimized visual only where it materially clarifies the article, keep the scene truthful and anonymous, require descriptive alt text and explicit dimensions, and validate both root-hosted and `/tennis_friends` output before expanding beyond the pilot.

No commit, Git push, deployment, Vercel mutation, GA4 admin mutation, Naver account action, or other external write occurred in this workstream.

## 2026-08-27 Naver Cafe Primary-Conversion Evidence

- Goal: make `https://cafe.naver.com/homecookie` the site's primary measurable destination without gating public content.
- Cost-first routing: two Luna/max read-only agents independently audited CTA coverage/funnel structure and analytics/event integrity; the primary agent owned all edits, integration, and verification. No high-risk finding required Sol escalation.
- Implemented locations: `home_hero`, `desktop_header`, `mobile_menu`, `mobile_bottom_nav`, `footer_links`, and `sitewide_bottom`.
- Event contract: `naver_cafe_visit` with `cta_location`, `link_text`, `destination_url`, and `page_path`.
- `npm run audit:cafe-funnel`: PASS with the exact destination and six tracked locations.
- `npm run lint`: PASS with no ESLint findings; Babel only noted four existing source modules above 500 KB.
- `npm run type-check`: PASS.
- Final `npm run verify`: PASS, including zero production vulnerabilities, all SEO/content/performance audits, lint, typecheck, and a 3,076-page production build.
- Final `npm run audit:static-export`: PASS in the exact GitHub Pages base-path environment with 3,076 pages.
- Static HTML sample: home has four and NTRP result has three safe cafe anchors before hydration; every sampled anchor uses `_blank` and `noopener noreferrer`; the old banner image is absent. Admin/privacy/terms output contains no sitewide cafe-banner heading.
- Historical Playwright runtime smoke at `/tennis_friends/`: one hydrated sitewide banner and five cafe links; its former affiliate-order assertion is superseded by the ad-free verification above.
- Playwright runtime smoke at `/tennis_friends/privacy/`: zero sitewide banners and three persistent navigation/footer cafe links. The smoke exposed and verified the repair for base-path-prefixed `usePathname()` values.
- Final Luna/max read-only review found no code BLOCKER/HIGH issue; it retained post-release GA4 receipt/key-event confirmation as a non-blocking external follow-up.
- The earlier temporary static-mount icon error was eliminated in the final browser harness; the current representative smoke has zero console errors or warnings.
- No deployment, Git push, GA4 admin mutation, Naver account action, Vercel command, or other external write occurred.

Known measurement boundary: this site can prove outbound cafe intent after release. Cafe joins, member quality, and downstream activity require separate Naver Cafe evidence, and GA4 key-event marking remains an explicit external-admin action.

## 2026-08-27 SEO, GEO, and AEO Evidence

- Two Luna/max read-only agents reviewed technical SEO and GEO/AEO; the primary agent owned edits and verification.
- `npm run verify`: PASS, including zero production vulnerabilities, canonical/redirect/search, 1,465-entry sitemap, metadata/schema, 24-route indexability, content/link/performance, lint, typecheck, and 3,076-page build.
- Follow-up indexability audit, typecheck, and build passed after the blog-render metadata override.
- Generated HTML: NTRP result, string-tension test, and blog-render sample are `noindex, follow`; the public article is `index, follow`; each blog sample has one BreadcrumbList script; homepage contains the answer block.
- AI index: 1,467 entries with 1,133 articles, 64 tools, 260 players, and one document.
- No external service, deployment, Vercel setting, or Git remote was changed.

## 2026-08-27 Measurement And Product Improvement Evidence

### Post-push hosting discovery

- Remote `main` matched local commit `cfcc8214bdc01f15da1a3b4a44e1f62fe446b8b3`.
- GitHub Pages deployment, SEO Safeguard, and Hosting Cost Guard all completed successfully for that SHA.
- `https://tennisfrens.com/blog/page/2/` returned a Vercel `308` to `/blog/page/2`, then `404`; the custom domain is not currently served by GitHub Pages.
- `https://lsk7209.github.io/tennis_friends/blog/page/2/` returned GitHub Pages `200`, but the root-based artifact contract did not match the repository-path host.
- Repair decision: preserve root paths for Vercel production while restoring `/tennis_friends` base and asset paths only in the GitHub Pages workflow.
- Corrected `npm run audit:static-export` passed with 3,076 pages and explicit repository-path asset/navigation assertions.
- After Vercel's Git integration finished, public `/blog/page/2` rendered `테니스 블로그 2페이지`, pagination through page 95, and exactly one GA4 loader.
- Public NTRP result smoke rendered exactly one visible `4809500982` ad slot and one GA4 loader.

### Authenticated console inspection

- GA4 property `tennisfrens.com` (`534356101`), web stream `14422139724`, measurement ID `G-W1K51D8SBX`; recent data and enhanced measurement are active.
- GSC domain property `sc-domain:tennisfrens.com`; canonical and Naver sitemaps are successful with 1,473 discovered pages.
- GA4-GSC linking already targets the same domain and stream.
- GTM container `GTM-WJ3L5263` is for `lim01.soonsaak.co.kr`; no GTM mutation or TennisFriends installation was performed.

### Code and output verification

| Check | Result | Evidence |
|---|---|---|
| `npm run verify` | PASS | Lint, typecheck, focused audits, dependency audit, and production build; 3,076 pages. |
| `npm run audit:static-export` | PASS | GA loader, `/blog/page/2`, custom-domain root URLs, and absence of `/tennis_friends/` leakage asserted. |
| Blog payload | PASS | Exported `/blog` HTML reduced from 874,419 bytes to about 110,962 bytes. |
| Historical NTRP result/advertising audit | SUPERSEDED | Earlier baseline passed; advertising was intentionally removed on 2026-08-27. |
| Historical browser smoke | SUPERSEDED | `/blog/page/2/` loaded at that baseline; the former NTRP ad slot was intentionally removed by the cafe-first work. |
| Independent review | PASS after repair | Reliability and test reviewers' completion-token, base-path, audit-coverage, documentation, and reduced-motion findings were repaired and revalidated. |

No Vercel command or mutation was performed. Console work was inspection-only because GA4/GSC were already correctly configured and the available GTM container was unrelated.

---

## Risk Notice - 2026-08-26 Improvements

Task: Repair confirmed repository security, routing, indexing, dependency, encoding, and validation issues.

Why Needed: Current code exposes a client-side password, permits unvalidated generated content to auto-push, contains actionable dependency advisories, and has deployment-dependent content behavior.

Impact Scope: Local source, lockfile, CI workflow definitions, generated-index logic, audit scripts, Git index hygiene, and review documentation.

Rollback: Revert the eventual implementation commit or restore individual files from commit `3f2b474`; `.omx` local files will not be deleted.

Safer Alternative: Report findings without repair; rejected because the user explicitly authorized improvements.

Approval Needed: No live/external mutation is authorized. Deployment, push, history rewrite, credential use, and database changes remain excluded.

---

## 2026-08-26 Improvement Validation

| Command | Result | Notes |
|---|---|---|
| `npm run verify` | PASS | Deterministic audits, lint, typecheck, and Next.js runtime build; 2,982 static pages. |
| `npm run audit:static-export` | PASS | Exact GitHub Pages environment; 2,982 pages and representative custom/dynamic/player/sitemap outputs asserted. |
| `npm run audit:dependencies:production` | PASS | Zero production vulnerabilities. |
| `npm run audit:generated-html-safety` | PASS | Unsafe tags, attributes, executable markers, template interpolation, fences, and unbalanced markup rejected; workflows cannot schedule or push. |
| `npm run audit:source-encoding` | PASS | 690 files scanned, zero findings after 77 replacement-character repairs. |
| `npm run audit:search-artifacts` | PASS | 1,305 pages, 64 tools, 971 articles, 260 players, one document. |
| deterministic SHA-256 comparison | PASS | AI index and llms artifacts unchanged across identical consecutive generation. |
| custom static export assertion | PASS | `tennis-western-grip-advantages` export contains its intended custom article body. |
| `.omx` index/local check | PASS | Zero tracked paths; local operational files preserved. |
| `git diff --check` | PASS | No whitespace errors; CRLF conversion notices only. |

Review disposition:

- Test-review HIGH findings for static-export proof and dependency gate were fixed and rerun.
- Reliability MEDIUM partial-refresh finding was fixed with pre-write replacement assertions.
- Accepted residual: patched Sharp/PostCSS overrides exceed Next's declared dependency ranges; both runtime and static-export builds pass, but platform-specific monitoring remains prudent.
- Deferred by safety boundary: public Git-history purge/credential rotation and live Supabase RLS changes require separate authorization and external-state handling.

---

## 2026-08-26 Repository Download And Review

Validation level: 3 (production build passed; no live smoke test requested or performed).

| Command | Result | Notes |
|---|---|---|
| `git clone https://github.com/lsk7209/tennis_friends .` | PASS | Downloaded into `D:\web\tennisfrenscom`. |
| `git rev-parse HEAD` / `git ls-remote origin refs/heads/main` | PASS | Both resolve to `3f2b4747b0dbd3e9ada012334646ba343615ed8a`. |
| `npm ci` | PASS | 633 packages installed from lockfile. |
| `npm run lint` | PASS | No ESLint findings; Babel reported four source modules above 500 KB. |
| `npm run type-check` | PASS | TypeScript completed without errors. |
| `npm run build` | PASS | Next.js 16.2.7 compiled and generated 2,990 static pages. |
| `npm audit --json` | FAIL | 9 advisories: 6 high, 2 moderate, 1 low; direct Next.js dependency is below patched 16.2.11. |
| `npm run verify` | FAIL | Stopped at analytics audit because bundled GSC/GA4 reports are 87.5-89.5 days stale and the redirect assertion contradicts current config syntax. |
| `npm run audit:source-encoding` | FAIL | Seven source pages contain Unicode replacement characters. |
| `npm run audit:active-content-encoding` | PASS | 51 active files, zero findings. |
| `npm run audit:generated-content-quality` | FAIL | Five expected external `out/article-writer` manifests/reports are absent from the checkout. |
| `npm run audit:ads-analytics:source` | FAIL | Audit expects local env slot values/providers; source has hard-coded slot fallbacks, so this is environment-sensitive. |

No deployment, push, external submission, or application-code modification was performed. Audit-generated report and public-index changes were restored after validation.

### Prioritized Review Findings

1. HIGH: `NEXT_PUBLIC_ADMIN_PASSWORD` is bundled and compared in the client (`src/lib/admin/constants.ts:7`, `src/app/admin/page.tsx:1,29-33`); it is not server-side authentication.
2. HIGH: Gemini-generated HTML/TSX is written and automatically pushed without a strict sanitizer/allowlist (`scripts/auto-content.js:544-615,681-727`, `.github/workflows/auto-content.yml:18-35,48-59`).
3. HIGH: production dependency audit reports Next.js, Sharp, Nanoid, and DOMPurify advisories; the direct Next.js version is `16.2.7` (`package.json:85`).
4. HIGH: the GitHub Pages static-export workflow conflicts with runtime rewrites, redirects, headers, and proxy expectations (`next.config.ts:4-30,72-145`, `.github/workflows/deploy.yml:34-55`).
5. HIGH: the blog proxy rewrites known slugs to the shared renderer, but some custom static pages have no `blogContentMap` entry, creating deployment-dependent empty-body risk (`src/proxy.ts:28-41`, `src/app/blog/[slug]/page.tsx:172-181,367-397`).
6. HIGH/MEDIUM: `.omx` tracks operational and OAuth-flow artifacts; no access/refresh token was observed, but repository history and credential exposure should be audited.
7. MEDIUM: AI index generation reads an import-heavy source through a fallback that misses most published posts; current evidence shows 212 indexed articles versus 1,133 published/indexable posts (`scripts/generate-ai-index.js:22-103,306-375`).
8. MEDIUM: seven source pages contain Unicode replacement characters, proven by the repository encoding audit.

---

## Validation Level

Level: 2

## Commands Run

| Command | Result | Notes |
|---|---|---|
| harness-init.py | PASS | size=medium, domain=web, created=2026-07-14T10:50:08+09:00 |
| npm run audit:url-consistency | PASS | Canonical host is `https://tennisfrens.com` across `src`, `scripts`, and `public`. |
| npm run audit:redirect-config | PASS | Next.js and legacy redirect artifact agree on www-to-non-www behavior. |
| npm run audit:redirects | PASS | Five live redirect cases returned the expected canonical targets. |
| npm run audit:metadata-coverage | PASS | 10 static, 63 utility, and 59 player-static routes covered. |
| npm run lint | PASS | ESLint completed without findings. |
| npm run type-check | PASS | TypeScript completed without errors. |
| Vercel preview build | PASS | Preview `dpl_3pjLT2MrjUcoaiidwSBWXqcNeUnt` is Ready after compilation, typecheck, and 1,528 static pages. |
| Preview HTTP smoke | CONSTRAINED | The Ready preview returns 302 to Vercel SSO for unauthenticated requests; external HTML inspection requires an authorized browser session. |
| Production deployment | PASS | Vercel deployment `dpl_5sXXZWtYAAYxycP9S3f34LnoXpVJ` is Ready and aliases `tennisfrens.com` and `www.tennisfrens.com`. |
| Historical production player smoke | SUPERSEDED | Earlier player-page canonical evidence remains useful; the former advertising markup is no longer part of the product. |
| Production host/discovery smoke | PASS | www player page: 307 to non-www; ads.txt, robots.txt, and sitemap.xml: 200 with expected canonical-host entries. |

## Test Results

| Test | Result | Notes |
|---|---|---|

## Failed Checks

## Fixes Applied

## Completion Evidence

- Source canonical defaults, metadata/schema URLs, RSS/sitemap discovery URLs, and generated AI-discovery assets now use the live Vercel non-www host.
- The legacy redirect artifact is retained only as compatibility configuration and now sends www to the same non-www canonical host used by Vercel.
- No editorial content, ad placement, production data, or credentials were changed.
- Branch `codex/tennisfrens-ctr-20260714` was pushed with commit `e115e70`; no production merge or production deployment was performed.
# Risk Notice

Task: Align TennisFrens source canonical-host defaults and remove an obsolete Cloudflare redirect artifact.

Why Needed: Live Vercel serves non-www canonicals while the source default and Cloudflare redirect file declare www as canonical. This can reintroduce mixed-host metadata in local/generated outputs.

Impact Scope: Metadata defaults and generated discovery assets; no production data, article text, ad placement, or credentials are changed.

Rollback: Revert the small Git commit or restore `public/_redirects` from Git history. If deployed, promote the prior Vercel deployment or revert normally.

Safer Alternative: Leave the mismatch in place and rely on the Vercel environment variable; rejected because local/generated assets can still emit the incorrect host.

Approval Needed: The user explicitly asked to proceed with the identified SEO and AdSense improvements. Deployment remains contingent on successful checks and Git-connected preview/live validation.

# Evidence

- Dashboard-wide `pnpm stats:update` attempted on 2026-07-14 but exceeded the 124-second external collection limit. No stale dashboard insight was used afterward.
- Direct read-only GSC collection succeeded for 2026-06-15 through 2026-07-13. `/players/alexandra-eala` / `알렉산드라 이알라`: 0 clicks, 1,311 impressions, 8.05 average position; www variant: 0 clicks, 638 impressions, 9.47 average position.
- Live `https://tennisfrens.com/players/alexandra-eala`: 200; title contains the exact Korean and English player names; canonical is `https://tennisfrens.com/players/alexandra-eala`.
- Live `https://www.tennisfrens.com/players/alexandra-eala`: 307 to the non-www host.
- Live `/ads.txt`: 200 and contains `google.com, pub-3050601904412736, DIRECT, f08c47fec0942fa0`.
- Live `/about`, `/contact`, `/privacy`, `/terms`: all 200.
- Source finding: `src/lib/site.ts` defaults to www and `public/_redirects` declares a non-www-to-www Cloudflare rule, opposite the live Vercel behavior.
