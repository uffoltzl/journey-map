import 'leaflet/dist/leaflet.css';
import { createRef, useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { CustomMarker } from 'src/markers/CustomMarker';
import { markerData } from 'src/models/marker.data';
import './App.css';
// react-leaflet-markercluster

function App() {
  const mapRef: React.MutableRefObject<L.Map | null> = useRef(null);
  const [markerRefs, setMarkerRefs] = useState<Array<React.MutableRefObject<L.Marker | null>>>([]);

  useEffect(() => {
    setMarkerRefs((elRefs) =>
      Array(markerData.length)
        .fill(null)
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [markerData.length]);

  return (
    <MapContainer
      style={{ height: '100vh' }}
      center={[35.71493059086737, 139.79664456805762]}
      zoom={13}
      scrollWheelZoom={false}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors <div> Icons made by <a href="https://www.flaticon.com/authors/alfanz" title="alfanz"> alfanz </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerData.map((marker, index) => (
        <CustomMarker
          key={index}
          markerPayload={marker}
          mapRef={mapRef}
          currentMarkerRef={markerRefs[index]}
          nextMarkerRef={markerRefs.length - 1 > index ? markerRefs[index + 1] : null}
        />
      ))}
    </MapContainer>
  );
}

export default App;
