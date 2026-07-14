# Handoff

Branch: `codex/tennisfrens-ctr-20260714`.

Completed: source canonical URLs and generated discovery assets use `https://tennisfrens.com`; www redirects are configured to the same host.

Completed: PR #6 merged as `3e52b0c`; Vercel production deployment `dpl_5sXXZWtYAAYxycP9S3f34LnoXpVJ` is Ready. Live player, www redirect, ads.txt, robots.txt, and sitemap.xml checks passed.

Next: revisit the direct GSC player-page query cohort after 2–4 weeks; do not rewrite the exact-match Alexandra Eala title without new CTR evidence.

Validation: see `.goal-harness/EVIDENCE.md`.

Follow-up in progress: `codex/tennisfrens-ai-index-20260714` removes redirect-only `-legacy` player URLs from AI discovery artifacts only. It preserves canonical player pages and live redirects; local artifact, sitemap, lint, and type checks pass. Await Vercel preview build and public smoke verification.
