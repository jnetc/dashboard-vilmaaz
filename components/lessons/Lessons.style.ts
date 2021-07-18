import styled, { keyframes } from 'styled-components';

interface LineType {
  lineColor?: string;
}
interface LessonStyleType extends LineType {
  distance: number;
  primary: string;
  position: number;
}

const linenotice = (color: string) => keyframes`
  25% {background: var(--${color});}
  50% {background: transparent}
  75% {background: var(--${color});}
`;

export const LessonsStyle = styled.div<LessonStyleType>`
  width: ${({ distance }) => distance}px;
  display: flex;
  align-items: center;
  position: relative;
  /* 2px same, like line width hours component */
  left: calc(${({ position }) => position}px - 2px);
  transition: all 0.3s ease-in-out;
  user-select: none;
  cursor: default;
  isolation: isolate;
  z-index: 10;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    mix-blend-mode: overlay;
    animation: ${({ lineColor }) => (lineColor ? linenotice(lineColor) : '')} 2s
      ease-in-out forwards;

    z-index: 11;
  }
`;

export const EmptyLessonsStyle = styled.div<LineType>`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  transition: all 0.3s ease-in-out;
  z-index: 10;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.3;
    animation: ${({ lineColor }) => (lineColor ? linenotice(lineColor) : '')} 2s
      ease-in-out forwards;
    mix-blend-mode: overlay;
    z-index: 11;
  }
`;
