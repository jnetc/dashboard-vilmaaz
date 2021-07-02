import { FC } from 'react';
// Hook
import { useGlobalStore } from '@Hooks/useStores';
// Components
import { TimelinePoints } from '@Timeline/timeline-points/TimelinePoints';
import { TimelineStep } from '@Timeline/timeline-step/TimelineStep';

// Styles
import { TimeScaleStyle } from './TimeScale.style';

export const TimeScale: FC = () => {
  const { timelineHours, activeDay } = useGlobalStore();

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
  ) : (
    <></>
  );
};
