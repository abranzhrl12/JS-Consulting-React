// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";

// export const usePaginatedFetch = (baseData, itemsPerPage = 3) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const pageFromURL = parseInt(searchParams.get("page")) || 1; // Página desde la URL

//   const [paginatedData, setPaginatedData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(pageFromURL);
//   const totalPages = Math.ceil(baseData.length / itemsPerPage); // Calcular total de páginas dinámicamente

//   useEffect(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     // Actualizar datos paginados
//     setPaginatedData(baseData.slice(startIndex, endIndex));

//     // Actualizar la URL
//     setSearchParams({ page: currentPage });
//   }, [currentPage, baseData, itemsPerPage, setSearchParams]);

//   const changePage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return { paginatedData, currentPage, totalPages, changePage };
// };
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const usePaginatedFetch = (baseData) => {
  // Función para determinar la cantidad de elementos por página según el ancho de la ventana
  const getItemsPerPage = () => (window.innerWidth >= 1024 ? 9 : 6);

  // Inicializamos itemsPerPage según el ancho actual de la ventana
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

  // Obtenemos el query param "page" de la URL
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromURL = parseInt(searchParams.get("page"), 10) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromURL);

  // Calculamos el total de páginas: si no hay elementos, forzamos 1 página para evitar paginación incorrecta
  const totalPages =
    baseData.length > 0 ? Math.ceil(baseData.length / itemsPerPage) : 1;

  const [paginatedData, setPaginatedData] = useState([]);

  // Actualizamos la data paginada cada vez que cambie la página, el número de items por página o los datos base
  useEffect(() => {
    // Si currentPage es mayor que totalPages (por ejemplo, al cambiar el tamaño de pantalla),
    // reajustamos currentPage a 1
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
      return;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(baseData.slice(startIndex, endIndex));

    // Actualizamos el query param "page" en la URL
    setSearchParams({ page: currentPage });
  }, [currentPage, baseData, itemsPerPage, totalPages, setSearchParams]);

  // Escuchamos el evento de resize para actualizar el número de elementos por página dinámicamente
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = getItemsPerPage();
      setItemsPerPage(newItemsPerPage);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return { paginatedData, currentPage, totalPages, changePage };
};
