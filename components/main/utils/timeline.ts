// Types
import { Schedule } from '@Store/types';

const correctionTime = 0.4; // 100 - 40 = 60 (min / sec)

// Convert time
export const convertTime = (x: string | undefined) =>
  Number(x?.replace(':', '.'));

// Find total time from start to end in timeline
export const findTotalTime = (arr: Array<string>) => {
  if (!arr.length) {
    return 0;
  }
  const lengthArr = arr.length - 1;
  const x = convertTime(arr[0]);
  const y = convertTime(arr[lengthArr]);
  return Number((y - x - correctionTime).toFixed(2));
};
// Create array with start & end points
export const getStartAndEndTime = (data: Array<Schedule>) => {
  // Used Set constructor for remove duplicate from array
  const newTimelineSet: Set<string> = new Set([]);

  data.forEach(tb => {
    const findEndOfArr = tb.timetable.length - 1;

    let starttime = tb.timetable[0].time.start;
    let endtime = tb.timetable[findEndOfArr].time.end;

    newTimelineSet.add(starttime);
    newTimelineSet.add(endtime);
  });
  return newTimelineSet;
};

// Sorted time by increase
export const sortTimePoints = (arr: Array<string>) => {
  return arr.sort((a, b) => {
    const prev = convertTime(a);
    const next = convertTime(b);

    if (prev < next) {
      return -1;
    }
    return 0;
  });
};
// Assign timepath
const transformTimeArr = (start: number, arr: Array<string>) => {
  return arr.map(t => {
    const timepos = Math.abs(start - convertTime(t));
    if (timepos > 0.6) {
      const pos = Number(Math.abs(timepos - correctionTime).toFixed(2));
      return { time: t, pos };
    }
    const pos = Number(Math.abs(timepos).toFixed(2));
    return { time: t, pos };
  });
};

// Create new array with time & position on the timeline
const timelinePositions = (
  arr: Array<{ time: string; pos: number }>,
  totalTime: number
) => {
  return arr.map(t => {
    const pos = (t.pos * 100) / totalTime;
    return { ...t, pos: Number(pos.toFixed(2)) };
  });
};

export const getTimePointPos = (arr: Array<string>) => {
  const startTime = convertTime(arr[0]);

  const sortedTimePoints = sortTimePoints(arr);

  const totalTime = findTotalTime(sortedTimePoints);

  const transformToNum = transformTimeArr(startTime, arr);

  return timelinePositions(transformToNum, totalTime);
};
