import { useState } from "react";
import { InputField } from "../InputField/InputField";
// import "./DescripcionHechos.scss";
import { TextAreaField } from "../TextAreaField/TextAreaField";
export const DescripcionHechos = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    detalleReclamo: "",
    detalleQueja: "",
    codigoReserva: "",
    ruc: "",
    empresa: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form className="descripcion-hechos" onSubmit={handleSubmit}>
      {/* Título */}
      <h2 className="descripcion-hechos__title">Descripción de los hechos</h2>

      {/* Detalle del Reclamo y Queja */}

      <TextAreaField />

      {/* Información adicional */}
      <p className="descripcion-hechos__info">
        Si su reclamo o queja está asociado a una reserva, ingresa la siguiente
        información
      </p>
      <InputField
        className="descripcion-hechos__input"
        placeholder="Código de reserva"
        value={formData.codigoReserva}
        onChange={(value) => handleInputChange("codigoReserva", value)}
      />

      <InputField
        className="descripcion-hechos__input"
        placeholder="Empresa"
        value={formData.empresa}
        onChange={(value) => handleInputChange("empresa", value)}
      />

      <InputField
        className="descripcion-hechos__input"
        placeholder="Empresa"
        value={formData.empresa}
        onChange={(value) => handleInputChange("empresa", value)}
      />
    </form>
  );
};
