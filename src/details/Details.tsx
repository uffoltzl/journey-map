import { FunctionComponent } from 'react';
import { getMarkerClassName } from 'src/markers/getMarkerType';
import { MarkerPayload } from 'src/models/marker.type';

interface Props {
  markerPayload: MarkerPayload;
  closeDetails: () => void;
}

export const Details: FunctionComponent<Props> = ({ markerPayload, closeDetails }) => {
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: '#FFFBF1',
        width: '25%',
        height: '100vh',
        borderBottomRightRadius: 10,
        boxShadow:
          'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
      }}
    >
      {markerPayload.location ? (
        <p style={{ fontWeight: 'bold' }}>{markerPayload.location}</p>
      ) : null}
      <p>{markerPayload.content}</p>
      <p>
        <button className={getMarkerClassName(markerPayload.type)} onClick={closeDetails}>
          Fermer les details
        </button>
      </p>
    </div>
  );
};
