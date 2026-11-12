# K Swipe v1.2 — food pictures

For Dr D's review on the `pics` branch. This branch is not merged to main, and the live site is untouched.

## What changed

- Every food, plate, and compare card now has a clear, appetizing food photograph, shown above the (still large) food name.
- 123 original AI-generated photographs are bundled locally as WebP (each 40 KB or less) so the app still works offline.
- Images are lazy-loaded, have alt text, and fall back to the existing emoji if a file is missing.
- Photos shrink after you answer so the verdict, plate list, and feedback still fit, including on an iPhone SE and in iPad landscape.
- The service worker cache is now `k-swipe-v1.2.0` and precaches every image plus `CREDITS.md`.

## What did not change

- No potassium values, categories, servings, or teaching or medical text were changed. The content block (`CONTENT-START` to `CONTENT-END`) is byte-identical to `main`.
- The v1.1.1 layout rules are kept: the 18px medical footer stays visible during play, tap targets are at least 44px, and body text is at least 16px (disclaimer 18px).

See `CREDITS.md` for the full image list.
