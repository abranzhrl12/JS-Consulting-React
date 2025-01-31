// import { useState, useEffect } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const defaultCenter = {
//   lat: -12.0464,
//   lng: -77.0428,
// };
// export const MapDirection = () => {
//   const [address, setAddress] = useState("");
//   const [location, setLocation] = useState(defaultCenter);

//   const handleAddressChange = (event) => {
//     setAddress(event.target.value);
//   };

//   const handleSearch = async () => {
//     if (!address) return;

//     const geocoder = new window.google.maps.Geocoder();
//     geocoder.geocode({ address }, (results, status) => {
//       if (status === "OK" && results[0]) {
//         setLocation({
//           lat: results[0].geometry.location.lat(),
//           lng: results[0].geometry.location.lng(),
//         });
//       } else {
//         alert("Dirección no encontrada");
//       }
//     });
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyASN5pZVSEymiTV4wFCoB3ChmMPcKzaoSs">
//       <div>
//         <input
//           type="text"
//           value={address}
//           onChange={handleAddressChange}
//           placeholder="Ingrese una dirección"
//           style={{ width: "80%", padding: "10px", margin: "10px 0" }}
//         />
//         <button onClick={handleSearch} style={{ padding: "10px" }}>
//           Buscar
//         </button>
//         <GoogleMap
//           mapContainerStyle={mapContainerStyle}
//           center={location}
//           zoom={15}
//         >
//           <Marker position={location} />
//         </GoogleMap>
//       </div>
//     </LoadScript>
//   );
// };
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: -12.0464,
  lng: -77.0428,
};

export const MapDirection = () => {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState(defaultCenter);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => alert("No se pudo obtener la ubicación"),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSearch = async () => {
    if (!address) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results[0]) {
        setLocation({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        });
      } else {
        alert("Dirección no encontrada");
      }
    });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyASN5pZVSEymiTV4wFCoB3ChmMPcKzaoSs">
      <div>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Ingrese una dirección"
          style={{ width: "80%", padding: "10px", margin: "10px 0" }}
        />
        <button onClick={handleSearch} style={{ padding: "10px" }}>
          Buscar
        </button>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={location}
          zoom={15}
        >
          <Marker position={location} />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};
