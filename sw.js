// Montre de Vie — Service Worker
// Version du cache — incrémente pour forcer la mise à jour
var CACHE_VERSION = 'montre-vie-v6';

// Fichiers à mettre en cache pour le mode offline
var CACHE_FILES = [
  '/',
  '/montre/',
  '/grille/',
  '/apropos/',
  '/blog/',
  '/favicon.svg',
  '/icon-512.svg',
  '/manifest.json'
];

// ── INSTALLATION ──────────────────────────────────────────────────────────
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      return cache.addAll(CACHE_FILES);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// ── ACTIVATION ────────────────────────────────────────────────────────────
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) {
          return key !== CACHE_VERSION;
        }).map(function(key) {
          return caches.delete(key);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// ── FETCH — Stratégie : Network first, Cache fallback ─────────────────────
self.addEventListener('fetch', function(e) {
  // Ignore les requêtes non-GET et les APIs externes
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    fetch(e.request)
      .then(function(response) {
        // Si la réponse est valide, on la met en cache
        if (response && response.status === 200) {
          var responseClone = response.clone();
          caches.open(CACHE_VERSION).then(function(cache) {
            cache.put(e.request, responseClone);
          });
        }
        return response;
      })
      .catch(function() {
        // Pas de réseau — on sert depuis le cache
        return caches.match(e.request).then(function(cached) {
          if (cached) return cached;
          // Fallback vers la page montre si rien en cache
          return caches.match('/montre/');
        });
      })
  );
});
