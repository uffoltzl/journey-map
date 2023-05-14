import { MarkerPayload, MarkerType } from 'src/models/marker.type';

export const markerData: MarkerPayload[] = [
  {
    title: 'Senso-ji, Asakusa',
    content:
      'Content 1<br/>ContentContentContent<br/>content<br/>Content 1<br/>ContentContentContent<br/>content<br/>Content 1<br/>ContentContentContent<br/>content<br/>Content 1<br/>ContentContentContent<br/>content<br/>',
    position: [35.71493059086737, 139.79664456805762],
    type: MarkerType.ACCOMMODATION,
  },
  {
    title: 'Promenade',
    content: 'Content 2',
    position: [35.70555154283942, 139.77636316713426],
    type: MarkerType.ACTIVITY,
  },
  {
    title: 'Rencontre avec Tanaka',
    content: 'Content 3',
    position: [35.704840823595475, 139.78792776035098],
    type: MarkerType.PEOPLE,
  },
  {
    title: 'Onigiri',
    content: 'Content 4',
    position: [35.716647820160496, 139.77672542938322],
    type: MarkerType.RESTAURANT,
  },
];
