import { FC } from 'react';
import styled from 'styled-components';

// Types
import { TimelinePointsType, Position } from './types';

export const TimelinePointsStyle = styled.div<Position>`
  width: 90px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  /* left: ${({ pos }) => pos}px; */
  transform: translate3d(${({ pos }) => pos}px, 0, 0);
  color: ${({ theme }) => theme.grey_light};
  border-radius: 15px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.bg_middle};
  background-color: ${({ theme }) => theme.bg_middle_alpha};
  box-shadow: 0 5px 5px rgba(${({ theme }) => theme.shadow}, 0.15),
    0 20px 20px rgba(${({ theme }) => theme.shadow}, 0.1);
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
