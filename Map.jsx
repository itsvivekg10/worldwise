// import { useSearchParams, useNavigate } from "react-router-dom";
// import styles from "./Map.module.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { useState } from "react";
// function Map() {
//   const navigate = useNavigate();
//   const [position, setPosition] = useState([40, 0]);
//   const [searchParams] = useSearchParams();
//   // const lat = searchParams.get("lat");
//   // const lng = searchParams.get("lng");
//   return (
//     <div
//       className={styles.mapContainer}
//       onClick={() => {
//         navigate("form");
//       }}
//     >
//       {" "}
//       <MapContainer
//         center={position}
//         zoom={13}
//         scrollWheelZoom={false}
//         className={styles.Map}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// }

// export default Map;

import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../context/CitiesContext";
function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]); // eslint-disable-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams(); // eslint-disable-line no-unused-vars
  // const navigate = useNavigate();
  const { cities } = useCities();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={[mapLat, mapLng]}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>{city.cityName}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
