import { MutableRefObject } from 'react';
// Types
import { Schedule, LessonsType, Lesson } from '@types';

export const dateFormat = (options: Intl.DateTimeFormatOptions, date: Date) => {
  return new Intl.DateTimeFormat('fi-FI', options).format(date);
};

export const transform = (data: Array<Schedule>, set: boolean = true): any => {
  const date = new Date();
  // const day = dateFormat({ weekday: 'long' }, date);
  const day = 'perjantai';

  // Used Set constructor for remove duplicate from array
  const newTimelineSet: Set<string> = new Set();
  const newTimefieldArr: Array<LessonsType> = new Array();

  data.forEach(tb => {
    const { timetable, ...data } = tb;

    const schoolday = timetable.find(l => l.day === day && l.lessons);
    if (!schoolday) return;

    const findEndOfArr = schoolday.lessons.length - 1;
    const start = schoolday.lessons[0].time.start;
    const end = schoolday.lessons[findEndOfArr].time.end;
    const timetableWithBreak = fillEmptySpace(schoolday.lessons);

    if (!set) {
      newTimefieldArr.push({
        ...data,
        timetable: timetableWithBreak,
        start,
        end,
      });
    }
    if (set) {
      newTimelineSet.add(start);
      newTimelineSet.add(end);
    }
  });

  const newSetToArray = [...newTimelineSet];

  if (!set) return newTimefieldArr;
  return newSetToArray;
};

// define if of lesson have empty space in time or not
const fillEmptySpace = (arr: Array<Lesson>) => {
  const fillArray: Array<Lesson> = [];
  let timeout = transformTimeToNum(arr[0].time.start);

  for (const i of arr) {
    const startLesson = transformTimeToNum(i.time.start);
    const endLesson = transformTimeToNum(i.time.end);
    const isEmptyTime = startLesson - timeout;

    if (isEmptyTime === 0) {
      fillArray.push(i);
    }

    if (isEmptyTime !== 0) {
      const startTimeout = transformNumToTime(timeout);
      const endTimeout = transformNumToTime(startLesson);

      fillArray.push({
        id: i.id + 2,
        lesson: 'taukko',
        time: { start: startTimeout, end: endTimeout },
      });
      fillArray.push(i);
    }
    timeout = endLesson;
  }
  return fillArray;
};

export const transformTimeToNum = (time: string | number): number => {
  if ('number' === typeof time) return time;

  const minInHour = 60;
  const hours = Number(time.split(':')[0]);
  const minutes = Number(time.split(':')[1]);

  return hours * minInHour + minutes;
};

export const transformNumToTime = (num: number) => {
  const minInHour = 60;
  const hours = Math.floor(num / minInHour);
  const minutes = num % minInHour > 9 ? num % minInHour : `0${num % minInHour}`;

  return `${hours}:${minutes}`;
};

export const staticValues = (timearr: Array<string>) => {
  const arr: Array<number> = [];

  for (const i of timearr) {
    arr.push(transformTimeToNum(i));
  }

  let startLessons = Math.min(...arr);
  let endLessons = Math.max(...arr);
  let totalTime = endLessons - startLessons;

  return { startLessons, endLessons, totalTime };
};

export const transition = (
  trigger: boolean,
  element: MutableRefObject<HTMLElement | null>,
  firstClass: string,
  secondClass: string
) => {
  if (trigger) {
    setTimeout(() => {
      element.current?.classList.add(firstClass);
    }, 0);
    setTimeout(() => {
      element.current?.classList.add(secondClass);
      element.current?.classList.remove(firstClass);
    }, 100);
  }
  if (!trigger) {
    setTimeout(() => {
      element.current?.classList.add(firstClass);
      element.current?.classList.remove(secondClass);
    }, 0);
    setTimeout(() => {
      element.current?.classList.remove(firstClass);
    }, 100);
  }
};
