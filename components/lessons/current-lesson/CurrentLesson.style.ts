import styled, { keyframes } from 'styled-components';
import { BreakStyle, LessonStyle } from '@Lessons/Lesson.style';

export const CurrentLessonStyle = styled(LessonStyle)`
  border-left: 2px solid var(--${({ colors }) => colors});
  &:nth-of-type(1) {
    border-left: 2px solid var(--${({ colors }) => colors});
  }
  z-index: 11;
  &::after {
    content: '';
    width: 50px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      transparent 0%,
      var(--${({ colors }) => colors}) 100%
    );
    transform: translateX(calc(${({ position }) => position}px - 50px));
    transition: all 0.3s ease-in-out;
    mix-blend-mode: soft-light;
    z-index: 1;
  }
  & .lesson-duration {
    stroke: ${({ theme }) => theme.grey_middle()};
  }
  & .timer {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: ${({ theme }) => theme.fontsize_16};
    font-weight: 400;
    transform: translate(-50%, -50%);
  }
`;

const breakAnimation = keyframes`
  from{transform: translateX(0px)}
  to{transform: translateX(-29px)}
`;

export const BreakCurrentStyle = styled(BreakStyle)`
  &::after {
    content: '';
    width: 50px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      transparent 0%,
      var(--${({ colors }) => colors}) 100%
    );
    transform: translateX(calc(${({ position }) => position}px - 50px));
    transition: all 0.3s ease-in-out;
    mix-blend-mode: soft-light;
    z-index: -1;
  }
  &.active {
    border-left: 2px solid var(--${({ colors }) => colors});
    &::before {
      width: calc(100% + 29px);
      animation: ${breakAnimation} 3s linear infinite;
    }
  }
  .timer {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: ${({ theme }) => theme.fontsize_16};
    font-weight: 400;
    transform: translate(-50%, -50%);
  }
`;

type ProgressLineType = { track: number; progress: number; colors: string };
export const ProgressLine = styled.circle<ProgressLineType>`
  fill: none;
  stroke: var(--${({ colors }) => colors});
  stroke-dasharray: ${({ track }) => track};
  stroke-dashoffset: ${({ progress }) => progress};
  stroke-width: 4;
  transform: rotate(-90deg);
  transform-origin: center;
  transition: all 1s ease-in-out;
  will-change: stroke-dashoffset stroke;
`;
