// import { useState, useRef, forwardRef, useImperativeHandle } from "react";
// import { InputField } from "../InputField/InputField";
// // import "./DescripcionHechos.scss";
// import { TextAreaField } from "../TextAreaField/TextAreaField";
// import "./descripcionecho.scss";
// import { UploadButton } from "../UploadButton/UploadButton";
// import uploadicon from "../../assets/iconoupload.svg";
// export const DescripcionHechos = forwardRef((_, ref) => {
//   const [formData, setFormData] = useState({
//     detalleQueja: "",
//     codigoReserva: "",
//     ruc: "",
//     empresa: "",
//     archivos: [],
//   });

//   const uploadButtonRef = useRef(null); // Referencia a UploadButton

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   // Expone la función `getFormData` para obtener todos los datos (formulario + archivos)
//   useImperativeHandle(ref, () => ({
//     getFormData: () => ({
//       ...formData,
//       archivos: uploadButtonRef.current
//         ? uploadButtonRef.current.getFiles()
//         : [],
//     }),
//   }));

//   return (
//     <form className="descripcion-hechos">
//       <h2 className="descripcion-hechos__title">Descripción de los hechos</h2>

//       <TextAreaField
//         value={formData.detalleQueja}
//         onChange={(value) => handleInputChange("detalleQueja", value)}
//       />

//       <p className="descripcion-hechos__info">
//         Si su reclamo o queja está asociado a una reserva, ingresa la siguiente
//         información
//       </p>

//       <div className="descripcion-hechos__content">
//         <InputField
//           className="descripcion-hechos__input"
//           placeholder="Código de reserva"
//           value={formData.codigoReserva}
//           onChange={(value) => handleInputChange("codigoReserva", value)}
//         />

//         <InputField
//           className="descripcion-hechos__input"
//           placeholder="RUC"
//           value={formData.ruc}
//           onChange={(value) => handleInputChange("ruc", value)}
//         />

//         <InputField
//           className="descripcion-hechos__input"
//           placeholder="Empresa"
//           value={formData.empresa}
//           onChange={(value) => handleInputChange("empresa", value)}
//         />
//       </div>

//       {/* UploadButton con referencia */}
//       <UploadButton ref={uploadButtonRef}>
//         {({ isUploading, selectedFiles }) => (
//           <>
//             <img src={uploadicon} alt="Subir archivo" />
//             <span className="text">
//               {isUploading
//                 ? "Subiendo..."
//                 : selectedFiles.length > 0
//                 ? `${selectedFiles.length} archivo(s) listo(s)`
//                 : "Adjuntar Archivo"}
//             </span>
//           </>
//         )}
//       </UploadButton>
//     </form>
//   );
// });
// DescripcionHechos.displayName = "DescripcionHechos";

// import { useState, useRef, forwardRef, useImperativeHandle } from "react";
// import { InputField } from "../InputField/InputField";
// import { TextAreaField } from "../TextAreaField/TextAreaField";
// import { UploadButton } from "../UploadButton/UploadButton";
// import uploadicon from "../../assets/iconoupload.svg";
// import "./descripcionecho.scss";

// export const DescripcionHechos = forwardRef((_, ref) => {
//   const [formData, setFormData] = useState({
//     detalleQueja: "",
//     codigoReserva: "",
//     ruc: "",
//     empresa: "",
//     archivos: [],
//   });

//   const uploadButtonRef = useRef(null); // Referencia a UploadButton

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   // Expone la función `getFormData` para obtener todos los datos (formulario + archivos)
//   useImperativeHandle(ref, () => ({
//     getFormData: () => ({
//       ...formData,
//       archivos: uploadButtonRef.current
//         ? uploadButtonRef.current.getFiles()
//         : [],
//     }),
//     // Esta función será llamada desde el componente padre para eliminar un archivo
//     removeFile: (fileName) => {
//       setFormData((prev) => ({
//         ...prev,
//         archivos: prev.archivos.filter((file) => file.name !== fileName),
//       }));
//     },
//   }));

//   return (
//     <div className="descripcion-hechos">
//       <h2 className="descripcion-hechos__title">Descripción de los hechos</h2>

//       <TextAreaField
//         value={formData.detalleQueja}
//         onChange={(value) => handleInputChange("detalleQueja", value)}
//       />

//       <p className="descripcion-hechos__info">
//         Si su reclamo o queja está asociado a una reserva, ingresa la siguiente
//         información
//       </p>

//       <div className="descripcion-hechos__content">
//         <InputField
//           className="descripcion-hechos__input"
//           placeholder="Código de reserva"
//           value={formData.codigoReserva}
//           onChange={(value) => handleInputChange("codigoReserva", value)}
//         />

//         <InputField
//           className="descripcion-hechos__input"
//           placeholder="RUC"
//           value={formData.ruc}
//           onChange={(value) => handleInputChange("ruc", value)}
//         />

//         <InputField
//           className="descripcion-hechos__input"
//           placeholder="Empresa"
//           value={formData.empresa}
//           onChange={(value) => handleInputChange("empresa", value)}
//         />
//       </div>

//       {/* UploadButton con referencia */}
//       <UploadButton ref={uploadButtonRef}>
//         {({ isUploading, selectedFiles, removeFile }) => (
//           <>
//             <img src={uploadicon} alt="Subir archivo" />
//             <span className="text">
//               {isUploading
//                 ? "Subiendo..."
//                 : selectedFiles.length > 0
//                 ? `${selectedFiles.length} archivo(s) listo(s)`
//                 : "Adjuntar Archivo"}
//             </span>

//             {/* Mostrar archivos seleccionados */}
//             <div className="descripcion-hechos__files">
//               {selectedFiles.map((file) => (
//                 <div key={file.name} className="descripcion-hechos__file">
//                   <span>{file.name}</span>
//                   <button
//                     type="button"
//                     onClick={() => removeFile(file.name)}
//                     className="descripcion-hechos__file-remove"
//                   >
//                     Eliminar
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </UploadButton>
//     </div>
//   );
// });

// DescripcionHechos.displayName = "DescripcionHechos";

import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { InputField } from "../InputField/InputField";
import { TextAreaField } from "../TextAreaField/TextAreaField";
import { UploadButton } from "../UploadButton/UploadButton";
import uploadicon from "../../assets/iconoupload.svg";
import "./descripcionecho.scss";

export const DescripcionHechos = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    detalleQueja: "",
    codigoReserva: "",
    ruc: "",
    empresa: "",
    // Si quieres almacenar los archivos aquí (opcional)
    archivos: [],
  });

  // Ref para el UploadButton si quisieras acceder a getFiles() internamente
  const uploadButtonRef = useRef(null);

  // Manejadores de inputs
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Exponer método al padre para obtener toda la data de este formulario
  useImperativeHandle(ref, () => ({
    getData: () => ({
      ...formData,
      archivos: uploadButtonRef.current.getFiles(), // obtener archivos
    }),
  }));

  return (
    <div className="descripcion-hechos">
      <div className="descripcion-hechos__contents">
        <h2 className="descripcion-hechos__title">Descripción de los hechos</h2>

        <TextAreaField
          value={formData.detalleQueja}
          onChange={(value) => handleInputChange("detalleQueja", value)}
        />

        <p className="descripcion-hechos__info">
          Si su reclamo o queja está asociado a una reserva, ingresa la
          siguiente información
        </p>

        <div className="descripcion-hechos__content">
          <InputField
            className="descripcion-hechos__input"
            placeholder="Código de reserva"
            value={formData.codigoReserva}
            onChange={(value) => handleInputChange("codigoReserva", value)}
          />

          <InputField
            className="descripcion-hechos__input"
            placeholder="RUC"
            value={formData.ruc}
            onChange={(value) => handleInputChange("ruc", value)}
          />

          <InputField
            className="descripcion-hechos__input"
            placeholder="Empresa"
            value={formData.empresa}
            onChange={(value) => handleInputChange("empresa", value)}
          />
        </div>
      </div>
      <div className="descripcion-hechos__contents">
        <h3>Datos Adjuntos</h3>
        <p>
          Si dispones de documentos relacionados a tu caso, puedes adjuntarlos.
          Es opcional.Puedes adjuntar máximo 3 archivos. Formatos permitidos:
          pdf, doc, jpeg, jpg, png.
        </p>

        {/* Ahora, pasamos el ref para que DescripcionHechos pueda controlar los archivos */}
        <UploadButton ref={uploadButtonRef}>
          {({ selectedFiles, error }) => (
            <>
              <img src={uploadicon} alt="Subir archivo" />
              <span className="text">
                {selectedFiles.length > 0
                  ? `${selectedFiles.length} archivo(s) listo(s)`
                  : "Adjuntar Archivo"}
              </span>
              {error && <div className="error">{error}</div>}
            </>
          )}
        </UploadButton>
      </div>
    </div>
  );
});

DescripcionHechos.displayName = "DescripcionHechos";
