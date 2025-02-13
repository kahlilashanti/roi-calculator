self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('mantis-roi-cache').then(cache => {
            return cache.addAll([
                './',  // Root
                './index.html',
                './manifest.json',
                './script.js',
                './icons/mantisxr_icon_black_192x192.png',
                './icons/mantisxr_icon_black_512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

