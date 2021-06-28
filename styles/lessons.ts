import styled, { keyframes } from 'styled-components';
// Types
type LessonStyleType = {
  distance: number;
  primary: string;
  position: number;
  order?: number;
};

// LESSONS
export const LessonsStyle = styled.div<LessonStyleType>`
  width: ${({ distance }) => distance}px;
  /* height: 70px; */
  display: flex;
  align-items: center;
  position: relative;
  /* 2px same, like line width hours component */
  left: calc(${({ position }) => position}px - 2px);
  user-select: none;
  cursor: default;
  z-index: 10;
  order: ${({ order }) => (order ? order : 0)};
`;

// LESSON STYLES
interface LessonsDataType {
  lessonWidth: number;
  colors: string;
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

const LessonStyle = styled.div<LessonsDataType>`
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
  border-left: 2px solid ${({ theme }) => theme.grey_black()};
  z-index: 10;
  &:nth-of-type(1) {
    border-left: 2px solid ${({ theme }) => theme.bg_middle()};
  }
  /* toogle classes */
  &.active {
    background: ${({ theme }) => theme.bg_soft()};
  }
  /* &.inactive {
    background: ${({ theme }) => theme.bg_middle()};
    & .finished-icon {
      stroke-dasharray: 40;
      stroke-dashoffset: 90;
    }
  } */
  /* ---- */
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
    .expect-icon,
    .expect-icon-animation,
    .finished-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .expect-icon,
    .expect-icon-animation {
      stroke: var(--${({ colors }) => colors});
    }
    .finished-icon {
      stroke: var(--${({ colors }) => colors});
    }
  }
`;

export const FinishedLessonStyle = styled(LessonStyle)`
  & .lesson-duration {
    stroke: ${({ theme }) => theme.grey_middle(0.7)};
  }
  & .lesson-name {
  }
  & .finished-icon {
    /* stroke-dasharray: 30;
    stroke-dashoffset: 90; */
    stroke-dasharray: 40;
    stroke-dashoffset: 90;
    transition: all 0.5s ease-in-out;
  }
`;

export const ExpectLessonStyle = styled(LessonStyle)`
  & .lesson-duration {
    stroke: ${({ theme }) => theme.grey_middle()};
  }
  & .lesson-name {
  }
  & .lesson-status {
    .expect-icon-animation {
      animation: ${sleepAnimation} 3s linear infinite;
      /* transform: translate(50%, -150%) scale(0.7); */
    }
  }
`;

export const CurrentLessonStyle = styled(LessonStyle)`
  /* background: ${({ theme }) => theme.bg_middle()}; */
  border-left: 2px solid var(--${({ colors }) => colors});
  &:nth-of-type(1) {
    border-left: 2px solid var(--${({ colors }) => colors});
  }
  z-index: 11;
  &::after {
    content: '';
    width: ${({ position }) => position}px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: ${({ theme }) => theme.progress()};
    z-index: -1;
  }
  & .lesson-duration {
    stroke: ${({ theme }) => theme.grey_middle()};
  }
  & .lesson-name {
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
from{transform: translateX(-29px)}
to{transform: translateX(0px)}
`;

export const BreakStyle = styled.div<LessonsDataType>`
  width: ${({ lessonWidth }) => lessonWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  position: relative;
  overflow: hidden;
  border-left: 2px solid ${({ theme }) => theme.bg_light()};
  perspective: 1000;
  transform-style: preserve-3d;

  user-select: none;
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
  /* toogle classes */
  &.active {
    border-left: 2px solid var(--${({ colors }) => colors});
    background: repeating-linear-gradient(
      -45deg,
      ${({ theme }) => theme.bg_light()},
      ${({ theme }) => theme.bg_light()} 10px,
      ${({ theme }) => theme.bg_black()} 10px,
      ${({ theme }) => theme.bg_black()} 20px
    );
    &::before {
      width: calc(100% + 29px);
      animation: ${breakAnimation} 3s linear infinite;
      background: repeating-linear-gradient(
        -45deg,
        ${({ theme }) => theme.bg_light()},
        ${({ theme }) => theme.bg_light()} 10px,
        ${({ theme }) => theme.bg_black()} 10px,
        ${({ theme }) => theme.bg_black()} 20px
      );
    }
  }
  /* &.inactive {
    & .finished-icon {
      stroke-dasharray: 40;
      stroke-dashoffset: 90;
    }
  } */
  /* ------ */
  circle.track {
    fill: ${({ theme }) => theme.bg_middle()};
    stroke: ${({ theme }) => theme.grey_dark()};
    stroke-width: 2;
  }
  .expect-icon,
  .expect-icon-animation,
  .finished-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .expect-icon,
  .expect-icon-animation {
    stroke: var(--${({ colors }) => colors});
  }
  .expect-icon-animation {
    animation: ${sleepAnimation} 3s linear infinite;
    /* transform: translate(50%, -150%) scale(0.7); */
  }
  .finished-icon {
    /* stroke-dasharray: 30;
    stroke-dashoffset: 90; */
    stroke-dasharray: 40;
    stroke-dashoffset: 90;
    transition: all 0.5s ease-in-out;
    /* transform-origin: bottom center;
    transform: translate(-50%, -50%) skewX(15deg) scale(1.3); */
    /* transform: translate(-50%, -50%) rotateY(30deg) scale(1.3); */
    stroke: var(--${({ colors }) => colors});
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

// LESSON AVATAR PROGRESS & LESSON STATUS ICON's
const AvatarAndIconCommonStyle = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  background-color: ${({ theme }) => theme.bg_light()};
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
`;

export const LessonAvatarProgressStyle = styled(AvatarAndIconCommonStyle)`
  left: 7px;
  object-fit: cover;
  z-index: 12;
`;

export const LessonStatusIconStyle = styled(AvatarAndIconCommonStyle)`
  font-size: ${({ theme }) => theme.fontsize_16};
  right: 7px;
  box-shadow: 0px 40px 40px ${({ theme }) => theme.bg_black(0.2)},
    0px 10px 10px ${({ theme }) => theme.bg_black(0.3)};
  z-index: 13;
`;
