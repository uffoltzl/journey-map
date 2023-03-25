import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './App.css';
import { blueMarkerIcon } from './markers/blueMarker/blueMarkerIcon';
import { greenMarkerIcon } from './markers/greenMarker/greenMarkerIcon';
import { redMarkerIcon } from './markers/redMarker/redMarker';
import { yellowMarkerIcon } from './markers/yellowMarker/yellowMarkerIcon';
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
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors <div> Icons made by <a href="https://www.flaticon.com/authors/alfanz" title="alfanz"> alfanz </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.71493059086737, 139.79664456805762]} icon={redMarkerIcon}>
        <Popup>
          Senso-ji <br /> Asakusa
        </Popup>
      </Marker>
      <Marker position={[35.70555154283942, 139.77636316713426]} icon={blueMarkerIcon}>
        <Popup>
          Senso-ji <br /> Asakusa
        </Popup>
      </Marker>
      <Marker position={[35.704840823595475, 139.78792776035098]} icon={greenMarkerIcon}>
        <Popup>
          Senso-ji <br /> Asakusa
        </Popup>
      </Marker>
      <Marker position={[35.716647820160496, 139.77672542938322]} icon={yellowMarkerIcon}>
        <Popup>
          Senso-ji <br /> Asakusa
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
