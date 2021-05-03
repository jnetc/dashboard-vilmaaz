import { FC } from 'react';
import styled from 'styled-components';

// Types
import {
  TimelinePointsType,
  TimelinePointsHeight,
  Position,
} from '@Main/lessons/types';

export const TimelinePointsStyle = styled.div<Position & TimelinePointsHeight>`
  width: 90px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate3d(${({ pos }) => pos}px, 0, 0);
  color: ${({ theme }) => theme.grey_light};
  border-radius: 15px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.bg_middle};
  background-color: ${({ theme }) => theme.bg_middle_alpha};
  &::after {
    content: '';
    width: 2px;
    height: ${({ lines }) => lines}px;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.grey_dark};
    opacity: 0.7;
    z-index: -1;
  }
`;

export const TimelinePoints: FC<TimelinePointsType & TimelinePointsHeight> = ({
  data,
  lines,
}) => {
  return (
    <TimelinePointsStyle pos={data.pos} lines={lines}>
      {data.time}
    </TimelinePointsStyle>
  );
};
