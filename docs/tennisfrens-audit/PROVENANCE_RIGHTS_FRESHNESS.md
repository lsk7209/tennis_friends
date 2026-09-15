# Provenance, rights, and freshness ledger

Measured: 2026-09-15 KST

## Editorial identity and dates

- Default article author is the real site organization, `TennisFriends`; no fabricated Person author is emitted.
- `date`/`scheduledAt` represent publication timing. `updatedAt` and `verifiedAt` are separate optional fields and are not synthesized from publication time.
- JSON-LD emits `dateModified` only when an actual `updatedAt` exists. Absence means unknown, not “same as publication” or “verified today”.
- Inline external links are sources for individual claims; their presence does not mean the whole article received professional review.

## Asset/data rights ledger

| Asset/data class | Source | Rights/attribution evidence | Redistribution status |
|---|---|---|---|
| Site UI SVGs and generated OG graphics | repository-authored/build-generated | local source/build ownership | allowed within site build |
| TennisFriends cafe banner | local repository asset | provenance document not present | unresolved; preserve, do not redistribute externally |
| Player PNG/SVG portraits | local `public/images/players` collection | per-file license/attribution ledger absent | unresolved; do not generate new rights claims or external redistribution package |
| Player biographical/ranking data | repository datasets | mixed editorial/public reference origins; per-field source timestamps absent | site use retained; freshness-sensitive facts marked for verification, not silently refreshed |
| Blog external references | article hyperlinks | source URL visible in content; checked date mostly absent | quotation/reuse remains limited to the article context |

Unknown rights remain unresolved rather than being converted into permission. New image imports and external data feeds require source, license/terms, attribution, retrieval time, and redistribution decision before release.

## Freshness and supplier-failure contract

Freshness-sensitive records should carry three separate times: `sourceFetchedAt`, `effectiveAt`, and `verifiedAt`. Existing datasets that lack these fields are treated as `verificationState: unknown`; current ranking, price, court availability, or product availability must not be inferred from the build date.

For any future remote supplier: maximum 2 retries with exponential backoff, 10-second request timeout, no unbounded pagination, and no paid request after the configured task budget is exhausted. On failure, preserve the last known value with a visible stale/unknown label; do not replace it with zero, empty availability, or the current timestamp. The present site has no approved live supplier integration, so no background retry schedule is activated.
