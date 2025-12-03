# Player Image Integration & Profile Enhancement

## Objectives
- Enhance player listing and profile pages with high-quality images.
- Standardize player profile layout using `PlayerProfileCard` and `PlayerAttributes` components.
- Ensure consistent and wide content area for better readability.
- **Optimize SEO with structured data (Person Schema & FAQPage Schema).**

## Progress
- [x] **Image Generation**
  - [x] Novak Djokovic
  - [x] Carlos Alcaraz
  - [x] Jannik Sinner
  - [x] Daniil Medvedev
  - [x] Alexander Zverev
  - [x] Andrey Rublev
  - [x] Stefanos Tsitsipas
  - [x] Casper Ruud
  - [x] Holger Rune
  - [x] Hubert Hurkacz
  - [x] Taylor Fritz
  - [x] Tommy Paul
  - [x] Frances Tiafoe
  - [x] Cameron Norrie
  - [ ] Tallon Griekspoor (Pending Quota)
  - [ ] Grigor Dimitrov (Pending Quota)
  - [ ] Ben Shelton (Pending Quota)
  - [ ] Ugo Humbert (Pending Quota)
  - [ ] Sebastian Baez (Pending Quota)
  - [ ] Lorenzo Musetti (Pending Quota)
  - [ ] Sebastian Korda (Pending Quota)
  - [ ] Nicolas Jarry (Pending Quota)
  - [ ] Alex de Minaur (Pending Quota)

- [x] **Component Integration & Page Creation**
  - [x] `src/app/players/page.tsx`: Updated `getPlayerCard` to display images.
  - [x] `src/components/blog/Article.tsx`: Increased max-width to `max-w-7xl`.
  - [x] All player pages updated to `max-w-7xl`.
  - [x] All 23 player pages created with `PlayerProfileCard` and `PlayerAttributes`.

- [x] **SEO Optimization**
  - [x] Created `PersonSchema` component for structured data
  - [x] Created `FAQSchema` component for FAQ rich snippets
  - [x] Applied PersonSchema and FAQSchema to Novak Djokovic page
  - [x] Verified JSON-LD presence in page source
  - [ ] Apply SEO schemas to all remaining player pages (in progress)

## Next Steps
- [ ] Apply PersonSchema and FAQSchema to all 22 remaining player pages
- [ ] Generate images for remaining 9 players once quota resets
- [ ] Verify mobile responsiveness for the wider content area
- [ ] Run Google Rich Results Test on player pages
