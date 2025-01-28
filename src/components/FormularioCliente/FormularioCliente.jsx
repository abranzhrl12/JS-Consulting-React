import { useState } from "react";
import { InputField } from "../InputField/InputField";
import { DropdownSelect } from "../DropdownSelect/DropdownSelect";
import { CountryDropdown } from "../CountryDropdown/CountryDropdown";
import "./FormularioCliente.scss";

export const FormularioCliente = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
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
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, menorDeEdad: !formData.menorDeEdad });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form className="Reclamos__form" onSubmit={handleSubmit}>
      {/* Sección Datos del Cliente */}

      <h2>Datos Del Cliente</h2>
      <div className="Reclamos__form-grid">
        <InputField
          className="Reclamos__form-grig-input Reclamos__form-grig-input-inpt1"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={(value) => handleInputChange("nombre", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="El nombre es obligatorio"
        />
        <InputField
          className="Reclamos__form-grig-input Reclamos__form-grig-input-inpt2"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={(value) => handleInputChange("apellido", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="El apellido es obligatorio"
        />
        <div className="Reclamos__form-grig-Group Reclamos__form-grig-input-group">
          <DropdownSelect
            className="custom_select-Documento Reclamos__form-grig-input-inptip"
            options={[
              { value: "DNI", label: "DNI" },
              { value: "RUC", label: "RUC" },
            ]}
            placeholder="Tipo de Documento"
            onChange={(option) =>
              handleInputChange("tipoDocumento", option.value)
            }
          />
          <InputField
            className="Reclamos__form-grig-input Reclamos__form-grig-input--wd Reclamos__form-grig-input-inptDoc"
            placeholder="Número de documento"
            value={formData.numeroDocumento}
            onChange={(value) => handleInputChange("numeroDocumento", value)}
            validate={(value) => value.trim().length > 0}
            errorMessage="El número de documento es obligatorio"
          />
        </div>

        <InputField
          className="Reclamos__form-grig-input"
          placeholder="País de residencia"
          value={formData.direccion}
          onChange={(value) => handleInputChange("paisResidencia", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="La paisResidencia es obligatoria"
        />
        <InputField
          className="Reclamos__form-grig-input Reclamos__form-grig-input-inpt3"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={(value) => handleInputChange("direccion", value)}
          validate={(value) => value.trim().length > 0}
          errorMessage="La dirección es obligatoria"
        />
      </div>

      {/* Sección Datos del Contacto */}
      <div className="Reclamos__form-grig-title">
        <h2>Datos del Contacto</h2>
      </div>
      <div className="Reclamos__form-grid-2">
        <div className="Reclamos__form-grig-Group Reclamos__form-grig-telf">
          <CountryDropdown
            className="dropdown"
            onSelect={(country) =>
              handleInputChange("codigoPais", country.code)
            }
          />
          <InputField
            className="Reclamos__form-grig-input Reclamos__form-grig-input--wd"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={(value) => handleInputChange("telefono", value)}
            validate={(value) => /^[0-9]{9}$/.test(value)}
            errorMessage="El teléfono debe tener 9 dígitos"
          />
        </div>
        <InputField
          className="Reclamos__form-grig-input Reclamos__form-grig-input-inpt5"
          placeholder="Correo electrónico"
          type="email"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
          validate={(value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)}
          errorMessage="Ingrese un email válido"
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="check"
          checked={formData.menorDeEdad}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="check">Soy menor de edad</label>
      </div>
    </form>
  );
};
