import { useState } from "react";
import "./InputField.scss";

export const InputField = ({
  type = "text",
  label,
  name,
  placeholder,
  value,
  onChange,
  validate, // Función de validación externa
  errorMessage,
  maxLength, // Nuevo atributo opcional
}) => {
  const [error, setError] = useState(null);

  const handleBlur = () => {
    if (validate) {
      const isValid = validate(value); // Ejecuta la función de validación
      setError(isValid ? null : errorMessage || "Campo inválido");
    }
  };

  return (
    <div className="input-field">
      {label && <label className="input-field__label">{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
        className={`input-field__input ${
          error ? "input-field__input--error" : ""
        }`}
        maxLength={maxLength} // Aplica maxLength si se proporciona
      />
      {error && <span className="input-field__error">{error}</span>}
    </div>
  );
};
