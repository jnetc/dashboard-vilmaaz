import styled, { keyframes, css } from 'styled-components';
// Types
import { ProgressLessonsDataStyle } from '@types';

// DayOfWeek
export const DateStyle = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  #day_of_week {
    font-size: ${props => props.theme.fontsize_16};
    font-weight: 400;
  }
  #current_date {
    font-size: ${props => props.theme.fontsize_14};
    color: ${props => props.theme.grey_light()};
    padding-top: 5px;
  }
`;

// index
export const RightSidePanelStyle = styled.section<{ open: boolean }>`
  min-width: 226px;
  height: 100vh;
  /* display: ${({ open }) => (open ? 'grid' : 'none')}; */
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0px;
  backdrop-filter: blur(4px);
  /* border-radius: 30px 0 0 30px; */
  background-color: ${({ theme }) => theme.bg_regular(0.9)};
  box-shadow: 0px 40px 40px ${props => props.theme.bg_dark(0.2)},
    0px 10px 10px ${props => props.theme.bg_dark(0.3)};
  transition: all 0.3s ease-in-out;
  transform: translateX(300px);
  user-select: none;
  z-index: 100;
  > div {
    /* width: 100%;
    height: 100%; */
    display: grid;
    grid-template-rows: 48px 60px 300px 40px 1fr;
    padding: 35px 30px 35px 30px;
    overflow-y: scroll;
  }
  h2 {
    grid-row: 2;
    align-self: flex-end;
  }
  &.open {
    display: flex;
  }
  &.show {
    display: flex;
    transform: translateX(0);
  }
`;

export const RightSidePanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// PROGRESS BAR
export const ProgressBarStyle = styled.div`
  grid-row: 3;
  margin: auto;
  position: relative;
`;

export const SvgStyle = styled.svg`
  fill: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const BarStyle = styled.circle<{ barColor: string }>`
  stroke: var(--${({ barColor }) => barColor});
  stroke-width: 25;
`;

export const ProgressStyle = styled.circle<{
  lineColor: string;
  track: number;
  progress: number;
}>`
  stroke: var(--${({ lineColor }) => lineColor});
  stroke-dasharray: ${({ track }) => track};
  stroke-dashoffset: ${({ progress }) => progress};
  stroke-linecap: round;
  stroke-width: 10;
  transform: rotate(-90deg);
  transform-origin: center;
  transition: all 1s ease-in-out;
  will-change: stroke-dashoffset stroke;
`;

// PROGRESS LESSON
const markerPoint = keyframes`
50% { transform: scale(0.5) }
`;

export const ProgressLessonStyle = styled.div<ProgressLessonsDataStyle>`
  display: grid;
  grid-template-columns: 2rem 1fr;
  grid-template-rows: repeat(2, 1.563rem);
  gap: 4px;
  transition: all 0.3s ease-in-out;

  & .marker {
    grid-column: 1;
    grid-row: 1 / -1;
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    align-self: center;
    /* margin: auto; */
    border-radius: 50%;
    border-style: solid;
    border-width: 2px;
    border-color: ${({ flow, colors }) =>
      flow.process === 'wait'
        ? css`var(--${colors.shade})`
        : css`var(--${colors.accent})`};

    & .marker-point {
      width: 8px;
      height: 8px;
      border-radius: inherit;

      background-color: ${({ flow, colors }) =>
        flow.process === 'wait' ? `transparent` : css`var(--${colors.accent})`};

      animation: ${({ flow }) =>
        flow.process === 'run'
          ? css`
              ${markerPoint} 1s ease-in-out infinite;
            `
          : 'none'};
    }
  }
  &:not(:first-child) .marker::after {
    content: '';
    width: 4px;
    height: 48px;
    position: absolute;
    top: -48px;
    left: 4px;
    background: ${({ flow, colors }) =>
      flow.process === 'wait'
        ? css`var(--${colors.shade})`
        : css`var(--${colors.accent})`};
    z-index: -1;
  }

  time {
    grid-column: 2;
    grid-row: 1;
    align-self: flex-end;
    color: ${({ theme }) => theme.grey_light()};
    font-size: ${({ theme }) => theme.fontsize_14};
  }
  h4 {
    grid-column: 2;
    grid-row: 2;
    color: ${({ theme }) => theme.white()};
    font-size: ${({ theme }) => theme.fontsize_16};
  }
`;

// PROGRESS LESSONS
export const ProgressLessonsStyle = styled.div`
  grid-row: 5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-bottom: 35px;
  transition: all 0.3s ease-in-out;
`;

// PROGRESS TIME
export const ProgressTimeStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* display: none; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
  time {
    color: ${({ theme }) => theme.white()};
    font-size: ${({ theme }) => theme.fontsize_48};
    font-weight: bold;
    transition: all 0.3s ease-in-out;
  }
  span {
    color: ${({ theme }) => theme.grey_light()};
  }
`;
