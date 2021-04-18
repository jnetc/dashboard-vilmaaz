import { ReactNode } from 'react';
import styled from 'styled-components';

// Types
// import { Timetable } from '@Store/types';

export const TimelinePointsStyle = styled.div`
  width: 90px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* position: absolute; */
  color: ${({ theme }) => theme.grey_light};
  border-radius: 15px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  background-color: ${({ theme }) => theme.bg_middle};
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

export const TimelinePoints = ({
  data,
}: {
  data: { time: string; pos: number };
}) => {
  console.log(data.time, data.pos);

  return <TimelinePointsStyle>{data.time}</TimelinePointsStyle>;
};
