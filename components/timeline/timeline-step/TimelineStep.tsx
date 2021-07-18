import { FC, useEffect } from 'react';
// Components
import { movementTimeAndTimetable } from '@Helpers';
// Hook
import { useUpdateTime } from '@Hooks/useUpdateTime';
import { useResizeTimetable } from '@Hooks/useResizeTimetable';
import {
  useGlobalStore,
  useTimelineStore,
  useMainStore,
} from '@Hooks/useStores';
// Global const
import { hourDivWidth } from '@Store';
// Styles
import { TimelineStepStyle } from './TimelineStep.style';

//! Warning: Text content did not match. Server: "14:23" Client: "14:24"
//TODO Over 200 classes were generated for component styled.div with the id of "sc-1y7h4wd-9"
//? Example:
//  const Component = styled.div.attrs(props => ({
//    style: {
//      background: props.background,
//    },
//  }))`width: 100%;`

export const TimelineStep: FC = () => {
  const { timeline, today, activeDay } = useGlobalStore();
  const { autoMovement } = useMainStore();
  const { timetableEl, mainWidth } = useTimelineStore();
  const { width, isOut, center } = useResizeTimetable(timeline, mainWidth);
  const { position, currentTimeStr } = useUpdateTime();

  const currentTime = today ? position : timeline.startLessons;
  useEffect(() => {}, [activeDay, width]);

  movementTimeAndTimetable(
    width,
    timetableEl,
    currentTime,
    autoMovement,
    timeline,
    isOut,
    center
  );

  return today ? (
    <TimelineStepStyle id="current-time" position={position} w={hourDivWidth}>
      {currentTimeStr}
    </TimelineStepStyle>
  ) : (
    <></>
  );
};
