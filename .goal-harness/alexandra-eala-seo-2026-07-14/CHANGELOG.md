# Changelog

| File | Change | Reason |
|---|---|---|
| `src/app/players/[slug]/page.tsx` | Added an Alexandra Eala-only metadata override. | Replace the generic no-rank title wording with a precise player-query snippet without changing profile content. |
| `src/app/rss.xml/route.ts`, `src/app/feed/route.ts` | Switched GET RSS handlers to static generation. | GitHub Pages uses Next static export and cannot deploy runtime-only handlers. |
| `src/app/blog-render/[slug]/page.tsx` | Re-exported canonical blog static params. | Compatibility route needs the same static paths under GitHub Pages export. |
