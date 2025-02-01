// categoryStore.js
import create from "zustand";
import { getFromDB, syncDataWithAPI } from "../utils/indexedDB";

const useCategoryStore = create((set) => ({
  categories: [],
  // Otras propiedades...

  loadData: async () => {
    // Carga inmediata desde IndexedDB
    const storedResult = await getFromDB();
    if (storedResult) {
      set({ categories: storedResult.data });
    }
    // Sincronización con la API en segundo plano
    const syncedData = await syncDataWithAPI();
    // Actualiza el estado (puedes agregar lógica adicional para comparar y evitar actualizaciones innecesarias)
    set({ categories: syncedData });
  },
}));

export default useCategoryStore;
