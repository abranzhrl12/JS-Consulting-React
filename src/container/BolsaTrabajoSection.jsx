import { BolsaTrabajoForm } from "../components/BolsaTrabajoForm/BolsaTrabajoForm";
import "./BolsaTrabajoSection.scss";
import iconredwhatssapp from "../assets/IconRedWhatssap.svg";
import iconredcorreo from "../assets/IconRedCorreo.svg";
import iconredgps from "../assets/IconRedGps.svg";
import iconfb from "../assets/IconoFacebook.svg";
import iconig from "../assets/IconoInstagram.svg";
import iconyoutube from "../assets/IconoYoutube.svg";
import icontik from "../assets/icontiktokk.svg";
import iconlinkendin from "../assets/iconlinkendink.svg";
export const BolsaTrabajoSection = () => {
  const handleSubmit = (formData) => {
    console.log("Datos enviados:", formData);
  };
  return (
    <section className="bolsa-trabajo-section">
      <div className="bolsa-trabajo-section__contentall">
        {/* Formulario */}
        <div className="bolsa-trabajo-section__form">
          <BolsaTrabajoForm onSubmit={handleSubmit} />
        </div>

        {/* Información de Contacto */}
        <div className="bolsa-trabajo-section__info">
          <div className="bolsa-trabajo-section__container">
            <div className="bolsa-trabajo-section__content">
              <img src={iconredwhatssapp} alt="" />
              <div className="bolsa-trabajo-section__contentIten">
                <h3>Celular / Whatssap</h3>
                <p>936 381 634</p>
              </div>
            </div>
            <div className="bolsa-trabajo-section__content">
              <img src={iconredcorreo} alt="" />
              <div className="bolsa-trabajo-section__contentIten">
                <h3>Correo eléctronico</h3>
                <p>convocatorialima@jsconsulting.pe</p>
              </div>
            </div>

            <div className="bolsa-trabajo-section__content">
              <img src={iconredgps} alt="" />
              <div className="bolsa-trabajo-section__contentIten">
                <h3>Ubicación</h3>
                <p>
                  Los Sauces de Cajamarquilla Mz Lote 13 - Lurigancho Chosica
                </p>
              </div>
            </div>
          </div>
          <div className="bolsa-trabajo-section__socials">
            <h2>SÍGUENOS</h2>
            <ul>
              <li>
                <a href="https://www.facebook.com/jsconsulting.oficial">
                  <img src={iconfb} alt="nuestra red social facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jsconsulting.pe/">
                  <img src={iconig} alt="icono red social instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/jsconsulting-oficial/">
                  <img src={iconlinkendin} alt="nuestro canal de youtube" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/URL_DE_YOUTUBE">
                  <img src={icontik} alt="nuestro tiktok" />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@js.consulting?_t=ZM-8sq9sZHeiBy&_r=1">
                  <img src={iconyoutube} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
