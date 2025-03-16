const CACHE_NAME = 'counter-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js',
  '/icon-192.png',
  '/icon-512.png'
];

// インストール時にキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// リクエスト時にキャッシュを返す
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
