import { useState } from "react";
import { InputField } from "../InputField/InputField";
import "./contactform.scss";
import { TextAreaField } from "../TextAreaField/TextAreaField";
import { SubmitButton } from "../SubmitButton/SubmitButton";
export const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre_apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData); // Ejecuta la función pasada como prop
    }
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Contáctanos</h3>
      <p>Déjenos sus datos y nos pondremos en contacto</p>
      <div className="contact-form__grid">
        <InputField
          placeholder="Nombre y Apellido"
          value={formData.nombre_apellido}
          onChange={(value) => handleInputChange("nombre_apellido", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="El nombre es obligatorio"
        />
        <InputField
          type="email"
          placeholder="Ingrese su email"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
          validate={(value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)}
          errorMessage="Ingrese un email válido"
        />
        <InputField
          type="tel"
          placeholder="Teléfono Celular"
          value={formData.telefono}
          onChange={(value) => handleInputChange("telefono", value)}
          validate={(value) => /^[0-9]{9}$/.test(value)}
          errorMessage="Ingrese un teléfono válido"
        />
        <div className="contact-form__textarea">
          <TextAreaField
            name="mensaje"
            placeholder="Escribe tu mensaje aquí"
            value={formData.mensaje}
            onChange={(value) => setFormData({ ...formData, mensaje: value })}
            showLabel={true}
          />
        </div>
        <SubmitButton>Enviar</SubmitButton>
      </div>
    </form>
  );
};
