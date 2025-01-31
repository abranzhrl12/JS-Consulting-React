export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("../sw.js")
      .then((registration) => {
        console.log(
          "🔵 Service Worker registrado con éxito:",
          registration.scope
        );
      })
      .catch((err) => {
        console.error("❌ Error registrando Service Worker:", err);
      });
  }
};
