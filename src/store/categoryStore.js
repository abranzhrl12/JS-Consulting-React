import { create } from "zustand";
import axios from "axios";
import { saveToDB, getFromDB } from "../utils/indexedDB"; // Se elimina EXPIRATION_TIME

const API_URL = "https://api.jsconsulting.pe/category/get";
// const AUTH_TOKEN = import.meta.env.VITE_API_AUTH_TOKEN;

// Crear instancia de Axios optimizada
const api = axios.create({
  baseURL: API_URL,
  headers: {
    // Authorization: AUTH_TOKEN,
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

        // Si hay datos en IndexedDB, se establecen de inmediato
        if (dbData && dbData.data && dbData.data.length > 0) {
          console.log("⚡ Usando datos cacheados de IndexedDB:", dbData.data);
          set({ categories: dbData.data });
        }

        console.log("⏳ Llamando a la API para sincronizar datos...");
        console.time("⏳ Tiempo de respuesta API");
        const response = await api.get("/");
        console.timeEnd("⏳ Tiempo de respuesta API");

        if (!response.data || response.data.length === 0) {
          console.warn(
            "⚠️ La API devolvió datos vacíos. No se actualizan los datos."
          );
          set({ isLoading: false });
          return;
        }

        const apiData = response.data;

        // Compara la data de la API con la almacenada en IndexedDB
        if (
          !dbData ||
          JSON.stringify(dbData.data) !== JSON.stringify(apiData)
        ) {
          console.log(
            "✅ Datos diferentes. Actualizando IndexedDB y estado..."
          );
          set({ categories: apiData });
          await saveToDB(apiData);
        } else {
          console.log(
            "✅ La data de la API es idéntica a la almacenada. No se actualiza."
          );
        }

        set({ isLoading: false });
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
      await saveToDB([]); // Guardamos un array vacío para limpiar la DB
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

export default getCategoryStoreInstance();
// import { create } from "zustand";
// import axios from "axios";
// import { saveToDB, getFromDB } from "../utils/indexedDB"; // IndexedDB para caché

// const API_URL = "https://api.jsconsulting.pe/category"; // URL base correcta

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     // Authorization: import.meta.env.VITE_API_AUTH_TOKEN, // Descomentar si se usa autenticación
//   },
//   timeout: 5000, // Límite de espera de 5s
// });

// const useCategoryStore = create((set, get) => ({
//   categories: [],
//   isLoading: false,
//   error: null,

//   fetchCategories: async () => {
//     set({ isLoading: true, error: null });

//     try {
//       console.log("🔄 Verificando datos en IndexedDB...");
//       const dbData = await getFromDB();

//       if (dbData?.data?.length) {
//         console.log("⚡ Usando datos cacheados de IndexedDB:", dbData.data);
//         set({ categories: dbData.data, isLoading: false });
//         return;
//       }

//       console.log("⏳ Llamando a la API...");
//       console.time("⏳ Tiempo de respuesta API");
//       const response = await api.get("/get"); // ✅ Corrección de la ruta
//       console.timeEnd("⏳ Tiempo de respuesta API");

//       if (!response.data?.length) {
//         console.warn("⚠️ La API devolvió datos vacíos.");
//         set({ isLoading: false });
//         return;
//       }

//       console.log("✅ Datos obtenidos, actualizando IndexedDB y estado...");
//       set({ categories: response.data });
//       await saveToDB(response.data);
//     } catch (error) {
//       console.error("❌ Error obteniendo categorías:", error.message || error);
//       set({ error: error.message || "Error desconocido", isLoading: false });
//     } finally {
//       set({ isLoading: false });
//     }
//   },

//   clearCache: async () => {
//     set({ categories: [] });
//     await saveToDB([]); // Limpia la caché en IndexedDB
//     console.log("🗑️ Caché de IndexedDB limpiado");
//   },
// }));

// export default useCategoryStore;
