import { FC } from 'react';
// Types
import { Lesson } from '@Types';
// Hook
import { useUpdateTime } from '@Hooks/useUpdateTime';
import { useGlobalStore } from '@Hooks/useStores';
// Components
import { FinishedLesson } from '@Lessons/finished-lesson/FinishedLesson';
import { PendingLesson } from '@Lessons/pending-lesson/PendingLesson';
import { CurrentLesson } from '@Lessons/current-lesson/CurrentLesson';
// Helper
import { lessonStatus } from 'utils/helperFunctions';

export const Switcher: FC<{ data: Lesson; color: string }> = ({
  data,
  color,
}) => {
  const { position } = useUpdateTime();
  const { today } = useGlobalStore();
  const { end, start, lesson } = data;

  const lessonBlockWidth = end.position - start.position;
  const setStatuses = lessonStatus(position, start.position, end.position);
  const ls = today ? setStatuses : { status: 'pending' };

  switch (ls.status) {
    case 'current':
      return (
        <CurrentLesson
          width={lessonBlockWidth}
          color={color}
          lesson={lesson}
          start={start}
          end={end}
        />
      );
    case 'finished':
      return (
        <FinishedLesson
          width={lessonBlockWidth}
          color={color}
          lesson={lesson}
          start={start}
          end={end}
        />
      );
    default:
      return (
        <PendingLesson
          width={lessonBlockWidth}
          color={color}
          lesson={lesson}
          start={start}
          end={end}
        />
      );
  }
};
