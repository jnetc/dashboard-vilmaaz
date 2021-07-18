import { FC } from 'react';
// Types
import { LessonsType } from '@Types';

import { Switcher } from '@Lessons/switcher/Switcher';

import { LessonsStyle, EmptyLessonsStyle } from './Lessons.style';

const Lessons: FC<{ data: LessonsType; lineColor?: string }> = ({
  data,
  lineColor,
}) => {
  const lengthLessons = data.end.position - data.start.position;
  const lessons = data.timetable?.map(l => {
    return <Switcher key={l.id} data={l} color={data.color} />;
  });

  console.log(lineColor);

  return lengthLessons !== 0 ? (
    <LessonsStyle
      position={data.start.position}
      distance={lengthLessons}
      primary={data.color}
      lineColor={lineColor}
      className="timefield-lesson">
      {lessons}
    </LessonsStyle>
  ) : (
    <EmptyLessonsStyle lineColor={lineColor} className="timefield-lesson" />
  );
};

export default Lessons;
