import { useEffect, useRef } from "react";
import markgooglemap from "../../assets/MarkMap.png";
export const GoogleMap = () => {
  const googleMapRef = useRef(null); // Referencia al div donde cargaremos el mapa

  useEffect(() => {
    // 1. Cargamos dinámicamente el script de Google Maps
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${
      import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    }&callback=initMap`;
    googleMapScript.async = true;
    googleMapScript.defer = true;

    // 2. Adjuntamos el script al body
    window.document.body.appendChild(googleMapScript);

    // 3. Definimos en window la función de callback para inicializar el mapa
    window.initMap = initMap;

    function initMap() {
      // Creamos una ubicación
      const location = { lat: -11.984093803078169, lng: -76.89624925373468 };

      // Inicializamos el mapa
      const map = new window.google.maps.Map(googleMapRef.current, {
        center: location,
        zoom: 16,
        disableDefaultUI: true,
        mapTypeControl: false,
      });

      // Creamos el marker
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "JS Consulting S.A.C",
        icon: {
          url: markgooglemap, // Cambia la ruta según corresponda
          scaledSize: new window.google.maps.Size(30, 44),
        },
      });
    }

    return () => {
      // Limpieza (opcional)
      // Podrías remover el script o la función callback si deseas.
      delete window.initMap;
    };
  }, []);

  return (
    <div
      ref={googleMapRef}
      style={{ width: "100%", height: "400px" }} // Ajusta el tamaño a tu gusto
    />
  );
};
