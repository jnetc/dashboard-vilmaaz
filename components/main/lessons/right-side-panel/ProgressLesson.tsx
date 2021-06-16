import { FC } from 'react';
// Hook
import { useUpdate } from '@Hooks/useUpdate';
// Types
import { Lesson, LessonsColor } from '@types';
// Helper functions
import { transformTimeToNum } from '@Utils/helperFunc';
// Styles
import { ProgressLessonStyle } from './styles/right-panel-styles';

export const ProgressLesson: FC<{ data: Lesson; color: LessonsColor }> = ({
  data,
  color,
}) => {
  const { currentTimeNum } = useUpdate();
  const startLesson = transformTimeToNum(data.time.start);
  const endLesson = transformTimeToNum(data.time.end);
  const flow = { process: 'wait' };

  if (startLesson <= currentTimeNum) {
    flow.process = 'run';
  }
  if (endLesson < currentTimeNum) {
    flow.process = 'done';
  }

  return (
    <ProgressLessonStyle colors={color} flow={flow}>
      <div className="marker">
        <div className="marker-point" />
      </div>
      <time>
        {data.time.start} - {data.time.end}
      </time>
      <h4>{data.lesson}</h4>
    </ProgressLessonStyle>
  );
};
