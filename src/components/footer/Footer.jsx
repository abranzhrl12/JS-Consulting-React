import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer" aria-label="Pie de página de JS Consulting">
      <div className="footer__contentall">
        <div className="footer__icons">
          <figure className="footer__logo">
            <img
              src="/assets/home/Svg_Logo_Fast.svg"
              alt="Logo de JS Consulting"
            />
          </figure>
          <div className="footer__content-Whatssap">
            <p>Conversemos</p>
            <a
              href="https://api.whatsapp.com/send?phone=51936381634"
              target="_blank"
            >
              <img
                className="footer__icon-whatssap"
                src="/assets/home/IconWhatssap.svg"
                alt="Ícono de WhatsApp"
              />
            </a>
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__list-info">
            <div className="footer__list-content">
              <img
                src="/assets/home/IconTelefonoFooter.svg"
                alt="Ícono de teléfono"
              />
              <ul>
                <li>+51 965 196 333 - Cotizaciones</li>
                <li>+51 932 524 891 - Programaciones</li>
                <li>+51 960 762 130 - Atención al Cliente</li>
                <li>+51 960 762 130 - Finanzas</li>
              </ul>
            </div>
            <div className="footer__list-content">
              <img
                src="/assets/home/IconoCorreoFooter.svg"
                alt="Ícono de correo"
              />
              <ul>
                <li>administracion@jsconsulting.pe</li>
                <li>capacitacion@jsconsulting.pe</li>
                <li>coordinacion@jsconsulting.pe</li>
                <li>atencionalcliente@jsconsulting.pe</li>
                <li>finanzas@jsconsulting.pe</li>
              </ul>
            </div>
            <div className="footer__list-content">
              <img
                src="/assets/home/IconoCorreoUbicacion.svg"
                alt="Ícono de ubicación"
              />
              <ul>
                <li>
                  CEPTAR JS: Los Sauces de Cajamarquilla Mz Lote 13 - Lurigancho
                  Chosica
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__navigation">
            <h3 className="footer__subtitle">Nosotros</h3>
            <ul className="footer__navigation-list">
              <li>
                <Link
                  to="/nosotros"
                  className="navbar__link"
                  style={{ color: "white" }}
                >
                  ¿Quiénes Somos?
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="navbar__link"
                  style={{ color: "white" }}
                >
                  Nuestros Valores
                </Link>
              </li>
              <li>
                {/* <a href="/Nosotros.html#misionvision">
                  Nuestra misión y visión
                </a> */}
                <Link
                  to="/Contact"
                  className="navbar__link"
                  style={{ color: "white" }}
                >
                  Ir a contacto
                </Link>
              </li>
              <li>
                <a
                  href="https://jsconsulting.pe/assets/Politica-de-Gestion-Integrada.pdf" // Asegúrate de que sea ruta relativa
                  className="valores__link"
                  aria-label="Descargar la Política de Gestión Integrada"
                  download
                >
                  Nuestra Política de Gestión
                </a>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="navbar__link"
                  style={{ color: "white" }}
                >
                  Donde ubicarnos
                </Link>
              </li>
              <li>
                <Link
                  to="/curso/curso-de-trabajos-en-altura"
                  className="navbar__link"
                  style={{ color: "white" }}
                >
                  Certificación
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__navigation footer__navigation-2">
            <h3 className="footer__subtitle">Más</h3>
            <ul className="footer__navigation-list">
              <li>
                <Link className="footer__navigation-list-url" to="/servicios">
                  Servicios
                </Link>
              </li>
              <li>
                <Link className="footer__navigation-list-url" to="/Reclamos">
                  Buzón de quejas, reclamos, sugerencias
                </Link>
                {/* <a
                  className="footer__navigation-list-url"
                  href="/Reclamos.html"
                >
                  Buzón de quejas, reclamos, sugerencias
                </a> */}
              </li>
              <li>
                <Link
                  className="footer__navigation-list-url"
                  to="/Trabaja-con-Nosotros"
                >
                  Trabaja con nosotros
                </Link>
              </li>
              <li>
                <Link className="footer__navigation-list-url" to="/Contact">
                  Contáctanos
                </Link>
              </li>
              <li>
                <a
                  href="https://sigecap.jsconsulting.pe/sigecap/validar/inicio"
                  target="_blank"
                >
                  Validar certificado
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__social-media">
            <span className="footer__subtitle">Nuestras Redes Sociales</span>
            <ul>
              <li>
                <a
                  className="footer__social-media--a"
                  href="https://www.facebook.com/jsconsulting.oficial"
                  target="_blank"
                  title="Visítanos en Facebook"
                >
                  <img
                    src="/assets/home/IconoFacebook.svg"
                    alt="Icono de Facebook de JS Consulting"
                  />
                </a>
              </li>
              <li>
                <a
                  className="footer__social-media--a"
                  href="https://www.instagram.com/jsconsulting.pe/"
                  target="_blank"
                  title="Síguenos en Instagram"
                >
                  <img
                    src="/assets/home/IconoInstagram.svg"
                    alt="Icono de Instagram de JS Consulting"
                  />
                </a>
              </li>
              <li>
                <a
                  className="footer__social-media--a"
                  href="https://www.linkedin.com/company/jsconsulting-oficial/"
                  target="_blank"
                  title="Conéctate con nosotros en LinkedIn"
                >
                  <img
                    src="/assets/home/IconoLinkendin.svg"
                    alt="Icono de LinkedIn de JS Consulting"
                  />
                </a>
              </li>
              <li>
                <a
                  className="footer__social-media--a"
                  href="https://www.youtube.com/channel/URL_DE_YOUTUBE"
                  target="_blank"
                  title="Mira nuestros videos en YouTube"
                >
                  <img
                    src="/assets/home/IconoYoutube.svg"
                    alt="Icono de YouTube de JS Consulting"
                  />
                </a>
              </li>
              <li>
                <a
                  className="footer__social-media--a"
                  href="https://www.tiktok.com/@js.consulting?_t=ZM-8sq9sZHeiBy&_r=1"
                  target="_blank"
                  title="Síguenos en TikTok"
                >
                  <img
                    src="/assets/home/IconTiktok.svg"
                    alt="Icono de TikTok de JS Consulting"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer__copy">
        <span className="footer__copy-span">Power by</span> Sertech Peru
      </p>
    </footer>
  );
};
