import { FC } from 'react';
// Components
import { movementTimeAndTimetable } from '@Utils/helperFunc';
// Hook
import { useUpdate } from '@Hooks/useUpdate';
import { useStore, useTimelineStore } from '@Hooks/useStore';
// Global const
import { hourDivWidth } from '@Store/Store';
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
  const { autoMovement, timeline, today } = useStore();
  const { timetableEl } = useTimelineStore();
  let { position, currentTimeStr } = useUpdate();

  const currentTime = today ? position : timeline.startLessons;

  movementTimeAndTimetable(
    width,
    timetableEl,
    currentTime,
    autoMovement,
    timeline,
    hourDivWidth
  );

  return today ? (
    <TimelineStepStyle id="current-time" position={position} w={hourDivWidth}>
      {currentTimeStr}
    </TimelineStepStyle>
  ) : (
    <></>
  );
};
