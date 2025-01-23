// import { Carousel } from "./Carousel";
import { cursos } from "../../data/dataCursosSlider.js";
import { Carousel } from "./Carousel.jsx";
export const CursoCarousel = () => {
  return (
    <section className="Curso-Carousel">
      <div className="Curso-Carousel__content-title">
        <h2 className="Curso-Carousel__title">
          Cursos Disponibles en Noviembre
        </h2>
      </div>
      <Carousel cursos={cursos} />
    </section>
  );
};
