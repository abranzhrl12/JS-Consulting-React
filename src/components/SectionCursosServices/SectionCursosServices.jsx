// import { useParams } from "react-router-dom";
// import { usePaginatedFetch } from "../../hooks/usePaginatedFetch";
// import { coursesData } from "../../data/CoursesServices";

// export const SectionCursosServices = () => {
//   const { serviceId } = useParams();

//   const service = coursesData.find(
//     (service) => service.serviceId === serviceId
//   );

//   // Valores predeterminados si el servicio no existe
//   const itemsPerPage = service ? service.itemsPerPage : 1; // Elementos por página
//   const allCourses = service ? service.courses : []; // Cursos del servicio o vacío

//   // Llamar al hook de paginación siempre, sin condiciones
//   const { paginatedData, currentPage, totalPages, changePage } =
//     usePaginatedFetch(
//       allCourses, // Siempre pasar cursos (vacío si no hay servicio)
//       itemsPerPage // Elementos por página
//     );

//   // Validar si el servicio no existe
//   if (!service) {
//     return <h2>Error: No se encontró el servicio solicitado.</h2>;
//   }

//   // Verificar si hay cursos paginados
//   if (!paginatedData || paginatedData.length === 0) {
//     return <h2>No hay cursos disponibles para este servicio.</h2>;
//   }

//   return (
//     <section className="Section-Cursos">
//       <div className="Section-Cursos__contentall">
//         <h2 className="Section-Cursos__title">Cursos relacionados</h2>
//         <div className="Section-Cursos__grid">
//           {paginatedData.map((course) => (
//             <div key={course.id} className="Section-Cursos__card">
//               <img
//                 className="Section-Cursos__card-img"
//                 src={course.image}
//                 alt={course.alt}
//                 loading="lazy"
//               />
//               <p className="Section-Cursos__card-paragraph">{course.title}</p>
//             </div>
//           ))}
//         </div>

//         {/* Paginación Numérica */}
//         <div className="Section-Cursos__pagination">
//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => changePage(index + 1)} // Cambiar página al hacer clic
//               className={`Section-Cursos__pagination-btn ${
//                 currentPage === index + 1 ? "active" : "" // Agregar clase "active" si es la página actual
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
import { Link } from "react-router-dom"; // Importamos el Link
import { useParams } from "react-router-dom";
import { usePaginatedFetch } from "../../hooks/usePaginatedFetch";
import { coursesData } from "../../data/CoursesServices";

export const SectionCursosServices = () => {
  const { serviceId } = useParams();

  const service = coursesData.find(
    (service) => service.serviceId === serviceId
  );

  const itemsPerPage = service ? service.itemsPerPage : 1;
  const allCourses = service ? service.courses : [];

  const { paginatedData, currentPage, totalPages, changePage } =
    usePaginatedFetch(allCourses, itemsPerPage);

  if (!service) {
    return <h2>Error: No se encontró el servicio solicitado.</h2>;
  }

  if (!paginatedData || paginatedData.length === 0) {
    return <h2>No hay cursos disponibles para este servicio.</h2>;
  }

  return (
    <section className="Section-Cursos">
      <div className="Section-Cursos__contentall">
        <h2 className="Section-Cursos__title">Cursos relacionados</h2>
        <div className="Section-Cursos__grid">
          {paginatedData.map((course) => (
            <div
              key={course.id}
              className="Section-Cursos__card"
              style={{ display: "block" }}
            >
              <Link
                to={`/servicios/${serviceId}/${course.slug}`} // Enlace dinámico con el slug
                className="Section-Cursos__card-link"
              >
                <img
                  className="Section-Cursos__card-img"
                  src={course.image}
                  alt={course.alt}
                  loading="lazy"
                />
                <p className="Section-Cursos__card-paragraph">{course.title}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div className="Section-Cursos__pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => changePage(index + 1)}
              className={`Section-Cursos__pagination-btn ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
