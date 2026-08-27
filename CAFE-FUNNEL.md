# TennisFriends to Naver Cafe Funnel

Date: 2026-08-27

## Decision summary

- Audience: people arriving through tennis articles, player profiles, or free utilities.
- Primary offer: continue from the public TennisFriends site to the TennisFriends Naver Cafe.
- Primary conversion event: `naver_cafe_visit`.
- Destination: `https://cafe.naver.com/homecookie`.
- Path: search or direct visit -> useful article/tool -> contextual site CTA -> Naver Cafe in a new tab.
- Secondary actions: use a utility, read another article, or inspect a player profile. These support trust but do not replace the cafe event.

## Evidence ledger

### Verified

- The user defined Naver Cafe traffic as the site's main purpose.
- The exact approved destination is `https://cafe.naver.com/homecookie`.
- The site already loads GA4 and has a reusable custom-event helper.
- Before this workstream, the cafe was linked only through an untracked image banner on some article and player templates.

### Assumptions

- Opening the cafe in a new tab is less disruptive because visitors may want to keep their article or result open.
- A useful-content-first path is a better match for organic visitors than immediately blocking content with a modal.

### Hypotheses

- A clear above-the-fold cafe CTA will increase cafe visits from homepage sessions.
- A persistent mobile navigation entry will improve cafe visits from mobile content sessions.
- A truthful text CTA will preserve trust better than an unsupported “No.1” image claim.

### Missing evidence

- Current outbound cafe click baseline is unavailable because the dedicated event did not previously exist.
- Cafe join rate, member quality, and downstream activity are outside this site's analytics boundary.
- No claim is made about cafe size, response speed, exclusive benefits, or results.

## Offer

- Outcome: reach the official TennisFriends Naver Cafe after using the public site's content or tools.
- Mechanism: one consistent, externally labeled CTA that opens the approved cafe URL.
- Commitment: a visit only; the CTA does not promise automatic membership or a specific benefit.
- Proof: the link destination and TennisFriends naming are first-party facts supplied by the site owner.
- Risk handling: the CTA states that Naver Cafe opens in a new tab and does not collect additional form data.

## Funnel map

| Stage | Entry | Job | Promise | Primary CTA | Friction | Success event | Next state |
|---|---|---|---|---|---|---|---|
| Organic landing | Search visitor opens an article, profile, tool, or home | Deliver the promised tennis information | Useful content remains available without a gate | Continue reading or use the tool | Trust is initially low | Engaged page view | Content/tool stage |
| Consideration | Visitor has seen useful content or a result | Explain the relationship to the cafe | Continue to TennisFriends on Naver Cafe | 네이버 카페 방문하기 | External destination and new tab | `naver_cafe_visit` | Naver Cafe |
| Persistent access | Visitor wants the cafe before reaching page end | Make the primary destination easy to find | Direct access from header/mobile navigation | 네이버 카페 / 카페 | Navigation competition | `naver_cafe_visit` by location | Naver Cafe |
| Not ready | Visitor ignores the cafe CTA | Preserve value and trust | Keep all public content usable | Internal content/tool link | No forced signup | Continued engagement | Later CTA exposure |

## Page implementation

1. Header: visible desktop cafe button plus mobile-menu cafe button.
2. Homepage hero: cafe visit is the primary CTA; NTRP test is secondary.
3. Mobile bottom navigation: dedicated cafe destination.
4. Sitewide end-of-content section: after hydration, the cafe CTA appears once after the main content on eligible pages; admin, privacy, and terms routes are excluded.
5. Footer: persistent textual cafe link.
6. Unsupported “No.1” banner creative is no longer rendered.

## Measurement contract

| Field | Contract |
|---|---|
| Event | `naver_cafe_visit` |
| Trigger | User activates a tracked Naver Cafe link |
| Properties | `cta_location`, `link_text`, `destination_url`, `page_path` |
| Denominator | Eligible page views or sessions, segmented by page path and CTA location |
| Window | KST calendar day/week; use the same window for numerator and denominator |
| Identity | GA4 browser/session identity; cross-domain cafe membership cannot be reconciled here |
| Exclusions | Internal test traffic and known bots where configured in GA4 |
| Primary rate | Unique users with `naver_cafe_visit` / eligible users |
| Guardrails | Engagement, tool completion, content read completion, and accidental repeat clicks |

Do not mark the funnel successful from clicks alone. The site can prove outbound intent; cafe joins and member quality require separate Naver Cafe evidence.

## Experiment backlog

| Priority | Hypothesis | Primary metric | Guardrail | Effort |
|---|---|---|---|---|
| 1 | Hero cafe CTA improves homepage outbound intent | Cafe visit rate from `/` | NTRP starts | Low |
| 2 | Mobile bottom-nav cafe entry improves mobile conversion | Cafe visit rate from mobile sessions | Mobile bounce/engagement | Low |
| 3 | Page-specific CTA wording outperforms generic wording | Cafe visit rate by CTA variant | Content read completion | Medium |
| 4 | Showing the sitewide CTA after a completed tool result improves qualified clicks | Cafe visits after `test_completed` | Tool completion | Medium |

Establish a baseline before running copy variants. Change one major variable at a time and retain `cta_location` so results remain attributable.

## Safety and handoff

- No membership count, testimonial, ranking, exclusive benefit, urgency, or guaranteed outcome is claimed.
- No pop-up, forced redirect, form, consent change, or external-account mutation is introduced.
- Deployment and GA4 admin conversion marking remain separate actions.
