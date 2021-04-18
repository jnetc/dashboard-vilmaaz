import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// Global Context
import { useStore } from '@Store/Store';
// Components
import { TimelinePoints } from './TimelinePoints';
import { CurrentTime } from './CurrentTime';
import { getStartAndEndTime, getTimePointPos } from './utils/timeline';

const TimelineStyle = styled.div`
  grid-row: 1;
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  pointer-events: none;
`;

const Timeline = () => {
  const { data } = useStore();
  const [startEndTimeArr, setStartEndTimeArr] = useState<Array<string>>([]);

  useEffect(() => {
    const timePointsSet = getStartAndEndTime(data);
    // Spread set to state
    setStartEndTimeArr([...timePointsSet]);
  }, []);

  const timePointPositions = getTimePointPos(startEndTimeArr);

  const timeline = timePointPositions.map((time, idx) => {
    return <TimelinePoints key={idx} data={time} />;
  });

  return (
    <TimelineStyle id="timeline">
      {timeline}
      <CurrentTime />
    </TimelineStyle>
  );
};

export default Timeline;
