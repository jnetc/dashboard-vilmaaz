import { StaticValues, Element } from '@types';

export const movementTimeAndTimetable = (
  main: number,
  timetable: Element,
  currentTime: number,
  autoMovement: boolean,
  timeline: StaticValues
) => {
  if (!timetable) return;
  if (!autoMovement) return;

  const { startLessons, endLessons } = timeline;

  const startAutoMovement = startLessons + Math.round(main / 2);
  const stopAutoMovement = endLessons - Math.round(main / 2) + 90;
  const outOfTrackLessons = endLessons - main + 90;
  const timeMovement = Math.round(main / 2) - currentTime;

  if (startAutoMovement > currentTime || startLessons > currentTime) {
    timetable.style.transform = `translate3d(-${startLessons}px, 0, 0)`;
    return;
  }

  if (currentTime > endLessons || stopAutoMovement <= currentTime) {
    // console.log('out of tracking');
    timetable.style.transform = `translate3d(-${outOfTrackLessons}px, 0, 0)`;
    return;
  }

  // console.log('move', timeMovement);
  timetable.style.transform = `translate3d(${timeMovement}px, 0, 0)`;
};

// Get position from transform style
export function getTransformStylePosition(el: Element) {
  let posX = Number(el?.style.transform.split('px')[0].split('(')[1]);
  return Math.abs(posX);
}

export const cssAnimationHandler = (timetable: Element) => {
  timetable?.classList.add('animate');
  const timer = setTimeout(() => {
    timetable?.classList.remove('animate');
  }, 3000);
  clearTimeout(timer);
};
