import { FunctionComponent } from 'react';
import { MarkerPayload } from 'src/models/marker.type';

export const Details: FunctionComponent<MarkerPayload> = ({ location, content }) => {
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
      {location ? <p style={{ fontWeight: 'bold' }}>{location}</p> : null}
      <p>{content}</p>
    </div>
  );
};
