# GOAL

## Final Deliverable

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
