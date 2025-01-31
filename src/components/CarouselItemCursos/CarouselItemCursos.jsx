export const CarouselItemCursos = ({ curso }) => {
  return (
    <article
      className="Curso-Carousel__contenido"
      aria-label={`Curso de ${curso.title}`}
    >
      <div className="curso-plantilla">
        <div className="curso-plantilla__titulo-principal">
          <h3 className="curso-plantilla__titulo-texto">{curso.title}</h3>
          <img
            src="/assets/home/cursolinesred.svg"
            alt=""
            className="curso-plantilla__titulo-imagen"
          />
        </div>
        <div className="curso-plantilla__content-central">
          <div className="curso-plantilla__flexcontent">
            <div className="curso-plantilla__mode">
              <span>Modalidad:</span>
              <span>{curso.modalidad}</span>
              <img
                src="/assets/home/IconPresencialsvg.svg"
                alt={`Modalidad ${curso.modalidad}`}
              />
            </div>
            <div className="curso-plantilla__start">
              <div className="curso-plantilla__start-titlecircle">
                <p className="curso-plantilla__start-first">
                  {curso.fechaInicio}
                </p>
                <p className="curso-plantilla__start-cta">
                  Cotiza con nosotros hoy
                </p>
              </div>
            </div>
          </div>
          <div className="curso-plantilla__figure-img-circle">
            <picture>
              <source
                srcSet={curso.image.desktop}
                media="(min-width: 1024px)"
              />
              <source srcSet={curso.image.tablet} media="(min-width: 768px)" />
              <img
                src={curso.image.mobile}
                alt={curso.image.alt}
                loading="lazy"
              />
            </picture>
          </div>
        </div>
        <div className="curso-plantilla__contact">
          <div className="curso-plantilla__contact-item">
            <img src="/assets/home/IconcardTelefono.svg" alt="Teléfono" />
            <div>
              <span>Número:</span>
              <p>{curso.contacto.telefono}</p>
            </div>
          </div>
          <div className="curso-plantilla__contact-item">
            <img
              src="/assets/home/IconCardplantilla_Correo.svg"
              alt="Correo electrónico"
            />
            <div>
              <span>Correo:</span>
              <p>{curso.contacto.correo}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
