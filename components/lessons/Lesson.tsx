import { FC } from 'react';
// Types
import { LessonsColor, LessonData } from '@types';
// Styles
import { LessonStyle } from '@styles/lessons';

export const Lesson: FC<{ data: LessonData; colors: LessonsColor }> = ({
  data,
  colors,
}) => {
  let lessonBlockWidth: number;
  if (!data.end.position || !data.start.position) {
    lessonBlockWidth = 0;
  } else {
    lessonBlockWidth = data.end.position - data.start.position;
  }

  return (
    <LessonStyle lessonWidth={lessonBlockWidth}>{data.lesson}</LessonStyle>
  );
};
