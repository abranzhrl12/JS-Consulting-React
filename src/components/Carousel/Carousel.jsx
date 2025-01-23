import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { CarouselItemCursos } from "../CarouselItemCursos/CarouselItemCursos";

export const Carousel = ({ cursos }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);

  // Efecto para actualizar Swiper cuando los botones están listos
  useEffect(() => {
    if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [cursos]); // Ejecuta cuando cambien los cursos o el componente se monte

  // Efecto para redimensionamiento
  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current) {
        swiperRef.current.update();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Curso-Carousel__slider">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        pagination={{ clickable: true }}
        loop={true}
        observer={true} // ¡Importante!
        observeParents={true} // ¡Importante!
      >
        {cursos.map((curso) => (
          <SwiperSlide key={curso.id}>
            <CarouselItemCursos curso={curso} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones con rutas corregidas */}
      <button
        ref={prevButtonRef}
        className="Curso-Carousel__slider-arrowLeft"
        aria-label="Ver curso anterior"
      >
        <img
          src="/assets/home/arrowLeftIconcardplantilla.svg" // Ruta corregida
          alt="Flecha hacia la izquierda"
        />
      </button>
      <button
        ref={nextButtonRef}
        className="Curso-Carousel__slider-arrowRigth"
        aria-label="Ver curso siguiente"
      >
        <img
          src="/assets/home/arrowrigthIconcardplantilla.svg" // Ruta corregida
          alt="Flecha hacia la derecha"
        />
      </button>
    </div>
  );
};
