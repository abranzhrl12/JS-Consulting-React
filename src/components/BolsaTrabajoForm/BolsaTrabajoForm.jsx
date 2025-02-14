import { useState } from "react";
import { InputField } from "../InputField/InputField";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { ModalForm } from "../ModalForm/ModalForm";
import "./bolsaTrabajoForm.scss";

export const BolsaTrabajoForm = () => {
  const [formData, setFormData] = useState({
    tNombre: "",
    tApellido: "",
    tTelefono: "",
    tEmail: "",
    tDistrito: "",
    tCiudad: "",
    tProfesion: "",
    tPuesto: "",
    tLinkedinUrl: "",
    cv: null,
  });

  const [loading, setLoading] = useState(false);
  const [modalState, setModalState] = useState({
    visible: false,
    status: "success",
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

  // Validar que el archivo (CV) no sea mayor a 1 MB
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 1048576) {
      showModal("error", "Error", "El archivo debe ser maximo 1MB.");
      // Limpiar el input y el estado
      e.target.value = null;
      setFormData({ ...formData, cv: null });
      return;
    }
    setFormData({ ...formData, cv: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validar que el teléfono tenga exactamente 9 dígitos
    if (!/^[0-9]{9}$/.test(formData.tTelefono)) {
      showModal("error", "Error", "El teléfono debe tener 9 dígitos.");
      setLoading(false);
      return;
    }

    // Crear objeto FormData para enviar como multipart/form-data
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("https://api.jsconsulting.pe/work", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        // Intentamos parsear la respuesta de error de la API
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al enviar el formulario");
      }

      showModal(
        "success",
        "¡Gracias por postular!",
        "Tu información fue enviada correctamente."
      );

      // Resetear formulario y limpiar campo de archivo
      setFormData({
        tNombre: "",
        tApellido: "",
        tTelefono: "",
        tEmail: "",
        tDistrito: "",
        tCiudad: "",
        tProfesion: "",
        tPuesto: "",
        tLinkedinUrl: "",
        cv: null,
      });

      // Limpiar campo de archivo manualmente
      document.getElementById("cv").value = null;
    } catch (error) {
      showModal(
        "error",
        "¡Oops! Algo salió mal",
        error.message // Se muestra el mensaje de error proveniente de la API
      );
    }

    setLoading(false);
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
          value={formData.tNombre}
          onChange={(value) => handleInputChange("tNombre", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="El nombre es obligatorio"
        />
        <InputField
          placeholder="Apellido"
          value={formData.tApellido}
          onChange={(value) => handleInputChange("tApellido", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="El apellido es obligatorio"
        />
        <InputField
          placeholder="Teléfono"
          type="tel"
          value={formData.tTelefono}
          onChange={(value) => handleInputChange("tTelefono", value)}
          validate={(value) => /^[0-9]{9}$/.test(value)} // Validación de 9 dígitos
          errorMessage="Ingrese un teléfono válido de 9 dígitos"
        />
        <InputField
          type="email"
          placeholder="Correo Electrónico"
          value={formData.tEmail}
          onChange={(value) => handleInputChange("tEmail", value)}
          validate={(value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)}
          errorMessage="Ingrese un email válido"
        />
        <InputField
          placeholder="Distrito"
          value={formData.tDistrito}
          onChange={(value) => handleInputChange("tDistrito", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="El distrito es obligatorio"
        />
        <InputField
          placeholder="Ciudad"
          value={formData.tCiudad}
          onChange={(value) => handleInputChange("tCiudad", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="La ciudad es obligatoria"
        />
        <InputField
          placeholder="Profesión"
          value={formData.tProfesion}
          onChange={(value) => handleInputChange("tProfesion", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="La profesión es obligatoria"
        />
        <InputField
          placeholder="Puesto al que postula"
          value={formData.tPuesto}
          onChange={(value) => handleInputChange("tPuesto", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="El puesto es obligatorio"
        />
        <InputField
          placeholder="LinkedIn URL"
          type="url"
          value={formData.tLinkedinUrl}
          onChange={(value) => handleInputChange("tLinkedinUrl", value)}
          validate={(value) =>
            /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|company)\/[a-zA-Z0-9-]+\/?$/.test(
              value
            )
          }
          errorMessage="Ingrese un enlace válido de LinkedIn"
        />

        {/* Input para Adjuntar CV con label personalizado */}
        <div className="bolsa-trabajo-form__file">
          <label htmlFor="cv" className="custom-file-label">
            {formData.cv ? formData.cv.name : "Seleccionar CV"}
          </label>
          <input
            type="file"
            id="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      </div>

      <SubmitButton
        className="bolsa-trabajo-form__btnsubmit"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar"}
      </SubmitButton>

      {modalState.visible && (
        <ModalForm
          status={modalState.status}
          title={modalState.title}
          message={modalState.message}
          onClose={() => setModalState({ ...modalState, visible: false })}
        />
      )}
    </form>
  );
};
