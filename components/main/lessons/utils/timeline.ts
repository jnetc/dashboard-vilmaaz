// Types
import { StaticValues, Element, LessonsType, TimeLine, Lesson } from '@types';
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

//* Create new array with time & position on the timeline
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
  //! Assign global values
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
  autoMovement: boolean,
  mainPaddingLeft: number
) => {
  if (!timetable) return;
  if (!autoMovement) return;

  const timetableWidth = timetable.offsetWidth + mainPaddingLeft;
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

export const learningProgress = (
  start: number,
  lessons: Array<Lesson>,
  length: number,
  position: number,
  timeNumber: number
) => {
  const startWidth = 68; //! element width at start

  const startPosition = start + startWidth;
  const endPosition = start + length;

  const { lesson, timer } = getTimerAndName(lessons, timeNumber);

  if (start > position) return { status: 'wait', pos: startWidth };
  if (startPosition > position)
    return { timer: timer, lesson: undefined, status: 'time', pos: startWidth };
  if (endPosition <= position) return { status: 'done', pos: endPosition };

  const initGrowing = position - startPosition + startWidth;

  return { timer: timer, lesson: lesson, status: 'time', pos: initGrowing };
};

const getTimerAndName = (arr: Array<Lesson>, timeNumber: number) => {
  const timeAndName = [];

  for (const i of arr) {
    const startLesson = transformTimeToNum(i.time.start);
    const endLesson = transformTimeToNum(i.time.end);

    const currentLessonTime = endLesson - timeNumber;
    if (startLesson <= timeNumber && endLesson > timeNumber) {
      timeAndName.push({ lesson: i.lesson, timer: currentLessonTime });
    }
  }

  return timeAndName.length > 0
    ? timeAndName[0]
    : { lesson: undefined, timer: undefined };
};

//* Get position from transform style
export function getTransformStylePosition(el: Element) {
  let posX = Number(el?.style.transform.split('px')[0].split('(')[1]);
  return Math.abs(posX);
}

export const transition = (timetable: Element) => {
  timetable?.classList.add('animate');
  const timer = setTimeout(() => {
    timetable?.classList.remove('animate');
  }, 3000);
  clearTimeout(timer);
};
