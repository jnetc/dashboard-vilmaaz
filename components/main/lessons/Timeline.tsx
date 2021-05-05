import { useState, useEffect, useRef, FC } from 'react';
import styled from 'styled-components';
// Global Context
import { useStore } from '@Store/Store';
// Components
import { TimelinePoints } from '@Main/lessons/TimelinePoints';
import { TimelineStep } from '@Main/lessons/TimelineStep';
import { getTimePointPos } from '@Main/lessons/utils/timeline';
// Types
import { Element, Width, Lines } from '@types';

const TimelineStyle = styled.div`
  width: 100%;
  grid-row: 1;
  /* user-select: none;
  pointer-events: none; */
  cursor: default;
  padding: 0 160px 0 2px;
  div#track {
    position: relative;
  }
`;

const Timeline: FC<Width & Lines> = ({ width, lines }) => {
  const { timepoints, setTrackWidth, trackWidth, timeline } = useStore();
  const [startEndTime, setStartEndTime] = useState<Array<string>>([]);
  const trackEl = useRef<Element>(null);

  useEffect(() => {
    setStartEndTime(timepoints);
    if (trackEl.current) {
      setTrackWidth(trackEl.current.offsetWidth);
    }
  }, [trackEl]);

  const timePointPositions = getTimePointPos(
    startEndTime,
    trackWidth,
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
    <TimelineStyle id="timeline">
      <div id="track" ref={trackEl}>
        {points}
        <TimelineStep width={width} lines={lines} />
      </div>
    </TimelineStyle>
  );
};

export default Timeline;
