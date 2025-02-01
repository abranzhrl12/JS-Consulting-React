// database.js (o el nombre que prefieras)

// Nombre de la base de datos y del store
export const DB_NAME = "CategoryDB";
export const STORE_NAME = "categories";

// ---------------------------
// Abrir IndexedDB
export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

// ---------------------------
// Guardar datos en IndexedDB con timestamp (aunque el timestamp ya no se usa para expiración)
export const saveToDB = async (data) => {
  if (!data || data.length === 0) {
    console.warn("⚠️ No se guardarán datos vacíos en IndexedDB.");
    return;
  }

  console.log("💾 Guardando datos en IndexedDB:", data);

  const db = await openDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);

  // Usamos una clave fija ("categories") para almacenar el objeto
  store.put({ id: "categories", data, lastUpdated: Date.now() });

  tx.oncomplete = () =>
    console.log("✅ Datos guardados correctamente en IndexedDB");
  tx.onerror = (event) =>
    console.error("❌ Error guardando en IndexedDB:", event.target.error);
};

// ---------------------------
// Obtener datos de IndexedDB
export const getFromDB = async () => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.get("categories");

    request.onsuccess = () => {
      if (request.result) {
        console.log("📦 Datos obtenidos de IndexedDB:", request.result);
        resolve(request.result);
      } else {
        console.warn("⚠️ No hay datos en IndexedDB.");
        resolve(null);
      }
    };

    request.onerror = (event) => {
      console.error(
        "❌ Error obteniendo datos de IndexedDB:",
        event.target.error
      );
      reject(event.target.error);
    };
  });
};

// ---------------------------
// Borrar datos de IndexedDB
export const clearDB = async () => {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  store.clear();

  tx.oncomplete = () => console.log("🗑️ IndexedDB ha sido limpiado");
  tx.onerror = (event) =>
    console.error("❌ Error limpiando IndexedDB:", event.target.error);
};

// ---------------------------
// Nueva función para sincronizar la data con la API

import axios from "axios";

// Define la URL de la API
const API_URL = "https://api.jsconsulting.pe/category";

/**
 * syncDataWithAPI
 *
 * - Primero obtiene la data almacenada en IndexedDB.
 * - Luego realiza una petición a la API.
 * - Compara la data de la API con la data almacenada (usando JSON.stringify para simplificar).
 * - Si son diferentes (o no hay data almacenada), actualiza IndexedDB con la data nueva.
 * - Si son iguales, no realiza cambios.
 *
 * Esta función se ejecuta cada vez que se abre la página.
 *
 * @returns {Array|null} La data resultante (ya sea la nueva o la almacenada).
 */
export const syncDataWithAPI = async () => {
  // Obtiene la data guardada en IndexedDB
  const dbData = await getFromDB();
  const storedData = dbData ? dbData.data : null;

  try {
    // Realiza la petición a la API
    const response = await axios.get(API_URL);
    const apiData = response.data;

    // Compara la data almacenada con la de la API.
    // (Esta comparación es simple y asume que el orden y la estructura son iguales.)
    if (!storedData || JSON.stringify(storedData) !== JSON.stringify(apiData)) {
      console.log(
        "🔄 La data de la API es diferente. Actualizando IndexedDB..."
      );
      await saveToDB(apiData);
      return apiData;
    } else {
      console.log(
        "✅ La data de la API es idéntica a la almacenada. No se actualiza."
      );
      return storedData;
    }
  } catch (error) {
    console.error("❌ Error al sincronizar con la API:", error);
    // En caso de error, retorna la data almacenada (o null)
    return storedData;
  }
};
