import { FunctionComponent } from 'react';

const BASE_SPACER = 4;

interface Props {
  height?: number;
  width?: number;
}

export const Spacer: FunctionComponent<Props> = ({ height = 0, width = 0 }) => {
  return <div style={{ height: height * BASE_SPACER, width: width * BASE_SPACER }}></div>;
};
