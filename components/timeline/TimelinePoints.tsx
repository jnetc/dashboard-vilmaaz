import { FC } from 'react';
// Types
import { TimelinePointsType } from '@types';
// Styles
import { TimelinePointsStyle } from '@styles/timeline';

// TODO Over 200 classes were generated for component styled.div with the id of "sc-1y7h4wd-9"
//? Example:
//  const Component = styled.div.attrs(props => ({
//    style: {
//      background: props.background,
//    },
//  }))`width: 100%;`

export const TimelinePoints: FC<TimelinePointsType> = ({ data }) => {
  return (
    <TimelinePointsStyle position={data.position}>
      {data.time}
    </TimelinePointsStyle>
  );
};
