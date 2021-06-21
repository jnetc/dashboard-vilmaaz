import { FC, useEffect, useRef } from 'react';
// Types
import { LessonComponent, Element } from '@types';
// Style
import { CurrentLessonStyle, ProgressLine, BreakStyle } from '@styles/lessons';
// Icons
import { SmallTimeIcon } from '@Icons/Lesson';
// Hook
import { useUpdate } from '@Hooks/useUpdate';
// Helpers
import { transformNumToTime } from '@Utils/helperFunc';

export const CurrentLesson: FC<LessonComponent> = ({
  width,
  colors,
  lesson,
  start,
  end,
}) => {
  const { currentTimeNum } = useUpdate();
  const lessonRef = useRef<Element>(null);
  const breakRef = useRef<Element>(null);
  const radius = 24;
  const circumference = Math.round(2 * Math.PI * radius); // 2 * (π = 3,14) * (r = 100)
  const currentPosition = currentTimeNum - start.position;

  const timeByStep = (currentPosition * 100) / width;
  const calcStep = (timeByStep * circumference) / 100;
  const calcTime = end.position - currentTimeNum;
  const step = circumference - calcStep;
  const showMeTime = transformNumToTime(calcTime).split(':')[1];

  useEffect(() => {
    const transition = setTimeout(() => {
      lessonRef.current?.classList.add('active');
      breakRef.current?.classList.add('active');
    }, 100);
    return () => clearTimeout(transition);
  }, [currentTimeNum]);

  // console.log(currentPosition);

  return lesson !== 'taukko' ? (
    <CurrentLessonStyle
      lessonWidth={width}
      colors={colors}
      position={currentPosition}
      ref={lessonRef}>
      <div className="lesson-duration">
        <SmallTimeIcon />
        <time>
          {start.time} - {end.time}
        </time>
      </div>
      <p className="lesson-name">{lesson}</p>
      <div className="lesson-status">
        <svg width="56" height="56" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={radius} className="track"></circle>
          <ProgressLine
            cx="28"
            cy="28"
            r={radius}
            className="progress"
            colors={colors}
            track={circumference}
            progress={step}></ProgressLine>
        </svg>
        <span className="timer">{showMeTime}m</span>
      </div>
    </CurrentLessonStyle>
  ) : (
    <BreakStyle
      lessonWidth={width}
      colors={colors}
      position={currentPosition}
      ref={breakRef}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r={radius} className="track"></circle>
        <ProgressLine
          cx="28"
          cy="28"
          r={radius}
          className="progress"
          colors={colors}
          track={circumference}
          progress={step}></ProgressLine>
      </svg>
      <span className="timer">{showMeTime}m</span>
    </BreakStyle>
  );
};
