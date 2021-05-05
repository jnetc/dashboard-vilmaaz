import { FC } from 'react';
import styled from 'styled-components';

// Types
import { TimelinePointsType, Lines, Position } from '@types';

export const TimelinePointsStyle = styled.div<Position & Lines>`
  width: 90px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate3d(${({ position }) => position}px, 0, 0);
  color: ${({ theme }) => theme.grey_light};
  border-radius: 15px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.bg_middle};
  background-color: ${({ theme }) => theme.bg_middle_alpha};
  transition: all 0.3s ease-in-out;
  z-index: 0;
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
  &:hover {
    background-color: ${({ theme }) => theme.bg_middle};
    box-shadow: 0 10px 10px ${({ theme }) => theme.shadow(0.2)},
      0 30px 30px ${({ theme }) => theme.shadow(0.15)};
    z-index: 2;
  }
`;

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
