import { FunctionComponent } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { redMarkerIcon } from 'src/markers/redMarker/redMarker';
import { MarkerPayload } from 'src/models/marker.type';

const onClickShowMarker = (
  mapRef: React.MutableRefObject<L.Map | null>,
  nextMarkerRef: React.MutableRefObject<L.Marker | null> | null
) => {
  const map = mapRef.current;
  if (!map) {
    return;
  }

  const marker = nextMarkerRef?.current;
  if (marker) {
    map.flyTo(marker.getLatLng(), 13);
    marker.openPopup();
  }
};

interface Props {
  markerPayload: MarkerPayload;
  mapRef: React.MutableRefObject<L.Map | null>;
  currentMarkerRef: React.MutableRefObject<L.Marker | null>;
  nextMarkerRef: React.MutableRefObject<L.Marker | null> | null;
}

export const CustomMarker: FunctionComponent<Props> = ({
  markerPayload,
  mapRef,
  currentMarkerRef,
  nextMarkerRef,
}) => {
  return (
    <Marker ref={currentMarkerRef} position={markerPayload.position} icon={redMarkerIcon}>
      <Popup>
        {markerPayload.content}
        <br />
        {nextMarkerRef ? (
          <button className="red-button" onClick={() => onClickShowMarker(mapRef, nextMarkerRef)}>
            Next
          </button>
        ) : null}
      </Popup>
    </Marker>
  );
};
