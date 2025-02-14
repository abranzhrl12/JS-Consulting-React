import iconhorarios from "../../assets/iconhorarios.svg";

const getModalidadIcon = (modalidad) => {
  const icons = {
    Presencial: "/assets/home/iconpresencialwhite.svg",
    House: "/assets/home/iconinhousewhite.svg",
    Asincrónica: "/assets/home/iconoasicnronowhite.svg",
    Sincrónica: "/assets/home/IconoSincronowhite.svg",
  };

  // Crear un objeto con claves en minúsculas
  const normalizedIcons = Object.entries(icons).reduce((acc, [key, value]) => {
    acc[key.toLowerCase()] = value;
    return acc;
  }, {});

  // Normalizar la modalidad recibida a minúsculas
  const modalidadNormalizada = modalidad.toLowerCase();

  return (
    normalizedIcons[modalidadNormalizada] ||
    "/assets/home/IconPresencialsvg.svg"
  );
};
export const CarouselItemCursos = ({ curso }) => {
  return (
    <article
      className="Curso-Carousel__contenido"
      aria-label={`Curso de ${curso.tNombre}`}
    >
      <div className="curso-plantilla">
        <div className="curso-plantilla__titulo-principal">
          <h3 className="curso-plantilla__titulo-texto">{curso.tNombre}</h3>
          <img
            src="assets/home/cursolinesred.svg"
            alt=""
            className="curso-plantilla__titulo-imagen"
          />
        </div>
        <div className="curso-plantilla__content-central">
          <div className="curso-plantilla__flexcontent">
            <div className="curso-plantilla__mode">
              <span>Modalidad:</span>
              <span>{curso.tModalidad}</span>
              <img
                src={getModalidadIcon(curso.tModalidad)}
                alt={`Modalidad ${curso.tModalidad}`}
              />
            </div>
            <div className="curso-plantilla__start">
              <div className="curso-plantilla__start-titlecircle">
                <p className="curso-plantilla__start-first">{curso.tFecha}</p>
                <p className="curso-plantilla__start-cta">
                  Cotiza con nosotros hoy
                </p>
              </div>
            </div>
          </div>
          <div className="curso-plantilla__figure-img-circle">
            <picture>
              <source srcSet={curso.tImagenUrl} media="(min-width: 1024px)" />
              <source srcSet={curso.tImagenUrl} media="(min-width: 768px)" />
              <img src={curso.tImagenUrl} alt={curso.tNombre} loading="lazy" />
            </picture>
          </div>
        </div>
        <div className="curso-plantilla__contact">
          <div className="curso-plantilla__contact-item">
            <img src="assets/home/IconcardTelefono.svg" alt="Teléfono" />
            <div>
              <span>Número:</span>
              <p>+51 965 196 333</p>
            </div>
          </div>
          <div className="curso-plantilla__contact-item">
            <img src={iconhorarios} alt="Correo electrónico" />
            <div>
              <span>Horario:</span>
              <p>{curso.tHorario}</p>
            </div>
          </div>
          <div className="curso-plantilla__contact-item">
            <img
              src="assets/home/IconCardplantilla_Correo.svg"
              alt="Correo electrónico"
            />
            <div>
              <span>Correo:</span>
              <p>administracion@jsconsulting.pe</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
