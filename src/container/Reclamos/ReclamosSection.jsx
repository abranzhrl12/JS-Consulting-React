// import { FormularioCliente } from "../../components/FormularioCliente/FormularioCliente";
// import "./reclamos.scss";
// import logoBuzon from "../../assets/IconoBuzon.svg";
// import { InformacionReclamo } from "../../components/InformacionReclamo/InformacionReclamo";
// import { DescripcionHechos } from "../../components/DescripcionHechos/DescripcionHechos";
// import { SubmitButton } from "../../components/SubmitButton/SubmitButton";

// export const ReclamosSection = () => {
//   const handleFormSubmit = (formData) => {
//     console.log("Datos enviados:", formData);
//     // Aquí puedes procesar los datos enviados
//   };
//   return (
//     <div className="Reclamos">
//       <div className="Reclamos__contentall">
//         <div className="Reclamos__texts">
//           <img src={logoBuzon} alt="" />
//           <h1>Buzón de quejas, reclamos y sugerencias</h1>
//           <p>
//             Para realizar una queja, reclamo o sugerencia, siga los pasos
//             indicados a continuación:
//           </p>
//         </div>
//         <div>
//           <FormularioCliente onSubmit={handleFormSubmit} />
//         </div>

//         <InformacionReclamo />

//         <DescripcionHechos />
//         <SubmitButton className="submit-buttonreclamos">Enviar</SubmitButton>
//       </div>
//     </div>
//   );
// };
import { useState, useRef } from "react";
import { FormularioCliente } from "../../components/FormularioCliente/FormularioCliente"; // Formulario de Datos del Cliente
import { InformacionReclamo } from "../../components/InformacionReclamo/InformacionReclamo"; // Formulario de Información del Reclamo
import { DescripcionHechos } from "../../components/DescripcionHechos/DescripcionHechos"; // Formulario de Descripción de los Hechos
import { SubmitButton } from "../../components/SubmitButton/SubmitButton"; // Botón de Enviar
import "./reclamos.scss";
import logoBuzon from "../../assets/IconoBuzon.svg"; // Logo

export const ReclamosSection = () => {
  const uploadButtonRef = useRef(null); // Referencia a UploadButton
  const [formData, setFormData] = useState({
    // Datos del Cliente
    nombre: "",
    apellido: "",
    tipoDocumento: "DNI",
    numeroDocumento: "",
    paisResidencia: "",
    direccion: "",
    codigoPais: "+51",
    telefono: "",
    email: "",
    menorDeEdad: false,

    // Información de Reclamo
    tipoSolicitud: "",
    identificacionProducto: "",
    lugarSolicitud: "",
    montoReclamado: "",
    razon: "",

    // Descripción de los Hechos
    detalleQueja: "",
    codigoReserva: "",
    ruc: "",
    empresa: "",
    archivos: [],
  });

  // Maneja el cambio de datos de los campos
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Maneja el cambio del checkbox
  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      menorDeEdad: !prevData.menorDeEdad,
    }));
  };

  // Enviar los datos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Agregar los archivos desde el componente DescripcionHechos
    const allData = {
      ...formData,
      archivos: uploadButtonRef.current
        ? uploadButtonRef.current.getFiles()
        : [],
    };
    console.log("Datos enviados:", allData);
    // Aquí puedes enviar los datos a un servidor o realizar el procesamiento necesario
  };

  return (
    <div className="Reclamos">
      <div className="Reclamos__contentall">
        <div className="Reclamos__texts">
          <img src={logoBuzon} alt="Buzón" />
          <h1>Buzón de quejas, reclamos y sugerencias</h1>
          <p>
            Para realizar una queja, reclamo o sugerencia, siga los pasos
            indicados a continuación:
          </p>
        </div>

        {/* Formulario Unificado */}
        <form className="Reclamos__formglobal" onSubmit={handleSubmit}>
          {/* Datos del Cliente */}
          <div className="form-section">
            <FormularioCliente
              formData={formData}
              handleInputChange={handleInputChange}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>

          {/* Información del Reclamo */}
          <div className="form-section">
            <InformacionReclamo
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </div>

          {/* Descripción de los Hechos */}
          <div className="form-section">
            <DescripcionHechos
              formData={formData}
              handleInputChange={handleInputChange}
              ref={uploadButtonRef}
            />
          </div>

          {/* Botón Enviar */}
          <SubmitButton className="submit-buttonreclamos">Enviar</SubmitButton>
        </form>
      </div>
    </div>
  );
};
