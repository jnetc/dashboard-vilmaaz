import { FC } from 'react';
// Types
import { ProgressLessonsData } from '@types';
// Component
import { ProgressLesson } from '@Main/lessons/right-side-panel/ProgressLesson';
// Styles
import { ProgressLessonsStyle } from './styles/right-panel-styles';

export const ProgressLessons: FC<{ data: ProgressLessonsData }> = ({
  data,
}) => {
  const { accent, shade, lessons } = data;
  const color = { accent, shade };

  const elements = lessons.map(l => {
    return <ProgressLesson key={l.id} data={l} color={color} />;
  });

  return <ProgressLessonsStyle>{elements}</ProgressLessonsStyle>;
};
