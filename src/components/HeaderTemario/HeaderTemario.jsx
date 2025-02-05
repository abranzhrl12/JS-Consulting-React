import { useState } from "react";
import { ContactButton } from "../ContactButton/ContactButton";
import { InputField } from "../InputField/InputField";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { ModalForm } from "../ModalForm/ModalForm";
import "./headetemariocurso.scss";

export const HeaderTemario = ({ title, banner, tDescripcion, loading }) => {
  // Estado del formulario (con 'title' como valor inicial de 'tCurso')
  const [formData, setFormData] = useState({
    tNombreCompleto: "",
    tEmail: "",
    tTelefono: "",
    tDni: "",
    tCurso: title, // Valor por defecto
  });

  // Estado del modal (éxito/error)
  const [modalState, setModalState] = useState({
    status: "", // "success" | "error" | ""
    title: "",
    message: "",
  });

  // Cerrar el modal
  const handleCloseModal = () => {
    setModalState({ status: "", title: "", message: "" });
  };

  // Validar email con regex sencillo
  const validateEmail = (email) => {
    // Asegúrate de ajustar esta expresión regular según tus requerimientos
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  // Validar teléfono (ejemplo: 9 dígitos para Perú, ajústalo según tu necesidad)
  const validatePhone = (phone) => {
    const pattern = /^[0-9]{9}$/;
    return pattern.test(phone);
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones mínimas
    if (!formData.tNombreCompleto.trim()) {
      setModalState({
        status: "error",
        title: "Error de Validación",
        message: "El nombre completo es obligatorio.",
      });
      return;
    }

    if (!formData.tDni.trim()) {
      setModalState({
        status: "error",
        title: "Error de Validación",
        message: "El DNI es obligatorio.",
      });
      return;
    }

    if (!formData.tEmail.trim()) {
      setModalState({
        status: "error",
        title: "Error de Validación",
        message: "El email es obligatorio.",
      });
      return;
    }

    if (!validateEmail(formData.tEmail)) {
      setModalState({
        status: "error",
        title: "Error de Validación",
        message: "El formato del email no es válido.",
      });
      return;
    }

    if (!formData.tTelefono.trim()) {
      setModalState({
        status: "error",
        title: "Error de Validación",
        message: "El teléfono es obligatorio.",
      });
      return;
    }

    if (!validatePhone(formData.tTelefono)) {
      setModalState({
        status: "error",
        title: "Error de Validación",
        message: "El teléfono debe tener 9 dígitos (solo números).",
      });
      return;
    }

    if (!formData.tCurso.trim()) {
      setModalState({
        status: "error",
        title: "Error de Validación",
        message: "El nombre del curso es obligatorio.",
      });
      return;
    }

    // Si todas las validaciones pasan, intentamos enviar la data
    try {
      const response = await fetch(
        "https://api.jsconsulting.pe/contact/course",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Enviando como JSON
        }
      );

      if (!response.ok) {
        throw new Error("Hubo un problema en el servidor.");
      }

      const result = await response.json();
      const serverMessage =
        result?.message || "Su información ha sido enviada correctamente.";

      setModalState({
        status: "success",
        title: "Envío Exitoso",
        message: serverMessage,
      });

      // Limpiar el formulario (restaurando 'tCurso' al valor por defecto)
      setFormData({
        tNombreCompleto: "",
        tEmail: "",
        tTelefono: "",
        tDni: "",
        tCurso: title,
      });
    } catch (error) {
      setModalState({
        status: "error",
        title: "Error al Enviar",
        message: error.message || "Ocurrió un error al enviar.",
      });
    }
  };

  return (
    <header className="curso-horarios-details" id="headerTemario">
      {/* Modal de éxito/error */}
      {modalState.status && (
        <ModalForm
          status={modalState.status}
          title={modalState.title}
          message={modalState.message}
          onClose={handleCloseModal}
        />
      )}

      {/* Background Image Skeleton */}
      {loading ? (
        <div className="curso-horarios-details__skeleton curso-horarios-details__bg" />
      ) : (
        <img className="curso-horarios-details__bg" src={banner} alt={title} />
      )}

      <div className="curso-horarios-details__contentall">
        <div className="curso-horarios-details__contentText">
          {/* Title Skeleton */}
          {loading ? (
            <>
              <div className="curso-horarios-details__skeleton curso-horarios-details__skeleton--title" />
              <div className="curso-horarios-details__skeleton curso-horarios-details__skeleton--text" />
              <div className="curso-horarios-details__skeleton curso-horarios-details__skeleton--text" />
              <div className="curso-horarios-details__skeleton curso-horarios-details__skeleton--text" />
            </>
          ) : (
            <>
              <h1 className="curso-horarios-details__title">{title}</h1>
              <p className="curso-horarios-details__paragraph">
                {tDescripcion}
              </p>
            </>
          )}

          <div className="curso-horarios-details__btn">
            {!loading && <ContactButton />}
          </div>
        </div>

        <div className="curso-horarios-details__contentForm">
          {/* Form Skeleton */}
          {loading ? (
            <div className="curso-horarios-details__skeleton curso-horarios-details__skeleton--form" />
          ) : (
            <form
              className="curso-horarios-details__form"
              onSubmit={handleSubmit}
            >
              <h2>Contáctanos</h2>
              <p className="curso-horarios-details__formparagraph">
                Déjanos tus datos y nos pondremos en contacto
              </p>

              <div className="curso-horarios-details__formInputs">
                <InputField
                  placeholder="Nombre y Apellido"
                  value={formData.tNombreCompleto}
                  onChange={(val) =>
                    setFormData({ ...formData, tNombreCompleto: val })
                  }
                />

                <InputField
                  placeholder="DNI"
                  value={formData.tDni}
                  inputMode="numeric"
                  maxLength={8}
                  onChange={(val) => setFormData({ ...formData, tDni: val })}
                />

                <InputField
                  placeholder="Email"
                  value={formData.tEmail}
                  onChange={(val) => setFormData({ ...formData, tEmail: val })}
                />

                <InputField
                  placeholder="Teléfono Celular"
                  value={formData.tTelefono}
                  inputMode="numeric"
                  maxLength={9}
                  onChange={(val) =>
                    setFormData({ ...formData, tTelefono: val })
                  }
                />

                <InputField
                  placeholder="Curso"
                  value={formData.tCurso}
                  onChange={(val) => setFormData({ ...formData, tCurso: val })}
                />

                <SubmitButton className="curso-horarios-details__formSubtmit">
                  <span className="curso-horarios-details__formSubtmit-span">
                    Cotizar
                  </span>
                </SubmitButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </header>
  );
};
