// Types
import { Schedule, LessonsType } from '@types';

export const transform = (data: Array<Schedule>, set: boolean = true): any => {
  // Used Set constructor for remove duplicate from array
  const newTimelineSet: Set<string> = new Set();
  const newTimefieldArr: Array<LessonsType> = new Array();

  data.forEach(tb => {
    const { timetable, ...data } = tb;

    const findEndOfArr = timetable.length - 1;
    const start = timetable[0].time.start;
    const end = timetable[findEndOfArr].time.end;

    if (!set) {
      newTimefieldArr.push({
        ...data,
        start,
        end,
      });
    }
    if (set) {
      newTimelineSet.add(start);
      newTimelineSet.add(end);
    }
  });
  // Transfor to Array
  const newSetToArray = [...newTimelineSet];

  if (!set) return newTimefieldArr;
  return newSetToArray;
};

export const transformTimeToNum = (time: string | number) => {
  if ('number' === typeof time) return time;

  const minInHour = 60;
  const hours = Number(time.split(':')[0]);
  const minutes = Number(time.split(':')[1]);

  return hours * minInHour + minutes;
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
