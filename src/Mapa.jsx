import Maps from "react-maps-suite";

const defaultCenter = {
  lat: 40.27789663131091,
  lng: -7.508953067097736
};


const defaultZoom = 18;

function Mapa() {
  return (
    <Maps
      provider="google"
      defaultCenter={defaultCenter}
      defaultZoom={defaultZoom}
    />
  );
}

export default Mapa;