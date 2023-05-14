import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { getMarkerClassName } from 'src/markers/getMarkerType';
import { MarkerPayload } from 'src/models/marker.type';
import './Details.css';
import { Dialog, Transition } from '@headlessui/react';
import { MarkerType } from 'src/models/marker.type';
import parse from 'html-react-parser';

interface Props {
  markerPayload: MarkerPayload | null;
  closeDetails: () => void;
}

export const Details: FunctionComponent<Props> = ({ markerPayload, closeDetails }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(markerPayload !== null);
  }, [markerPayload]);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
    setTimeout(closeDetails, 500);
  }, []);

  return (
    <Transition appear show={isOpen} as="div">
      <Dialog className="wrapper" onClose={closeDialog}>
        <Transition.Child
          as="div"
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop" onClick={closeDialog} />
        </Transition.Child>
        <Transition.Child
          as="div"
          className="drawer-transition"
          enter="transition ease-in-out duration-500 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-500 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="drawer">
            {markerPayload?.location ? (
              <Dialog.Title className="drawer-title">{markerPayload.location}</Dialog.Title>
            ) : null}
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
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
