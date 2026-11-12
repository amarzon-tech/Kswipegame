# K Swipe v1.1 — user-visible wording changes

For Dr D's sign-off. No potassium values, food categories, serving sizes, or teaching explanations were changed, except the wording items listed here. Medical disclaimer body text is unchanged. This branch is `v1.1-fixes` only — not merged to main, and the live GitHub Pages site is untouched.

**Support email:** `amardamodar@gmail.com` (confirmed by Dr D).

## Wording changes

### Start screen
- Opening line is now: "Each card is a food or a plate. Decide if it is **high**, **moderate**, or **low** in potassium."
- Single-food cutoffs are grouped under the heading **Single foods** (same numbers as before: High more than 250 mg, Moderate 150 to 250 mg, Low less than 150 mg).
- Whole-plate cutoffs are now shown here as well as in About, using the exact existing wording: **Low: under about 500 mg. Moderate: about 500 to 800 mg. High: over about 800 mg.**
- After the scales, swipe is secondary: "Tap **High**, **Moderate**, or **Low** (you can also swipe). \"Which is lower?\" cards: tap **A** or **B**. Get **7 of 10** right to unlock the next level."
- On a first run only, the first "mg" on this screen is written **mg (milligrams)**. After the player has seen a reveal, it is just **mg**.
- New button, only if the player has missed at least one card: **Practice the ones you missed (N)**.
- Start-screen footer adds a **Privacy policy** link (same destination as in About). Footer medical sentence is unchanged: "Education only, not medical advice. Your potassium goal depends on your labs, dialysis type, and medicines. Ask your care team."

### In-game
- High / Moderate / Low (and A is lower / B is lower) are the main button labels. Swipe is secondary: **or swipe left / or swipe up / or swipe right**.
- Plate cards add the plate scale under the existing prompt "Overall, is this whole plate high, moderate, or low in potassium?": **Low: under about 500 mg. Moderate: about 500 to 800 mg. High: over about 800 mg.**
- On a first run, the first milligram figure the player sees (start screen or first reveal) uses **mg (milligrams)**.
- Compare-card title **Leached potato** is renamed **Potato, boiled and drained**. Serving ("½ cup, boiled & drained"), potassium (~160 mg), and the teaching sentence about leaching are unchanged.
- The "Watch for: potatoes, tomato sauce, beans, dried fruit, salt substitutes" hint no longer appears on every card. It shows only on harder levels (level 3+) or right after a miss, and never on a card whose food it names.
- Coach line **Solid decision. Your kidneys quietly approve. 👍** is replaced with **Nice choice!**
- Coach line **That's exactly how meals should be judged. 🧠** is only used after a correct *plate* answer (it is no longer mixed into single-food or compare praise).
- Mid-level Menu asks: **Leave this level? Progress for this run will be lost.**

### End of a practice run (new)
- Title: **Practice complete**
- Score: **N/M**
- If some misses remain: **Cards you got right were taken off your practice list. N still to practice.** Buttons: **Practice again**, **Back to start**.
- If the list is clear: **You got them all. Your practice list is clear.** Button: **Back to start**.

### Stats
- If there are stored misses, a **Practice the ones you missed (N)** button appears.

### Privacy page
- Offline sentence is now: **After you install the app, it works offline and does not send data over the internet.** (was: "The game works offline and does not send anything over the internet.")
- Contact is a tappable email link to `amardamodar@gmail.com` (via the `SUPPORT_EMAIL` constant). The previous plain-text GitHub issue address is removed; no GitHub URL is shown to players.
- "What stays on your device" now also mentions the **practice list**.
- "Last updated" is November 12, 2026.
- **Back to the game** is a large button at the top of the page, so it is visible without scrolling.

### Unchanged on purpose
- About "How foods are sorted" cutoffs, Sources, and the medical disclaimer paragraph.
- Every food, plate, and comparison teaching sentence (including the leaching explanation).
- All potassium milligram figures and High / Moderate / Low categories.
- Journey, daily, and rank-up copy other than the items above.
