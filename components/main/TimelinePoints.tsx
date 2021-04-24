import { FC } from 'react';
import styled from 'styled-components';

// Types
import { TimelinePointsType, Position } from '@Main/types';

export const TimelinePointsStyle = styled.div<Position>`
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
  /* box-shadow: 0 10px 10px ${({ theme }) => theme.shadow(0.2)},
    0 30px 30px ${({ theme }) => theme.shadow(0.15)}; */
  &::after {
    content: '';
    width: 2px;
    height: calc(100vh - 192px);
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.grey_dark};
    z-index: -1;
  }
`;

export const TimelinePoints: FC<TimelinePointsType> = ({ data }) => {
  return <TimelinePointsStyle pos={data.pos}>{data.time}</TimelinePointsStyle>;
};
