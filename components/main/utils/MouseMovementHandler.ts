import { MouseEvent, Dispatch, SetStateAction } from 'react';
// import { MouseMoveEvents, foo } from '@Main/types';

// Helper function
function getTransformStylePosition(el: HTMLDivElement) {
  let posX = Number(el.style.transform.split('px')[0].split('(')[1]);
  return Math.abs(posX);
}

///// Handler mouse move
/////////
export const mouseMoveHandler = (
  ev: MouseEvent<HTMLDivElement> | globalThis.MouseEvent,
  startMove: boolean,
  parent: HTMLDivElement | null,
  child: HTMLDivElement | null,
  mouseDownCursorPos: number,
  currentPositionElement: number
) => {
  ev.preventDefault();
  ev.stopPropagation();

  if (ev.type !== 'mousemove') return;
  if (!startMove ?? !parent ?? !child) return;

  let cursorMovement = mouseDownCursorPos - ev.clientX;

  child.style.transform = `translate3d(-${
    cursorMovement + currentPositionElement
  }px, 0, 0)`;
};

///// MouseDown Handler
/////////

export const mouseDownHandler = (
  ev: MouseEvent<HTMLDivElement> | globalThis.MouseEvent,
  setStartMove: Dispatch<SetStateAction<boolean>>,
  setMaxPositionElement: Dispatch<SetStateAction<number>>,
  setCurrentPositionElement: Dispatch<SetStateAction<number>>,
  setMouseDownCursorPos: Dispatch<SetStateAction<number>>,
  parent: HTMLDivElement | null,
  child: HTMLDivElement | null
) => {
  ev.preventDefault();
  if (ev.type !== 'mousedown' ?? !child ?? !parent) {
    return;
  }

  const invisiblePartOfChildEl = child.offsetWidth - parent.offsetWidth;

  let transformStyle = getTransformStylePosition(child);

  child.classList.add('will-change');
  child.style.transition = '';

  setMaxPositionElement(invisiblePartOfChildEl);
  setStartMove(true);
  setCurrentPositionElement(transformStyle);
  setMouseDownCursorPos(ev.clientX);
};

///// Up handler
/////////
export const mouseUpHandler = (
  ev: MouseEvent<HTMLDivElement> | globalThis.MouseEvent,
  setStartMove: Dispatch<SetStateAction<boolean>>,
  child: HTMLDivElement | null,
  maxPositionElement: number
) => {
  ev.preventDefault();
  ev.stopPropagation();
  if (ev.type !== 'mouseup' ?? !child) {
    return;
  }

  let transformStyle = getTransformStylePosition(child);

  if (maxPositionElement < transformStyle) {
    child.style.transform = `translate3d(-${maxPositionElement}px, 0, 0)`;
    child.style.transition = 'all 0.3s ease-in-out';
  }

  if (transformStyle < 200) {
    child.style.transform = `translate3d(0, 0, 0)`;
    child.style.transition = 'all 0.3s ease-in-out';
  }

  child.classList.remove('will-change');

  setStartMove(false);

  document.onmousemove = null;
  document.onmousedown = null;
};
