import { FC, useEffect, useState } from 'react';
// Component
import Lesson from '@Main/lessons/Lesson';
// Store
import { useMainStore } from '@Store/MainStore';
// Utils
import { getLessonStartEndPoint } from '@Main/lessons/utils/timeline';
// Types
import { LessonsType } from '@types';
// Styles
import { TimefieldStyle } from './styles/lessons';

const Timefield: FC = () => {
  const { content } = useMainStore();
  const [startEndLesson, setStartEndLesson] = useState<Array<LessonsType>>([]);

  useEffect(() => {
    setStartEndLesson(content);
  }, []);

  const lessonData = getLessonStartEndPoint(startEndLesson);

  const lessons = lessonData.map(data => {
    return <Lesson key={data.id} data={data} />;
  });

  return (
    <TimefieldStyle id="timefield">
      <div id="field">{lessons}</div>
    </TimefieldStyle>
  );
};

export default Timefield;
