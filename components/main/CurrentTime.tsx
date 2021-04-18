import { useState, useEffect } from 'react';
import styled from 'styled-components';
// Types

import { TimelinePointsStyle } from './TimelinePoints';

const CurrentTimeStyle = styled(TimelinePointsStyle)`
  /* position: absolute; */
  color: ${({ theme }) => theme.primary};
  border-color: ${({ theme }) => theme.primary};
  box-shadow: 0 5px 5px rgba(${({ theme }) => theme.shadow_primary}, 0.15),
    0 20px 20px rgba(${({ theme }) => theme.shadow_primary}, 0.1);
  &::after {
    background-color: ${({ theme }) => theme.grey_middle};
  }
`;

export const CurrentTime = () => {
  let [hours, setHours] = useState<number | null>(new Date().getHours());
  let [minutes, setMinutes] = useState<number | null>(new Date().getMinutes());

  useEffect(() => {
    let time = setInterval(() => {
      setMinutes(new Date().getMinutes());
      setHours(new Date().getHours());
      minutes = null;
      hours = null;
    }, 10000);

    return () => {
      clearInterval(time);
    };
  }, [minutes, hours]);

  // console.log(`Time: `, `${hours}:${minutes}`);

  return (
    <CurrentTimeStyle id="current-time">{`${hours}:${
      minutes !== null && minutes > 9 ? minutes : '0' + minutes
    }`}</CurrentTimeStyle>
  );
};
