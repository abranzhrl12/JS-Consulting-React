export const SectInformation = () => {
  return (
    <section className="information" aria-labelledby="info-title">
      <div className="information__content">
        <div className="information__content-parent">
          <div className="information__items">
            <figure className="information__figure">
              <img
                src="/assets/Nosotros/IconBook.svg"
                alt="Icono de libro representando capacitaciones realizadas"
                className="information__icon"
              />
              <figcaption className="information__caption">
                <span className="information__number">10,400</span>
                <p className="information__text">Capacitaciones realizadas</p>
              </figcaption>
            </figure>
          </div>

          <div className="information__items">
            <figure className="information__figure">
              <img
                src="/assets/Nosotros/IconLIKE.svg"
                alt="Icono de personas representando nuevos clientes"
                className="information__icon"
              />
              <figcaption className="information__caption">
                <span className="information__number">8,320</span>
                <p className="information__text">Clientes Satisfechos</p>
              </figcaption>
            </figure>
          </div>

          <div className="information__items">
            <figure className="information__figure">
              <img
                src="/assets/Nosotros/Iconclientes.svg"
                alt="Icono de personas representando nuevos clientes"
                className="information__icon"
              />
              <figcaption className="information__caption">
                <span className="information__number">309</span>
                <p className="information__text">Clientes Nuevos</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
