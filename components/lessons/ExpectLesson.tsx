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
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="expect-icon-animation">
          <path
            d="M2 1.98602H14L2 13.986H14"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </ExpectLessonStyle>
  ) : (
    <BreakStyle lessonWidth={width} colors={colors}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="24" className="track"></circle>
      </svg>
      <ExpectIcon />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="expect-icon-animation">
        <path
          d="M2 1.98602H14L2 13.986H14"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BreakStyle>
  );
};
