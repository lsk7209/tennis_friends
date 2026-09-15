# Baseline

## Repository and runtime

- Repository: `E:\web\tennisfrens`
- Domain contract: `https://tennisfrens.com`
- Commit: `408ddd081914241c99f8da8c9d6237f122db319d`
- Package manager: npm with `package-lock.json`
- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4
- Content/data: repository TypeScript/JavaScript datasets and route files; no new CMS or database introduced
- Hosting configuration present: GitHub Actions/GitHub Pages and Git-connected Vercel artifacts; neither is mutated in this task
- Analytics/ads source present: GA4 and AdSense loader/configuration; account and delivery status are not inferred from source

## Reproduced evidence

| Task | Before | Evidence |
|---|---|---|
| TF-006 | Homepage FAQ said 10 questions while `src/lib/questions.ts` contains 15 | failing-first `npm run audit:trust-contracts` |
| TF-005 | Contact metadata supplied an already branded title under a root title template | source inspection of contact/root layouts |
| TF-008 | `mailto:` launch immediately displayed confirmed receipt and privacy said names were not collected | contact and privacy source inspection |
| TF-007 | Booking index promised real-time booking though detail is a demo; distribution mixed real-response and example language | utility/detail/home source inspection |

Unmeasured GSC, GA4 account, AdSense account, RUM, revenue, ranking, and conversion values are `null` and not verified.
