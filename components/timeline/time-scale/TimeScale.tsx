import { FC, useState, useEffect } from 'react';
// Hook
import { useGlobalStore } from '@Hooks/useStores';
// Components
import { TimelinePoints } from '@Timeline/timeline-points/TimelinePoints';
import { TimelineStep } from '@Timeline/timeline-step/TimelineStep';
// Styles
import { TimeScaleStyle } from './TimeScale.style';
//
// import { hours } from '@Constants';
import { hourPositions } from '@Helpers';
import { TimePosition } from '@Types';

export const TimeScale: FC = () => {
  const { activeDay } = useGlobalStore();
  const [timelineHours, setTimelineHours] = useState<Array<TimePosition>>([]);

  useEffect(() => {
    const getHours = hourPositions();
    setTimelineHours(getHours);
  }, []);

  const points = timelineHours
    .sort((a, b) => {
      if (a.position < b.position) return -1;
      return 1;
    })
    .map((point, idx) => {
      return <TimelinePoints key={idx} data={point} />;
    });

  return activeDay ? (
    <TimeScaleStyle id="time-scale">
      {points}
      <TimelineStep />
    </TimeScaleStyle>
  ) : null;
};
