import { FC } from 'react';
import { useState, useEffect } from 'react';
// Components
import { movementTimeAndTimetable } from '@Main/lessons/utils/timeline';
// Hook
import { useRealtime } from '@Main/lessons/hook/useRealtime';
// Store
import { useMainStore } from '@Store/MainStore';
import { useGlobalStore } from '@Store/GlobalStore';
// Types
import { Lines, Width } from '@types';
// Styles
import { TimelineStepStyle } from './styles/lessons';

export const TimelineStep: FC<Lines & Width> = ({ width, lines }) => {
  const { timetableEl, autoMovement } = useMainStore();
  const { mainPaddingLeft } = useGlobalStore();
  const [minutes, setMinutes] = useState<number>(new Date().getMinutes());

  useEffect(() => {
    let timer = setInterval(() => setMinutes(new Date().getMinutes()), 1000);
    return () => clearInterval(timer);
  }, [minutes]);

  const { position, visible, currentTimeStr } = useRealtime(minutes);

  movementTimeAndTimetable(
    width,
    timetableEl,
    position,
    autoMovement,
    mainPaddingLeft
  );

  return (
    <>
      {visible && (
        <TimelineStepStyle id="current-time" position={position} lines={lines}>
          {currentTimeStr}
        </TimelineStepStyle>
      )}
    </>
  );
};
