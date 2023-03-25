import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './App.css';
// react-leaflet-markercluster

function App() {
  return (
    <MapContainer
      style={{ height: '100vh' }}
      center={[35.71493059086737, 139.79664456805762]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.71493059086737, 139.79664456805762]} icon={iconPerson}>
        <Popup>
          Senso-ji <br /> Asakusa
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
