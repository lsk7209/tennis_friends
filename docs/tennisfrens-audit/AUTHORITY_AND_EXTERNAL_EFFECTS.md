# Authority and external-effect boundary

Measured: 2026-09-15 KST

| Action | Current authority | Enforcement / evidence |
|---|---|---|
| Read repository/public pages; run local checks | allowed | current task scope |
| Reversible local source/data edits | allowed | dirty worktree preserved; no destructive reset |
| GA4/AdSense loading in local, preview, E2E | disabled by default | `src/lib/external-effects.ts`, `audit:external-effects-isolation` |
| Contact test | mock/source inspection only | contact uses user-initiated `mailto:`; no automated send |
| Search notification scripts | dry-run only | `search:notify:dry`; live variants excluded from `verify` |
| Git push, preview/production deploy | not authorized | deliberately not run |
| URL delete/redirect/noindex bulk change | not authorized | planning manifest only |
| Account changes, live mail, payment, booking, ad click | not authorized | deliberately not run |

Secret review: source audits inspect variable names and control flow only. Environment values are neither printed nor copied into reports. Production analytics/advertising requires both production mode and an explicit public authorization flag. `verify` contains no live search notification, deployment, mail, booking, payment, or account mutation.

Potentially mutating scripts (`submit-indexnow.js`, `submit-gsc-sitemap.js`, live `notify-search-engines.js`, deployment commands) remain outside the default verification chain. Their presence is not approval to execute them.
