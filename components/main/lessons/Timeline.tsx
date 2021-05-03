import { useState, useEffect, useRef, FC } from 'react';
import styled from 'styled-components';
// Global Context
import { useStore } from '@Store/Store';
// Components
import { TimelinePoints } from '@Main/lessons/TimelinePoints';
import { TimelineStep } from '@Main/lessons/TimelineStep';
import {
  transformDataForTimeline,
  getTimePointPos,
} from '@Main/lessons/utils/timeline';
// Types
import {
  TimelineWidth,
  TimelinePointsHeight,
  Element,
  ArrayString,
} from '@Main/lessons/types';

const TimelineStyle = styled.div`
  width: 100%;
  grid-row: 1;
  user-select: none;
  pointer-events: none;
  padding: 0 160px 0 2px;
  div#track {
    position: relative;
  }
`;

const Timeline: FC<TimelineWidth & TimelinePointsHeight> = ({
  width,
  lines,
}) => {
  const { data } = useStore();
  const [startEndTime, setStartEndTime] = useState<ArrayString>([]);
  const [trackWidth, setTrackWidth] = useState<number>(0);
  const trackEl = useRef<Element>(null);

  useEffect(() => {
    const timePoints = transformDataForTimeline(data);
    setStartEndTime(timePoints);
    if (trackEl.current) {
      setTrackWidth(trackEl.current.offsetWidth);
    }
  }, [trackEl]);

  const timePointPositions = getTimePointPos(startEndTime, trackWidth);

  const timeline = timePointPositions.map((time, idx) => {
    return <TimelinePoints key={idx} data={time} lines={lines} />;
  });

  return (
    <TimelineStyle id="timeline">
      <div id="track" ref={trackEl}>
        {timeline}
        <TimelineStep width={width} lines={lines} />
      </div>
    </TimelineStyle>
  );
};

export default Timeline;
