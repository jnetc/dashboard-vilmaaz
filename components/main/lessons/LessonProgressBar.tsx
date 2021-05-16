import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
// Types
import { LessonDataProps } from '@types';
// Helper function
import { learningProgress } from '@Main/lessons/utils/timeline';
// Hook
import { useRealtime } from '@Main/lessons/hook/useRealtime';
// Components
import { LessonStatusIcon } from '@Main/lessons/LessonStatusIcon';
import { LessonAvatarProgress } from '@Main/lessons/LessonAvatarProgress';
import { LessonName } from '@Main/lessons/LessonName';

const LessonProgressBarStyle = styled.div<{ primary: string }>`
  height: 68px;
  position: relative;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: inherit;
  background-color: ${({ theme }) => theme.bg_middle()};
  border: 2px solid var(--${({ primary }) => primary});
  transition: all 0.3s ease-in-out;
  z-index: 5;
  .active {
    border-color: ${({ theme }) => theme.grey_middle()};
    box-shadow: 0px 40px 40px ${props => props.theme.bg_dark(0.2)},
      0px 10px 10px ${props => props.theme.bg_dark(0.3)};
  }
`;

export const LessonProgressBar: FC<{ data: LessonDataProps }> = ({ data }) => {
  const [minutes, setMinutes] = useState<number>(new Date().getMinutes());

  const lengthLessons = data.end - data.start;

  useEffect(() => {
    let timer = setInterval(() => setMinutes(new Date().getMinutes()), 1000);
    return () => clearInterval(timer);
  }, [minutes]);

  const { position, timeNumber } = useRealtime(minutes);

  const { pos, status, lesson, timer } = learningProgress(
    data.start,
    data.timetable,
    lengthLessons,
    position,
    timeNumber
  );

  return (
    <LessonProgressBarStyle
      className="progress"
      style={{ width: pos }}
      primary={data.primaryColor}>
      <LessonAvatarProgress avatar={data.avatar} />
      <LessonName name={lesson} />
      <LessonStatusIcon status={status} timer={timer} />
    </LessonProgressBarStyle>
  );
};
