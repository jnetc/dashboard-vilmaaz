import { FC } from 'react';
// Types
import { LessonsColor, Lesson } from '@types';
// Hook
import { useUpdate } from '@Hooks/useUpdate';

import { FinishedLesson } from './FinishedLesson';
import { ExpectLesson } from './ExpectLesson';
import { CurrentLesson } from './CurrentLesson';
// Helper
import { lessonStatus } from '@Utils/helperFunc';

export const LessonSwitcher: FC<{ data: Lesson; colors: LessonsColor }> = ({
  data,
  colors,
}) => {
  const { position } = useUpdate();
  const { end, start, lesson } = data;

  const lessonBlockWidth = end.position - start.position;
  const ls = lessonStatus(position, start.position, end.position);

  switch (ls.status) {
    case 'current':
      return (
        <CurrentLesson
          width={lessonBlockWidth}
          colors={colors.accent}
          lesson={lesson}
          start={start}
          end={end}
        />
      );
    case 'finished':
      return (
        <FinishedLesson
          width={lessonBlockWidth}
          colors={colors.accent}
          lesson={lesson}
          start={start}
          end={end}
        />
      );
    default:
      return (
        <ExpectLesson
          width={lessonBlockWidth}
          colors={colors.accent}
          lesson={lesson}
          start={start}
          end={end}
        />
      );
  }
};
