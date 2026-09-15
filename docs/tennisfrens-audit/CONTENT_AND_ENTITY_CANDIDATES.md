# Content and entity candidate review

Measured: 2026-09-15 KST. Candidate status never authorizes deletion, redirect, or noindex.

## TF-013 duplicate/topic candidates

| URLs / source | Evidence excerpt or reason | Boilerplate excluded | Review result |
|---|---|---|---|
| 30 reviewed September articles | `summary` had been copied from the complete first paragraph or its 190-character prefix | headers, navigation, common disclaimers | confirmed generator defect; fixed by conclusion-role summary and renderer regression tests |
| `part16`–`part26-quality-rewrites.ts` | repeated structure such as “다음 경기에서 확인할…” occurs across generated articles | shared template structure is excluded from deletion scoring | false positive for URL consolidation; generator language quality is repaired separately |
| `/blog/tennis-return-of-serve-guide` and `/blog/serve-return-prediction-guide` | related return topic but one is technique guidance and the other is prediction/tool interpretation | common “return” vocabulary | keep both and cross-link; canonical already reflects separate intent |
| `/blog/tennis-drop-shot-timing` and `/blog/tennis-drop-shot-mastery` | timing subtopic overlaps a broader mastery guide | common technique definitions | review candidate only; do not redirect without URL-level traffic and unique-section comparison |

No similarity score is used as an automatic deletion rule. The first row was a field-role defect, not duplicate URLs. The remaining rows retain unique intent unless stronger URL-level evidence is obtained.

## TF-014 player/profile versus article intent

| Profile | Article | Intent decision |
|---|---|---|
| `/players/novak-djokovic` | `/blog/novak-djokovic` | profile owns stable bio/entity facts; article owns editorial career/tactical narrative. Keep and link. |
| `/players/carlos-alcaraz` | `/blog/carlos-alcaraz` | profile owns current entity surface; article owns editorial analysis. Keep and link. |
| `/players/jannik-sinner` | `/blog/jannik-sinner` | same separation; freshness-sensitive rankings must not be copied as timeless article facts. |
| `/players/seongchan-hong` | legacy `/players/hong-seong-chan` | same entity and intent; canonical survivor plus permanent alias is already implemented and regression-tested. |

Profile/article name overlap alone is not sufficient for consolidation. A future merge requires unique-information comparison, traffic evidence when available, internal-link inventory, and explicit URL-change approval.
