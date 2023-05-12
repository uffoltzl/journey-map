import { FunctionComponent } from 'react';
import { getMarkerClassName } from 'src/markers/getMarkerType';
import { MarkerPayload } from 'src/models/marker.type';
import './Details.css';

interface Props {
  markerPayload: MarkerPayload;
  closeDetails: () => void;
}

export const Details: FunctionComponent<Props> = ({ markerPayload, closeDetails }) => {
  return (
    <div className="wrapper">
      <div className="drawer">
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
      <div className="backdrop" onClick={closeDetails} />
    </div>
  );
};
