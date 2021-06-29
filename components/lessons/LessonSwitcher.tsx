import { FC } from 'react';
// Types
import { LessonsColor, Lesson } from '@types';
// Hook
import { useUpdate } from '@Hooks/useUpdate';
import { useStore } from '@Hooks/useStore';
// Components
import { FinishedLesson } from './FinishedLesson';
import { PendingLesson } from './PendingLesson';
import { CurrentLesson } from './CurrentLesson';
// Helper
import { lessonStatus } from '@Utils/helperFunc';

export const LessonSwitcher: FC<{ data: Lesson; colors: LessonsColor }> = ({
  data,
  colors,
}) => {
  const { position } = useUpdate();
  const { today } = useStore();
  const { end, start, lesson } = data;

  const lessonBlockWidth = end.position - start.position;
  const setStatuses = lessonStatus(position, start.position, end.position);
  const ls = today ? setStatuses : { status: 'pending' };

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
        <PendingLesson
          width={lessonBlockWidth}
          colors={colors.accent}
          lesson={lesson}
          start={start}
          end={end}
        />
      );
  }
};
