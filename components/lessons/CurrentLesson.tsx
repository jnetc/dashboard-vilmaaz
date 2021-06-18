import { FC } from 'react';
// Types
import { LessonComponent } from '@types';
// Style
import {
  CurrentLessonStyle,
  ProgressLine,
  CurrentBreakStyle,
} from '@styles/lessons';
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
  // console.log('render current');
  const { currentTimeNum } = useUpdate();
  const radius = 24;
  const circumference = Math.round(2 * Math.PI * radius); // 2 * (π = 3,14) * (r = 100)
  const currentPosition = currentTimeNum - start.position;

  const timeByStep = (currentPosition * 100) / width;
  const calcStep = (timeByStep * circumference) / 100;
  const calcTime = end.position - currentTimeNum;
  const step = circumference - calcStep;
  const showMeTime = transformNumToTime(calcTime).split(':')[1];

  return lesson !== 'taukko' ? (
    <CurrentLessonStyle lessonWidth={width} colors={colors}>
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
    <CurrentBreakStyle lessonWidth={width} colors={colors}>
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
    </CurrentBreakStyle>
  );
};
