import { FC } from 'react';
import styled from 'styled-components';
// Types
import { ProgressLessonsData } from '@types';
// Component
import { ProgressLesson } from '@Main/lessons/right-side-panel/ProgressLesson';

const ProgressLessonsStyle = styled.div`
  grid-row: 5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-bottom: 35px;
  transition: all 0.3s ease-in-out;
`;

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
