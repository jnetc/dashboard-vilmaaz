import { FC } from 'react';
// Types
import { LessonsType, Order } from '@Types';

import { Switcher } from '@Lessons/switcher/Switcher';

import { LessonsStyle, EmptyLessonsStyle } from './Lessons.style';

const Lessons: FC<{ data: LessonsType; order: Order | undefined }> = ({
  data,
  order,
}) => {
  const lengthLessons = data.end.position - data.start.position;
  const lessons = data.timetable?.map(l => {
    return <Switcher key={l.id} data={l} color={data.color} />;
  });

  return lengthLessons !== 0 ? (
    <LessonsStyle
      position={data.start.position}
      distance={lengthLessons}
      primary={data.color}
      order={order?.order}
      className="timefield-lesson">
      {lessons}
    </LessonsStyle>
  ) : (
    <EmptyLessonsStyle />
  );
};

export default Lessons;
