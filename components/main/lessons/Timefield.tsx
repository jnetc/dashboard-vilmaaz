import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import Lesson from '@Main/lessons/Lesson';

import { useStore } from '@Store/Store';

import { getLessonStartEndPoint } from '@Main/lessons/utils/timeline';
// Types
import { LessonsType } from '@types';

const TimefieldStyle = styled.div`
  grid-row: 2;
  padding: 70px 114px 70px 46px;
  #field {
    display: flex;
    flex-direction: column;
    gap: 4em;
  }
`;

const Timefield: FC = () => {
  const { content } = useStore();
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
