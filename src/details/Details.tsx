import { FunctionComponent } from 'react';
import { getMarkerClassName } from 'src/markers/getMarkerType';
import { MarkerPayload } from 'src/models/marker.type';
import './Details.css';
import { Dialog } from '@headlessui/react';
import { MarkerType } from 'src/models/marker.type';
import parse from 'html-react-parser';

interface Props {
  markerPayload: MarkerPayload | null;
  closeDetails: () => void;
}

export const Details: FunctionComponent<Props> = ({ markerPayload, closeDetails }) => {
  const isOpen = markerPayload !== null;
  return (
    <Dialog className="wrapper" open={isOpen} onClose={closeDetails}>
      <Dialog.Panel className="drawer">
        {markerPayload?.location ? <Dialog.Title>{markerPayload.location}</Dialog.Title> : null}
        <p>{parse(markerPayload?.content ?? '')}</p>
        <p>
          <button
            className={getMarkerClassName(markerPayload?.type ?? MarkerType.RESTAURANT)}
            onClick={closeDetails}
          >
            Fermer les details
          </button>
        </p>
      </Dialog.Panel>
      <div className="backdrop" onClick={closeDetails} />
    </Dialog>
  );
};
