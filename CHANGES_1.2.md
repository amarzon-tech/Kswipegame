# K Swipe v1.2 — food pictures

For Dr D's review on the `pics` branch. This branch is not merged to main, and the live site is untouched.

## What changed

- Every food, plate, and compare card now has a clear, appetizing food photograph, shown above the (still large) food name.
- 123 original AI-generated photographs are bundled locally as WebP (each 40 KB or less) so the app still works offline.
- Images are lazy-loaded, have alt text, and fall back to the existing emoji if a file is missing.
- Photos shrink after you answer so the verdict, plate list, and feedback still fit, including on an iPhone SE and in iPad landscape.
- The service worker cache is now `k-swipe-v1.2.2`. The app shell is precached; food photographs are cached on first view and quietly backfilled after idle or the first finished round (so the first visit stays light, and offline play still works once pictures have downloaded).
- The main start button (new players, Level 1) now says "Let's play! 🍌" instead of "Start Level 1". After Level 1 is unlocked, it still says "Continue: Level …".
- The Pasta (plain) photograph was regenerated so it shows a modest half-cup of plain drained pasta with no sauce. Other pasta, noodle, and rice cards whose text has no sauce were checked; only this photo needed a change.

## What did not change

- No potassium values, categories, servings, or teaching or medical text were changed. The content block (`CONTENT-START` to `CONTENT-END`) is byte-identical to `main`.
- The v1.1.1 layout rules are kept: the 18px medical footer stays visible during play, tap targets are at least 44px, and body text is at least 16px (disclaimer 18px).

See `CREDITS.md` for the full image list.

## v1.2.2 review fixes (draft)

- Next / See results stays pinned at the bottom of the feedback toast on short phones, so a long teaching + coach toast cannot hide the button under the footer. The coach/streak line is dropped when space is tight.
- Revealed plate cards shrink the meal photo on short screens and let the ingredient list scroll, with a "More ↓" cue, so every row is reachable on iPhone SE and iPhone 13.
- Photos regenerated at the stated serving: peanut butter (2 tbsp dollop), banana (one fruit, one stem), quinoa (½ cup), salt substitute (¼ tsp). The "Raisins" compare option now uses a raisins-only picture; the mixed bowl stays on the Raisins & dried fruit card.
- Eight meal photographs that were just over 40 KB were recompressed to under 40,000 bytes. About includes a short note that pictures download for offline use (Wi-Fi is best on the first visit).
