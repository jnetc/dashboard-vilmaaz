import { FC } from 'react';
// Types
import { LessonDataProps } from '@types';
// Helper function
import { learningProgress } from '@Main/lessons/utils/timeline';
// Hook
import { useUpdate } from '@Main/lessons/hook/useUpdate';
// Components
import { LessonStatusIcon } from '@Main/lessons/LessonStatusIcon';
import { LessonAvatarProgress } from '@Main/lessons/LessonAvatarProgress';
import { LessonName } from '@Main/lessons/LessonName';
// Styles
import { LessonProgressBarStyle } from './styles/lessons';

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
