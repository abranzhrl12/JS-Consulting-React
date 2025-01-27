import { useState } from "react";
import { InputField } from "../InputField/InputField";
import {
  validarEmail,
  validarLinkedInURL,
  validarTelefono,
  validarTexto,
} from "../../utils/validacion";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import "./bolsaTrabajoForm.scss";

export const BolsaTrabajoForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    distrito: "",
    ciudad: "",
    profesion: "",
    puesto: "",
    linkedin: "",
    cv: null, // Para manejar archivos
  });
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onsubmit) {
      onsubmit(formData);
    }
  };
  return (
    <form className="bolsa-trabajo-form" onSubmit={handleSubmit}>
      <div className="bolsa-trabajo-form__texts">
        <h3>BOLSA DE TRABAJO</h3>
        <p>
          Envíanos tus datos y experiencia, te responderemos en el menor tiempo
          posible.
        </p>
      </div>

      <div className="bolsa-trabajo-form__grid">
        <InputField
          placeholder="Nombre"
          value={formData.nombre}
          onChange={(value) => handleInputChange("nombre", value)}
          validate={validarTexto}
          errorMessage="El nombre es obligatorio"
        />
        <InputField
          placeholder="Apellido"
          value={formData.apellido}
          onChange={(value) => handleInputChange("apellido", value)}
          validate={validarTexto}
          errorMessage="El apellido es obligatorio"
        />
        <InputField
          placeholder="Teléfono"
          type="tel"
          value={formData.telefono}
          onChange={(value) => handleInputChange("telefono", value)}
          validate={validarTelefono}
          errorMessage="El teléfono debe tener 9 dígitos"
        />
        <InputField
          placeholder="Correo Electrónico"
          type="email"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
          validate={validarEmail}
          errorMessage="Ingrese un email válido"
        />
        <InputField
          placeholder="Distrito"
          value={formData.distrito}
          onChange={(value) => handleInputChange("distrito", value)}
          validate={validarTexto}
          errorMessage="El distrito es obligatorio"
        />
        <InputField
          placeholder="Ciudad"
          value={formData.ciudad}
          onChange={(value) => handleInputChange("ciudad", value)}
          validate={validarTexto}
          errorMessage="La ciudad es obligatoria"
        />
        <InputField
          placeholder="Profesión"
          value={formData.profesion}
          onChange={(value) => handleInputChange("profesion", value)}
          validate={validarTexto}
          errorMessage="La profesión es obligatoria"
        />
        <InputField
          placeholder="Puesto al que postula"
          value={formData.puesto}
          onChange={(value) => handleInputChange("puesto", value)}
          validate={validarTexto}
          errorMessage="El puesto es obligatorio"
        />
        <InputField
          placeholder="Link de LinkedIn"
          type="url"
          value={formData.linkedin}
          onChange={(value) => handleInputChange("linkedin", value)}
          validate={validarLinkedInURL}
          errorMessage="Ingrese un enlace válido de LinkedIn"
        />
        <InputField
          placeholder="Adjuntar Cv"
          type="url"
          value={formData.linkedin}
          onChange={(value) => handleInputChange("linkedin", value)}
          validate={validarLinkedInURL}
          errorMessage="Ingrese un enlace válido de LinkedIn"
        />
      </div>
      <SubmitButton>Enviar</SubmitButton>
    </form>
  );
};
