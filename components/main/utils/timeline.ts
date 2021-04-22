// Types
import { Schedule } from '@Store/types';
import { TimeArr, TimeLine } from '../types';

let startTime: number;
let endTime: number;
let totalTime: number;
let trackWidth: number;

// Convert time
const countingTime = (time: string | undefined) => {
  const minInHour = 60;
  const hours = Number(time?.split(':')[0]);
  const minutes = Number(time?.split(':')[1]);

  return hours * minInHour + minutes;
};

// Sorted time by increase
export const sortTimePoints = (arr: TimeArr) => {
  return arr.sort((a, b) => {
    const prev = countingTime(a);
    const next = countingTime(b);

    if (prev < next) {
      return -1;
    }

    return 0;
  });
};

// Create array with start & end points
export const getStartAndEndTime = (data: Array<Schedule>) => {
  // Used Set constructor for remove duplicate from array
  const newTimelineSet: Set<string> = new Set([]);

  data.forEach(tb => {
    const findEndOfArr = tb.timetable.length - 1;

    const start = tb.timetable[0].time.start;
    const end = tb.timetable[findEndOfArr].time.end;

    newTimelineSet.add(start);
    newTimelineSet.add(end);
  });
  return newTimelineSet;
};

// Assign timepath
export const transformTimeArr = (time: TimeArr) => {
  return time.map(t => {
    const timepoint = Math.abs(startTime - countingTime(t));

    return { time: t, pos: timepoint };
  });
};

// Create new array with time & position on the timeline
export const timelinePositions = (time: TimeLine) => {
  return time.map(t => {
    const pos = (t.pos * trackWidth) / totalTime;
    return { ...t, pos: Number(pos.toFixed(2)) };
  });
};

export const getTimePointPos = (arr: TimeArr, track: number) => {
  const sortedTimePoints = sortTimePoints(arr);
  const length = sortedTimePoints.length - 1;

  startTime = countingTime(sortedTimePoints[0]);
  endTime = countingTime(sortedTimePoints[length]);
  totalTime = endTime - startTime;
  trackWidth = track;

  const transformToNum = transformTimeArr(arr);
  console.log(startTime, endTime, totalTime);

  console.log('fun', countingTime(sortedTimePoints[0]));

  return timelinePositions(transformToNum);
};

export const transformCurrentTime = (time: string) => {
  const stepTime = countingTime(time);
  let visible: boolean = false;

  if (startTime < stepTime && endTime > stepTime) {
    visible = true;
  }

  const timepos = Math.abs(startTime - stepTime);

  const position = (timepos * trackWidth) / totalTime;

  return { position, visible };
};
