import { FC } from 'react';
// Types
import { LessonDataProps } from '@types';
// Helper function
import { learningProgress } from '@Utils/timeline';
// Hook
import { useUpdate } from '@Hooks/useUpdate';
// Components
import { LessonStatusIcon } from './LessonStatusIcon';
import { LessonAvatarProgress } from './LessonAvatarProgress';
import { LessonName } from './LessonName';
// Styles
import { LessonProgressBarStyle } from '@styles/lessons';

export const LessonProgressBar: FC<{ data: LessonDataProps }> = ({ data }) => {
  const lengthLessons = data.end - data.start;
  const { position, currentTimeNum } = useUpdate();

  const { pos, status, lesson, timer } = learningProgress(
    data.start,
    data.timetable,
    lengthLessons,
    position,
    currentTimeNum
  );

  return (
    <LessonProgressBarStyle
      className="progress"
      style={{ width: pos }}
      primary={data.colors.accent}>
      <LessonAvatarProgress avatar={data.avatar} />
      <LessonName name={lesson} />
      <LessonStatusIcon status={status} timer={timer} />
    </LessonProgressBarStyle>
  );
};
