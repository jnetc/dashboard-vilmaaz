import { FC, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import Lesson from '@Main/lessons/Lesson';

import { useStore } from '@Store/Store';

import {
  transformDataForTimeline,
  getLessonData,
} from '@Main/lessons/utils/timeline';
// Types
import { LessonsArray, Element } from '@Main/lessons/types';

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
  const { data } = useStore();
  const [startEndLesson, setStartEndLesson] = useState<LessonsArray>([]);
  const fieldEl = useRef<Element>(null);

  useEffect(() => {
    const startEnd = transformDataForTimeline(data, false);
    setStartEndLesson(startEnd);
  }, []);

  const lessonData = getLessonData(startEndLesson);

  const lessons = lessonData.map(data => {
    return <Lesson key={data.id} data={data} />;
  });

  return (
    <TimefieldStyle id="timefield">
      <div id="field" ref={fieldEl}>
        {lessons}
      </div>
    </TimefieldStyle>
  );
};

export default Timefield;
