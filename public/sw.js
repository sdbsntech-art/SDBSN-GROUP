const CACHE_NAME = 'sdbsnx-static-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo/sdbsnx-logo.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// Install: pre-cache static shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: Never cache admin routes, API endpoints, or Supabase calls
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // STRICT EXCLUSION: Do not cache admin, API, or external DB calls
  if (
    url.pathname.startsWith('/admin') ||
    url.pathname.startsWith('/api/') ||
    url.hostname.includes('supabase.co') ||
    event.request.method !== 'GET'
  ) {
    return;
  }

  // Network first with fallback to cache for public navigation
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Cache valid responses for static assets
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          (url.pathname.startsWith('/assets/') || url.pathname.startsWith('/logo/') || url.pathname.endsWith('.png') || url.pathname.endsWith('.svg'))
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(async () => {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }
        // If navigating HTML, return cached index
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('/index.html');
        }
        return new Response('Network error (offline)', { status: 503, statusText: 'Offline' });
      })
  );
});

