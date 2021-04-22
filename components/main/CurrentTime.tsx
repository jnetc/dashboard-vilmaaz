import { FC } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { transformCurrentTime } from '@Main/utils/timeline';
import { TimelinePointsStyle } from './TimelinePoints';

const CurrentTimeStyle = styled(TimelinePointsStyle)`
  position: absolute;
  transform: translate3d(${({ pos }) => pos}px, 0, 0);
  transition: transform 0.3s ease-in-out;
  color: ${({ theme }) => theme.primary};
  border-color: ${({ theme }) => theme.primary};
  box-shadow: 0 5px 5px rgba(${({ theme }) => theme.shadow_primary}, 0.15),
    0 20px 20px rgba(${({ theme }) => theme.shadow_primary}, 0.1);
  &::after {
    background-color: ${({ theme }) => theme.grey_middle};
  }
`;

export const CurrentTime: FC = () => {
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

  const activeTime = transformCurrentTime(`11:15`);
  // const activeTime = transformCurrentTime(`${hours}:${minutes}`);

  return (
    <>
      {activeTime.visible && (
        <CurrentTimeStyle
          id="current-time"
          pos={activeTime.position}>{`${hours}:${
          minutes !== null && minutes > 9 ? minutes : '0' + minutes
        }`}</CurrentTimeStyle>
      )}
    </>
  );
};
