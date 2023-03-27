import CacheHelper from './utils/cache-helper';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './icons/restaurant-16.png',
  './icons/restaurant-24.png',
  './icons/restaurant-32.png',
  './icons/restaurant-64.png',
  './icons/restaurant-128.png',
  './icons/restaurant-256.png',
  './icons/restaurant-512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
