// import { useState } from "react";
// import { InputField } from "../InputField/InputField";
// import { SubmitButton } from "../SubmitButton/SubmitButton";
// import { ModalForm } from "../ModalForm/ModalForm";
// import "./bolsaTrabajoForm.scss";

// export const BolsaTrabajoForm = () => {
//   const [formData, setFormData] = useState({
//     tNombre: "",
//     tApellido: "",
//     tTelefono: "",
//     tEmail: "",
//     tDistrito: "",
//     tCiudad: "",
//     tProfesion: "",
//     tPuesto: "",
//     tLinkedinUrl: "",
//     cv: null, // Para almacenar el archivo
//   });

//   const [loading, setLoading] = useState(false);
//   const [modalState, setModalState] = useState({
//     visible: false,
//     status: "success",
//     title: "",
//     message: "",
//   });

//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, cv: e.target.files[0] });
//   };

//   const showModal = (status, title, message) => {
//     setModalState({
//       visible: true,
//       status: status,
//       title: title,
//       message: message,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Crear objeto FormData para enviar como multipart/form-data
//     const formDataToSend = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       formDataToSend.append(key, value);
//     });

//     try {
//       const response = await fetch("https://api.jsconsulting.pe/work", {
//         method: "POST",
//         body: formDataToSend, // FormData se maneja automáticamente sin headers
//       });

//       if (!response.ok) throw new Error("Error al enviar el formulario");

//       showModal(
//         "success",
//         "¡Gracias por postular!",
//         "Tu información fue enviada correctamente."
//       );

//       // Resetear formulario
//       setFormData({
//         tNombre: "",
//         tApellido: "",
//         tTelefono: "",
//         tEmail: "",
//         tDistrito: "",
//         tCiudad: "",
//         tProfesion: "",
//         tPuesto: "",
//         tLinkedinUrl: "",
//         cv: null,
//       });
//     } catch (error) {
//       showModal(
//         "error",
//         "¡Oops! Algo salió mal",
//         "Hubo un error al enviar el formulario. Inténtelo de nuevo."
//       );
//     }

//     setLoading(false);
//   };

//   return (
//     <form className="bolsa-trabajo-form" onSubmit={handleSubmit}>
//       <div className="bolsa-trabajo-form__texts">
//         <h3>BOLSA DE TRABAJO</h3>
//         <p>
//           Envíanos tus datos y experiencia, te responderemos en el menor tiempo
//           posible.
//         </p>
//       </div>
//       <div className="bolsa-trabajo-form__grid">
//         <InputField
//           placeholder="Nombre"
//           value={formData.tNombre}
//           onChange={(value) => handleInputChange("tNombre", value)}
//           validate={(value) => value.trim().length > 0}
//           errorMessage="El nombre es obligatorio"
//         />
//         <InputField
//           placeholder="Apellido"
//           value={formData.tApellido}
//           onChange={(value) => handleInputChange("tApellido", value)}
//           validate={(value) => value.trim().length > 0}
//           errorMessage="El apellido es obligatorio"
//         />
//         <InputField
//           placeholder="Teléfono"
//           type="tel"
//           value={formData.tTelefono}
//           onChange={(value) => handleInputChange("tTelefono", value)}
//           validate={(value) => /^[0-9]{9}$/.test(value)}
//           errorMessage="Ingrese un teléfono válido"
//         />
//         <InputField
//           type="email"
//           placeholder="Correo Electrónico"
//           value={formData.tEmail}
//           onChange={(value) => handleInputChange("tEmail", value)}
//           validate={(value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)}
//           errorMessage="Ingrese un email válido"
//         />
//         <InputField
//           placeholder="Distrito"
//           value={formData.tDistrito}
//           onChange={(value) => handleInputChange("tDistrito", value)}
//           validate={(value) => value.trim().length > 0}
//           errorMessage="El distrito es obligatorio"
//         />
//         <InputField
//           placeholder="Ciudad"
//           value={formData.tCiudad}
//           onChange={(value) => handleInputChange("tCiudad", value)}
//           validate={(value) => value.trim().length > 0}
//           errorMessage="La ciudad es obligatoria"
//         />
//         <InputField
//           placeholder="Profesión"
//           value={formData.tProfesion}
//           onChange={(value) => handleInputChange("tProfesion", value)}
//           validate={(value) => value.trim().length > 0}
//           errorMessage="La profesión es obligatoria"
//         />
//         <InputField
//           placeholder="Puesto al que postula"
//           value={formData.tPuesto}
//           onChange={(value) => handleInputChange("tPuesto", value)}
//           validate={(value) => value.trim().length > 0}
//           errorMessage="El puesto es obligatorio"
//         />
//         <InputField
//           placeholder="LinkedIn URL"
//           type="url"
//           value={formData.tLinkedinUrl}
//           onChange={(value) => handleInputChange("tLinkedinUrl", value)}
//           validate={(value) =>
//             /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|company)\/[a-zA-Z0-9-]+\/?$/.test(
//               value
//             )
//           }
//           errorMessage="Ingrese un enlace válido de LinkedIn"
//         />

//         {/* Input para Adjuntar CV (NO SE MODIFICA SU ESTRUCTURA) */}
//         <div className="bolsa-trabajo-form__file">
//           <input
//             type="file"
//             id="cv"
//             accept=".pdf,.doc,.docx"
//             onChange={handleFileChange}
//           />
//           {/* Se mantiene la estructura de HTML con la misma clase */}
//           {/* <label htmlFor="cv">Adjuntar CV</label> */}
//         </div>
//       </div>

//       <SubmitButton disabled={loading}>
//         {loading ? "Enviando..." : "Enviar"}
//       </SubmitButton>

//       {modalState.visible && (
//         <ModalForm
//           status={modalState.status}
//           title={modalState.title}
//           message={modalState.message}
//           onClose={() => setModalState({ ...modalState, visible: false })}
//         />
//       )}
//     </form>
//   );
// };

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

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
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

      if (!response.ok) throw new Error("Error al enviar el formulario");

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
        "Hubo un error al enviar el formulario. Inténtelo de nuevo."
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

        {/* Input para Adjuntar CV */}
        <div className="bolsa-trabajo-form__file">
          <input
            type="file"
            id="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </div>
      </div>

      <SubmitButton disabled={loading}>
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
