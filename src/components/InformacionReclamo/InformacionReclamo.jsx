import { useState } from "react";
import { InputField } from "../InputField/InputField";
import { RadioGroup } from "../RadioGroup/RadioGroup";
import "./InformacionReclamo.scss";

export const InformacionReclamo = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    tipoSolicitud: "",
    identificacionProducto: "",
    lugarSolicitud: "",
    montoReclamado: "",
    razon: "",
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

  const descripciones = [
    {
      tipo: "Reclamo",
      texto: "Disconformidad relacionada a los productos o servicios.",
    },
    {
      tipo: "Queja",
      texto:
        "Disconformidad no relacionada a los productos o servicios; malestar o descontento en relación a la atención al público.",
    },
    {
      tipo: "Sugerencia",
      texto: "Una sugerencia es algo que se propone, insinúa o sugiere.",
    },
  ];

  return (
    <form className="informacion-reclamo" onSubmit={handleSubmit}>
      {/* Título */}
      <h2 className="informacion-reclamo__title">
        Información del reclamo o queja
      </h2>

      {/* Sección de tipo de solicitud */}
      <div className="informacion-reclamo__section">
        <h3 className="informacion-reclamo__subtitle">Tipo de solicitud</h3>
        <RadioGroup
          name="tipoSolicitud"
          value={formData.tipoSolicitud}
          onChange={(value) => handleInputChange("tipoSolicitud", value)}
          options={[
            { value: "reclamo", label: "Reclamo" },
            { value: "queja", label: "Queja" },
            { value: "sugerencia", label: "Sugerencia" },
          ]}
        />
      </div>

      {/* Información fija sobre tipos de solicitud */}
      <div className="informacion-reclamo__descripciones">
        {descripciones.map((desc) => (
          <div key={desc.tipo} className="informacion-reclamo__descripcion">
            <strong>{desc.tipo}:</strong> {desc.texto}
          </div>
        ))}
      </div>

      {/* Campos adicionales */}
      <div className="informacion-reclamo__sectiontwo">
        <InputField
          className="informacion-reclamo__input"
          placeholder="Identificación del producto / servicio"
          value={formData.identificacionProducto}
          onChange={(value) =>
            handleInputChange("identificacionProducto", value)
          }
          validate={(value) => value.trim().length > 0}
          errorMessage="Este campo es obligatorio"
        />
        <InputField
          className="informacion-reclamo__input"
          placeholder="Lugar de la solicitud"
          value={formData.lugarSolicitud}
          onChange={(value) => handleInputChange("lugarSolicitud", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="Este campo es obligatorio"
        />
        <InputField
          className="informacion-reclamo__input"
          placeholder="Monto del servicio reclamado"
          value={formData.montoReclamado}
          onChange={(value) => handleInputChange("montoReclamado", value)}
          validate={(value) => /^[0-9]+(\.[0-9]{1,2})?$/.test(value)} // Validar monto decimal
          errorMessage="Ingrese un monto válido"
        />
        <InputField
          className="informacion-reclamo__input"
          placeholder="Razón"
          value={formData.razon}
          onChange={(value) => handleInputChange("razon", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="Este campo es obligatorio"
        />
      </div>
    </form>
  );
};
