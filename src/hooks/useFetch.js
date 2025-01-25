import { useState, useEffect } from "react";

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null); // Datos de la API
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Errores de la API

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        setData(result); // Guardar los datos
      } catch (err) {
        setError(err.message); // Capturar errores
      } finally {
        setLoading(false); // Finalizar estado de carga
      }
    };

    if (url) {
      fetchData();
    }
  }, [url, options]);

  return { data, loading, error };
};
