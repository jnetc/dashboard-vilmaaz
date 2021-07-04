// Types
import {
  Schedule,
  LessonsType,
  Lesson,
  InitLesson,
  StaticValues,
  Element,
} from '@Types';

import {
  step,
  hourDistance,
  minuteDistance,
  minutesInHour,
  hourDivWidth,
} from '@Store';

export const dateFormat = (options: Intl.DateTimeFormatOptions) => {
  const date = new Date();
  return new Intl.DateTimeFormat('fi-FI', options).format(date);
};

export const transform = (
  data: Array<Schedule>,
  day: string,
  set: boolean = true
) => {
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
  return [...newTimelineSet];
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

export const transformTimeToNum = (time: string | number): number => {
  if ('number' === typeof time) return time;

  const hours = Number(time.split(':')[0]);
  const minutes = Number(time.split(':')[1]);

  const hoursToMinutes = hours * minutesInHour;

  const minuteStep = minutes * minuteDistance;
  const hourStep = step * hours;
  const timeStep = Math.floor(hoursToMinutes + hourStep + minuteStep);

  return timeStep;
};

export const transformNumToTime = (num: number) => {
  const findMinutes = Math.floor((num % hourDistance) / minuteDistance);
  const hours = Math.floor(num / hourDistance);
  const minutes = findMinutes > 9 ? findMinutes : `0${findMinutes}`;

  return { time: `${hours}:${minutes}`, minutes: findMinutes, hours };
};

// Automatic movement of each minute
// And point of start  if app is loaded
// Today or another active days
export const movementTimeAndTimetable = (
  main: number,
  timetable: Element,
  currentTime: number,
  autoMovement: boolean,
  timeline: StaticValues,
  scope: boolean,
  center: number
) => {
  if (!timetable) return;
  if (!autoMovement) return;

  const { startLessons, endLessons } = timeline;

  const startAutoMovement = startLessons + Math.round(main / 2);
  const stopAutoMovement = endLessons - Math.round(main / 2) + hourDivWidth;
  const outOfTrackLessons = endLessons - main + hourDivWidth;
  const timeMovement = Math.round(main / 2) - currentTime - hourDivWidth;

  if (
    (startAutoMovement > currentTime || startLessons > currentTime) &&
    !scope
  ) {
    timetable.style.transform = `translate3d(-${startLessons}px, 0, 0)`;
    return;
  }

  if (currentTime > endLessons || (stopAutoMovement <= currentTime && !scope)) {
    timetable.style.transform = `translate3d(-${outOfTrackLessons}px, 0, 0)`;
    return;
  }

  if (scope) {
    timetable.style.transform = `translate3d(-${center}px, 0, 0)`;
    return;
  }

  timetable.style.transform = `translate3d(${timeMovement}px, 0, 0)`;
};

// Get position from transform style
export function getTransformStylePosition(el: Element) {
  let posX = Number(el?.style.transform.split('px')[0].split('(')[1]);
  return Math.abs(posX);
}

// Smooth motion on the timeline
export const cssAnimationHandler = (timetable: Element) => {
  timetable?.classList.add('animate');
  const timer = setTimeout(() => {
    timetable?.classList.remove('animate');
  }, 3000);
  clearTimeout(timer);
};

// Create statuses for lesson switcher
export const lessonStatus = (position: number, start: number, end: number) => {
  if (start <= position && position < end) {
    return { status: 'current' };
  }
  if (position > start) {
    return { status: 'finished' };
  }
  return { status: 'pending' };
};

// Assign endpoints for time limit
export const timelineLimits = (
  el: HTMLDivElement,
  timeline: StaticValues,
  end: number,
  center: number,
  scope: boolean
) => {
  let transformStyle = getTransformStylePosition(el);

  if (timeline.startLessons > transformStyle && !scope) {
    el.style.transform = `translate3d(-${timeline.startLessons}px, 0, 0)`;
  }

  if (end < transformStyle && !scope) {
    el.style.transform = `translate3d(-${end}px, 0, 0)`;
  }

  if (scope) {
    el.style.transform = `translate3d(-${center}px, 0, 0)`;
  }
};

// Right panel profiles status
// Today is pending
// Today in progress
// Today is finished
// Busy day
// Day off
export const profileStatus = (
  today: boolean,
  activeDay: boolean,
  ...arg: number[]
) => {
  const [start, end, time] = arg;

  if (start > time && today) {
    return { status: 'pending' };
  }
  if (end > time && today) {
    return { status: 'current' };
  }
  if (end <= time && today) {
    return { status: 'finished' };
  }
  if (activeDay) {
    return { status: 'active day' };
  }
  return { status: 'day off' };
};
