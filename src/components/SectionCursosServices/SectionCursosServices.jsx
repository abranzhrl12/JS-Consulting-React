import { useParams } from "react-router-dom";
import { courses } from "../../data/CoursesServices";

export const SectCursosDinamicos = () => {
  const { serviceId } = useParams(); // Obtener el parámetro de la URL

  // Filtrar los cursos que pertenecen al `serviceId`
  const relatedCourses = courses.filter(
    (course) => course.serviceId === serviceId
  );

  if (relatedCourses.length === 0) {
    return <h2>No hay cursos disponibles para este servicio.</h2>; // Manejar caso de error o datos vacíos
  }

  return (
    <section className="Section-Cursos">
      <div className="Section-Cursos__contentall">
        <h2 className="Section-Cursos__title">Cursos relacionados</h2>
        <div className="Section-Cursos__grid">
          {relatedCourses.map((course) => (
            <div key={course.id} className="Section-Cursos__card">
              <img
                className="Section-Cursos__card-img"
                src={course.image}
                alt={course.alt}
                loading="lazy"
              />
              <p className="Section-Cursos__card-paragraph">{course.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
