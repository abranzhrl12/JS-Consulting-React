import { BolsaTrabajoForm } from "../components/BolsaTrabajoForm/BolsaTrabajoForm";
import "./BolsaTrabajoSection.scss";
import iconredwhatssapp from "../assets/IconRedWhatssap.svg";
import iconredcorreo from "../assets/IconRedCorreo.svg";
import iconredgps from "../assets/IconRedGps.svg";
import iconfb from "../assets/IconoFacebook.svg";
import iconig from "../assets/IconoInstagram.svg";
import iconyoutube from "../assets/IconoYoutube.svg";
import icontik from "../assets/IconTiktok copy.svg";
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
          <div>
            <img src={iconredwhatssapp} alt="" />
            <h3>Celular / Whatssap</h3>
            <p>936 381 634</p>
          </div>
          <div>
            <div>
              <img src={iconredcorreo} alt="" />
              <h3>Correo eléctronico</h3>
              <p>convocatorialima@jsconsulting.pe</p>
            </div>

            <div>
              <img src={iconredgps} alt="" />
              <h3>Ubicación</h3>
              <p>Los Sauces de Cajamarquilla Mz Lote 13 - Lurigancho Chosica</p>
            </div>
          </div>
          <div className="bolsa-trabajo-section__socials">
            <h2>SÍGUENOS</h2>
            <ul>
              <li>
                <img src={iconfb} alt="nuestra red social facebook" />
              </li>
              <li>
                <img src={iconig} alt="icono red social instagram" />
              </li>
              <li>
                <img src={iconyoutube} alt="nuestro canal de youtube" />
              </li>
              <li>
                <img src={icontik} alt="nuestro tiktok" />
              </li>
              <li>
                <img src={icontik} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
