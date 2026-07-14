# Status

Current goal: align TennisFrens source URL policy with the live Vercel non-www canonical host.

State: production deployment completed and live smoke checks passed on 2026-07-14.

Evidence: URL consistency, redirect configuration, live redirect, metadata coverage, lint, and TypeScript checks passed on 2026-07-14.

Scope: canonical URLs and redirect policy only; no editorial content, ads, production data, or secrets changed.

Production evidence: player page returned 200 with a self-canonical non-www URL and AdSense markup; www returned 307 to the non-www page; ads.txt, robots.txt, and sitemap.xml returned 200 with the expected canonical host references.

Follow-up state: canonical-only AI discovery artifact repair is in verification. Scope excludes routing, editorial content, ads, production data, and secrets.

Completion: PR #11 merged and Vercel production deployment is Ready. Public AI index has zero redirect-only player URLs; canonical player behavior remains intact.
