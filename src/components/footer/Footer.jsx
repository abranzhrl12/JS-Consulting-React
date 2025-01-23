export const Footer = () => {
  return (
    <footer className="footer" aria-label="Pie de página de JS Consulting">
      <div className="footer__contentall">
        <div className="footer__icons">
          <figure>
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
            <h3>Nosotros</h3>
            <ul className="footer__navigation-list">
              <li>
                <a href="/Nosotros.html#QuienesSomos">¿Quiénes Somos?</a>
              </li>
              <li>
                <a href="/Nosotros.html#Valores"> Nuestros Valores</a>
              </li>
              <li>
                <a href="/Nosotros.html#misionvision">
                  Nuestra misión y visión
                </a>
              </li>
              <li>
                <a href="https://jsconsulting.pe/wp-content/uploads/2024/04/Politica-de-Gestion-Integrada..pdf">
                  Nuestra Política de Gestión
                </a>
              </li>
              <li>
                <a href="/Contacto.html#DondeUbicarnos">Donde ubicarnos</a>
              </li>
              <li>Certificación</li>
            </ul>
          </div>
          <div className="footer__navigation footer__navigation-2">
            <h3>Más</h3>
            <ul className="footer__navigation-list">
              <li>
                <a href="/Servicios.html">Servicios</a>
              </li>
              <li>
                <a
                  className="footer__navigation-list-url"
                  href="/Reclamos.html"
                >
                  Buzón de quejas, reclamos, sugerencias
                </a>
              </li>
              <li>
                <a href="/Work-Nosotros.html"> Trabaja con nosotros</a>
              </li>
              <li>
                <a href="/Contacto.html">Contáctanos</a>
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
        </div>

        <div className="footer__social-media">
          <span>Nuestras Redes Sociales</span>
          <ul>
            <li>
              <a
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
      <p className="footer__copy">
        <span className="footer__copy-span">Power by</span> Sertech Peru
      </p>
    </footer>
  );
};
