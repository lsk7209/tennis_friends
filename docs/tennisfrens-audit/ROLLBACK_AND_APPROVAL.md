# Rollback and approval manifest

- Prepared: 2026-09-15 KST
- Baseline commit: `408ddd081914241c99f8da8c9d6237f122db319d`
- Working tree: intentionally dirty; unrelated/user work must be preserved.
- Recoverable build backup: `E:\tennisfrens-build-backup-20260915-0647`

## Recovery

1. Capture `git status --short` and a patch of the intended files before any rollback.
2. Revert only the identified file or hunk with a reviewable inverse patch or `git revert` after a commit exists.
3. Never use `git reset --hard`, broad checkout, or deletion against this dirty worktree.
4. The external build backup may be copied back only after verifying its exact target and that no newer build output would be overwritten.
5. URL changes use `URL_CHANGE_DRY_RUN.json`; no redirect, deletion, canonical, or noindex mutation is authorized by this document.

## Operations requiring fresh explicit approval

| Operation | Current state | Required evidence before execution |
| --- | --- | --- |
| Git commit/push | Not authorized | Exact diff, branch, remote, and requested commit/push scope. |
| Deployment or hosting mutation | Not authorized | Approved target, deployment method, rollback identifier, and smoke checklist. |
| Set `NEXT_PUBLIC_ADS_CONSENT_READY=verified` | Not authorized | Certified CMP/account/site/region evidence and documented consent-mode behavior. |
| AdSense/GA4/GSC account mutation | Not authorized | Account identity, exact setting, and rollback or audit trail. |
| URL redirect/delete/noindex/canonical mutation | Not authorized | Approved rows from the dry-run manifest and information-loss review. |
| Live mail, database write, indexing notification | Not authorized | Exact target/payload and explicit current-task approval. |

## Preview and smoke boundary

Local build and static export are complete. Production acceptance requires an approved deployment followed by exact public checks for canonical/robots/sitemap/404, representative pages, consent behavior by region, analytics/ads request isolation, and rollback readiness. Until then TF-039 remains `BLOCKED_APPROVAL`.
