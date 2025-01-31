const CACHE_NAME = "api-cache-v1";
const API_URL = "https://api.jsconsulting.pe/category";

self.addEventListener("install", (event) => {
  console.log("🛠️ Service Worker instalado");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  console.log("✅ Service Worker activado");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes(API_URL)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
          console.log("⚡ Usando caché del Service Worker:", event.request.url);
          return cachedResponse;
        }

        console.log("⏳ Caché no encontrado, llamando a la API...");
        return fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    );
  }
});
