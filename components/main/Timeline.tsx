import { useState, useEffect, useRef, FC } from 'react';
import styled from 'styled-components';
// Global Context
import { useStore } from '@Store/Store';
// Components
import { TimelinePoints } from '@Main/TimelinePoints';
import { CurrentTime } from '@Main/CurrentTime';
import { getStartAndEndTime, getTimePointPos } from '@Main/utils/timeline';
// Types
import { TimelineProps } from '@Main/types';

const TimelineStyle = styled.div`
  width: inherit;
  grid-row: 1;
  user-select: none;
  pointer-events: none;
  display: flex;
  div#track {
    /* width: calc(100% + 160px); */
    width: calc(${({ theme }) => theme.timeline}px - 160px);
    position: relative;
  }
`;

const Timeline: FC<TimelineProps> = ({ width }) => {
  const { data } = useStore();
  const [startEndTimeArr, setStartEndTimeArr] = useState<Array<string>>([]);
  const [trackWidth, setTrackWidth] = useState<number>(0);
  const trackEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timePointsSet = getStartAndEndTime(data);
    // Spread set to state
    setStartEndTimeArr([...timePointsSet]);
    if (trackEl.current) {
      setTrackWidth(trackEl.current.getBoundingClientRect().width);
    }
  }, [trackEl]);

  const timePointPositions = getTimePointPos(startEndTimeArr, trackWidth);

  const timeline = timePointPositions.map((time, idx) => {
    return <TimelinePoints key={idx} data={time} />;
  });

  return (
    <TimelineStyle id="timeline">
      <div id="track" ref={trackEl}>
        {timeline}
        <CurrentTime width={width} />
      </div>
    </TimelineStyle>
  );
};

export default Timeline;
