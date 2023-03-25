import { LatLngExpression } from 'leaflet';

export interface MarkerPayload {
  content: string;
  position: LatLngExpression;
}
