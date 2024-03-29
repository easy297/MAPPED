import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import style from "./Map.module.scss";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });
  const center = useMemo(
    () => ({ lat: 43.24417807387171, lng: 76.85739059645189 }),
    []
  );
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  return (
    <div className={style.app}>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName={style.mapContainer}
          center={{ lat: 40, lng: -80 }}
          zoom={10}
          options={options}
          mapTypeId="satellite"
        >
          <Marker
            position={{ lat: 43.24417807387171, lng: 76.85739059645189 }}
          />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
