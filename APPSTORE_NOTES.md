# K Swipe: App Store notes

## 1. Wrap with Capacitor (on the Mac, in this repo)
```bash
npm init -y
npm i @capacitor/core @capacitor/cli @capacitor/ios @capacitor/haptics
mkdir -p www && cp -R index.html privacy.html manifest.json sw.js icons www/
npx cap init "K Swipe" com.drd.kswipe --web-dir=www
npx cap add ios
npx cap sync ios
npx cap open ios        # opens Xcode: set Team, bundle id, version, then Product > Archive
```
- Re-run `cp ... www/ && npx cap sync ios` after every web change.
- Haptics: the game already calls `window.Capacitor.Plugins.Haptics` when present (falls back to `navigator.vibrate`). Installing `@capacitor/haptics` is enough.
- The service worker is ignored inside the native WebView (files ship in the app bundle), which is fine.
- App icon: drop `icons/icon-1024.png` into Xcode > Assets > AppIcon (single 1024 px image; no transparency).

## 2. Game Center leaderboard plan (phase 2)
- Plugin: a community Capacitor Game Center plugin (e.g. `@openforge/capacitor-game-connect`), evaluate before adding.
- Leaderboards: `journey_total` (sum of best scores, max 50), `daily_best_streak`, `level5_best`.
- Achievements: Pass each level (5), Perfect 10/10 level, 7-day daily streak, "Salt-substitute spotter" (answer the salt substitute card correctly).
- Submit scores from `endOfLevel()` / `endOfDaily()`; no other data leaves the device.

## 3. Screenshots required (App Store Connect)
- iPhone 6.9" (1320 x 2868 or 1290 x 2796) — required.
- iPhone 6.5" (1284 x 2778 or 1242 x 2688) — only if 6.9" not provided.
- iPad 13" (2064 x 2752) — only if you ship for iPad (consider iPhone-only at first).
- 3 to 10 screenshots: start screen, food card, feedback with mg, plate card, "which is lower?", stats.

## 4. Privacy
- App Privacy label: **Data Not Collected**. No analytics, ads, accounts, or network calls; progress is stored in on-device local storage.
- Privacy Policy URL (required): host `privacy.html`, e.g. https://amarzon-tech.github.io/Kswipegame/privacy.html

## 5. Review guideline notes
- **4.2 Minimum Functionality**: avoid "just a website". Points to highlight in Review Notes: works fully offline, native haptics, saved progress/stats, daily challenge with streaks, 130+ curated cards, (later) Game Center.
- **1.4.1 Physical Harm (medical apps)**: Apple scrutinizes health info. Keep the disclaimer on screen (footer + About), cite sources (USDA FoodData Central, NKF), state that values are estimates and that patients should follow their care team. Put the developer's medical credentials in the Review Notes and App description, and finish the clinical review of CONTENT_REVIEW.md before submitting.
- Age rating: 4+. Category: Education (secondary: Health & Fitness or Games > Trivia).

## 6. Before submitting
- [ ] Dr D signs off on CONTENT_REVIEW.md
- [ ] Apple Developer Program enrollment active
- [ ] TestFlight build tested on a real iPhone (swipe, haptics, VoiceOver, Dynamic Type/zoom)
- [ ] Description, keywords, support URL, privacy URL, screenshots
