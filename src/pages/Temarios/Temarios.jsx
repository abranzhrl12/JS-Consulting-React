import { ContainerTemario } from "../../container/ContainerTemario/ContainerTemario";
import { ContainerTemarioDetail } from "../../container/ContainerTemarioDetail/ContainerTemarioDetail";
import { HeaderTemario } from "../../components/HeaderTemario/HeaderTemario";
import { useCourseStoreDetail } from "../../store/useCourseStoreDetail"; // Importamos Zustand
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Temarios = () => {
  const { slug } = useParams(); // Obtener el slug de la URL
  const { course, loading, error, fetchCourseBySlug } = useCourseStoreDetail();

  useEffect(() => {
    fetchCourseBySlug(slug); // Cargar los datos del curso al montar el componente

    // Esperar un poco para asegurar que el DOM ya renderizó el header
    setTimeout(() => {
      const headerElement = document.getElementById("headerTemario");
      if (headerElement) {
        headerElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  }, [slug, fetchCourseBySlug]);

  useEffect(() => {
    fetchCourseBySlug(slug); // Cargar los datos del curso al montar el componente
  }, [slug, fetchCourseBySlug]);

  return (
    <>
      {/* ✅ El HeaderTemario SIEMPRE se renderiza */}
      <HeaderTemario
        title={course?.tNombre || ""}
        banner={course?.tBannerUrl || "/default-banner.jpg"}
        tDescripcion={course?.tDescripcion || "Cargando descripción..."}
        loading={loading} // Activa el skeleton
      />

      {/* ⚠️ Mostrar error si existe */}
      {error && <h2>{error}</h2>}

      {/* ⚠️ Mostrar mensaje si el curso no existe y no está cargando */}
      {!loading && !course && <h2>Curso no encontrado</h2>}

      {/* ✅ Mostrar contenido SOLO cuando haya datos */}
      {!loading && course ? (
        <>
          <ContainerTemarioDetail detalles={course.detalles} />
          <ContainerTemario
            contenidoHtml={course.tHtml}
            tNombre={course.tNombre}
            imageurl={course.tCertificadoUrl}
          />
        </>
      ) : (
        <h2></h2> // Placeholder mientras carga
      )}
    </>
  );
};
