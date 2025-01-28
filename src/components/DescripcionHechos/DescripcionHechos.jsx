import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { InputField } from "../InputField/InputField";
// import "./DescripcionHechos.scss";
import { TextAreaField } from "../TextAreaField/TextAreaField";
import "./descripcionecho.scss";
import { UploadButton } from "../UploadButton/UploadButton";
import uploadicon from "../../assets/iconoupload.svg";
export const DescripcionHechos = forwardRef((_, ref) => {
  const [formData, setFormData] = useState({
    detalleQueja: "",
    codigoReserva: "",
    ruc: "",
    empresa: "",
    archivos: [],
  });

  const uploadButtonRef = useRef(null); // Referencia a UploadButton

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Expone la función `getFormData` para obtener todos los datos (formulario + archivos)
  useImperativeHandle(ref, () => ({
    getFormData: () => ({
      ...formData,
      archivos: uploadButtonRef.current
        ? uploadButtonRef.current.getFiles()
        : [],
    }),
  }));

  return (
    <form className="descripcion-hechos">
      <h2 className="descripcion-hechos__title">Descripción de los hechos</h2>

      <TextAreaField
        value={formData.detalleQueja}
        onChange={(value) => handleInputChange("detalleQueja", value)}
      />

      <p className="descripcion-hechos__info">
        Si su reclamo o queja está asociado a una reserva, ingresa la siguiente
        información
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

      {/* UploadButton con referencia */}
      <UploadButton ref={uploadButtonRef}>
        {({ isUploading, selectedFiles }) => (
          <>
            <img src={uploadicon} alt="Subir archivo" />
            <span className="text">
              {isUploading
                ? "Subiendo..."
                : selectedFiles.length > 0
                ? `${selectedFiles.length} archivo(s) listo(s)`
                : "Adjuntar Archivo"}
            </span>
          </>
        )}
      </UploadButton>
    </form>
  );
});
DescripcionHechos.displayName = "DescripcionHechos";
