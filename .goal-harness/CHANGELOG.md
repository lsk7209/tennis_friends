# CHANGELOG

## Changed Files

| File | Change | Reason |
|---|---|---|
| `.goal-harness/*` | Added 2026-08-26 review goal, plan, status, checks, and acceptance criteria. | Preserve durable review state while retaining prior SEO work evidence. |
| `PROJECT_STATE.md` | Added current checkout/review handoff. | Provide repository-level continuity for this review. |
| Security/admin/workflows | Removed client password, gated generated HTML, stopped scheduled auto-push, and made patches review-only. | Eliminate false authentication and automated unreviewed content publication. |
| Routing/index/player data | Preserved custom routes, loaded canonical blog inventory, expanded legacy redirects, and regenerated discovery assets. | Prevent empty articles and incomplete/stale indexes. |
| Dependencies/content/audits | Updated patched dependencies, repaired encoding, separated operational audits, and added runtime/static gates. | Restore deterministic local verification with security coverage. |
| `.gitignore` and `.omx` index | Ignored `.omx` and removed 52 paths from the Git index while keeping local files. | Prevent future publication of operational artifacts. |
