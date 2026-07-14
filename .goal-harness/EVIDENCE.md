# EVIDENCE

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
| Production player smoke | PASS | Alexandra Eala player page: 200, self-canonical `https://tennisfrens.com/players/alexandra-eala`, and AdSense markup present. |
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
