import { validarEmail } from "../../utils/validacion";
import { InputField } from "../InputField/InputField";
import { ContactForm } from "../ContactForm/ContactForm";
export const SectContact = () => {
  return (
    <section className="section-contact">
      <div className="section-contact__contentall">
        <div className="section-contact__info">
          <div className="section-contact__info-content">
            <figure>
              <img src="../Assets/svg/IconRedHorario.svg" alt="" />
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
              <img src="../Assets/svg/IconRedAdministracion.svg" alt="" />
            </figure>
            <div>
              <h5>Administración</h5>
              <p>+51 965 196 333</p>
              <p>administracion@jsconsulting.pe</p>
            </div>
          </div>

          <div className="section-contact__info-content">
            <figure>
              <img src="../Assets/svg/IconRedCordinacion.svg" alt="" />
            </figure>
            <div>
              <h5>Coordinación</h5>
              <p>+51 932 524 891</p>
              <p>coordinacion@jsconsulting.pe</p>
            </div>
          </div>
          <div className="section-contact__info-content">
            <figure>
              <img src="../Assets/svg/IconRedAtencionCliente.svg" alt="" />
            </figure>
            <div>
              <h5>Atención al Cliente</h5>
              <p>+51 936 381 634</p>
              <p>atencionalcliente@jsconsulting.pe</p>
            </div>
          </div>
        </div>
        <ContactForm />
        {/* <form
          id="contactForm"
          className="section-contact__form"
          method="POST"
          action="procesar_formulario.php"
        >
          <h3>Contáctanos</h3>
          <p>Déjenos sus datos y nos pondremos en contacto</p>
          <div className="section-contact__form-grid">
            <input
              className="section-contact__form-input"
              type="text"
              id="nombre_apellido"
              name="nombre_apellido"
              placeholder="Nombre y Apellido"
              required
            />
            <InputField
              type="email"
              label="Correo Electrónico"
              placeholder="Ingrese su email"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              validate={validarEmail}
              errorMessage="Ingrese un email válido"
            />
            <input
              className="section-contact__form-input"
              type="text"
              id="telefono"
              name="telefono"
              placeholder="Teléfono Celular"
              required
            />
            <textarea
              className="section-contact__form-textArea"
              id="mensaje"
              name="mensaje"
              placeholder="Mensaje/Requerimiento"
              required
            ></textarea>
            <button
              style={{ cursor: "pointer" }}
              className="section-contact__form-btn"
              type="submit"
            >
              Cotizar
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
};
