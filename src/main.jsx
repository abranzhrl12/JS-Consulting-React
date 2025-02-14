import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { App } from "./App";
import useCategoryStore from "./store/categoryStore";
import { registerServiceWorker } from "/public/sw.js";

// // 📌 Registrar el Service Worker
registerServiceWorker();

// 📌 Función para cargar y sincronizar los datos
const fetchData = async () => {
  // Siempre se llama a fetchCategories para que realice la carga inicial
  // y la sincronización en segundo plano con la API.
  await useCategoryStore.getState().fetchCategories();
};

// 📌 Esperar a que los datos se carguen antes de renderizar
fetchData().then(() => {
  createRoot(document.getElementById("root")).render(<App />);
});
