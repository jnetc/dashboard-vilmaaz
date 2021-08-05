import { FC } from 'react';
// Types
import { TimePosition } from '@Types';
// Styles
import { TimelinePointsStyle } from './TimelinePoints.style';
// Store const
import { hourDivWidth } from '@Constants';

// TODO Over 200 classes were generated for component styled.div with the id of "sc-1y7h4wd-9"
//? Example:
//  const Component = styled.div.attrs(props => ({
//    style: {
//      background: props.background,
//    },
//  }))`width: 100%;`

export const TimelinePoints: FC<{ data: TimePosition }> = ({ data }) => {
  return (
    <TimelinePointsStyle position={data.position} w={hourDivWidth}>
      {data.time}
    </TimelinePointsStyle>
  );
};
