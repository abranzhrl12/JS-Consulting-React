import { useState, useEffect } from "react";
import { useCountries } from "../../hooks/useCountries"; // Importar el custom hook
import "./CountryDropdown.scss";

export const CountryDropdown = ({ onSelect }) => {
  const { countries, loading, error } = useCountries(); // Usar el hook
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    flag: "", // 🔥 Se actualizará dinámicamente en useEffect
    code: "+51",
    name: "Perú",
  });

  // 🔥 Cuando los países se carguen, buscar la bandera de Perú y actualizar el estado
  useEffect(() => {
    if (countries.length > 0) {
      const peru = countries.find((c) => c.code === "+51" || c.name === "Perú");
      if (peru) {
        setSelectedCountry(peru);
      }
    }
  }, [countries]); // 🔥 Se ejecuta cuando `countries` cambia

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
          src={selectedCountry.flag || "fallback-image.png"} // 🔥 Imagen por defecto en caso de error
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
