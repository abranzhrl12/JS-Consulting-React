import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { App } from "./App";
import useCategoryStore from "./store/categoryStore";
import { registerServiceWorker } from "/public/workers/swRegister.js";

// 📌 Registrar el Service Worker
registerServiceWorker();

// 📌 Obtener datos antes de renderizar la app
const fetchData = async () => {
  console.log("🔄 Verificando datos en caché...");

  const store = useCategoryStore.getState(); // ✅ Asegurar que obtenemos el store

  if (store.categories && store.categories.length > 0) {
    console.log("✅ Datos ya en Zustand, evitando carga innecesaria.");
    return;
  }

  await useCategoryStore.getState().fetchCategories(); // ✅ Llamar correctamente a `fetchCategories()`
  console.log("✅ Datos listos:", useCategoryStore.getState().categories);
};

// 📌 Esperar que los datos se carguen antes de renderizar
fetchData().then(() => {
  console.log("🚀 Renderizando la aplicación...");
  createRoot(document.getElementById("root")).render(<App />);
});
