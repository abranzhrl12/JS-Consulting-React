import React, { useRef, useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: -12.0464,
  lng: -77.0428,
};

export const MapDirection = () => {
  const mapRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const onLoad = (map) => {
    mapRef.current = map;
    setIsMapLoaded(true);
  };

  useEffect(() => {
    if (isMapLoaded && window.google && window.google.maps?.marker) {
      const { AdvancedMarkerElement } = window.google.maps.marker;

      // Asegurarse de que el marcador no se cree varias veces
      if (!mapRef.current || !AdvancedMarkerElement) return;

      const marker = new AdvancedMarkerElement({
        position: defaultCenter,
        map: mapRef.current,
      });

      // Asegurar la detección del evento de clic
      marker.addEventListener("click", () => {
        const googleMapsUrl = `https://www.google.com/maps?q=${defaultCenter.lat},${defaultCenter.lng}`;
        window.open(googleMapsUrl, "_blank");
      });
    }
  }, [isMapLoaded]);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyASN5pZVSEymiTV4wFCoB3ChmMPcKzaoSs"
      libraries={["marker"]}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={defaultCenter}
        zoom={15}
        onLoad={onLoad}
      />
    </LoadScript>
  );
};
