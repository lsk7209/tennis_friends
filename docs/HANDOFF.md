# Handoff

Branch: `codex/tennisfrens-ctr-20260714`.

Completed: source canonical URLs and generated discovery assets use `https://tennisfrens.com`; www redirects are configured to the same host.

Historical 2026-07 baseline, superseded by the 2026-08-27 cafe-first ad-free decision: PR #6 merged as `3e52b0c`; its live player, www redirect, former `ads.txt`, robots.txt, and sitemap.xml checks passed at that time.

Next: revisit the direct GSC player-page query cohort after 2–4 weeks; do not rewrite the exact-match Alexandra Eala title without new CTR evidence.

Validation: see `.goal-harness/EVIDENCE.md`.

Follow-up completed: PR #11 merged as `5300c3a`; Vercel production deployment `dpl_DE41hKP8WqtZtKX9C4RueAyv3dQs` is Ready. AI discovery has 546 pages/260 player profiles and zero redirect-only `-legacy` URLs; canonical Marta Kostyuk is 200 and its legacy URL is a 308 redirect.

Follow-up in progress: `codex/tennisfrens-ai-index-20260714` removes redirect-only `-legacy` player URLs from AI discovery artifacts only. It preserves canonical player pages and live redirects; local artifact, sitemap, lint, and type checks pass. Await Vercel preview build and public smoke verification.
