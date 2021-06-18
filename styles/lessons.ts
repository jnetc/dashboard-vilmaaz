import styled from 'styled-components';
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
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  left: ${({ position }) => position}px;
  /* border-radius: 35px; */
  user-select: none;
  /* border: 2px solid red; */
  cursor: pointer;
  z-index: 10;
  order: ${({ order }) => (order ? order : 0)};
  &:hover {
    .progress {
      border-color: ${({ theme }) => theme.grey_middle()};
    }
    > svg {
      stroke: var(--${({ primary }) => primary});
    }
  }
`;

// LESSON STYLES
//TODO Сделать плавную анимацию перехода
type LessonType = { lessonWidth: number; colors: string };

const LessonStyle = styled.div<LessonType>`
  width: ${({ lessonWidth }) => lessonWidth}px;
  /* min-height: 70px; */
  display: grid;
  grid-template-columns: 1fr 56px;
  grid-template-rows: repeat(2, 25px);
  gap: 5px;
  place-self: center;
  padding: 15px;
  position: relative;
  user-select: none;
  background: ${({ theme }) => theme.bg_middle()};
  transition: all 0.3s ease-in-out;
  /* cursor: pointer; */
  z-index: 10;
  & .lesson-duration {
    align-items: center;
    align-self: flex-end;
    display: flex;
    grid-row: 1;
    grid-column: 1;
    gap: 0.5rem;
    font-size: ${({ theme }) => theme.fontsize_14};
    time {
      font-weight: 400;
    }
  }
  & .lesson-name {
    grid-row: 2;
    grid-column: 1;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontsize_16};
  }
  & .lesson-status {
    grid-row: 1/ 3;
    grid-column: 2;
    position: relative;
    /* align-self: center;
    justify-self: center; */
    /* display: flex; */

    circle.track {
      fill: none;
      stroke: ${({ theme }) => theme.grey_dark()};
      stroke-width: 2;
    }

    .expect-icon,
    .finished-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .expect-icon {
      stroke: var(--${({ colors }) => colors});
    }
    .finished-icon {
      stroke: var(--${({ colors }) => colors});
    }
  }
`;

export const FinishedLessonStyle = styled(LessonStyle)`
  & .lesson-duration {
    color: ${({ theme }) => theme.grey_middle(0.7)};
    stroke: ${({ theme }) => theme.grey_middle(0.7)};
  }
  & .lesson-name {
    color: ${({ theme }) => theme.grey_middle(0.7)};
  }
  & .lesson-status {
  }
`;

export const ExpectLessonStyle = styled(LessonStyle)`
  & .lesson-duration {
    color: ${({ theme }) => theme.grey_middle()};
    stroke: ${({ theme }) => theme.grey_middle()};
  }
  & .lesson-name {
    color: ${({ theme }) => theme.grey_middle()};
  }
`;

export const CurrentLessonStyle = styled(LessonStyle)`
  transform: translateY(-10px);
  background: ${({ theme }) => theme.bg_light()};
  box-shadow: 0 20px 20px ${({ theme }) => theme.bg_dark()},
    0 10px 10px ${({ theme }) => theme.bg_dark()};
  z-index: 11;
  & .lesson-duration {
    color: ${({ theme }) => theme.grey_light()};
    stroke: ${({ theme }) => theme.grey_middle()};
  }
  & .lesson-name {
    color: ${({ theme }) => theme.grey_light()};
  }
  & .lesson-status {
    circle.progress {
    }
    .timer {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: ${({ theme }) => theme.fontsize_16};
      font-weight: 400;
      transform: translate(-50%, -50%);
    }
  }
`;

export const BreakStyle = styled.div<LessonType>`
  width: ${({ lessonWidth }) => lessonWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
  user-select: none;
  /* background: ${({ theme }) => theme.bg_middle()}; */
  background: repeating-linear-gradient(
    -45deg,
    ${({ theme }) => theme.bg_middle()},
    ${({ theme }) => theme.bg_middle()} 10px,
    ${({ theme }) => theme.bg_dark()} 10px,
    ${({ theme }) => theme.bg_dark()} 20px
  );
  transition: all 0.3s ease-in-out;
  z-index: 11;
  circle.track {
    fill: none;
    stroke: ${({ theme }) => theme.grey_dark()};
    stroke-width: 2;
  }
  .expect-icon,
  .finished-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .expect-icon {
    stroke: var(--${({ colors }) => colors});
  }
  .finished-icon {
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

export const CurrentBreakStyle = styled(BreakStyle)`
  /* transform: translateY(-10px); */
  /* background: ${({ theme }) => theme.bg_light()}; */
  /* box-shadow: 0 20px 20px ${({ theme }) => theme.bg_dark()},
    0 10px 10px ${({ theme }) => theme.bg_dark()}; */
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
  box-shadow: 0px 40px 40px ${({ theme }) => theme.bg_dark(0.2)},
    0px 10px 10px ${({ theme }) => theme.bg_dark(0.3)};
  z-index: 13;
`;

// LESSON COMMON PROGRESS
export const LessonCommonProgressStyle = styled.svg<{ shade: string }>`
  position: absolute;
  top: 0;
  left: 1px;
  fill: ${({ theme }) => theme.bg_middle()};
  stroke: var(--${({ shade }) => shade});
  stroke-width: 2;
  stroke-dasharray: 12;
  transition: stroke 0.3s ease-in-out;
`;

// LESSON NAME
export const ProgressNameStyle = styled.div`
  width: 100%;
  padding: 0 65px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.grey_light()};
`;

// LESSON PRORGESS BAR
export const LessonProgressBarStyle = styled.div<{ primary: string }>`
  height: 70px;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: inherit;
  background-color: ${({ theme }) => theme.bg_middle()};
  border: 2px outset var(--${({ primary }) => primary});
  transition: all 0.3s ease-in-out;
  z-index: 11;
  .active {
    border-color: ${({ theme }) => theme.grey_middle()};
    box-shadow: 0px 40px 40px ${({ theme }) => theme.bg_dark(0.2)},
      0px 10px 10px ${({ theme }) => theme.bg_dark(0.3)};
  }
`;
