import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { CarouselItemCursos } from "../CarouselItemCursos/CarouselItemCursos";
import useCarouselStore from "../../store/useCarouselStore";

export const Carousel = () => {
  const { cursos, loading, error, fetchCursos } = useCarouselStore();
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    fetchCursos();
  }, [fetchCursos]);

  useEffect(() => {
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll("img");
      let loadedImages = 0;

      const handleLoad = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          setImagesLoaded(true);
        }
      };

      images.forEach((img) => {
        if (img.complete) handleLoad();
        else img.addEventListener("load", handleLoad);
      });

      return () =>
        images.forEach((img) => img.removeEventListener("load", handleLoad));
    };

    if (cursos.length > 0) checkImagesLoaded();
  }, [cursos]);

  useEffect(() => {
    if (swiperRef.current && imagesLoaded) {
      swiperRef.current.update();
    }
  }, [imagesLoaded]);

  useEffect(() => {
    if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [cursos]);

  if (loading) return <div className="loading">Cargando cursos...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="Curso-Carousel__slider">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        pagination={{ clickable: true }}
        loop={true}
        observer={true}
        observeParents={true}
      >
        {cursos.map((curso) => (
          <SwiperSlide key={curso.iIdCurso}>
            <CarouselItemCursos curso={curso} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevButtonRef}
        className="Curso-Carousel__slider-arrowLeft"
        aria-label="Ver curso anterior"
      >
        <img
          src="/assets/home/arrowLeftIconcardplantilla.svg"
          alt="Flecha hacia la izquierda"
        />
      </button>
      <button
        ref={nextButtonRef}
        className="Curso-Carousel__slider-arrowRigth"
        aria-label="Ver curso siguiente"
      >
        <img
          src="/assets/home/arrowrigthIconcardplantilla.svg"
          alt="Flecha hacia la derecha"
        />
      </button>
    </div>
  );
};
