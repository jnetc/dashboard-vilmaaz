import { FC } from 'react';
// Types
import { LessonsColor, Lesson } from '@types';
// Hook
import { useUpdate } from '@Hooks/useUpdate';

import { FinishedLesson } from './FinishedLesson';
import { ExpectLesson } from './ExpectLesson';
import { CurrentLesson } from './CurrentLesson';

export const LessonSwitcher: FC<{ data: Lesson; colors: LessonsColor }> = ({
  data,
  colors,
}) => {
  const { position } = useUpdate();
  const { end, start, lesson } = data;

  const dayProgress = (position: number, start: number, end: number) => {
    if (start <= position && position < end) {
      return { status: 'current' };
    }
    if (position > start) {
      return { status: 'finished' };
    }
    return { status: 'expect' };
  };

  const lessonBlockWidth = end.position - start.position;

  const y = dayProgress(position, start.position, end.position);

  switch (y.status) {
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
