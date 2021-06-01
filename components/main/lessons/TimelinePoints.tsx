import { FC } from 'react';
// Types
import { TimelinePointsType } from '@types';
// Styles
import { TimelinePointsStyle } from './styles/lessons';

export const TimelinePoints: FC<TimelinePointsType> = ({ data }) => {
  return (
    <TimelinePointsStyle position={data.position}>
      {data.time}
    </TimelinePointsStyle>
  );
};
