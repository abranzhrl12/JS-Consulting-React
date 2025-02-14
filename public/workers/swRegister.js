const CACHE_NAME = "api-cache-v1";
const API_URL = "https://api.jsconsulting.pe/category";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes(API_URL)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          // Lanza la petición a la red para actualizar el cache
          const networkFetch = fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.ok) {
                cache.put(event.request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch((error) => {
              return cachedResponse;
            });
          // Devuelve la respuesta cacheada inmediatamente, o si no existe, la respuesta de red
          return cachedResponse || networkFetch;
        });
      })
    );
  }
});
