/* K Swipe service worker: precache the app shell so it works offline.
   Bump CACHE_VERSION whenever any cached file changes.
   Fetch strategy: stale-while-revalidate — serve the cached copy immediately,
   then update the cache from the network for the next visit. If the network
   is down, the cached copy (or the precached index.html for navigations) is used. */
const CACHE_VERSION = "k-swipe-v1.2.0";
const ASSETS = [
  "./",
  "./index.html",
  "./privacy.html",
  "./manifest.json",
  "./favicon.ico",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./CREDITS.md",
  "./images/food-almonds.webp",
  "./images/food-apple.webp",
  "./images/food-artichoke.webp",
  "./images/food-asparagus.webp",
  "./images/food-avocado.webp",
  "./images/food-bagel.webp",
  "./images/food-baked-potato.webp",
  "./images/food-banana.webp",
  "./images/food-beans.webp",
  "./images/food-beer.webp",
  "./images/food-beets.webp",
  "./images/food-bell-pepper.webp",
  "./images/food-blueberries.webp",
  "./images/food-bread.webp",
  "./images/food-broccoli.webp",
  "./images/food-brown-rice.webp",
  "./images/food-brussels.webp",
  "./images/food-butternut.webp",
  "./images/food-cabbage.webp",
  "./images/food-canned-peaches.webp",
  "./images/food-canned-soup.webp",
  "./images/food-cantaloupe.webp",
  "./images/food-carrots.webp",
  "./images/food-cauliflower.webp",
  "./images/food-cheese.webp",
  "./images/food-chicken.webp",
  "./images/food-chili.webp",
  "./images/food-chips.webp",
  "./images/food-chocolate-milk.webp",
  "./images/food-coconut-water.webp",
  "./images/food-coffee.webp",
  "./images/food-cola.webp",
  "./images/food-collards.webp",
  "./images/food-corn.webp",
  "./images/food-cranberry-juice.webp",
  "./images/food-cucumber.webp",
  "./images/food-dark-chocolate.webp",
  "./images/food-dried-apricots.webp",
  "./images/food-egg.webp",
  "./images/food-enhanced-pork.webp",
  "./images/food-fries.webp",
  "./images/food-garlic-olive-oil.webp",
  "./images/food-granola.webp",
  "./images/food-grapes.webp",
  "./images/food-green-beans.webp",
  "./images/food-guacamole.webp",
  "./images/food-honeydew.webp",
  "./images/food-hummus.webp",
  "./images/food-ice-cream.webp",
  "./images/food-ketchup.webp",
  "./images/food-kiwi.webp",
  "./images/food-leached-potato.webp",
  "./images/food-lentils.webp",
  "./images/food-lettuce.webp",
  "./images/food-lite-salt.webp",
  "./images/food-low-sodium-veg-juice.webp",
  "./images/food-medjool-dates.webp",
  "./images/food-milk-chocolate.webp",
  "./images/food-milk.webp",
  "./images/food-mushrooms.webp",
  "./images/food-oatmeal.webp",
  "./images/food-oj.webp",
  "./images/food-okra.webp",
  "./images/food-onion.webp",
  "./images/food-orange.webp",
  "./images/food-ors.webp",
  "./images/food-pasta.webp",
  "./images/food-peanut-butter.webp",
  "./images/food-pear.webp",
  "./images/food-pineapple.webp",
  "./images/food-pistachios.webp",
  "./images/food-pizza.webp",
  "./images/food-popcorn.webp",
  "./images/food-pretzels.webp",
  "./images/food-prune-juice.webp",
  "./images/food-quinoa.webp",
  "./images/food-raisin-bran.webp",
  "./images/food-raisins.webp",
  "./images/food-regular-salt.webp",
  "./images/food-rice-milk.webp",
  "./images/food-salmon.webp",
  "./images/food-salsa.webp",
  "./images/food-salt-substitute.webp",
  "./images/food-spinach-cooked.webp",
  "./images/food-spinach-raw.webp",
  "./images/food-sports-drink.webp",
  "./images/food-strawberries.webp",
  "./images/food-sweet-potato.webp",
  "./images/food-swiss-chard.webp",
  "./images/food-tea.webp",
  "./images/food-tomato-sauce.webp",
  "./images/food-tomato.webp",
  "./images/food-tortilla.webp",
  "./images/food-veg-juice.webp",
  "./images/food-water.webp",
  "./images/food-watermelon.webp",
  "./images/food-wheat-bread.webp",
  "./images/food-white-rice.webp",
  "./images/food-wine.webp",
  "./images/food-yogurt.webp",
  "./images/food-zucchini.webp",
  "./images/meal-burger-fries.webp",
  "./images/meal-burrito.webp",
  "./images/meal-chana.webp",
  "./images/meal-chicken-rice.webp",
  "./images/meal-chicken-sandwich.webp",
  "./images/meal-chili-bowl.webp",
  "./images/meal-chips-guac.webp",
  "./images/meal-fried-chicken.webp",
  "./images/meal-fried-rice.webp",
  "./images/meal-lentil-soup.webp",
  "./images/meal-oatmeal-bfast.webp",
  "./images/meal-pancakes.webp",
  "./images/meal-pizza-night.webp",
  "./images/meal-ramen.webp",
  "./images/meal-salad-bowl.webp",
  "./images/meal-salmon-plate.webp",
  "./images/meal-smoothie.webp",
  "./images/meal-spaghetti.webp",
  "./images/meal-steak.webp",
  "./images/meal-stir-fry.webp",
  "./images/meal-tacos.webp",
  "./images/meal-turkey-sandwich.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cached = await caches.match(req, { ignoreSearch: true });
    const network = fetch(req).then((res) => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then((c) => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() => null);
    if (cached) {
      event.waitUntil(network);
      return cached;
    }
    const res = await network;
    if (res) return res;
    if (req.mode === "navigate") {
      const fallback = await caches.match("./index.html");
      if (fallback) return fallback;
    }
    return Response.error();
  })());
});
