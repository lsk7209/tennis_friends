# Runbook

Canonical-host checks:

```powershell
npm run audit:url-consistency
npm run audit:redirect-config
npm run audit:redirects
npm run audit:metadata-coverage
```

For a code change, also run `npm run lint`, `npm run type-check`, and `npm run build`. Use a Git-connected Vercel preview before merging to the default branch.
