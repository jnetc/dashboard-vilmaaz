import { FC } from 'react';
// Types
import { LessonComponent } from '@types';
// Style
import { ExpectLessonStyle, BreakStyle } from '@styles/lessons';
// Icons
import { SmallTimeIcon, ExpectIcon } from '@Icons/Lesson';

export const ExpectLesson: FC<LessonComponent> = ({
  width,
  colors,
  lesson,
  start,
  end,
}) => {
  console.log('render expect');
  return lesson !== 'taukko' ? (
    <ExpectLessonStyle lessonWidth={width} colors={colors}>
      <div className="lesson-duration">
        <SmallTimeIcon />
        <time>
          {start.time} - {end.time}
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
  ) : (
    <BreakStyle lessonWidth={width} colors={colors}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="24" className="track"></circle>
      </svg>
      <ExpectIcon />
    </BreakStyle>
  );
};
