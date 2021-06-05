import { FC } from 'react';
// Components
import { movementTimeAndTimetable } from '@Main/lessons/utils/timeline';
// Hook
import { useUpdate } from '@Main/lessons/hook/useUpdate';
// Store
import { useMainStore } from '@Store/MainStore';
import { useGlobalStore } from '@Store/GlobalStore';
// Types
import { Width } from '@types';
// Styles
import { TimelineStepStyle } from './styles/lessons';

export const TimelineStep: FC<Width> = ({ width }) => {
  const { timetableEl, autoMovement } = useMainStore();
  const { mainPaddingLeft } = useGlobalStore();
  const { position, visible, currentTimeStr } = useUpdate();

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
        <TimelineStepStyle id="current-time" position={position}>
          {currentTimeStr}
        </TimelineStepStyle>
      )}
    </>
  );
};
