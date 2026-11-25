# Frontend Draft QA — 20 November 2026

## Verified

- Next.js production build with Webpack and TypeScript completed successfully.
- Static export generated in `out/`; no backend, CMS, identity or registration service was added.
- Inspected final rendered screenshots at 1440×900, 1024×768, 820×1180, 768×1024 and 390×844.
- No missing photographs or font fallback was observed. The supplied photograph ships as a local WebP of approximately 52 KB.
- Verified a single H1, seven agenda rows, internal anchor destinations, image alt text and the exact supplied Maps URL in exported HTML.
- No invented telephone number or active `tel:` link. The pending contact text is intentional.
- The full consistency run read all five widths without runtime errors. It reported no horizontal overflow, missing assets, font loading, hidden content, links, hover, hover movement or reduced-motion findings.
- Actual contrast issue found: muted date-panel text was 4.41:1. Changed `--muted` from `#71675D` to `#695D53`; the final pair on `#EBE5DC` calculates to 5.10:1, above WCAG AA for normal text.
- Corrected the motion script to load as an ES module. Final screenshot runs reported no script exception.
- Final 390 px hero is 844 px tall, containing its text, action and photograph in the first viewport.

## Skill checker interpretation

The initial full consistency run returned **92 FAIL / 22 WARN**. It is not an all-green design check. Its report is kept in `consistency/report.json`; the final layout check and screenshots are stored separately.

One concrete contrast issue was corrected as described above. Subsequent source changes also refined three agenda titles, improved mobile paper edges and hero fit, moved the anniversary seal inside the outer content edges, and converted shared styling primitives to Tailwind utility groups. Production build and five screenshots were repeated after those changes. The full consistency run was not repeated after these bounded changes.

The remaining design constraints were reviewed against this invitation brief:

- **Section and hero screen multiples:** retain content-driven sections and compact contact footer. The final tablet hero at 768 px and short desktop at 1024 px can extend slightly below the first screen; the photograph continues naturally. Do not truncate copy or create an empty full-screen footer to satisfy exact height multiples.
- **Grid, split and row alignment:** the page has equal outer margins and its own editorial split. The checker assumes the kit's 12-column positions, top-aligned hero and open rows without an inset date panel. These constraints do not match this layout.
- **Visual count and CTAs:** the brief provides one mood photograph, a date block and an agenda. No stock image, extra action or registration flow was added to satisfy the kit's picture and CTA counts.
- **Type scale and headings:** a large day number, anniversary seal, event-name H1 and editorial headings are intentional invitation elements. The category “A private conference” is visible immediately above the event name.
- **Seal spill / captions:** the anniversary seal overlaps the photograph as a visual device; it is not an explanatory image caption. The final seal remains within the page's outer margins.
- **Motion layer:** Next.js bundles the imported `motion.css` into hashed CSS, so the kit's filename detection reports it absent. It is present unchanged in source and the full run's actual hover and hover-movement checks passed.
- **Rules and navigation:** the minimal logo/hashtag header and ruled schedule follow the user's Sitemap. Do not add a menu or remove meaningful agenda row separators for a kit heuristic.

## Pending supplied information

Approved Cotactic logo and brand colours, Khun Tok's telephone number, and confirmation of the conflicting event start / Keynote duration remain as recorded in `Project Brief.md`. The 2027 event title and 2026 date are deliberately preserved. Nothing was deployed to Vercel or the company domain.

## Final performance check

`perf.mjs` completed on the final export at desktop and mobile with **0 FAIL / 4 WARN**. Transfer was approximately 323 KiB per viewport; broken requests and blocking time were zero. Measured layout shift was 0.015 on desktop and 0.000 on mobile. These are local CPU measurements, not field performance guarantees.

The warnings concern Next.js JavaScript size (approximately 150 KiB gzipped) and six font files. The font files support Thai and Latin at two body weights plus regular/italic display text, totalling approximately 102 KiB. No dependency or font removal is required for this draft.

Final hero captures for review are in `artifacts/home-desktop.png` and `artifacts/home-mobile.png`. Full-page captures remain in `.taste-skill/shots/`.

## Revision 2 — Browser Comments 1–27

Updated the event name to COTACTIC Connect 2026 and the descriptor to “A private gathering”. The 2027 marketing and Brand Map content remains unchanged. Venue, transport, date formatting, all selected deletions and activity titles follow the comments. The final agenda heading is “Thank You & Champagne Toast”, a concise agenda-style heading.

The requested gratitude sentence was shortened to a professional invitation. Event metadata and project guidance were updated to avoid restoring superseded names or venue details. The removed repeated Thai date remains available only as the date element's accessible label.

Validation: production build including TypeScript passed; exported HTML checks confirmed revised content, removed elements and all seven agenda entries. Inspected final desktop at the annotated viewport (1135×789) and mobile at 390×844. This copy revision does not rerun the full initial heuristic or performance suites.

## Revision 3 — 24 November 2026

- Added locally bundled Montserrat 400 / 500 / italic 400. It is the Latin UI font, including all annotated labels and the Hero title. IBM Plex Sans Thai handles Thai glyphs; unselected editorial headings retain Instrument Serif.
- Changed the Agenda ground to the requested `#041936` and the Hero year to the requested `#FED312` without altering their specified values.
- Replaced all geometric polygon tears with an ImageGen-created transparent macro paper texture, cropped to the actual frayed edge and exported as a 90 KB WebP. Original and exact prompt are saved in `assets/source`; this is a generated photorealistic texture, not an actual physical-paper scan.
- Adjusted Hero title sizes for Montserrat's wider glyphs. Neutral translucent rules replace the previous green-tinted Agenda borders.
- Production build and TypeScript passed. Verified the exact colour tokens, Montserrat font stack, removal of polygon tears, and inclusion of the texture in the static export.
- Inspected final full-page captures at 1440×900, 734×791 (the annotated viewport) and 390×844. Text, images and paper edges render across those sizes. The local preview responds HTTP 200.
- The previous full heuristic/performance results are historical; they were not rerun for this bounded visual update.

## Revision 4 — Charcoal text trial

Replaced Espresso body/heading text with Cool Charcoal `#222831` and secondary labels with Slate Grey `#59616B`. The filled Maps button uses existing Navy `#041936`; selection colour is a pale blue-grey. Backgrounds, type, content and layout remain the same.

Calculated contrast: main text on Gallery White 13.40:1; secondary text on Gallery White 5.67:1 and on the date panel 5.01:1; light button text on Navy 15.84:1. The old brown text tokens are absent from the stylesheet.

Production build including TypeScript passed. Inspected final 1440×900 and 390×844 captures; the colour trial renders correctly without layout changes. Updated the review hero captures in `artifacts/`.

## Revision 5 — Shared typography scale and ampersands

All font-size declarations now reference the shared `--type-*` role tokens, except the anniversary suffix which scales relative to its parent in em. Removed individual Section/Component overrides for H2, H3, body and supporting information. Standardised line height by role. The large date and anniversary seal have explicit decorative tokens.

Added `DisplayText`: ampersands use the Roman glyph inside both Roman and italic Agenda headings; the surrounding italic emphasis is preserved.

Production build including TypeScript passed. A browser probe at four widths confirmed the following actual sizes:

| Width | Every H2 | Every subheading | Body | Supporting text | Both ampersands |
| --- | --- | --- | --- | --- | --- |
| 1440 | 64 px | 32 px | 16 px | 14 px | 32 px, Roman Instrument Serif |
| 1280 | 57.6 px | 28.8 px | 16 px | 14 px | 28.8 px, Roman Instrument Serif |
| 734 | 48 px | 28 px | 16 px | 14 px | 28 px, Roman Instrument Serif |
| 390 | 40 px | 28 px | 16 px | 14 px | 28 px, Roman Instrument Serif |

Assertions verified matching sizes per role, matching ampersand family/size/style and no horizontal overflow at all four widths. Exact probe results are in `consistency/revision-5/typography.json`. Inspected full-page screenshots at 1440, 1280 and 390 px and updated the hero review captures.

The quick heuristic checker also reports 45 FAIL / 13 WARN for its general layout/copy rules; this is not an all-green heuristic report. The measured typography assertions above pass. Existing invitation-versus-kit exceptions remain documented earlier; quick mode does not repeat the full interaction/performance suites.

## Revision 6 — Supplied anniversary badge

Replaced the CSS/text anniversary seal with the user's `10Th.png`, copied byte-for-byte to `public/images/10th-anniversary.png`. Removed the former background, borders, shadow and text styles so the supplied graphic renders without a second frame. Retained the existing 150 / 128 / 106 px responsive sizes and placement.

Verified identical source bytes, square 1200×1200 dimensions and transparent corner pixels. Production build including TypeScript passed; the image URL returns HTTP 200. Inspected the final 1440×900 and 390×844 Hero captures: the supplied badge preserves its aspect ratio and transparency on both sizes. Updated `artifacts/home-desktop.png` and `artifacts/home-mobile.png`.

## Revision 7 — Bold uppercase Hero

Changed the Hero to COTACTIC CONNECT in uppercase Montserrat 700. The yellow year inherits the same 700 weight and keeps its italic treatment. Added the actual 700 normal and italic font files instead of synthetic bold, and removed the unused 400 italic import. Type sizes and all other typography roles remain unchanged.

Removed the non-wrapping constraint from the Hero lines so the year can move onto its own line on narrow screens. Production build including TypeScript passed. Inspected final Hero captures at 1280, 390 and 320 px: the entire heading remains readable, with the year wrapping at 320 px. Updated the desktop and mobile review captures; Preview responds HTTP 200.

## Revision 8 — Hero tracking and travel contacts

Increased tracking only on COTACTIC in the Hero to 0.02em, preserving the CONNECT/year typography. Replaced the pending telephone text with the supplied Khun Tok contact and added Khun Jean. Both entries are managed in `event.contacts`, displayed with the supplied hyphens, and linked using normalized tel destinations.

Production build including TypeScript passed. Exported HTML assertions verified the exact display numbers, correct name association and destinations `tel:0610219515` / `tel:0922566598`; no calls were placed. Inspected the Hero and Footer at 1280, 390 and 320 px: tracking and both contact entries fit without clipped text. Updated project guidance and the desktop/mobile review captures.
