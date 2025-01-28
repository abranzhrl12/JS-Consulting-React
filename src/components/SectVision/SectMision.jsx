export const SectMision = () => {
  return (
    <section
      className="mission-section"
      id="misionvision"
      aria-labelledby="mission-vision-title"
    >
      <div className="mission-section__contentall">
        <article
          className="mission-section__card"
          aria-labelledby="mission-title"
        >
          <h3 id="mission-title" className="mission-section__subtitle">
            Misión
          </h3>
          <img
            src="/assets/Nosotros/IconMision.svg"
            alt="Ícono representando la misión de JS Consulting"
            className="mission-section__icon"
          />
          <p className="mission-section__text">
            Ser reconocida a nivel nacional e internacional como la empresa
            líder en <strong>enseñanza</strong> y <strong>consultoría</strong>{" "}
            en el sector minero e industrial, destacándonos por nuestra{" "}
            <strong>vocación</strong> y <strong>excelencia</strong> en el
            servicio a nuestros clientes.
          </p>
        </article>

        <article
          className="mission-section__card"
          aria-labelledby="vision-title"
        >
          <h3 id="vision-title" className="mission-section__subtitle">
            Visión
          </h3>
          <img
            src="/assets/Nosotros/Icon-vision.svg"
            alt="Ícono representando la visión de JS Consulting"
            className="mission-section__icon"
          />
          <p className="mission-section__text">
            Potenciar el conocimiento en las personas a través del desarrollo de{" "}
            <strong>programas de capacitación</strong> e{" "}
            <strong>investigación de vanguardia</strong>, superando siempre las
            expectativas de nuestros clientes.
          </p>
        </article>
      </div>
    </section>
  );
};
