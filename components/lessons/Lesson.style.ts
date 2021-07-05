import styled, { keyframes } from 'styled-components';

interface LessonsDataType {
  lessonWidth: number;
  color: string;
  position?: number;
}

const sleepAnimation = keyframes`
0% {transform: translate(-30%, -80%) scale(0.4) rotate(-25deg);  opacity: 0}
20% {transform: translate(-30%, -80%) scale(0.4) rotate(-25deg);  opacity: 0}
50% {transform: translate(50%, -150%) scale(0.6) rotate(10deg); opacity: 1}
80% {transform: translate(100%, -190%) scale(.4) rotate(35deg);opacity: 0}
80.1% {transform: translate(-30%, -80%) scale(.4) rotate(-25deg);opacity: 0}
100% {transform: translate(-30%, -80%) scale(.4) rotate(-25deg);opacity: 0}
`;

export const LessonStyle = styled.div<LessonsDataType>`
  width: ${({ lessonWidth }) => lessonWidth}px;
  display: grid;
  grid-template-columns: 1fr 56px;
  grid-template-rows: repeat(2, 25px);
  gap: 4px 5px;
  place-self: center;
  padding: 13px;
  position: relative;
  overflow: hidden;
  user-select: none;
  background: ${({ theme }) => theme.bg_middle()};
  transition: all 1s ease-in-out;
  border-left: 2px solid ${({ theme }) => theme.grey_dark()};
  z-index: 10;
  &:nth-of-type(1) {
    border-left: 2px solid ${({ theme }) => theme.bg_middle()};
  }
  &.active {
    background: ${({ theme }) => theme.bg_soft()};
  }
  & .lesson-duration {
    align-items: center;
    align-self: flex-end;
    display: flex;
    grid-row: 1;
    grid-column: 1;
    gap: 0.5rem;
    color: ${({ theme }) => theme.grey_light(0.8)};
    font-size: ${({ theme }) => theme.fontsize_14};
  }
  & .lesson-name {
    grid-row: 2;
    grid-column: 1;
    color: ${({ theme }) => theme.grey_light()};
    font-size: ${({ theme }) => theme.fontsize_16};
  }
  & .lesson-status {
    grid-row: 1/ 3;
    grid-column: 2;
    position: relative;
    circle.track {
      fill: none;
      stroke: ${({ theme }) => theme.grey_dark()};
      stroke-width: 2;
    }
    .pending-icon,
    .pending-icon-animation,
    .finished-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .pending-icon,
    .pending-icon-animation {
      stroke: var(--${({ color }) => color});
    }
    .finished-icon {
      stroke: var(--${({ color }) => color});
    }
  }
`;

export const BreakStyle = styled.div<LessonsDataType>`
  width: ${({ lessonWidth }) => lessonWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  position: relative;
  overflow: hidden;
  border-left: 2px solid ${({ theme }) => theme.grey_dark()};
  z-index: 11;
  &::before {
    content: '';
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      -45deg,
      ${({ theme }) => theme.bg_middle()},
      ${({ theme }) => theme.bg_middle()} 10px,
      ${({ theme }) => theme.bg_black()} 10px,
      ${({ theme }) => theme.bg_black()} 20px
    );
    z-index: -1;
  }
  circle.track {
    fill: ${({ theme }) => theme.bg_middle()};
    stroke: ${({ theme }) => theme.grey_dark()};
    stroke-width: 2;
  }
  .pending-icon,
  .pending-icon-animation,
  .finished-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .pending-icon,
  .pending-icon-animation {
    stroke: var(--${({ color }) => color});
  }
  .pending-icon-animation {
    animation: ${sleepAnimation} 3s linear infinite;
  }
  .finished-icon {
    stroke-dasharray: 40;
    stroke-dashoffset: 90;
    transition: all 0.5s ease-in-out;
    stroke: var(--${({ color }) => color});
  }
`;
