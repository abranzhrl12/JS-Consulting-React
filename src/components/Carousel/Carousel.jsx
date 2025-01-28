// import { useRef, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";
// import { CarouselItemCursos } from "../CarouselItemCursos/CarouselItemCursos";

// export const Carousel = ({ cursos }) => {
//   const prevButtonRef = useRef(null);
//   const nextButtonRef = useRef(null);
//   const swiperRef = useRef(null);

//   // Efecto para actualizar Swiper cuando los botones están listos
//   useEffect(() => {
//     if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
//       swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
//       swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
//       swiperRef.current.navigation.init();
//       swiperRef.current.navigation.update();
//     }
//   }, [cursos]); // Ejecuta cuando cambien los cursos o el componente se monte

//   // Efecto para redimensionamiento
//   useEffect(() => {
//     const handleResize = () => {
//       if (swiperRef.current) {
//         swiperRef.current.update();
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="Curso-Carousel__slider">
//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         modules={[Navigation, Pagination]}
//         spaceBetween={0}
//         slidesPerView={1}
//         navigation={{
//           prevEl: prevButtonRef.current,
//           nextEl: nextButtonRef.current,
//         }}
//         pagination={{ clickable: true }}
//         loop={true}
//         observer={true} // ¡Importante!
//         observeParents={true} // ¡Importante!
//       >
//         {cursos.map((curso) => (
//           <SwiperSlide key={curso.id}>
//             <CarouselItemCursos curso={curso} />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Botones con rutas corregidas */}
//       <button
//         ref={prevButtonRef}
//         className="Curso-Carousel__slider-arrowLeft"
//         aria-label="Ver curso anterior"
//       >
//         <img
//           src="/assets/home/arrowLeftIconcardplantilla.svg" // Ruta corregida
//           alt="Flecha hacia la izquierda"
//         />
//       </button>
//       <button
//         ref={nextButtonRef}
//         className="Curso-Carousel__slider-arrowRigth"
//         aria-label="Ver curso siguiente"
//       >
//         <img
//           src="/assets/home/arrowrigthIconcardplantilla.svg" // Ruta corregida
//           alt="Flecha hacia la derecha"
//         />
//       </button>
//     </div>
//   );
// };
import { useRef, useEffect, useState } from "react";
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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll("img");
      let loadedImages = 0;

      images.forEach((img) => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.onload = () => {
            loadedImages++;
            if (loadedImages === images.length) {
              setImagesLoaded(true);
            }
          };
        }
      });
    };

    // Verifica cuando las imágenes se cargan
    checkImagesLoaded();

    return () => {
      setImagesLoaded(false);
    };
  }, [cursos]);

  // Efecto para actualizar Swiper después de que las imágenes se carguen
  useEffect(() => {
    if (swiperRef.current && imagesLoaded) {
      swiperRef.current.update(); // Actualiza el Swiper cuando las imágenes están listas
    }
  }, [imagesLoaded]);

  // Efecto para actualizar los botones de navegación
  useEffect(() => {
    if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [cursos]);

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
          <SwiperSlide key={curso.id}>
            <CarouselItemCursos curso={curso} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones de navegación */}
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
