import { MutableRefObject } from 'react';
// Types
import { Schedule, LessonsType, Lesson, InitLesson } from '@types';

export const dateFormat = (options: Intl.DateTimeFormatOptions, date: Date) => {
  return new Intl.DateTimeFormat('fi-FI', options).format(date);
};

export const transform = (data: Array<Schedule>, set: boolean = true) => {
  // const date = new Date();
  // const day = dateFormat({ weekday: 'long' }, date);
  const day = 'maanantai';

  // Used Set constructor for remove duplicate from array
  const newTimelineSet: Set<string> = new Set();
  const newTimefieldArr: Array<LessonsType> = new Array();

  data.forEach(tb => {
    const { timetable, ...data } = tb;

    const schoolday = timetable.find(l => l.day === day && l.lessons);
    if (!schoolday) return;

    const findEndOfArr = schoolday.lessons.length - 1;
    const start = schoolday.lessons[0].start.time;
    const end = schoolday.lessons[findEndOfArr].end.time;
    const startPos = transformTimeToNum2(start);
    const endPos = transformTimeToNum2(end);
    const timetableWithBreak = fillEmptySpace(schoolday.lessons);
    // console.log(timetableWithBreak);

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
  let startBreakPosition = transformTimeToNum2(arr[0].start.time);

  for (let i of arr) {
    const startLesson = transformTimeToNum2(i.start.time);
    const endLesson = transformTimeToNum2(i.end.time);
    const isEmptyTime = startLesson - startBreakPosition;

    if (isEmptyTime === 0) {
      // Push lessons before init first break
      const z = addTimePosition(i, startLesson, endLesson);
      fillArray.push(z);
    }

    if (isEmptyTime !== 0) {
      const startBreak = transformNumToTime2(startBreakPosition);
      const endBreak = transformNumToTime2(startLesson);

      fillArray.push({
        id: i.id + 2,
        lesson: 'taukko',
        start: { time: startBreak, position: startBreakPosition },
        end: { time: endBreak, position: startLesson },
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
// export const transformTimeToNum = (time: string | number): number => {
//   if ('number' === typeof time) return time;

//   const minInHour = 60;
//   const hours = Number(time.split(':')[0]);
//   const minutes = Number(time.split(':')[1]);

//   return hours * minInHour + minutes;
// };

export const transformNumToTime = (num: number) => {
  const minInHour = 60;
  const hours = Math.floor(num / minInHour);
  const minutes = num % minInHour > 9 ? num % minInHour : `0${num % minInHour}`;

  return `${hours}:${minutes}`;
};

export const staticValues = (timearr: Array<string>) => {
  const arr: Array<number> = [];

  for (const i of timearr) {
    arr.push(transformTimeToNum2(i));
  }
  //TODO Добавить сюда переменную длины элемента #timeline
  let startLessons = Math.min(...arr);
  let endLessons = Math.max(...arr);
  let totalTime = endLessons - startLessons;

  return { startLessons, endLessons, totalTime };
};

export const hours = [
  '0:00',
  '1:00',
  '2:00',
  '3:00',
  '4:00',
  '5:00',
  '6:00',
  '7:00',
  '8:00',
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

export const hourPositions = (hours: Array<string>) => {
  return hours.map(h => {
    const timepoint = transformTimeToNum2(h);
    if (timepoint === 0) {
      return { time: h, position: timepoint };
    }
    return { time: h, position: timepoint };
  });
};

//* New transform timetransform
export const transformTimeToNum2 = (time: string | number): number => {
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
  const timeStep = Math.round(hoursToMinutes + hourStep + minuteStep);

  // console.log('tranform', timeStep);

  return timeStep;
};

export const transformNumToTime2 = (num: number) => {
  const step = 340;
  const amountOfTime = 60;
  const hourStepLength = step + amountOfTime;
  const minuteStepLength = hourStepLength / amountOfTime;

  const findMinutes = (num % hourStepLength) / minuteStepLength;
  const hours = Math.floor(num / hourStepLength);
  const minutes = findMinutes > 9 ? findMinutes : `0${findMinutes}`;

  // console.log(minutes);

  return `${hours}:${minutes}`;
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
