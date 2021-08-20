import { FC, useEffect, useRef } from 'react';
// Types
import { LessonComponent, Element } from '@Types';
// Style
import {
  CurrentLessonStyle,
  ProgressLine,
  BreakCurrentStyle,
} from './CurrentLesson.style';
// Hook
import { useUpdateTime } from '@Hooks/useUpdateTime';
// Helpers
import { transformNumToTime } from 'utils/helperFunctions';

export const CurrentLesson: FC<LessonComponent> = ({
  width,
  color,
  lesson,
  start,
  end,
}) => {
  const { currentTimeNum } = useUpdateTime();
  const lessonRef = useRef<Element>(null);
  const breakRef = useRef<Element>(null);
  let showMeTime = '';
  const radius = 24;
  const circumference = Math.round(2 * Math.PI * radius); // 2 * (π = 3,14) * (r = 100)
  const currentPosition = currentTimeNum - start.position;

  const timeByStep = (currentPosition * 100) / width;
  const calcStep = (timeByStep * circumference) / 100;
  const calcTime = end.position - currentTimeNum;
  const step = circumference - calcStep;
  const { minutes, hours, time } = transformNumToTime(calcTime);
  const hoursArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  showMeTime = `${minutes}m`;
  if (hours >= 1 && minutes === 0) {
    for (const h of hoursArr) {
      if (h === hours) showMeTime = time;
    }
  }
  if (hours >= 1 && minutes > 0) {
    for (const h of hoursArr) {
      if (h === hours) showMeTime = time;
    }
  }
  if (hours >= 9) {
    for (const h of hoursArr) {
      if (h === hours) showMeTime = `${hours}+`;
    }
  }

  //TODO Пересмотреть компонент, такой подход передобавляет класс каждую минуту!!!
  //! Добавил $ `progress={step}` посмотрим как будет себя вести дальше
  useEffect(() => {
    const transition = setTimeout(() => {
      lessonRef.current?.classList.add('active');
      breakRef.current?.classList.add('active');
    }, 0);
    return () => clearTimeout(transition);
  }, [currentTimeNum]);

  return !['tauko', 'lounas', 'ruokatauko'].includes(lesson) ? (
    <CurrentLessonStyle
      lessonWidth={width}
      color={color}
      position={start.position}
      process={currentPosition}
      ref={lessonRef}>
      <div className="lesson-duration">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path
            d="M8.4397 3.95419V8.96282L11.1287 11.0155M16.2372 8.48083C16.2372 12.623 12.8793 15.9808 8.73715 15.9808C4.59502 15.9808 1.23715 12.623 1.23715 8.48083C1.23715 4.3387 4.59502 0.980835 8.73715 0.980835C12.8793 0.980835 16.2372 4.3387 16.2372 8.48083Z"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
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
            color={color}
            track={circumference}
            $progress={step}></ProgressLine>
        </svg>
        <span className="timer">{showMeTime}</span>
      </div>
    </CurrentLessonStyle>
  ) : (
    <BreakCurrentStyle
      lessonWidth={width}
      color={color}
      position={start.position}
      ref={breakRef}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r={radius} className="track"></circle>
        <ProgressLine
          cx="28"
          cy="28"
          r={radius}
          className="progress"
          color={color}
          track={circumference}
          $progress={step}></ProgressLine>
      </svg>
      <span className="timer">{showMeTime}</span>
    </BreakCurrentStyle>
  );
};
