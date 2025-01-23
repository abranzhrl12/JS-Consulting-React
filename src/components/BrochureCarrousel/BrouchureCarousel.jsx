import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { brochures } from "/src/data/dataBrochure.js";
import { BrochureItem } from "../BrochureItem/BrochureItem";
export const BrochureCarousel = () => {
  return (
    <section className="Brouchure" aria-label="Sección de Brochures">
      <div className="Brouchure__Carrousel swiper-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          slidesPerView="auto"
          //   slidesPerView={1}
          //   navigation
          //   pagination={{ clickable: true }}
          loop={false}
          //   breakpoints={{
          //     640: { slidesPerView: 1 },
          //     768: { slidesPerView: 2 },
          //     1024: { slidesPerView: 3 },
          //   }}
        >
          {brochures.map((brochure) => (
            <SwiperSlide
              className="Brouchure__Contenido"
              key={brochure.id}
              style={{ width: "auto" }} // Ajusta el ancho según el contenido
            >
              <BrochureItem brochure={brochure} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
