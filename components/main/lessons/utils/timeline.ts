// Types
import { Schedule } from '@Store/types';
import {
  ArrayString,
  TimeLine,
  Element,
  LessonsArray,
  DispatchTime,
} from '../types';

let startTime: number;
let endTime: number;
let totalTime: number;
let trackWidth: number;

// Convert time
export const transformTime = (time: string | undefined) => {
  const minInHour = 60;
  const hours = Number(time?.split(':')[0]);
  const minutes = Number(time?.split(':')[1]);

  return hours * minInHour + minutes;
};

// Sorted time by increase
export const sortTimePoints = (arr: ArrayString) => {
  return arr.sort((a, b) => {
    const prev = transformTime(a);
    const next = transformTime(b);

    if (prev < next) {
      return -1;
    }

    return 1;
  });
};

// Create array with start & end points
export const transformDataForTimeline = (
  data: Array<Schedule>,
  set: boolean = true
): any => {
  // Used Set constructor for remove duplicate from array
  const newTimelineSet: Set<string> = new Set();
  const newTimefieldArr: LessonsArray = new Array();

  data.forEach(tb => {
    const { id, name, primaryColor, secondaryColor, timetable } = tb;

    const findEndOfArr = timetable.length - 1;
    const start = timetable[0].time.start;
    const end = timetable[findEndOfArr].time.end;

    if (!set) {
      newTimefieldArr.push({
        id,
        name,
        primaryColor,
        secondaryColor,
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

// Assign timepath
export const transformTimeArr = (time: ArrayString) => {
  return time.map(t => {
    const timepoint = Math.abs(startTime - transformTime(t));
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

//

export const getTimeValues = (timearr: any) => {
  const arr: Array<number> = [];

  for (const i of timearr) {
    arr.push(transformTime(i));
  }
  // Assign values for timepoints
  startTime = Math.min(...arr);
  endTime = Math.max(...arr);
  totalTime = endTime - startTime;
};

export const getTimePointPos = (arr: ArrayString, track: number) => {
  getTimeValues(arr);
  // Assign track width
  trackWidth = track;

  const transformToNum = transformTimeArr(arr);
  return timelinePositions(transformToNum);
};

export const transformTimeToStep = (time: string) => {
  const stepTime = transformTime(time);
  let visible: boolean = false;

  if (startTime <= stepTime && endTime > stepTime) {
    visible = true;
  }

  const timepos = Math.abs(startTime - stepTime);
  const position = Math.round((timepos * trackWidth) / totalTime);

  return { position, visible };
};

export const movementTimeAndTimetable = (
  main: number,
  timetable: Element,
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

export const getLessonData = (arr: LessonsArray) => {
  const numArr = [];

  for (const i of arr) {
    const { id, name, primaryColor, secondaryColor, end, start } = i;

    const startNum = Math.abs(startTime - transformTime(start));
    const endNum = Math.abs(startTime - transformTime(end));
    const startPos = Math.round((startNum * trackWidth) / totalTime);
    const endPos = Math.round((endNum * trackWidth) / totalTime);

    numArr.push({
      id,
      name,
      primaryColor,
      secondaryColor,
      start: startPos,
      end: endPos,
    });
  }

  return numArr;
};

export const lessonProgress = (start: number, length: number, time: number) => {
  const defaultPos = 68; // width lesson at start

  const startPosition = start + defaultPos;
  const endPosition = start + length;

  if (start > time) return { status: 'wait', pos: defaultPos };
  if (startPosition > time) return { status: 'time', pos: defaultPos };
  if (endPosition < time) return { status: 'done', pos: endPosition };

  const initGrowing = time - startPosition + defaultPos;

  return { status: 'time', pos: initGrowing };
};

export const tick = (minutes: DispatchTime, hours: DispatchTime) => {
  return setInterval(() => {
    minutes(new Date().getMinutes());
    hours(new Date().getHours());
  }, 10000);
};
