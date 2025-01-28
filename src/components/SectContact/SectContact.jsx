// import { validarEmail } from "../../utils/validacion";
// import { InputField } from "../InputField/InputField";
import { ContactForm } from "../ContactForm/ContactForm";
import iconcalendared from "../../assets/iconhorariosred.svg";
import iconadministracion from "../../assets/iconadministracionred.svg";
import iconcordinacion from "../../assets/Iconcordiancionred.svg";
import iconatencioncliente from "../../assets/iconatencionred.svg";
export const SectContact = () => {
  return (
    <section className="section-contact">
      <div className="section-contact__contentall">
        <div className="section-contact__info">
          <div className="section-contact__info-content">
            <figure>
              <img src={iconcalendared} alt="" />
            </figure>
            <div>
              <h5>Horario</h5>
              <p>
                <span>Lunes a Viernes: </span> 07:00 am a 04:00 pm
              </p>
              <p>
                <span>Sábados: </span>07:00 am a 12:00 pm
              </p>
            </div>
          </div>

          <div className="section-contact__info-content">
            <figure>
              <img src={iconadministracion} alt="" />
            </figure>
            <div>
              <h5>Administración</h5>
              <p>+51 965 196 333</p>
              <p>administracion@jsconsulting.pe</p>
            </div>
          </div>

          <div className="section-contact__info-content">
            <figure>
              <img src={iconcordinacion} alt="" />
            </figure>
            <div>
              <h5>Coordinación</h5>
              <p>+51 932 524 891</p>
              <p>coordinacion@jsconsulting.pe</p>
            </div>
          </div>
          <div className="section-contact__info-content">
            <figure>
              <img src={iconatencioncliente} alt="" />
            </figure>
            <div>
              <h5>Atención al Cliente</h5>
              <p>+51 936 381 634</p>
              <p>atencionalcliente@jsconsulting.pe</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
