import { FC, useRef, useEffect } from 'react';
// Types
import { LessonComponent, Element } from '@types';
// Style
import { FinishedLessonStyle, BreakStyle } from '@styles/lessons';
// Icons
import { SmallTimeIcon, FinishedIcon } from '@Icons/Lesson';

export const FinishedLesson: FC<LessonComponent> = ({
  width,
  colors,
  lesson,
  start,
  end,
}) => {
  const lessonRef = useRef<Element>(null);
  const breakref = useRef<Element>(null);

  useEffect(() => {
    const transition = setTimeout(() => {
      lessonRef.current?.classList.add('inactive');
      breakref.current?.classList.add('inactive');
    }, 0);
    return () => {
      clearTimeout(transition);
    };
  }, []);

  return lesson !== 'taukko' ? (
    <FinishedLessonStyle lessonWidth={width} colors={colors} ref={lessonRef}>
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
        <FinishedIcon />
      </div>
    </FinishedLessonStyle>
  ) : (
    <BreakStyle lessonWidth={width} colors={colors} ref={breakref}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="24" className="track"></circle>
      </svg>
      <FinishedIcon />
    </BreakStyle>
  );
};
