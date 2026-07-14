# GOAL

## Final Deliverable

Remove redirect-only legacy player URLs from TennisFrens AI discovery artifacts while preserving canonical pages and redirects

## User Value

Search and AI crawlers receive a smaller, canonical discovery set, avoiding duplicated player entities and wasted crawl attention on redirect URLs.

## Required Features

- Exclude `-legacy` player slugs from the AI-index generator.
- Keep the search-artifact audit aligned with the generator’s canonical-player rule.
- Regenerate `ai-index.json`, `llms.txt`, and `llms-full.txt`.

## Non-Goals

- Do not remove legacy player records, redirects, pages, editorial content, ads, or production data.
- Do not make ungrounded title, ranking, or revenue claims.

## Done Conditions

- Generated AI index contains no `/players/*-legacy` URL.
- Search-artifact and sitemap-coverage audits pass.
- Typecheck, lint, and production build pass.
- A deployed smoke check confirms the public index excludes legacy URLs while a sample legacy URL still redirects.

## User-Visible Result

AI-facing discovery files recommend the canonical player page rather than a redirect-only predecessor.
