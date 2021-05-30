import { useState, useEffect, useRef, FC } from 'react';
// Global Context
import { useMainStore } from '@Store/MainStore';
// Components
import { TimelinePoints } from '@Main/lessons/TimelinePoints';
import { TimelineStep } from '@Main/lessons/TimelineStep';
import { getTimePointPos } from '@Main/lessons/utils/timeline';
// Types
import { Element, Width, Lines } from '@types';
// Styles
import { TimelineStyle } from './styles/lessons';

const Timeline: FC<Width & Lines> = ({ width, lines }) => {
  const { timepoints, timelineWidth, setTimelineWidth, timeline } =
    useMainStore();
  const [startEndTime, setStartEndTime] = useState<Array<string>>([]);
  const timelineEl = useRef<Element>(null);

  useEffect(() => {
    setStartEndTime(timepoints);
    if (timelineEl.current) {
      setTimelineWidth(timelineEl.current.offsetWidth);
    }
  }, [timelineEl]);

  const timePointPositions = getTimePointPos(
    startEndTime,
    timelineWidth,
    timeline
  );

  const points = timePointPositions
    .sort((a, b) => {
      if (a.position < b.position) return -1;
      return 1;
    })
    .map((point, idx) => {
      return <TimelinePoints key={idx} data={point} lines={lines} />;
    });

  return (
    <TimelineStyle id="timeline" ref={timelineEl}>
      {points}
      <TimelineStep width={width} lines={lines} />
    </TimelineStyle>
  );
};

export default Timeline;
