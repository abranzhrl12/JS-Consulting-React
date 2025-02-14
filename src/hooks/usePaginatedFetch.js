// import { useState, useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";

// export const usePaginatedFetch = (baseData) => {
//   const navigate = useNavigate();
//   const getItemsPerPage = () => (window.innerWidth >= 1024 ? 9 : 6);
//   const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

//   // Get page from URL params
//   const [searchParams] = useSearchParams();
//   const pageFromURL = parseInt(searchParams.get("page"), 10) || 1;
//   const [currentPage, setCurrentPage] = useState(pageFromURL);

//   const totalPages =
//     baseData.length > 0 ? Math.ceil(baseData.length / itemsPerPage) : 1;
//   const [paginatedData, setPaginatedData] = useState([]);

//   // Update paginated data when page changes
//   useEffect(() => {
//     if (currentPage > totalPages && totalPages > 0) {
//       setCurrentPage(1);
//       return;
//     }

//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     setPaginatedData(baseData.slice(startIndex, endIndex));

//     // Update URL with new page number using navigate instead of setSearchParams
//     const newURL = new URL(window.location.href);
//     newURL.searchParams.set("page", currentPage);
//     navigate(`?${newURL.searchParams.toString()}`, { replace: false });
//   }, [currentPage, baseData, itemsPerPage, totalPages, navigate]);

//   // Listen for URL changes to update the current page
//   useEffect(() => {
//     const handlePopState = () => {
//       const params = new URLSearchParams(window.location.search);
//       const page = parseInt(params.get("page"), 10) || 1;
//       setCurrentPage(page);
//     };

//     window.addEventListener("popstate", handlePopState);
//     return () => window.removeEventListener("popstate", handlePopState);
//   }, []);

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       const newItemsPerPage = getItemsPerPage();
//       setItemsPerPage(newItemsPerPage);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const changePage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return { paginatedData, currentPage, totalPages, changePage };
// };

// // SectionCursosServices.jsx
// export const SectionCursosServices = () => {
//   const { slug } = useParams();
//   const pureSlug = slug.split("?")[0];
//   const { courses, loading, error, fetchCoursesBySlug } = useCourseStore();

//   useEffect(() => {
//     if (pureSlug) {
//       fetchCoursesBySlug(pureSlug);
//     }
//   }, [pureSlug, fetchCoursesBySlug]);

//   const { paginatedData, currentPage, totalPages, changePage } =
//     usePaginatedFetch(courses);
// };
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export const usePaginatedFetch = (baseData) => {
  const navigate = useNavigate();
  const getItemsPerPage = () => (window.innerWidth >= 1024 ? 9 : 6);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

  const [searchParams] = useSearchParams();
  const pageFromURL = parseInt(searchParams.get("page"), 10) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromURL);

  const totalPages =
    baseData.length > 0 ? Math.ceil(baseData.length / itemsPerPage) : 1;
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
      return;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(baseData.slice(startIndex, endIndex));

    // Mantenemos los parámetros existentes y solo actualizamos 'page'
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set("page", currentPage);
    navigate(`?${currentParams.toString()}`, {
      replace: true, // Usamos replace para no crear entradas adicionales en el historial
      preventScrollReset: true, // Evitamos el scroll automático
    });
  }, [currentPage, baseData, itemsPerPage, totalPages, navigate]);

  // Manejador mejorado para cambios en la URL
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const page = parseInt(params.get("page"), 10) || 1;
      setCurrentPage(page);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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
      // Opcional: Scroll suave al cambiar de página manualmente
      document.getElementById("SectionCursosAnchor")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return { paginatedData, currentPage, totalPages, changePage };
};
