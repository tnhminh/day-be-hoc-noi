const CACHE_NAME = 'be-hoc-noi-3d-v3';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/admin.html',
  '/admin.css',
  '/admin.js',
  '/model-viewer.min.js',
  '/manifest.webmanifest',
  '/icon.svg',
  '/favicon.svg',
  '/models/duck.glb',
  '/models/fox.glb',
  '/models/fish.glb',
  '/models/apple.glb',
  '/models/robot.glb'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

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
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // For API or health endpoints, always network
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/healthz')) {
    return;
  }

  // Cache-First strategy for static models, audio, and vendor scripts
  if (
    url.pathname.startsWith('/models/') ||
    url.pathname.startsWith('/audio/') ||
    url.pathname.startsWith('/audio_central/') ||
    url.pathname.startsWith('/audio_south/') ||
    url.pathname.endsWith('.glb') ||
    url.pathname.endsWith('.mp3') || url.pathname.endsWith('.wav')
  ) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(event.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        });
      })
    );
    return;
  }

  // Stale-While-Revalidate for HTML, CSS, JS
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((network) => {
          if (network && network.status === 200) {
            const copy = network.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return network;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
