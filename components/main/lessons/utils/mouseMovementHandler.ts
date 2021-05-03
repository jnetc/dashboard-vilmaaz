import { Element, Event, StateNumber } from '@Main/lessons/types';

// Helper function
export function getTransformStylePosition(el: Element) {
  let posX = Number(el?.style.transform.split('px')[0].split('(')[1]);
  return Math.abs(posX);
}

export const mouseDownHandler = (
  ev: Event,
  setMaxPositionElement: StateNumber,
  setCurrentPosEl: StateNumber,
  setMouseDownCursorPos: StateNumber,
  main: Element,
  timetable: Element
) => {
  ev.preventDefault();
  if (ev.type !== 'mousedown' ?? !timetable ?? !main) {
    return;
  }

  timetable.classList.remove('animate');

  const invisiblePartOftimetableEl = timetable.offsetWidth - main.offsetWidth;

  let transformStyle = getTransformStylePosition(timetable);

  timetable.classList.add('will-change');

  setMaxPositionElement(invisiblePartOftimetableEl);
  setCurrentPosEl(transformStyle);
  setMouseDownCursorPos(ev.clientX);
};

export const mouseMoveHandler = (
  ev: Event,
  timetable: Element,
  mouseDownCursorPos: number,
  currentPosEl: number
) => {
  ev.preventDefault();
  ev.stopPropagation();

  if (ev.type !== 'mousemove' ?? !timetable) return;

  timetable.classList.remove('animate');

  let cursorMovement = mouseDownCursorPos - ev.clientX;

  timetable.style.transform = `translate3d(-${
    cursorMovement + currentPosEl
  }px, 0, 0)`;
};

export const mouseUpHandler = (
  ev: Event,
  timetable: Element,
  maxPositionElement: number
) => {
  ev.preventDefault();
  ev.stopPropagation();

  if (ev.type !== 'mouseup' ?? !timetable) return;

  let transformStyle = getTransformStylePosition(timetable);

  if (maxPositionElement < transformStyle) {
    timetable.style.transform = `translate3d(-${maxPositionElement}px, 0, 0)`;
  }

  if (transformStyle < 200) {
    timetable.style.transform = `translate3d(0, 0, 0)`;
  }

  timetable.classList.remove('will-change');
};

export const mouseLeaveHandler = (
  ev: Event,
  timetable: Element,
  maxPositionElement: number
) => {
  if (ev.type !== 'mouseleave' ?? !timetable) {
    return;
  }

  let transformStyle = getTransformStylePosition(timetable);
  if (maxPositionElement < transformStyle) {
    timetable.style.transform = `translate3d(-${maxPositionElement}px, 0, 0)`;
  }
};

export const transition = (timetable: Element) => {
  timetable?.classList.add('animate');
  const timer = setTimeout(() => {
    timetable?.classList.remove('animate');
  }, 3000);
  clearTimeout(timer);
};
