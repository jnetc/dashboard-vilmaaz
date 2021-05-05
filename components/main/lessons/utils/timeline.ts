// Types
import { StaticValues, Element, LessonsType, TimeLine } from '@types';
import { transformTimeToNum } from '@Store/utils/helperFunc';

let startTime: number;
let totalTime: number;
let trackWidth: number;

// Assign timepath
export const transformTimeArr = (time: Array<string>) => {
  return time.map(t => {
    const timepoint = Math.abs(startTime - transformTimeToNum(t));
    return { time: t, position: timepoint };
  });
};

// Create new array with time & position on the timeline
export const timelinePositions = (time: TimeLine) => {
  return time.map(t => {
    const position = Math.round((t.position * trackWidth) / totalTime);
    return { ...t, position };
  });
};

export const getTimePointPos = (
  arr: Array<string>,
  track: number,
  timeline: StaticValues
) => {
  // Assign global values
  startTime = timeline.startLessons;
  totalTime = timeline.totalTime;
  trackWidth = track;

  const transformToNum = transformTimeArr(arr);
  return timelinePositions(transformToNum);
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

export const getLessonStartEndPoint = (arr: Array<LessonsType>) => {
  const numArr = [];

  for (const i of arr) {
    const { end, start, ...data } = i;

    const startNum = Math.abs(startTime - transformTimeToNum(start));
    const endNum = Math.abs(startTime - transformTimeToNum(end));
    const startPos = Math.round((startNum * trackWidth) / totalTime);
    const endPos = Math.round((endNum * trackWidth) / totalTime);

    numArr.push({
      ...data,
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
