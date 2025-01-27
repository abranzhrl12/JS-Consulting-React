import { useState } from "react";
import { useCountries } from "../../hooks/useCountries"; // Importar el custom hook
import "./CountryDropdown.scss";

export const CountryDropdown = ({ onSelect }) => {
  const { countries, loading, error } = useCountries(); // Usar el hook
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    flag: "",
    code: "+51",
    name: "Perú",
  }); // Valor inicial

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    if (onSelect) onSelect(country); // Notificar al padre
  };

  if (loading) return <p>Cargando países...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="country-dropdown">
      <div
        className="country-dropdown__selected"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src={selectedCountry.flag}
          alt={selectedCountry.name}
          className="country-dropdown__flag"
        />
        <span className="country-dropdown__code">{selectedCountry.code}</span>
        <i className={`country-dropdown__arrow ${isOpen ? "open" : ""}`}>▼</i>
      </div>
      {isOpen && (
        <div className="country-dropdown__options">
          {countries.map((country) => (
            <div
              key={country.code}
              className="country-dropdown__option"
              onClick={() => handleSelect(country)}
            >
              <img
                src={country.flag}
                alt={country.name}
                className="country-dropdown__option-flag"
              />
              <span className="country-dropdown__option-code">
                {country.code}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
