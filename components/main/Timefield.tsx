import { FC } from 'react';
import styled from 'styled-components';

const TimefieldStyle = styled.div`
  grid-row: 2;
  display: grid;
  place-items: center;
  cursor: move;
`;

const Timefield: FC = () => {
  return <TimefieldStyle id="timefield">Timetable</TimefieldStyle>;
};

export default Timefield;
