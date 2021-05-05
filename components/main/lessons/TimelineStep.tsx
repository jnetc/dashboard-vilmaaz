import { FC } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
// Components
import { movementTimeAndTimetable } from '@Main/lessons/utils/timeline';

import { useRealtime } from '@Main/lessons/hook/useRealtime';
import { TimelinePointsStyle } from '@Main/lessons/TimelinePoints';

import { useStore } from '@Store/Store';
// Types
import { Lines, Width } from '@types';

const TimelineStepStyle = styled(TimelinePointsStyle)`
  position: absolute;
  transform: translate3d(${({ position }) => position}px, 0, 0);
  transition: transform 0.3s ease-in-out;
  color: ${({ theme }) => theme.primary};
  border-color: ${({ theme }) => theme.primary};
  box-shadow: 0 5px 5px ${({ theme }) => theme.shadow_primary(0.15)},
    0 20px 20px ${({ theme }) => theme.shadow_primary(0.1)};
  z-index: 3;
  pointer-events: none;
  &::after {
    background-color: ${({ theme }) => theme.shadow_primary(0.5)};
  }
`;

export const TimelineStep: FC<Lines & Width> = ({ width, lines }) => {
  const { autoMovement, timetableEl } = useStore();
  const [minutes, setMinutes] = useState<number>(new Date().getMinutes());

  useEffect(() => {
    let timer = setInterval(() => setMinutes(new Date().getMinutes()), 1000);
    return () => clearInterval(timer);
  }, [minutes]);

  const realtime = useRealtime(minutes);

  movementTimeAndTimetable(width, timetableEl, realtime.position, autoMovement);

  return (
    <>
      {realtime.visible && (
        <TimelineStepStyle
          id="current-time"
          position={realtime.position}
          lines={lines}>
          {realtime.time}
        </TimelineStepStyle>
      )}
    </>
  );
};
