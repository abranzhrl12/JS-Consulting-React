import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const usePaginatedFetch = (baseData, itemsPerPage = 3) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromURL = parseInt(searchParams.get("page")) || 1; // Página desde la URL

  const [paginatedData, setPaginatedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageFromURL);
  const totalPages = Math.ceil(baseData.length / itemsPerPage); // Calcular total de páginas dinámicamente

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Actualizar datos paginados
    setPaginatedData(baseData.slice(startIndex, endIndex));

    // Actualizar la URL
    setSearchParams({ page: currentPage });
  }, [currentPage, baseData, itemsPerPage, setSearchParams]);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return { paginatedData, currentPage, totalPages, changePage };
};
