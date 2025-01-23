import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ModalidadItem } from "../ModalidadItem/ModalidadItem";
import { modalidades } from "/src/data/dataModalidades.js";

export const Modalidades = () => {
  return (
    <section className="Modalidades" id="modalidades">
      <h2 className="Modalidades__title">Modalidades</h2>
      <div
        className="Modalidades__Carrousel"
        aria-label="Tipos de Modalidades Disponibles"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".Modalidades__dots",
            bulletClass: "Modalidades__dot",
            bulletActiveClass: "Modalidades__dot-active",
          }}
          spaceBetween={20}
          slidesPerView="auto"
          className="Modalidades__Contenido"
        >
          {modalidades.map((item) => (
            <SwiperSlide key={item.text} style={{ width: "auto" }}>
              <ModalidadItem
                imgSrc={item.imgSrc}
                altText={item.altText}
                text={item.text}
              />
            </SwiperSlide>
          ))}

          <div className="Modalidades__dots"></div>
        </Swiper>
      </div>
    </section>
  );
};
