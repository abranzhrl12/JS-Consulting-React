import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { usePaginatedFetch } from "../../hooks/usePaginatedFetch";
import { useCourseStore } from "../../store/useCourseStore";

export const SectionCursosServices = () => {
  const { slug } = useParams();
  const pureSlug = slug.split("?")[0];
  const { courses, loading, error, fetchCoursesBySlug } = useCourseStore();

  useEffect(() => {
    if (pureSlug) {
      fetchCoursesBySlug(pureSlug);
    }
  }, [pureSlug, fetchCoursesBySlug]);

  const itemsPerPage = 1;
  const { paginatedData, currentPage, totalPages, changePage } =
    usePaginatedFetch(courses, itemsPerPage);

  if (loading) {
    return (
      <section className="Section-Cursos">
        <div className="Section-Cursos__contentall">
          <h2 className="Section-Cursos__title">Cursos relacionados</h2>
          <div className="Section-Cursos__grid">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="SkeletonCard">
                <div className="SkeletonCard__image" />
                <div className="SkeletonCard__text" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (!courses || courses.length === 0) {
    return <h2>No hay cursos disponibles para este servicio.</h2>;
  }

  return (
    <section className="Section-Cursos" id="SectionCursosAnchor">
      <div className="Section-Cursos__contentall">
        <div className="Section-Cursos__grid">
          {paginatedData.map((course) => (
            <div
              key={course.iIdCurso}
              className="Section-Cursos__card"
              style={{ display: "block" }}
            >
              <Link
                to={`/curso/${course.tUrlSlug}`}
                className="Section-Cursos__card-link"
              >
                <img
                  className="Section-Cursos__card-img"
                  src={course.tImagenUrl}
                  alt={course.tNombre}
                  loading="lazy"
                />
                <p className="Section-Cursos__card-paragraph">
                  {course.tNombre}
                </p>
              </Link>
            </div>
          ))}
        </div>

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
