# CHANGELOG

## Changed Files

| File | Change | Reason |
|---|---|---|
| `scripts/generate-ai-index.js` | Filter player slugs ending in `-legacy`. | Do not recommend redirect-only pages. |
| `scripts/audit-search-artifacts.mjs` | Apply identical legacy-slug exclusion to expected player URLs. | Keep regression audit aligned with generated output. |
| `public/ai-index.json`, `public/llms*.txt` | Regenerated canonical-only discovery artifacts. | Publish accurate player count/URLs. |
