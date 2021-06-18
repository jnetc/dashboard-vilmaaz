import { FC } from 'react';
// Types
import { LessonComponent } from '@types';
// Style
import { ExpectLessonStyle } from '@styles/lessons';
// Icons
import { SmallTimeIcon, ExpectIcon } from '@Icons/Lesson';

export const ExpectLesson: FC<LessonComponent> = ({
  width,
  color,
  lesson,
  start,
  end,
}) => {
  console.log('render expect');
  return (
    <ExpectLessonStyle lessonWidth={width} color={color}>
      <div className="lesson-duration">
        <SmallTimeIcon />
        <time>
          {start} - {end}
        </time>
      </div>
      <p className="lesson-name">{lesson}</p>
      <div className="lesson-status">
        <svg width="56" height="56" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r="24" className="track"></circle>
        </svg>
        <ExpectIcon />
      </div>
    </ExpectLessonStyle>
  );
};
