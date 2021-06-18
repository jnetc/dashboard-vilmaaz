import { FC } from 'react';
// Types
import { LessonComponent } from '@types';
// Style
import { CurrentLessonStyle } from '@styles/lessons';
// Icons
import { SmallTimeIcon } from '@Icons/Lesson';

export const CurrentLesson: FC<LessonComponent> = ({
  width,
  color,
  lesson,
  start,
  end,
}) => {
  console.log('render current');
  return (
    <CurrentLessonStyle lessonWidth={width} color={color}>
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
          <circle cx="28" cy="28" r="24" className="progress"></circle>
        </svg>
        <span className="timer">30m</span>
      </div>
    </CurrentLessonStyle>
  );
};
