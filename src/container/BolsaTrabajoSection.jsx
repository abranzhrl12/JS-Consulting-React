import { BolsaTrabajoForm } from "../components/BolsaTrabajoForm/BolsaTrabajoForm";
import "./BolsaTrabajoSection.scss";
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
            <img src="/Assets/svg/IconRedWhatssap.svg" alt="" />
            <h3>Celular / Whatssap</h3>
            <p>936 381 634</p>
          </div>
          <div>
            <div>
              <img src="/Assets/svg/IconRedCorreo.svg" alt="" />
              <h3>Correo eléctronico</h3>
              <p>convocatorialima@jsconsulting.pe</p>
            </div>

            <div>
              <img src="/Assets/svg/IconRedGps.svg" alt="" />
              <h3>Ubicación</h3>
              <p>Los Sauces de Cajamarquilla Mz Lote 13 - Lurigancho Chosica</p>
            </div>
          </div>
          <div className="bolsa-trabajo-section__socials">
            <h2>SÍGUENOS</h2>
            <ul>
              <li>
                <img src="/Assets/svg/IconoFacebook.svg" alt="" />
              </li>
              <li>
                <img src="/Assets/svg/IconoInstagram.svg" alt="" />
              </li>
              <li>
                <img src="/Assets/svg/IconoYoutube.svg" alt="" />
              </li>
              <li>
                <img src="/Assets/svg/IconTiktok.svg" alt="" />
              </li>
              <li>
                <img src="/Assets/svg/IconTiktok.svg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
