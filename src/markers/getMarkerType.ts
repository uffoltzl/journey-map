import { blueMarkerIcon } from 'src/markers/blueMarker/blueMarkerIcon';
import { greenMarkerIcon } from 'src/markers/greenMarker/greenMarkerIcon';
import { redMarkerIcon } from 'src/markers/redMarker/redMarker';
import { yellowMarkerIcon } from 'src/markers/yellowMarker/yellowMarkerIcon';
import { MarkerType } from 'src/models/marker.type';

export const getMarkerClassName = (type: MarkerType) => {
  switch (type) {
    case MarkerType.RESTAURANT:
      return 'red-button';
    case MarkerType.ACTIVITY:
      return 'yellow-button';
    case MarkerType.ACCOMMODATION:
      return 'blue-button';
    case MarkerType.PEOPLE:
      return 'green-button';
  }
};

export const getMarkerIcon = (type: MarkerType) => {
  switch (type) {
    case MarkerType.RESTAURANT:
      return redMarkerIcon;
    case MarkerType.ACTIVITY:
      return yellowMarkerIcon;
    case MarkerType.ACCOMMODATION:
      return blueMarkerIcon;
    case MarkerType.PEOPLE:
      return greenMarkerIcon;
  }
};
