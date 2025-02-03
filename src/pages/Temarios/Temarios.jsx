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
  }, [slug, fetchCourseBySlug]);

  if (loading) return <h2>Cargando...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!course) return <h2>Curso no encontrado</h2>;

  return (
    <>
      {/* Pasamos los datos del curso como props */}
      <HeaderTemario
        title={course.tNombre}
        banner={course.tBannerUrl}
        tDescripcion={course.tDescripcion}
      />
      <ContainerTemarioDetail detalles={course.detalles} />

      <ContainerTemario contenidoHtml={course.tHtml} tNombre={course.tNombre} />
    </>
  );
};
