import { LatLngExpression } from 'leaflet';

export enum MarkerType {
  RESTAURANT = 'RESTAURANT',
  ACCOMMODATION = 'ACCOMMODATION',
  PEOPLE = 'PEOPLE',
  ACTIVITY = 'ACTIVITY',
}

export interface MarkerPayload {
  location?: string;
  content: string;
  position: LatLngExpression;
  type: MarkerType;
}
