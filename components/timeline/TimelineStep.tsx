import { FC } from 'react';
// Components
import { movementTimeAndTimetable } from '@Utils/timeline';
// Hook
import { useUpdate } from '@Hooks/useUpdate';
// Store
import { useMainStore } from '@Store/MainStore';

// Styles
import { TimelineStepStyle } from '@styles/timeline';

//! Warning: Text content did not match. Server: "14:23" Client: "14:24"
//TODO Over 200 classes were generated for component styled.div with the id of "sc-1y7h4wd-9"
//? Example:
//  const Component = styled.div.attrs(props => ({
//    style: {
//      background: props.background,
//    },
//  }))`width: 100%;`

export const TimelineStep: FC<{ width: number }> = ({ width }) => {
  const { timetableEl, autoMovement, timeline } = useMainStore();
  const { position, currentTimeStr } = useUpdate();

  movementTimeAndTimetable(
    width,
    timetableEl,
    position,
    autoMovement,
    timeline
  );

  return (
    <TimelineStepStyle id="current-time" position={position}>
      {currentTimeStr}
    </TimelineStepStyle>
  );
};
