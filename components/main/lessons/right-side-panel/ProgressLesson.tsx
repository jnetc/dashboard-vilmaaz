import { FC, useState, useEffect } from 'react';
// Hook
import { useRealtime } from '@Main/lessons/hook/useRealtime';
// Types
import { Lesson, LessonsColor } from '@types';
// Helper functions
import { transformTimeToNum } from '@Store/utils/helperFunc';
// Styles
import { ProgressLessonStyle } from './styles/right-panel-styles';

export const ProgressLesson: FC<{ data: Lesson; color: LessonsColor }> = ({
  data,
  color,
}) => {
  const [minutes, setMinutes] = useState<number>(new Date().getMinutes());

  useEffect(() => {
    let timer = setInterval(() => setMinutes(new Date().getMinutes()), 1000);
    return () => clearInterval(timer);
  }, [minutes]);

  const { currentTimeNum } = useRealtime(minutes);
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
