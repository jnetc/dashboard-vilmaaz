import { transformTimeToNum2 } from './helperFunc';
import { Lesson } from '@types';

export const learningProgress = (
  start: number,
  lessons: Array<Lesson>,
  length: number,
  position: number,
  timeNumber: number
) => {
  const startWidth = 70; // default lesson width at start

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
    const startLesson = transformTimeToNum2(i.start.time);
    const endLesson = transformTimeToNum2(i.end.time);

    const currentLessonTime = endLesson - timeNumber;
    if (startLesson <= timeNumber && endLesson > timeNumber) {
      timeAndName.push({ lesson: i.lesson, timer: currentLessonTime });
    }
  }

  return timeAndName.length > 0
    ? timeAndName[0]
    : { lesson: undefined, timer: undefined };
};

export const learningProgress2 = (
  start: number,
  lessons: Array<Lesson>,
  length: number,
  position: number,
  timeNumber: number
) => {
  const startWidth = 70; // default lesson width at start

  const startPosition = start + startWidth;
  const endPosition = start + length;

  const { lesson, timer } = getTimerAndName2(lessons, timeNumber);

  if (start > position) return { status: 'wait', pos: startWidth };

  if (startPosition > position)
    return { timer: timer, lesson: undefined, status: 'time', pos: startWidth };

  if (endPosition <= position) return { status: 'done', pos: endPosition };

  const initGrowing = position - startPosition + startWidth;
  return { timer: timer, lesson: lesson, status: 'time', pos: initGrowing };
};

const getTimerAndName2 = (arr: Array<Lesson>, timeNumber: number) => {
  const timeAndName = [];

  for (const i of arr) {
    const startLesson = transformTimeToNum2(i.start.time);
    const endLesson = transformTimeToNum2(i.end.time);

    const currentLessonTime = endLesson - timeNumber;
    if (startLesson <= timeNumber && endLesson > timeNumber) {
      timeAndName.push({ lesson: i.lesson, timer: currentLessonTime });
    }
  }

  return timeAndName.length > 0
    ? timeAndName[0]
    : { lesson: undefined, timer: undefined };
};
