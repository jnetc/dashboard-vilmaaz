import { FC } from 'react';
import styled from 'styled-components';
// Types
import { ProgressBarType } from '@types';
// Component
import { ProgressTime } from '@Main/lessons/right-side-panel/ProgressTime';

const ProgressBarStyle = styled.div`
  grid-row: 3;
  align-self: center;
  justify-self: center;
  position: relative;
`;

const ProgressStyle = styled.svg<{
  lineColor: string;
  barColor: string;
}>`
  fill: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  & #progress-bar {
    stroke: var(--${({ barColor }) => barColor});
  }
  & #progress-line {
    stroke: var(--${({ lineColor }) => lineColor});
    stroke-dasharray: 628; //?  2 * (π = 3,14) * (r = 100)
    stroke-dashoffset: 450;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: center;
  }
`;
// TODO Сделать прогрессивную шкалу + анимация
export const ProgressBar: FC<{ data: ProgressBarType }> = ({ data }) => {
  const { bar, line, ...time } = data;

  return (
    <ProgressBarStyle className="perespective">
      <ProgressStyle
        width="226"
        height="226"
        viewBox="0 0 226 226"
        barColor={bar}
        lineColor={line}>
        <circle cx="113" cy="113" r="100" strokeWidth="25" id="progress-bar" />
        <circle cx="113" cy="113" r="100" strokeWidth="10" id="progress-line" />
      </ProgressStyle>
      <ProgressTime data={time} />
    </ProgressBarStyle>
  );
};
