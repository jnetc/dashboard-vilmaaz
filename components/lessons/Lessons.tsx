import { FC } from 'react';
// Types
import { LessonsType, Order } from '@types';

import { LessonSwitcher } from './LessonSwitcher';

import { LessonsStyle } from '@styles/lessons';

const Lessons: FC<{ data: LessonsType; order: Order | undefined }> = ({
  data,
  order,
}) => {
  const lengthLessons = data.end.position - data.start.position;
  const lessons = data.timetable.map(l => {
    return <LessonSwitcher key={l.id} data={l} colors={data.colors} />;
  });

  return (
    <LessonsStyle
      position={data.start.position}
      distance={lengthLessons}
      primary={data.colors.accent}
      order={order?.order}
      className="timefield-lesson">
      {lessons}
    </LessonsStyle>
  );
};

export default Lessons;
