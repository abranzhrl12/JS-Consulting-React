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
      // Creamos la ubicación
      const location = { lat: -11.984093803078169, lng: -76.89624925373468 };

      // Inicializamos el mapa
      const map = new window.google.maps.Map(googleMapRef.current, {
        center: location,
        zoom: 16,
        disableDefaultUI: true,
        mapTypeControl: false,
      });

      // Creamos el marcador
      const marker = new window.google.maps.Marker({
        position: location,
        map: map,
        title: "JS Consulting S.A.C",
        icon: {
          url: markgooglemap, // Cambia la ruta según corresponda
          scaledSize: new window.google.maps.Size(30, 44),
        },
      });

      // ** Creamos el InfoWindow **
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="font-size:14px; line-height:1.5">
            <strong>JS CONSULTING S.A.C.</strong><br/>
            Av. San Miguel 21<br/>
            Lurigancho-Chosica 15461, Perú<br/>
            <a href="https://www.google.com/maps?q=-11.984093803078169,-76.89624925373468" target="_blank">
              Ver en Google Maps
            </a>
          </div>
        `,
      });

      // Evento para mostrar InfoWindow al hacer clic en el marcador
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    }

    return () => {
      delete window.initMap;
    };
  }, []);

  return (
    <div
      ref={googleMapRef}
      style={{ width: "100%", height: "400px" }} // Ajusta el tamaño según tu necesidad
    />
  );
};
