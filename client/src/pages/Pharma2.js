import Map from "react-map-gl";

function Pharma() {
  return (
    <Map
      mapLib={import("mapbox-gl")}
      
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 12,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken = {process.env.REACT_APP_MAP_API_TOKEN}
    />
  );
}

export default Pharma;




