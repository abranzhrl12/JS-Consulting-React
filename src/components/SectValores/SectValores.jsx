export const SectValores = () => {
  return (
    <section className="valores" id="Valores" aria-labelledby="valores-title">
      <div className="valores__contentall">
        <h2 id="valores-title" className="valores__title">
          Nuestros Valores
        </h2>

        <div className="valores__imagen">
          {" "}
          <picture>
            <source
              srcSet="/assets/Nosotros/nuestros_valores_desk.webp"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/assets/Nosotros/nuestros_valores_tablet.webp"
              media="(min-width: 768px)"
            />
            <img
              src="/assets/Nosotros/img-Valores-mobile.webp"
              alt="Imagen representando los valores corporativos de JS Consulting"
              className="valores__img"
            />
          </picture>
        </div>

        <div className="valores__button">
          <a
            href="https://jsconsulting.pe/wp-content/uploads/2024/04/Politica-de-Gestion-Integrada..pdf"
            className="valores__link"
            aria-label="Descargar la Política de Gestión Integrada"
          >
            Descargar aquí
          </a>
          <p className="valores__description">Política de Gestión Integrada</p>
        </div>
      </div>
    </section>
  );
};
