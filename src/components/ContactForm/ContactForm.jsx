import { useState } from "react";
import { InputField } from "../InputField/InputField";
import { TextAreaField } from "../TextAreaField/TextAreaField";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { ModalForm } from "../ModalForm/ModalForm";
import "./contactform.scss";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    tNombreCompleto: "",
    tEmail: "",
    tTelefono: "",
    tMensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalState, setModalState] = useState({
    visible: false,
    status: "success", // 'success' o 'error'
    title: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const showModal = (status, title, message) => {
    setModalState({
      visible: true,
      status: status,
      title: title,
      message: message,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.jsconsulting.pe/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al enviar el formulario");

      // Mostrar modal de éxito
      showModal(
        "success",
        "¡Gracias por contactarnos!",
        "Mensaje enviado correctamente"
      );

      // Resetear formulario
      setFormData({
        tNombreCompleto: "",
        tEmail: "",
        tTelefono: "",
        tMensaje: "",
      });
    } catch (error) {
      // Mostrar modal de error
      showModal(
        "error",
        "¡Oops! Algo salió mal",
        "Hubo un error al enviar el formulario. Inténtelo de nuevo."
      );
    }

    setLoading(false);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Contáctanos</h3>
      <p>Déjenos sus datos y nos pondremos en contacto</p>

      <div className="contact-form__grid">
        {/* Tus inputs se mantienen intactos */}
        <InputField
          placeholder="Nombre y Apellido"
          value={formData.tNombreCompleto}
          onChange={(value) => handleInputChange("tNombreCompleto", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="El nombre es obligatorio"
        />

        <InputField
          type="email"
          placeholder="Ingrese su email"
          value={formData.tEmail}
          onChange={(value) => handleInputChange("tEmail", value)}
          validate={(value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)}
          errorMessage="Ingrese un email válido"
        />

        <InputField
          type="tel"
          placeholder="Teléfono Celular"
          value={formData.tTelefono}
          onChange={(value) => handleInputChange("tTelefono", value)}
          validate={(value) => /^[0-9]{9}$/.test(value)}
          errorMessage="Ingrese un teléfono válido"
        />

        <div className="contact-form__textarea">
          <TextAreaField
            name="mensaje"
            placeholder="Escribe tu mensaje aquí"
            value={formData.tMensaje}
            onChange={(value) => handleInputChange("tMensaje", value)}
            showLabel={true}
          />
        </div>

        <SubmitButton disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </SubmitButton>

        {/* Modal en lugar del mensaje simple */}
        {modalState.visible && (
          <ModalForm
            status={modalState.status}
            title={modalState.title}
            message={modalState.message}
            onClose={() => setModalState({ ...modalState, visible: false })}
          />
        )}
      </div>
    </form>
  );
};
