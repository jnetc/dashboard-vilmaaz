import { FC } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';
// Components
import { TimelinePoints } from './TimelinePoints';
import { TimelineStep } from './TimelineStep';

// Styles
import { TimelineStyle } from '@styles/timeline';

const Timeline: FC<{ width: number }> = ({ width }) => {
  const { timelineHours, activeDay } = useStore();

  const points = timelineHours
    .sort((a, b) => {
      if (a.position < b.position) return -1;
      return 1;
    })
    .map((point, idx) => {
      return <TimelinePoints key={idx} data={point} />;
    });

  return activeDay ? (
    <TimelineStyle id="timeline">
      {points}
      <TimelineStep width={width} />
    </TimelineStyle>
  ) : (
    <></>
  );
};

export default Timeline;
