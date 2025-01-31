import { create } from "zustand";
import axios from "axios";
import { saveToDB, getFromDB, EXPIRATION_TIME } from "../utils/indexedDB";

const API_URL = "https://api.jsconsulting.pe/category";
const AUTH_TOKEN = import.meta.env.VITE_API_AUTH_TOKEN;

// Crear instancia de Axios optimizada
const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: AUTH_TOKEN,
    Connection: "keep-alive",
  },
  timeout: 5000, // Límite de espera de 5s
});

// Variable para almacenar la instancia Singleton
let instance = null;

const createCategoryStore = () =>
  create((set, get) => ({
    categories: [],
    isLoading: false,

    fetchCategories: async () => {
      set({ isLoading: true });

      try {
        console.log("🔄 Verificando datos en IndexedDB...");
        const dbData = await getFromDB();

        // ✅ Si hay datos en IndexedDB y no han expirado, usarlos
        if (
          dbData &&
          dbData.data &&
          dbData.data.length > 0 &&
          Date.now() - dbData.lastUpdated < EXPIRATION_TIME
        ) {
          console.log("⚡ Usando datos cacheados de IndexedDB:", dbData.data);
          set({ categories: dbData.data, isLoading: false });
          return;
        }

        console.log("⏳ Caché expirado o inexistente, llamando a la API...");

        console.time("⏳ Tiempo de respuesta API");
        const response = await api.get("/");
        console.timeEnd("⏳ Tiempo de respuesta API");

        if (!response.data || response.data.length === 0) {
          console.warn(
            "⚠️ La API devolvió datos vacíos. No se guardarán en IndexedDB."
          );
          set({ categories: [], isLoading: false });
          return;
        }

        set({ categories: response.data, isLoading: false });

        // 📌 Guardar datos en IndexedDB para futuras consultas
        await saveToDB(response.data);
        console.log(
          "✅ Datos actualizados en IndexedDB y Zustand:",
          response.data
        );
      } catch (error) {
        console.error(
          "❌ Error obteniendo categorías:",
          error.message || error
        );
        set({ isLoading: false });
      }
    },

    clearCache: async () => {
      set({ categories: [] });
      await saveToDB([]); // Limpiar IndexedDB
      console.log("🗑️ Caché de IndexedDB limpiado");
    },
  }));

const getCategoryStoreInstance = () => {
  if (!instance) {
    console.log("📌 Creando instancia Singleton de CategoryStore");
    instance = createCategoryStore();
  }
  return instance;
};

export default getCategoryStoreInstance;
