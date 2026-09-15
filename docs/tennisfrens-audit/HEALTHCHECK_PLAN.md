# Healthcheck plan

- State: `DISABLED`
- Owner: repository maintainer
- Schedule: none; no cron, workflow schedule, deployment hook, or account notification was enabled.

## Manual checks

Run from `E:\web\tennisfrens` after dependency installation:

```powershell
npm run preverify
npm run type-check
npm run lint
npm run build
npm run audit:static-export
```

After an explicitly approved deployment, additionally verify the canonical homepage, one blog article, one utility flow, one player page, contact mailto, 404, robots.txt, sitemap.xml, ads.txt, regional consent behavior, and that analytics/advertising requests occur only under the approved flags and consent state.

## Alert conditions and response

| Condition | Response |
| --- | --- |
| Any deterministic audit/typecheck/build failure | Stop release, preserve logs, repair locally, rerun the smallest failing check and then the full release sequence. |
| Page count or sitemap denominator changes unexpectedly | Compare inventory/publication gates before accepting the new count. |
| Ad loader appears without verified consent readiness | Treat as release blocker; unset the consent-ready flag and investigate. |
| Duplicate title, unsafe generated HTML, broken internal target, or invalid utility result | Block publication/release and repair the source or generator boundary. |
| Production HTTP/consent/analytics differs from local contract | Roll back the approved deployment using its recorded identifier; do not infer account correctness from local success. |

## Next action

Obtain explicit authorization for TF-039. Then commit/push/deploy only the approved scope, record the deployment identifier, run the production smoke checklist, and update the completion matrix with actual live evidence.
