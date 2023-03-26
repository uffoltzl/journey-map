import { FunctionComponent } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { getMarkerClassName, getMarkerIcon } from 'src/markers/getMarkerType';
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
    <Marker
      ref={currentMarkerRef}
      position={markerPayload.position}
      icon={getMarkerIcon(markerPayload.type)}
    >
      <Popup>
        {markerPayload.location ? (
          <p style={{ textAlign: 'center' }}>{markerPayload.location}</p>
        ) : null}
        <p style={{ textAlign: 'center' }}>{markerPayload.content}</p>
        {nextMarkerRef ? (
          <p style={{ textAlign: 'center' }}>
            <button
              className={getMarkerClassName(markerPayload.type)}
              onClick={() => onClickShowMarker(mapRef, nextMarkerRef)}
            >
              Next
            </button>
          </p>
        ) : null}
      </Popup>
    </Marker>
  );
};
