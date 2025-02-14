// registerServiceWorker.js
export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./workers/swRegister.js") // Asegúrate de que este sea el path correcto a tu service worker (por ejemplo, sw.js en la carpeta public)
      .then((registration) => {})
      .catch((err) => {});
  }
};
