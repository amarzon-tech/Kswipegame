# K Swipe content review (polish-v2)

For Dr D to verify before publishing. Every card in the game is listed below with its status:
**changed** (category, serving, or text differs from the original), **kept** (original card; only a serving size and mg estimate were added), or **new**.

- Cutoffs per serving: Low < 150 mg, Moderate 150-250 mg, High > 250 mg.
- Plate (whole meal) cutoffs used by the game: Low < ~500 mg, Moderate ~500-800 mg, High > ~800 mg. *This plate scale is my convention, please confirm or adjust.*
- mg values are rounded approximations from **USDA FoodData Central** (and product labels for salt substitutes / drinks), cross-checked against the **National Kidney Foundation** high/low potassium lists. They are not precise citations; please spot-check.
- All data lives in one block in `index.html` between `/* CONTENT-START */` and `/* CONTENT-END */`.

Counts: 98 food cards, 22 plates, 15 "which is lower?" cards (135 total).

## Items needing your attention
- **kiwi**: USDA: 1 medium kiwi (~70 g) is ~215 mg (moderate by our cutoffs). Card uses "1 large" (~90 g, ~280 mg) to match the requested HIGH rating and NKF high list. Confirm.
- **watermelon**: Requested LOW. 1 cup diced is ~170 mg (moderate), so the card uses ½ cup (~85 mg) and warns about 1 cup. Confirm serving.
- **pizza**: Requested "2 slices -> moderate". USDA regular cheese pizza is ~180 mg/slice, so 2 slices (~350 mg) would be HIGH by our cutoffs. Card uses 1 slice = moderate; the Pizza Night plate (2 slices + salad, ~500 mg) is moderate on the plate scale. Confirm.
- **milk**: Original "Dairy" card was moderate. 1 cup milk is ~350-390 mg, so changed to HIGH. Confirm.
- **beans**: Original card was moderate. ½ cup kidney beans is ~360 mg, so changed to HIGH.
- **orange**: NKF lists oranges as high; 1 medium (~235 mg) is moderate by mg cutoff. Confirm.
- **leached-potato**: Leaching reduction varies widely (roughly 50-75% in studies). ~160 mg is an estimate, rated moderate to be conservative. Please confirm the message you want patients to take away.
- **enhanced-pork**: Highly product-dependent estimate; no single database value.
- **salt-substitute**: NoSalt label: ~650 mg K per ¼ tsp; Nu-Salt is higher (~795 mg). Verify current labels.
- **lite-salt**: Morton Lite Salt label: ~350 mg K per ¼ tsp. Verify current label.
- **grapes**: 145 mg is near the 150 cutoff.
- **hummus**: 140 mg is near the 150 cutoff.
- **brussels**: ~250 mg sits exactly at the moderate/high boundary.
- **sports-drink**: Brand-dependent; some "electrolyte" products are much higher.
- **canned-soup**: Varies widely by brand/variety.
- **apple**: Serving reduced to ½ cup slices; a whole medium apple is ~195 mg (moderate).
- **collards**: Placed in level 5 as a "surprise low" green. Confirm you want this message.
- **cola**: Rated low K with phosphorus note, per request.
- **low-sodium-veg-juice**: Low-sodium V8-type juices list ~800-900 mg per cup on labels; 550 is a conservative middle estimate. Verify.
- **cmp-v8**: Values from product labels (regular ~470, low-sodium ~900 mg per cup). Verify current labels.

## Food cards
| # | Status | Level | Food | Serving | ~mg | Category | Teaching text | Source |
|---|---|---|---|---|---|---|---|---|
| 1 | kept | 1 | 🍌 Banana | 1 medium | 420 | High | Bananas are a classic high-potassium fruit. | USDA FoodData Central |
| 2 | kept | 1 | 🥑 Avocado | ½ avocado | 345 | High | Avocados are very high in potassium, even half of one. | USDA FoodData Central |
| 3 | changed | 1 | 🥔 Baked potato (with skin) | 1 medium | 900 | High | A baked potato is one of the highest-potassium foods. Boiling diced potato in lots of water and draining it (leaching) lowers the amount. | USDA FoodData Central |
| 4 | kept | 1 | 🧃 Orange juice | 1 cup (8 oz) | 495 | High | Juice packs the potassium of several oranges into one glass. | USDA FoodData Central |
| 5 | kept | 1 | 🥥 Coconut water | 1 cup (8 oz) | 600 | High | Coconut water is marketed as hydrating, but it is a potassium bomb. | USDA FoodData Central |
| 6 | changed | 1 | 🍇 Raisins & dried fruit | ¼ cup | 270 | High | Drying fruit removes water and concentrates potassium into a small handful. | USDA FoodData Central |
| 7 | kept | 1 | 🍠 Sweet potato (baked) | 1 medium | 540 | High | Sweet potatoes are high in potassium. | USDA FoodData Central |
| 8 | changed | 1 | 🥬 Spinach, cooked | ½ cup | 420 | High | Cooking shrinks a big pile of spinach into a small, high-potassium serving. Boiling and draining (leaching) lowers potassium somewhat, but cooked spinach is still high. | USDA FoodData Central |
| 9 | kept | 1 | 🍅 Tomato sauce / marinara | ½ cup | 420 | High | Tomato sauce is concentrated tomato, so it is high in potassium. | USDA FoodData Central |
| 10 | kept | 1 | 🍎 Apple | ½ cup slices (about ½ small apple) | 60 | Low | Apples are a low-potassium fruit in usual portions. | USDA FoodData Central |
| 11 | kept | 1 | 🫐 Blueberries | ½ cup | 55 | Low | Blueberries are low in potassium. Nice pick. | USDA FoodData Central |
| 12 | kept | 1 | 🍓 Strawberries | ½ cup sliced | 125 | Low | Strawberries are a lower-potassium berry. | USDA FoodData Central |
| 13 | kept | 1 | 🍍 Pineapple | ½ cup chunks | 90 | Low | Pineapple is a lower-potassium fruit. | USDA FoodData Central |
| 14 | kept | 1 | 🥒 Cucumber | ½ cup sliced | 80 | Low | Cucumber is low in potassium. | USDA FoodData Central |
| 15 | kept | 1 | 🍚 White rice | ½ cup cooked | 30 | Low | Plain white rice is low in potassium. | USDA FoodData Central |
| 16 | kept | 1 | 🍝 Pasta (plain) | ½ cup cooked | 30 | Low | Plain pasta is low. The sauce decides the rest. | USDA FoodData Central |
| 17 | kept | 1 | 🍞 White bread | 1 slice | 35 | Low | White bread is low in potassium per slice. | USDA FoodData Central |
| 18 | kept | 1 | 🥗 Lettuce (iceberg) | 1 cup shredded | 70 | Low | Lettuce is low in potassium. | USDA FoodData Central |
| 19 | changed | 1 | 💧 Water | 1 cup (8 oz) | 0 | Low | Water has no potassium. Stick to your fluid limit if you have one. | USDA FoodData Central |
| 20 | new | 1 | 🍳 Egg | 1 large | 70 | Low | Eggs are low in potassium. | USDA FoodData Central |
| 21 | new | 1 | 🥦 Cauliflower, cooked | ½ cup | 90 | Low | Cauliflower is a low-potassium vegetable. | USDA FoodData Central |
| 22 | new | 1 | 🫛 Green beans, cooked | ½ cup | 90 | Low | Green beans are low in potassium. | USDA FoodData Central |
| 23 | new | 1 | 🧃 Cranberry juice cocktail | 1 cup (8 oz) | 45 | Low | Cranberry juice cocktail is a low-potassium juice choice (watch the sugar). | USDA FoodData Central |
| 24 | new | 1 | 🥛 Rice milk (unfortified) | 1 cup | 65 | Low | Rice milk is much lower in potassium than cow's milk. Check labels: some brands add potassium or phosphorus. | USDA FoodData Central |
| 25 | new | 1 | 🫘 Lentils, cooked | ½ cup | 365 | High | Lentils are high in potassium. | USDA FoodData Central |
| 26 | new | 1 | 🧃 Prune juice | ½ cup | 350 | High | Prunes and prune juice are high in potassium. | USDA FoodData Central |
| 27 | kept | 2 | 🥦 Broccoli, cooked | ½ cup | 230 | Moderate | Broccoli is moderate; a bigger portion pushes it high. | USDA FoodData Central |
| 28 | changed | 2 | 🫘 Kidney beans, cooked | ½ cup | 360 | High | Beans are high in potassium per half cup. | USDA FoodData Central |
| 29 | changed | 2 | 🥛 Milk (cow's) | 1 cup (8 oz) | 365 | High | A cup of milk is high in potassium (and phosphorus). Many renal diets limit milk to about ½ cup a day. | USDA FoodData Central |
| 30 | kept | 2 | 🍅 Tomato, fresh | ½ cup chopped | 215 | Moderate | Fresh tomato is moderate in small amounts. A whole medium tomato is closer to 290 mg, and sauce is higher. | USDA FoodData Central |
| 31 | changed | 2 | 🍉 Watermelon | ½ cup diced | 85 | Low | A small serving of watermelon is low. A full cup is about 170 mg (moderate), and big wedges add up fast. | USDA FoodData Central |
| 32 | changed | 2 | 🥝 Kiwi | 1 large | 280 | High | Kiwi is high in potassium. | USDA FoodData Central |
| 33 | kept | 2 | 🍇 Grapes | ½ cup (about 15) | 145 | Low | Grapes are low in a ½ cup serving, but they are easy to overeat. | USDA FoodData Central |
| 34 | new | 2 | 🌽 Corn | ½ cup | 195 | Moderate | Corn is moderate in potassium. | USDA FoodData Central |
| 35 | new | 2 | 🥕 Carrots, cooked | ½ cup | 180 | Moderate | Cooked carrots are moderate. | USDA FoodData Central |
| 36 | new | 2 | 🍊 Orange | 1 medium | 235 | Moderate | One orange is moderate, near the top of the range. Orange juice is much higher. | USDA FoodData Central |
| 37 | new | 2 | 🍈 Cantaloupe | ½ cup cubed | 215 | Moderate | Cantaloupe is moderate in a small serving and high in a big one. | USDA FoodData Central |
| 38 | new | 2 | 🍈 Honeydew melon | ½ cup cubed | 200 | Moderate | Honeydew is moderate; keep portions small. | USDA FoodData Central |
| 39 | new | 2 | 🍐 Pear | 1 medium | 205 | Moderate | A fresh pear is moderate. Canned pears, drained, are lower. | USDA FoodData Central |
| 40 | new | 2 | 🥫 Canned peaches, drained | ½ cup | 120 | Low | Canned fruit drained of its juice is usually lower in potassium than fresh. | USDA FoodData Central |
| 41 | new | 2 | 🥬 Spinach, raw | 1 cup | 165 | Moderate | Raw spinach is moderate per cup. Cooking concentrates it. | USDA FoodData Central |
| 42 | new | 2 | 🍄 Mushrooms, cooked | ½ cup | 280 | High | Cooked mushrooms are high in potassium. | USDA FoodData Central |
| 43 | new | 2 | 🎃 Butternut squash, cooked | ½ cup cubed | 290 | High | Winter squash (butternut, acorn) is high in potassium. | USDA FoodData Central |
| 44 | new | 2 | 🥒 Zucchini, cooked | ½ cup | 240 | Moderate | Cooked zucchini is moderate. | USDA FoodData Central |
| 45 | new | 2 | 🌿 Asparagus, cooked | ½ cup | 200 | Moderate | Asparagus is moderate in potassium. | USDA FoodData Central |
| 46 | new | 2 | 🥬 Brussels sprouts, cooked | ½ cup | 250 | Moderate | Brussels sprouts sit at the top of moderate. | USDA FoodData Central |
| 47 | new | 2 | 🫑 Bell pepper | ½ cup chopped | 130 | Low | Bell peppers are low in potassium. | USDA FoodData Central |
| 48 | new | 2 | 🧅 Onion | ½ cup chopped | 120 | Low | Onions are low in potassium. | USDA FoodData Central |
| 49 | new | 2 | 🥬 Cabbage, raw | ½ cup shredded | 60 | Low | Cabbage is low in potassium. | USDA FoodData Central |
| 50 | new | 2 | 🥬 Okra, cooked | ½ cup | 110 | Low | Okra is low in potassium in a half cup. | USDA FoodData Central |
| 51 | new | 2 | 🍚 Brown rice | ½ cup cooked | 75 | Low | Brown rice is higher than white rice but still low per half cup. It has more phosphorus. | USDA FoodData Central |
| 52 | new | 2 | 🥣 Quinoa | ½ cup cooked | 160 | Moderate | Quinoa is moderate, higher than white rice or pasta. | USDA FoodData Central |
| 53 | new | 2 | 🥣 Oatmeal | ½ cup cooked | 80 | Low | Plain cooked oatmeal is low in potassium. | USDA FoodData Central |
| 54 | new | 2 | 🍞 Whole wheat bread | 1 slice | 80 | Low | Whole wheat bread is low per slice (white bread is lower in phosphorus). | USDA FoodData Central |
| 55 | new | 2 | 🥜 Almonds | 1 oz (about 23) | 210 | Moderate | Nuts are moderate in a small handful and high in bigger handfuls. | USDA FoodData Central |
| 56 | new | 2 | 🥜 Peanut butter | 2 tbsp | 190 | Moderate | Peanut butter is moderate per 2 tablespoons. | USDA FoodData Central |
| 57 | new | 2 | 🍗 Chicken breast, roasted | 3 oz | 220 | Moderate | Plain chicken is moderate per 3 ounces. Bigger portions add up. | USDA FoodData Central |
| 58 | new | 2 | 🐟 Salmon, cooked | 3 oz | 325 | High | Salmon is high in potassium per 3 ounces. | USDA FoodData Central |
| 59 | new | 2 | ☕ Coffee, brewed | 1 cup (8 oz) | 115 | Low | One cup of black coffee is low. Several cups a day add up. | USDA FoodData Central |
| 60 | new | 2 | 🍵 Tea, brewed | 1 cup (8 oz) | 90 | Low | Brewed tea is low in potassium. | USDA FoodData Central |
| 61 | new | 2 | 🍫 Dark chocolate (70-85%) | 1 oz | 205 | Moderate | Dark chocolate is moderate per ounce; a whole bar is high. | USDA FoodData Central |
| 62 | new | 2 | 🍫 Milk chocolate bar | 1.5 oz bar | 160 | Moderate | A regular milk chocolate bar is moderate. | USDA FoodData Central |
| 63 | new | 2 | 🥔 Potato, leached (boiled & drained) | ½ cup diced | 160 | Moderate | Peeling, dicing, and boiling potatoes in lots of water, then draining, removes a good share of the potassium. It still counts, so keep portions small. | USDA FoodData Central |
| 64 | changed | 3 | 🍕 Cheese pizza | 1 slice | 180 | Moderate | One slice of pizza is moderate. Two slices push it close to high, so portion matters. | USDA FoodData Central |
| 65 | kept | 3 | 🍟 French fries | medium order | 600 | High | Fries are potatoes in a big portion, so they are high. | USDA FoodData Central |
| 66 | changed | 3 | 🥫 Canned chicken noodle soup | 1 cup | 200 | Moderate | Canned soups vary a lot. Tomato and bean soups are often high, and some 'low sodium' soups use potassium chloride. Read the label. | USDA FoodData Central |
| 67 | new | 3 | 🥑 Guacamole | ¼ cup | 330 | High | Guacamole is mostly avocado, so even a small scoop is high. | USDA FoodData Central |
| 68 | new | 3 | 🫘 Hummus | ¼ cup | 140 | Low | Hummus is near the top of low in ¼ cup. Large scoops add up. | USDA FoodData Central |
| 69 | new | 3 | 🥫 Chili with beans | 1 cup | 900 | High | Beans plus tomato make chili very high in potassium. | USDA FoodData Central |
| 70 | new | 3 | 🥣 Granola | ½ cup | 200 | Moderate | Granola is moderate; versions with dried fruit and nuts are higher. | USDA FoodData Central |
| 71 | new | 3 | 🥔 Potato chips | 1 oz (about 15 chips) | 350 | High | Potato chips are high. They are made from potatoes. | USDA FoodData Central |
| 72 | new | 3 | 🥨 Pretzels | 1 oz | 40 | Low | Pretzels are low in potassium (but salty). | USDA FoodData Central |
| 73 | new | 3 | 🍿 Popcorn | 3 cups popped | 90 | Low | Plain popcorn is a low-potassium snack. | USDA FoodData Central |
| 74 | new | 3 | 🍨 Vanilla ice cream | ½ cup | 130 | Low | Ice cream is low per half cup (but has phosphorus). | USDA FoodData Central |
| 75 | new | 3 | 🧀 Cheddar cheese | 1 oz | 30 | Low | Hard cheese is low in potassium but high in phosphorus and salt. | USDA FoodData Central |
| 76 | new | 3 | 🥛 Yogurt, plain | 6 oz | 350 | High | Yogurt is high in potassium (and phosphorus). | USDA FoodData Central |
| 77 | new | 3 | 🍅 Ketchup | 1 tbsp | 50 | Low | A tablespoon of ketchup is low. Tomato sauce by the cupful is not. | USDA FoodData Central |
| 78 | new | 3 | 🌶️ Salsa | 2 tbsp | 80 | Low | A couple of spoonfuls of salsa are low. A big bowl adds up. | USDA FoodData Central |
| 79 | new | 3 | 🥯 Plain bagel | 1 medium | 100 | Low | A plain bagel is low in potassium. | USDA FoodData Central |
| 80 | new | 3 | 🫓 Flour tortilla | 1 (8 inch) | 60 | Low | Flour tortillas are low in potassium. | USDA FoodData Central |
| 81 | new | 5 | 🧂 Salt substitute (NoSalt, Nu-Salt) | ¼ tsp | 650 | High | Salt substitutes are potassium chloride. This is the most dangerous hidden source: a few shakes can add hundreds of mg. Avoid unless your care team says it is OK. | Product labels / USDA FoodData Central |
| 82 | new | 5 | 🧂 Lite / Lo salt (half salt) | ¼ tsp | 350 | High | 'Lite' salts are about half potassium chloride, so they are high. Use herbs, lemon, or garlic instead. | Product labels |
| 83 | changed | 5 | 🥤 Cola (soda) | 12 oz can | 15 | Low | Cola is low in potassium, but dark colas have phosphoric acid (phosphorus), which matters in kidney disease. | USDA FoodData Central |
| 84 | new | 5 | 🥤 Sports drink (Gatorade-type) | 12 oz | 80 | Low | Most sports drinks are low in potassium, but brands vary. 'Electrolyte' and coconut-based drinks can be much higher. Check the label. | USDA FoodData Central |
| 85 | new | 5 | 🥛 Chocolate milk | 1 cup | 420 | High | Milk plus cocoa makes chocolate milk high in potassium. | USDA FoodData Central |
| 86 | new | 5 | 🥜 Pistachios | 1 oz (about 49) | 290 | High | Pistachios are one of the higher-potassium nuts. | USDA FoodData Central |
| 87 | new | 5 | 🍅 Low-sodium tomato/vegetable juice | 1 cup | 550 | High | 'Low sodium' vegetable juices are often very high in potassium, partly from potassium chloride added to replace salt. | USDA FoodData Central |
| 88 | new | 5 | 🥩 'Enhanced' pork or chicken (solution added) | 3 oz | 400 | High | Meats labeled 'enhanced' or 'contains up to X% solution' may be injected with potassium salts. Check the label for 'potassium'. | Estimate; varies by product label |
| 89 | new | 5 | 🥣 Raisin bran cereal | 1 cup | 360 | High | Bran plus raisins makes this cereal high in potassium. | USDA FoodData Central |
| 90 | new | 5 | 🌴 Medjool dates | 2 dates | 335 | High | Dates are dried fruit, so they are high. | USDA FoodData Central |
| 91 | new | 5 | 🫙 Dried apricots | ¼ cup | 375 | High | Dried apricots are among the highest-potassium fruits. | USDA FoodData Central |
| 92 | new | 5 | 🌿 Artichoke, cooked | 1 medium | 340 | High | Artichokes are high in potassium. | USDA FoodData Central |
| 93 | new | 5 | 🥗 Beets, cooked | ½ cup | 260 | High | Beets are high in potassium. | USDA FoodData Central |
| 94 | new | 5 | 🥬 Swiss chard, cooked | ½ cup | 480 | High | Cooked chard is very high, like cooked spinach. | USDA FoodData Central |
| 95 | new | 5 | 🥤 Oral rehydration drink (Pedialyte-type) | 1 cup | 190 | Moderate | Rehydration drinks contain potassium on purpose. They are moderate per cup but add up over a day. | Product labels |
| 96 | new | 5 | 🍷 Red wine | 5 oz glass | 190 | Moderate | A glass of red wine is moderate in potassium. | USDA FoodData Central |
| 97 | new | 5 | 🍺 Beer | 12 oz | 95 | Low | Regular beer is low in potassium (but counts toward fluids). | USDA FoodData Central |
| 98 | new | 5 | 🥬 Collard greens, cooked | ½ cup | 110 | Low | Surprise: cooked collards are low per half cup, much lower than cooked spinach or chard. | USDA FoodData Central |

## Plates (meal cards; ingredient labels are hidden until the player answers)
| # | Status | Level | Plate | ~mg total | Category | Ingredients (label) | Teaching text |
|---|---|---|---|---|---|---|---|
| 1 | changed | 3 | 🍔 Cheeseburger, fries & cola | 950 | High | Cheeseburger 🍔 (High); Medium French fries 🍟 (High); Ketchup 🍅 (Low); Cola 🥤 (Low) | The fries drive this plate high. The cola is low in potassium but has phosphorus. |
| 2 | kept | 3 | 🍗 Chicken sandwich combo | 730 | Moderate | Fried chicken sandwich 🍗 (High); Small fries 🍟 (High); Pickles 🥒 (Low); Iced tea 🍵 (Low) | Moderate overall. A small fries keeps it out of the high zone; a large would not. |
| 3 | changed | 3 | 🍕 Pepperoni pizza night | 500 | Moderate | 2 slices pepperoni pizza 🍕 (High); Side salad 🥗 (Low); Water 💧 (Low) | Two slices plus a salad land in moderate. A third slice or extra sauce pushes it higher. |
| 4 | changed | 3 | 🌯 Bean burrito plate | 850 | High | Bean burrito 🌯 (High); Rice 🍚 (Low); Salsa 🌶️ (Low) | Beans are the main potassium source here. |
| 5 | kept | 3 | 🌮 Taco night (3 tacos) | 560 | Moderate | 3 beef tacos 🌮 (High); Salsa 🌶️ (Low); Rice 🍚 (Low); Water 💧 (Low) | Moderate. Skip the beans and guacamole to keep it there. |
| 6 | kept | 3 | 🍜 Ramen bowl with spinach | 700 | Moderate | Ramen noodles & broth 🍜 (Moderate); Cooked spinach 🥬 (High); Egg 🍳 (Low) | The cooked spinach adds most of the potassium. Swap it for cabbage or bean sprouts. |
| 7 | kept | 3 | 🍗 Fried chicken & mashed potatoes | 1100 | High | Fried chicken 🍗 (High); Mashed potatoes 🥔 (High); Gravy 🍲 (Low); Green beans 🫛 (Low) | Mashed potatoes are the main driver. |
| 8 | kept | 3 | 🥩 Steak & baked potato | 1500 | High | Steak, 6 oz 🥩 (High); Baked potato 🥔 (High); Butter 🧈 (Low); Side salad 🥗 (Low) | A big steak plus a baked potato is very high. |
| 9 | kept | 3 | 🥞 Pancakes & eggs | 350 | Low | 2 pancakes 🥞 (Low); 2 eggs 🍳 (Low); Apple slices 🍎 (Low); Water 💧 (Low) | Mostly low. Skip the banana topping to keep it low. |
| 10 | new | 3 | 🍝 Spaghetti & meatballs | 750 | Moderate | 1 cup spaghetti 🍝 (Low); ½ cup marinara 🍅 (High); 2 meatballs 🧆 (Moderate); Garlic bread 🍞 (Low) | The marinara sauce is the potassium driver. Olive oil and garlic is a lower sauce. |
| 11 | new | 3 | 🥡 Chicken stir-fry & white rice | 450 | Low | 3 oz chicken 🍗 (Moderate); Peppers & onions 🫑 (Low); 1 cup white rice 🍚 (Low) | Low overall: lean protein, low-potassium vegetables, and white rice. |
| 12 | new | 3 | 🐟 Salmon, sweet potato & spinach | 1285 | High | Salmon 🐟 (High); Baked sweet potato 🍠 (High); Cooked spinach 🥬 (High) | A 'healthy' plate can still be very high in potassium. |
| 13 | new | 3 | 🥪 Turkey sandwich lunch | 350 | Low | Turkey on white bread 🥪 (Moderate); Lettuce 🥗 (Low); Apple slices 🍎 (Low); Water 💧 (Low) | A low-potassium lunch. Watch the salt in deli meat. |
| 14 | new | 3 | 🥫 Chili & cornbread | 950 | High | 1 cup chili with beans 🥫 (High); Cornbread 🍞 (Low); Shredded cheese 🧀 (Low) | Beans and tomato make chili high. |
| 15 | new | 3 | 🥣 Oatmeal breakfast | 320 | Low | Oatmeal 🥣 (Low); Blueberries 🫐 (Low); 1 egg 🍳 (Low); 1 cup coffee ☕ (Low) | A low-potassium breakfast. |
| 16 | new | 3 | 🥤 Banana-orange smoothie & yogurt | 970 | High | Banana 🍌 (High); Orange juice 🧃 (High); Yogurt 🥛 (High) | Smoothies blend several high-potassium foods into one cup. |
| 17 | new | 3 | 🍗 Grilled chicken, rice & green beans | 370 | Low | 3 oz grilled chicken 🍗 (Moderate); White rice 🍚 (Low); Green beans 🫛 (Low) | A simple low-potassium dinner. |
| 18 | new | 3 | 🥑 Chips & guacamole | 820 | High | Tortilla chips 🌮 (Low); ½ cup guacamole 🥑 (High); Salsa 🌶️ (Low) | The guacamole makes this snack high. |
| 19 | new | 3 | 🍛 Chickpea curry & rice | 650 | Moderate | Chickpea curry 🍛 (High); White rice 🍚 (Low); Naan 🫓 (Low) | Moderate thanks to the rice and naan. Adding potatoes would push it high. |
| 20 | new | 3 | 🍲 Lentil soup (2 cups) & bread | 900 | High | 2 cups lentil soup 🍲 (High); Bread roll 🍞 (Low) | Lentils are high, and two cups double it. |
| 21 | new | 3 | 🍳 Egg fried rice & cucumber salad | 300 | Low | Egg fried rice 🍳 (Low); Cucumber salad 🥒 (Low); Tea 🍵 (Low) | Low overall. Go easy on soy sauce for salt. |
| 22 | new | 5 | 🥗 'Power' salad bowl | 1250 | High | 2 cups raw spinach 🥬 (High); ½ avocado 🥑 (High); Tomato 🍅 (Moderate); Black beans 🫘 (High) | Healthy-looking bowls are often very high in potassium. |

Note: ingredient labels on plates now describe the item *as portioned on that plate* (e.g., "Small fries" = High because a small order is still >250 mg).

## "Which is lower?" comparison cards (all new)
| # | Level | A | B | Lower | Teaching text |
|---|---|---|---|---|---|
| 1 | 4 | Baked potato, 1 medium (~900 mg) | Leached potato, ½ cup, boiled & drained (~160 mg) | B | Leaching (peel, dice, boil in lots of water, drain) plus a smaller portion makes a big difference. |
| 2 | 4 | Apple slices, ½ cup (~60 mg) | Banana, 1 medium (~420 mg) | A | The apple is far lower. |
| 3 | 4 | Orange juice, 1 cup (~495 mg) | Cranberry juice cocktail, 1 cup (~45 mg) | B | Cranberry juice cocktail is low; orange juice is high. |
| 4 | 5 | Regular salt, ¼ tsp (~0 mg) | Salt substitute, ¼ tsp (~650 mg) | A | Salt substitutes swap sodium for potassium chloride, which can be dangerous in kidney disease. (Regular salt has its own limits.) |
| 5 | 5 | Cola, 12 oz (~15 mg) | Coconut water, 1 cup (~600 mg) | A | Coconut water is the potassium bomb. Cola is low in potassium but has phosphorus. |
| 6 | 4 | White rice, ½ cup (~30 mg) | Quinoa, ½ cup (~160 mg) | A | White rice is lower than quinoa. |
| 7 | 4 | Pretzels, 1 oz (~40 mg) | Potato chips, 1 oz (~350 mg) | A | Chips are made from potatoes; pretzels are not. |
| 8 | 5 | Raisins, ¼ cup (~270 mg) | Grapes, ½ cup (~145 mg) | B | Same fruit, but drying concentrates the potassium. |
| 9 | 4 | Marinara sauce, ½ cup (~420 mg) | Garlic & olive oil, 2 tbsp (~10 mg) | B | Olive oil and garlic is a low-potassium pasta sauce. |
| 10 | 4 | Cow's milk, 1 cup (~365 mg) | Rice milk (unfortified), 1 cup (~65 mg) | B | Rice milk is much lower. Check labels for added potassium or phosphorus. |
| 11 | 4 | Cooked spinach, ½ cup (~420 mg) | Lettuce, 1 cup (~70 mg) | B | Cooking shrinks spinach into a concentrated serving. |
| 12 | 4 | Kidney beans, ½ cup (~360 mg) | Green beans, ½ cup (~90 mg) | B | Green beans are pods, not dried beans, and are much lower. |
| 13 | 4 | Almonds, 1 oz (~210 mg) | Popcorn, 3 cups (~90 mg) | B | Plain popcorn is the lower-potassium crunchy snack. |
| 14 | 4 | Watermelon, ½ cup (~85 mg) | Cantaloupe, ½ cup (~215 mg) | A | Watermelon is lower than cantaloupe per half cup. |
| 15 | 5 | Regular vegetable juice, 1 cup (~470 mg) | Low-sodium vegetable juice, 1 cup (~900 mg) | A | Surprise: the low-sodium version is often higher, because potassium chloride replaces salt. Both are high. |

## Removed from the original
- "Water is always a safe drink choice" (replaced with fluid-limit wording).
- 🍑 emoji for dried fruit (replaced with 🍇, renamed "Raisins & dried fruit").
- Generic "Dairy (Milk/Yogurt)" card split into Milk (1 cup) and Yogurt (6 oz), both High.
