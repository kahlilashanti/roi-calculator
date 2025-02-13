self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('mantis-roi-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/icons/mantisxr_icon_192x192.png',
                '/icons/mantisxr_icon_512x512.png'
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
