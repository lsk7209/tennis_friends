# Risk Notice

Task: Update one player-page search metadata override and publish through the existing GitHub Pages workflow.

Why Needed: Fresh page-query evidence shows a high-impression, zero-click player page near the first search-results page.

Impact Scope: Only `/players/alexandra-eala` title/description/keywords. Deployment is a static GitHub Pages release triggered by the merged pull request.

Rollback: Revert the scoped commit and use the same GitHub Actions deployment workflow.

Safer Alternative: Leave the generic metadata fallback unchanged; this preserves the current low-CTR snippet but makes no improvement.

Approval Needed: User authorized continuation with `ㄱㄱ`; no credentials, production data, ads, or Search Console actions will be changed.

## Deployment Recovery Amendment

Task: Convert the existing RSS GET route handlers from runtime-only to build-time static output.

Why Needed: GitHub Pages uses Next.js `output: export`; the release failed before deployment because `/rss.xml` declared `force-dynamic`.

Impact Scope: `/rss.xml` and `/feed` remain GET-only RSS endpoints, generated from build-time published-post data.

Rollback: Revert the two route-handler changes and restore the previous runtime-only behavior on non-static hosts.

Safer Alternative: Leave the deployment blocked; the requested metadata would not reach production.

Approval Needed: This is a necessary, reversible deployment-compatibility repair within the user-authorized site optimization scope.
