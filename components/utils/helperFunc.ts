// Types
import {
  Schedule,
  LessonsType,
  Lesson,
  InitLesson,
  StaticValues,
  Element,
} from '@types';

// export const dateFormat = (options: Intl.DateTimeFormatOptions, date: Date) => {
//   return new Intl.DateTimeFormat('fi-FI', options).format(date);
// };
export const dateFormat = (options: Intl.DateTimeFormatOptions) => {
  const date = new Date();
  return new Intl.DateTimeFormat('fi-FI', options).format(date);
};

export const transform = (
  data: Array<Schedule>,
  day: string,
  set: boolean = true
) => {
  // const date = new Date();
  // const day = dateFormat({ weekday: 'long' }, date);
  // const day = 'maanantai';

  // Used Set constructor for remove duplicate from array
  const newTimelineSet: Set<string> = new Set();
  const newTimefieldArr: Array<LessonsType> = new Array();

  data.forEach(tb => {
    const { timetable, ...data } = tb;

    const schoolday = timetable.find(l => l.day === day && l.lessons);

    if (!schoolday) return;
    if (schoolday.lessons.length === 0) {
      newTimefieldArr.push({
        ...data,
        start: { time: '', position: 0 },
        end: { time: '', position: 0 },
      });
      return;
    }

    const findEndOfArr = schoolday.lessons.length - 1;
    const start = schoolday.lessons[0].start.time;
    const end = schoolday.lessons[findEndOfArr].end.time;
    const startPos = transformTimeToNum(start);
    const endPos = transformTimeToNum(end);
    const timetableWithBreak = fillEmptySpace(schoolday.lessons);

    if (!set) {
      newTimefieldArr.push({
        ...data,
        timetable: timetableWithBreak,
        start: { time: start, position: startPos },
        end: { time: end, position: endPos },
      });
    }
    if (set) {
      newTimelineSet.add(start);
      newTimelineSet.add(end);
    }
  });

  if (!set) return newTimefieldArr;
  return [...newTimelineSet]; // Set spread to Array
};

// define if of lesson have empty space in time or not
const fillEmptySpace = (arr: Array<InitLesson>) => {
  const fillArray: Array<Lesson> = [];
  let startBreakPosition = transformTimeToNum(arr[0].start.time);

  for (let i of arr) {
    const startLesson = transformTimeToNum(i.start.time);
    const endLesson = transformTimeToNum(i.end.time);
    const isEmptyTime = startLesson - startBreakPosition;

    if (isEmptyTime === 0) {
      // Push lessons before init first break
      const z = addTimePosition(i, startLesson, endLesson);
      fillArray.push(z);
    }

    if (isEmptyTime !== 0) {
      const startBreak = transformNumToTime(startBreakPosition);
      const endBreak = transformNumToTime(startLesson);

      fillArray.push({
        id: i.id + 2,
        lesson: 'taukko',
        start: { time: startBreak.time, position: startBreakPosition },
        end: { time: endBreak.time, position: startLesson },
      });
      // Push lessons after init first break
      const z = addTimePosition(i, startLesson, endLesson);
      fillArray.push(z);
    }
    startBreakPosition = endLesson;
  }
  return fillArray;
};

const addTimePosition = (obj: InitLesson, start: number, end: number) => {
  const startPos = { ...obj.start, position: start };
  const endPos = { ...obj.end, position: end };
  obj.start = startPos;
  obj.end = endPos;
  return Object.assign({}, obj) as Lesson;
};

export const staticValues = (timearr: Array<string>) => {
  const arr: Array<number> = [];

  for (const i of timearr) {
    arr.push(transformTimeToNum(i));
  }
  //TODO Добавить сюда переменную длины элемента #timeline
  let startLessons = Math.min(...arr);
  let endLessons = Math.max(...arr);
  let totalTime = endLessons - startLessons;

  return { startLessons, endLessons, totalTime };
};

export const hourPositions = (hours: Array<string>) => {
  return hours.map(h => {
    const timepoint = transformTimeToNum(h);
    if (timepoint === 0) {
      return { time: h, position: timepoint };
    }
    return { time: h, position: timepoint };
  });
};

//* New transform timetransform
export const transformTimeToNum = (time: string | number): number => {
  if ('number' === typeof time) return time;

  const hours = Number(time.split(':')[0]);
  const minutes = Number(time.split(':')[1]);

  //* Length every hour
  const step = 340;
  const amountOfTime = 60;
  const hoursToMinutes = hours * amountOfTime;

  const hourStepLength = step + amountOfTime;
  const minuteStepLength = hourStepLength / amountOfTime;

  const minuteStep = minutes * minuteStepLength;
  const hourStep = step * hours;
  const timeStep = Math.floor(hoursToMinutes + hourStep + minuteStep);

  // console.log('tranform', timeStep);

  return timeStep;
};

export const transformNumToTime = (num: number) => {
  const step = 340;
  const amountOfTime = 60;
  const hourStepLength = step + amountOfTime;
  const minuteStepLength = hourStepLength / amountOfTime;

  const findMinutes = Math.floor((num % hourStepLength) / minuteStepLength);
  const hours = Math.floor(num / hourStepLength);
  const minutes = findMinutes > 9 ? findMinutes : `0${findMinutes}`;

  return { time: `${hours}:${minutes}`, minutes: findMinutes, hours };
};

export const movementTimeAndTimetable = (
  main: number,
  timetable: Element,
  currentTime: number,
  autoMovement: boolean,
  timeline: StaticValues,
  hourDivWidth: number
) => {
  if (!timetable) return;
  if (!autoMovement) return;

  const { startLessons, endLessons } = timeline;

  const startAutoMovement = startLessons + Math.round(main / 2);
  const stopAutoMovement = endLessons - Math.round(main / 2) + hourDivWidth;
  const outOfTrackLessons = endLessons - main + hourDivWidth;
  const timeMovement = Math.round(main / 2) - currentTime;

  if (startAutoMovement > currentTime || startLessons > currentTime) {
    timetable.style.transform = `translate3d(-${startLessons}px, 0, 0)`;
    return;
  }

  if (currentTime > endLessons || stopAutoMovement <= currentTime) {
    timetable.style.transform = `translate3d(-${outOfTrackLessons}px, 0, 0)`;
    return;
  }

  timetable.style.transform = `translate3d(${timeMovement}px, 0, 0)`;
};

// Get position from transform style
export function getTransformStylePosition(el: Element) {
  let posX = Number(el?.style.transform.split('px')[0].split('(')[1]);
  return Math.abs(posX);
}

export const cssAnimationHandler = (timetable: Element) => {
  timetable?.classList.add('animate');
  const timer = setTimeout(() => {
    timetable?.classList.remove('animate');
  }, 3000);
  clearTimeout(timer);
};

export const lessonStatus = (position: number, start: number, end: number) => {
  if (start <= position && position < end) {
    return { status: 'current' };
  }
  if (position > start) {
    return { status: 'finished' };
  }
  return { status: 'expect' };
};

export const timelineLimits = (
  el: HTMLDivElement,
  timeline: StaticValues,
  main: number,
  hourDivWidth: number
) => {
  let transformStyle = getTransformStylePosition(el);
  const end = timeline.endLessons - main + hourDivWidth;

  if (end < transformStyle) {
    el.style.transform = `translate3d(-${end}px, 0, 0)`;
  }
  if (timeline.startLessons > transformStyle) {
    el.style.transform = `translate3d(-${timeline.startLessons}px, 0, 0)`;
  }
};
