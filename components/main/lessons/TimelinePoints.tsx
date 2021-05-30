import { FC } from 'react';
// Types
import { TimelinePointsType, Lines } from '@types';
// Styles
import { TimelinePointsStyle } from './styles/lessons';

export const TimelinePoints: FC<TimelinePointsType & Lines> = ({
  data,
  lines,
}) => {
  return (
    <TimelinePointsStyle position={data.position} lines={lines}>
      {data.time}
    </TimelinePointsStyle>
  );
};
