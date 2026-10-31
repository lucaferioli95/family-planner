// Service worker for the Family Meal Planner.
//
// Two jobs:
//  1. Keep the app shell (page, icons) available offline, so it still opens
//     with no signal — useful in a shop with poor reception.
//  2. Keep the most recent copy of the planner data from Supabase, so the
//     shopping list and meal plan are readable offline. Writes still need a
//     connection; the app shows its normal save-error state when offline.

const SHELL_CACHE = 'meal-planner-shell-v5';
const DATA_CACHE = 'meal-planner-data-v5';

const SHELL_FILES = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-180.png'
];

self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(SHELL_CACHE).then(function (cache) {
      // addAll fails the whole install if any single file 404s, so add
      // them individually and tolerate misses.
      return Promise.all(SHELL_FILES.map(function (url) {
        return cache.add(url).catch(function () { return null; });
      }));
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== SHELL_CACHE && k !== DATA_CACHE) return caches.delete(k);
        return null;
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

// The page asks for this when someone signs out, so the last copy of the
// planner does not sit in the cache after they have gone.
self.addEventListener('message', function (event) {
  if (!event.data || event.data.type !== 'forget-data') return;
  event.waitUntil(caches.delete(DATA_CACHE));
});

self.addEventListener('fetch', function (event) {
  const req = event.request;
  const url = new URL(req.url);

  // Only GETs are cacheable. Saves (PATCH/POST) always go to the network.
  if (req.method !== 'GET') return;

  // Anything to do with signing in must never be cached or replayed: a stale
  // token response would hand someone a session they no longer have.
  if (url.pathname.indexOf('/auth/v1/') !== -1) return;

  const isData = url.hostname.indexOf('supabase.co') !== -1;

  if (isData) {
    // Network first, fall back to the last good copy so the planner still
    // opens offline with whatever was last seen.
    event.respondWith(
      fetch(req).then(function (res) {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(DATA_CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || new Response('[]', {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        });
      })
    );
    return;
  }

  // The page itself (and anything else from this site): NETWORK FIRST.
  // Always try to get the latest deploy; only fall back to the cached copy
  // when offline. Cache-first here meant every deploy showed the previous
  // version until the app was reopened.
  const isPage = req.mode === 'navigate' || /\.html$/.test(url.pathname) || url.pathname === '/' || url.pathname.endsWith('/');
  event.respondWith(
    fetch(req, isPage ? { cache: 'no-store' } : undefined).then(function (res) {
      if (res && res.ok && url.origin === self.location.origin) {
        const copy = res.clone();
        caches.open(SHELL_CACHE).then(function (c) { c.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) {
        return hit || caches.match('./index.html');
      });
    })
  );
});
