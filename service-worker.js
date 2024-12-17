self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('ACCAPP-v1').then((cache) => {
            return cache.addAll([
                './index.html',
                './home.html',
                './style.css',
                './script.js',
                './manifest.json',
                './favicon.ico'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
