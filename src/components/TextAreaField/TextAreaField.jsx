import { useState } from "react";
import "./TextAreaField.scss.scss"; // Archivo de estilos (opcional)

export const TextAreaField = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  validate,
  errorMessage,
  showLabel = true, // Por defecto muestra el label
}) => {
  const [error, setError] = useState(null);

  const handleBlur = () => {
    if (validate) {
      const isValid = validate(value);
      setError(isValid ? null : errorMessage || "Campo inválido");
    }
  };

  return (
    <div className="text-area-field">
      {showLabel && label && (
        <label className="text-area-field__label">{label}</label>
      )}
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
        className={`text-area-field__input ${
          error ? "text-area-field__input--error" : ""
        }`}
      ></textarea>
      {error && <span className="text-area-field__error">{error}</span>}
    </div>
  );
};
