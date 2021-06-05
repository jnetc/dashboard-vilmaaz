import styled from 'styled-components';
// Types
import { Position } from '@types';

type LessonStyleType = {
  distance: number;
  primary: string;
  position: number;
  order?: number;
};

// LESSON
export const LessonStyle = styled.div<LessonStyleType>`
  width: ${({ distance }) => distance}px;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  left: ${({ position }) => position}px;
  border-radius: 35px;
  user-select: none;
  cursor: pointer;
  z-index: 10;
  order: ${({ order }) => (order ? order : 0)};
  &:hover {
    .progress {
      border-color: ${({ theme }) => theme.grey_middle()};
      /* box-shadow: 0px 40px 40px ${props => props.theme.bg_dark(0.2)},
        0px 10px 10px ${props => props.theme.bg_dark(0.3)}; */
    }
    > svg {
      stroke: var(--${({ primary }) => primary});
    }
  }
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

// TIMEFIELD
export const TimefieldStyle = styled.div`
  grid-row: 2;
  padding: 70px 0px 70px 46px;
  #field {
    display: flex;
    flex-direction: column;
    gap: 4em;
    transition: all 0.3s ease-in-out;
  }
`;

// TIMELINE
export const TimelineStyle = styled.div`
  width: 100%;
  grid-row: 1;
  position: relative;
  /* user-select: none;
  pointer-events: none; */
  /* padding: 0 160px 0 2px; */
  cursor: default;
  div#track {
    position: relative;
  }
`;

// TIMELINE POINTS
export const TimelinePointsStyle = styled.div<Position>`
  width: 90px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate3d(${({ position }) => position}px, 0, 0);
  color: ${({ theme }) => theme.grey_light()};
  border-radius: 15px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.bg_middle()};
  background-color: ${({ theme }) => theme.bg_middle(0.7)};
  transition: all 0.3s ease-in-out;
  user-select: none;
  z-index: 0;
  &::after {
    content: '';
    width: 2px;
    height: 1000vh;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.grey_dark()};
    opacity: 0.7;
    z-index: -1;
    pointer-events: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg_regular(0.8)};
    border-color: ${({ theme }) => theme.grey_light()};
    /* box-shadow: 0 10px 10px ${({ theme }) => theme.bg_dark(0.3)},
      0 40px 40px ${({ theme }) => theme.bg_dark(0.2)}; */
    z-index: 2;
  }
`;

// TIMELINE STEP
export const TimelineStepStyle = styled(TimelinePointsStyle)`
  position: absolute;
  transform: translate3d(${({ position }) => position}px, 0, 0);
  transition: transform 0.3s ease-in-out;
  color: ${({ theme }) => theme.primary()};
  border-color: ${({ theme }) => theme.primary()};
  box-shadow: 0 5px 5px ${({ theme }) => theme.primary(0.15)},
    0 20px 20px ${({ theme }) => theme.primary(0.1)};
  z-index: 1;
  pointer-events: none;
  &::after {
    background-color: ${({ theme }) => theme.primary(0.5)};
  }
`;

// TIMETABLE
export const TimetableStyle = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
  grid-template-rows: 60px 1fr;
  /* padding: 0 160px 0 2px; */
  padding: 0 120px 0 2px;
  z-index: 1;
  user-select: none;
  @media (max-width: 1920px) {
    width: 1920px;
  }
  &.animate {
    transition: transform 0.3s ease-in-out;
  }
`;

export const MainStyle = styled.main`
  width: 100%;
  min-height: 100%;
  padding: 35px 0 0 140px;
  /* padding: 20px 0 0 70px; */
  border-radius: 30px 0 0 30px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bg_middle()};
  box-shadow: 0px 40px 40px ${({ theme }) => theme.bg_dark(0.2)},
    0px 10px 10px ${({ theme }) => theme.bg_dark(0.3)};
  &.opacity {
    filter: opacity(40%);
  }
`;

export const TimetableEmptyStyle = styled.h2`
  justify-self: center;
  align-self: center;
`;

// UPDATE TIMETABLE
export const UpdateTimetableStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: ${({ theme }) => theme.bg_dark(0.5)};
  backdrop-filter: blur(2px);
  transform: translate(-50%, -50%);
  z-index: 1000;
  user-select: none;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 3rem 4rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.bg_light()};
    box-shadow: 0px 40px 40px ${({ theme }) => theme.bg_dark(0.2)},
      0px 10px 10px ${({ theme }) => theme.bg_dark(0.3)};
    z-index: 1001;
  }
  h3 {
    padding-bottom: 2rem;
  }
`;
