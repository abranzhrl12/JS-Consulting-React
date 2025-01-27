import { useEffect, useState } from "react";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const formattedCountries = data
          .map((country) => ({
            name: country.name.common || "",
            flag: country.flags.png || "",
            code:
              country.idd.root && country.idd.suffixes
                ? country.idd.root + country.idd.suffixes[0]
                : "",
          }))
          .filter((country) => country.name && country.flag && country.code);

        setCountries(formattedCountries);
      } catch (err) {
        setError("Error fetching countries");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};
