export const SectAbout = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-section__contentall">
        <div className="about-us-section__container-card">
          <div className="about-us-section__card">
            <div className="about-us-section__card-contentTitle">
              <h3 className="about-us-section__card-title">
                ¿Porqué capacitarse con nosotros
              </h3>
            </div>

            <p className="about-us-section__card-paragraph">
              En JS Consulting, contamos con más de 10 años de experiencia
              mejorando las operaciones de nuestros clientes en los sectores
              minero e industrial. Nuestra certificación ISO 9001 refleja
              nuestro compromiso con la calidad y la mejora continua,
              garantizando seguridad y excelencia en cada capacitación. Nuestro
              equipo de profesionales altamente capacitados se apoya en un
              moderno centro de entrenamiento para ofrecer formación de
              vanguardia. Además, brindamos acompañamiento personalizado a
              través de centros de entrenamiento in house, y aprovechamos la
              tecnología para impartir cursos en línea, adaptando siempre
              nuestra metodología a las necesidades específicas de cada empresa.
            </p>
          </div>

          <div className="about-us-section__contentIMG">
            <div className="about-us-section__content-videos">
              <video
                className="about-us-section__videos"
                id="video-Nosotros1"
                src="https://res.cloudinary.com/dyg9ifqo2/video/upload/v1736349235/kwee3cogia328gbqznhe.mp4"
                poster="/Assets/Img/Nosotros/caratulavideo2.svg"
                muted
                playsInline
              >
                {/* Aquí puedes incluir contenido alternativo si el navegador no soporta videos */}
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
          </div>
        </div>

        <div className="about-us-section__container-card  about-us-section__container-card--reverse">
          <div className="about-us-section__card  about-us-section__card--mt">
            <div className="about-us-section__card-contentTitle">
              <h3 className="about-us-section__card-title">
                ¿Qué opinan nuestros estudiantes de JS CONSULTING?
              </h3>
            </div>

            <p className="about-us-section__card-paragraph">
              En JS Consulting, nos enfocamos en cumplir con las expectativas de
              todos nuestros participantes. Por eso, ofrecemos modalidades y
              horarios adaptables, además de contar con instalaciones de primer
              nivel que facilitan el desarrollo de nuestras capacitaciones.
            </p>
          </div>
          <div className="about-us-section__contentIMG about-us-section__contentIMG--order">
            <div className="about-us-section__content-videos">
              <video
                className="about-us-section__videos"
                id="video-Nosotros1"
                src="https://res.cloudinary.com/dyg9ifqo2/video/upload/v1736349235/kwee3cogia328gbqznhe.mp4"
                poster="/Assets/Img/Nosotros/caratulavideo2.svg"
                muted
                playsInline
              >
                {/* Aquí puedes incluir contenido alternativo si el navegador no soporta videos */}
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
