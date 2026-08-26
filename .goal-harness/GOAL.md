# GOAL

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
