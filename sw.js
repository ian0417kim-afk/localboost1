const CACHE_NAME = 'jeju-stay-v1';
const ASSETS = [
  '/localboost1/',
  '/localboost1/index.html',
  '/localboost1/manifest.json',
  '/localboost1/icon-192.png',
  '/localboost1/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
