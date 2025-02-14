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
        const dbData = await getFromDB();

        // Si hay datos en IndexedDB, se establecen de inmediato
        if (dbData && dbData.data && dbData.data.length > 0) {
          set({ categories: dbData.data });
        }

        const response = await api.get("/");

        if (!response.data || response.data.length === 0) {
          set({ isLoading: false });
          return;
        }

        const apiData = response.data;

        // Compara la data de la API con la almacenada en IndexedDB
        if (
          !dbData ||
          JSON.stringify(dbData.data) !== JSON.stringify(apiData)
        ) {
          set({ categories: apiData });
          await saveToDB(apiData);
        } else {
        }

        set({ isLoading: false });
      } catch (error) {
        set({ isLoading: false });
      }
    },

    clearCache: async () => {
      set({ categories: [] });
      await saveToDB([]); // Guardamos un array vacío para limpiar la DB
    },
  }));

const getCategoryStoreInstance = () => {
  if (!instance) {
    instance = createCategoryStore();
  }
  return instance;
};

export default getCategoryStoreInstance();
