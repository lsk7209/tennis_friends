# TESTS

## Required Checks

- Run/start: static Next production build.
- Lint: `npm run lint`.
- Typecheck: `npm run type-check`.
- Unit tests: metadata/audit checks supplied by the project.
- Build: `npm run build`.
- Smoke test: fetch the deployed `/players/alexandra-eala` route and inspect title, description, canonical, robots, and JSON-LD presence.
- Domain-specific validation: `npm run audit:metadata-coverage`, public `ads.txt`, sitemap, robots, and trust-page availability.

## Error And Edge Cases

- Existing profile fallback behavior must remain unchanged for all other players.
- The override must not create a duplicate canonical, a `noindex` directive, or a metadata schema conflict.

## User Scenario Tests

- A Google user querying the player name sees a Korean title and descriptive snippet that identify the player and profile intent.

## Completion Checklist

- [ ] Available checks have been run or marked N/A with reasons.
- [ ] Failed checks have been fixed or documented as blocked.
- [ ] Acceptance criteria have matching evidence.
