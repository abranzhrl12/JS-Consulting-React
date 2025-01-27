import { useState } from "react";
import "./DropdownSelect.scss";
export const DropdownSelect = ({
  options = [],
  placeholder = "Seleccionar",
  onChange,
  customIcon, // Recibe un ícono personalizado opcional
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div className="dropdown-select">
      <div
        className="dropdown-select__selected"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption?.label || placeholder}</span>
        {customIcon ? (
          <img
            src={customIcon}
            alt="Ícono desplegable"
            className="dropdown-select__custom-icon"
          />
        ) : (
          <i className={`dropdown-select__arrow ${isOpen ? "open" : ""}`}>▼</i>
        )}
      </div>

      {/* Siempre renderiza el contenedor de opciones pero controla su visibilidad */}
      <div className={`dropdown-select__options ${isOpen ? "active" : ""}`}>
        {options.map((option) => (
          <div
            key={option.value}
            className="dropdown-select__option"
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};
