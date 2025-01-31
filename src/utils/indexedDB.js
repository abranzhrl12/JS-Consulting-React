export const DB_NAME = "CategoryDB";
export const STORE_NAME = "categories";
export const EXPIRATION_TIME = 5 * 60 * 1000; // 5 minutos en milisegundos

// 📌 Abrir IndexedDB
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

// 📌 Guardar datos en IndexedDB con timestamp
export const saveToDB = async (data) => {
  if (!data || data.length === 0) {
    console.warn("⚠️ No se guardarán datos vacíos en IndexedDB.");
    return;
  }

  console.log("💾 Guardando datos en IndexedDB:", data);

  const db = await openDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);

  store.put({ id: "categories", data, lastUpdated: Date.now() });

  tx.oncomplete = () =>
    console.log("✅ Datos guardados correctamente en IndexedDB");
  tx.onerror = (event) =>
    console.error("❌ Error guardando en IndexedDB:", event.target.error);
};

// 📌 Obtener datos de IndexedDB
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
        resolve(null); // Retorna null en lugar de undefined
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

// 📌 Borrar datos de IndexedDB
export const clearDB = async () => {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  store.clear();

  tx.oncomplete = () => console.log("🗑️ IndexedDB ha sido limpiado");
  tx.onerror = (event) =>
    console.error("❌ Error limpiando IndexedDB:", event.target.error);
};
