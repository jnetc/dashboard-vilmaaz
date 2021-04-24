import { Element, Event, StateBoolean, StateNumber } from '@Main/types';

// Helper function
export function getTransformStylePosition(el: HTMLDivElement | null) {
  let posX = Number(el?.style.transform.split('px')[0].split('(')[1]);
  return Math.abs(posX);
}

///// Handler mouse move
/////////
export const mouseMoveHandler = (
  ev: Event,
  startMove: boolean,
  timetable: Element,
  mouseDownCursorPos: number,
  currentPosEl: number
) => {
  ev.preventDefault();
  ev.stopPropagation();

  if (ev.type !== 'mousemove') return;
  if (!startMove ?? !timetable) return;
  timetable.classList.remove('animate');

  let cursorMovement = mouseDownCursorPos - ev.clientX;

  timetable.style.transform = `translate3d(-${
    cursorMovement + currentPosEl
  }px, 0, 0)`;
};

///// MouseDown Handler
/////////

export const mouseDownHandler = (
  ev: Event,
  setStartMove: StateBoolean,
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
  setStartMove(true);
  setCurrentPosEl(transformStyle);
  setMouseDownCursorPos(ev.clientX);
};

///// Up handler
/////////
export const mouseUpHandler = (
  ev: Event,
  setStartMove: StateBoolean,
  timetable: Element,
  maxPositionElement: number
) => {
  ev.preventDefault();
  ev.stopPropagation();

  if (ev.type !== 'mouseup' ?? !timetable) {
    return;
  }

  let transformStyle = getTransformStylePosition(timetable);

  if (maxPositionElement < transformStyle) {
    timetable.style.transform = `translate3d(-${maxPositionElement}px, 0, 0)`;
  }

  if (transformStyle < 200) {
    timetable.style.transform = `translate3d(0, 0, 0)`;
  }

  timetable.classList.remove('will-change');

  setStartMove(false);

  document.onmousemove = null;
  document.onmousedown = null;
  document.ontransitionend = null;
};
