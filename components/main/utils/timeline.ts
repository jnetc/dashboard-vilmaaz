// Types
import { Schedule } from '@Store/types';
import { TimeArr, TimeLine, Element } from '../types';
// import { getTransformStylePosition } from './MouseMovementHandler';

export const getElementMain = (x: Element) => x;
export const getElementTimetable = (x: Element) => x;

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
    const pos = Math.round((t.pos * trackWidth) / totalTime);
    return { ...t, pos };
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

  return timelinePositions(transformToNum);
};

export const transformCurrentTime = (time: string) => {
  const stepTime = countingTime(time);
  let visible: boolean = false;

  if (startTime <= stepTime && endTime > stepTime) {
    visible = true;
  }

  const timepos = Math.abs(startTime - stepTime);

  const position = Math.round((timepos * trackWidth) / totalTime);

  return { position, visible };
};

// 1) get transform style position
// 2) check / is main center
// 3) set transform style position
export const movementTimetable = (
  main: number,
  timetable: HTMLDivElement | null,
  timepos: number,
  autoMovement: boolean
) => {
  if (!timetable) return;
  if (!autoMovement) return;

  const timetableWidth = timetable.offsetWidth;
  const startPoint = Math.round(main / 2);
  const endPoint = timetableWidth - startPoint;
  const endPointTime = Math.abs(startPoint - endPoint);

  if (startPoint > timepos) {
    return;
  }

  if (timepos > endPoint) {
    timetable.style.transform = `translate3d(-${endPointTime}px, 0, 0)`;
    return;
  }

  const position = startPoint - timepos;
  timetable.style.transform = `translate3d(${position}px, 0, 0)`;
};
