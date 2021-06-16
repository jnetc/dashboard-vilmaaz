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
  border-radius: 35px;
  user-select: none;
  border: 2px solid red;
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

// LESSON
export const LessonStyle = styled.div<{ lessonWidth: number }>`
  width: ${({ lessonWidth }) => lessonWidth}px;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 35px;
  user-select: none;
  /* background: white; */
  border: 2px solid red;
  cursor: pointer;
  z-index: 10;
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
