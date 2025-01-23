export const SectCertifiacion = () => {
  return (
    <section className="Certificacion" aria-labelledby="certificacion-title">
      <div className="Certificacion__contentall">
        <div className="Certificacion__texts">
          <h3 className="Certificacion__title">
            Certificación
            <span className="Certificacion__title-span">ISO-9001:2015</span>
          </h3>
          <p className="Certificacion__text">
            En <strong>JS Consulting</strong>, la calidad es parte de todo lo
            que hacemos. Nuestra certificación
            <strong> ISO 9001:2015</strong> respalda el compromiso que tenemos
            con nuestros clientes y la mejora constante de nuestros servicios,
            asegurando que cada solución que ofrecemos cumpla con los más altos
            estándares de gestión y eficiencia.
          </p>
        </div>

        <div className="Certificacion__img">
          <img
            src="/assets/home/imgCertificadoDesk.webp"
            alt="Certificado de calidad ISO 9001:2015 otorgado a JS Consulting"
            className="Certificacion__figure"
          />
        </div>
      </div>
    </section>
  );
};
