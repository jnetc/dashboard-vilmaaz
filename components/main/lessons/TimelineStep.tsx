import { FC } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
// Components
import {
  transformTimeToStep,
  movementTimeAndTimetable,
  tick,
} from '@Main/lessons/utils/timeline';
import { TimelinePointsStyle } from '@Main/lessons/TimelinePoints';

import { useStore } from '@Store/Store';
// Types
import { TimelineWidth, TimelinePointsHeight } from '@Main/lessons/types';

const TimelineStepStyle = styled(TimelinePointsStyle)`
  position: absolute;
  transform: translate3d(${({ pos }) => pos}px, 0, 0);
  transition: transform 0.3s ease-in-out;
  color: ${({ theme }) => theme.primary};
  border-color: ${({ theme }) => theme.primary};
  box-shadow: 0 5px 5px ${({ theme }) => theme.shadow_primary(0.15)},
    0 20px 20px ${({ theme }) => theme.shadow_primary(0.1)};
  /* z-index: 100; */
  &::after {
    background-color: ${({ theme }) => theme.shadow_primary(0.5)};
  }
`;

export const TimelineStep: FC<TimelineWidth & TimelinePointsHeight> = ({
  width,
  lines,
}) => {
  const { autoMovement, timetableEl } = useStore();
  let [hours, setHours] = useState<number | null>(new Date().getHours());
  let [minutes, setMinutes] = useState<number | null>(new Date().getMinutes());

  useEffect(() => {
    let time = tick(setMinutes, setHours);

    return () => {
      clearInterval(time);
      minutes = null;
      hours = null;
    };
  }, [minutes]);

  // console.log(hours, minutes);
  // const realTime = transformTimeToStep(`12:00`);
  // console.log(realTime);
  const realTime = transformTimeToStep(`${hours}:${minutes}`);
  movementTimeAndTimetable(width, timetableEl, realTime.position, autoMovement);

  return (
    <>
      {realTime.visible && (
        <TimelineStepStyle
          id="current-time"
          pos={realTime.position}
          lines={lines}>{`${hours}:${
          minutes !== null && minutes > 9 ? minutes : '0' + minutes
        }`}</TimelineStepStyle>
      )}
    </>
  );
};
