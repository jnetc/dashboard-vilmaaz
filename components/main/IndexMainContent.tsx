import React, { useRef, useState, useEffect, MouseEvent } from 'react';
import styled from 'styled-components';

const IndexMainStyle = styled.section`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  div {
    min-width: 2000px;
    height: 100%;
    display: grid;
    position: relative;
    background-color: ${({ theme }) => theme.bg_middle};
    grid-template-columns: repeat(3, 1fr);
    & .will-change {
      will-change: transform;
    }
    p {
      &:nth-of-type(1) {
        grid-column: 1 / 2;
        border-left: 1px solid grey;
      }
      &:nth-of-type(2) {
        grid-column: 2 / 3;
        border-left: 1px solid grey;
      }
      &:nth-of-type(3) {
        grid-column: 3 / 4;
        border-left: 1px solid grey;
      }
    }
  }
`;

// Helper function
function getTransformStylePosition(el: HTMLDivElement) {
  let posX = Number(el.style.transform.split('px')[0].split('(')[1]);
  return Math.abs(posX);
}

export const IndexMainContent = () => {
  const [currentPositionElement, setCurrentPositionElement] = useState<number>(
    0
  );
  let [mouseDownCursorPos, setMouseDownCursorPos] = useState<number>(0);
  const [maxPositionElement, setMaxPositionElement] = useState<number>(0);
  const [startMove, setStartMove] = useState<boolean>(false);

  const parentEl = useRef<HTMLDivElement | null>(null);
  const childEl = useRef<HTMLDivElement | null>(null);

  // const animation = () => {
  //   if (!childEl.current) return;
  //   console.log('animation');
  //   return (childEl.current.style.transition = `transform 0.3s ease-in-out`);
  // };

  ///// Handler mouse move
  /////////
  const mouseMove = (
    ev: MouseEvent<HTMLDivElement> | globalThis.MouseEvent
  ) => {
    ev.preventDefault();
    ev.stopPropagation();

    if (ev.type !== 'mousemove') return;
    if (!startMove ?? !parentEl.current ?? !childEl.current) return;

    // let transformStyle = getTransformStylePosition(childEl.current);
    let cursorMovement = mouseDownCursorPos - ev.clientX;

    // Out of movement zone
    // if (
    //   ev.clientX - parentEl.current.offsetLeft > parentEl.current.offsetWidth ||
    //   ev.clientX < parentEl.current.offsetLeft
    // ) {
    //   return;
    // }

    // Stop moving far away
    // if (maxPositionElement < transformStyle) {
    //   setStartMove(false);
    // }

    childEl.current.style.transform = `translate3d(-${
      cursorMovement + currentPositionElement
    }px, 0, 0)`;
  };

  ///// MouseDown Handler
  /////////
  const mouseDown = (
    ev: MouseEvent<HTMLDivElement> | globalThis.MouseEvent
  ) => {
    ev.preventDefault();
    if (ev.type !== 'mousedown' ?? !childEl.current ?? !parentEl.current) {
      return;
    }

    const invisiblePartOfChildEl =
      childEl.current.offsetWidth - parentEl.current.offsetWidth;

    let transformStyle = getTransformStylePosition(childEl.current);

    childEl.current.classList.add('will-change');
    childEl.current.style.transition = '';

    setMaxPositionElement(invisiblePartOfChildEl);
    setStartMove(true);
    setCurrentPositionElement(transformStyle);
    setMouseDownCursorPos(ev.clientX);
  };

  ///// Up handler
  /////////
  const mouseUp = (ev: MouseEvent<HTMLDivElement> | globalThis.MouseEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
    if (ev.type !== 'mouseup' ?? !childEl.current) {
      return;
    }

    let transformStyle = getTransformStylePosition(childEl.current);

    if (maxPositionElement < transformStyle) {
      childEl.current.style.transform = `translate3d(-${maxPositionElement}px, 0, 0)`;
    }

    if (transformStyle < 0) {
      childEl.current.style.transform = `translate3d(0, 0, 0)`;
    }

    childEl.current.classList.remove('will-change');

    setStartMove(false);

    document.onmousemove = null;
    document.onmousedown = null;
  };

  ///// Init mouse handlers
  /////////
  useEffect(() => {
    document.onmousemove = mouseMove;
    document.onmouseup = mouseUp;
    return () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }, [startMove]);

  return (
    <IndexMainStyle ref={parentEl}>
      <div
        ref={childEl}
        style={{ transform: `translate3d(0, 0, 0)` }}
        onMouseDown={mouseDown}>
        <p>1 block</p>
        <p>2 block</p>
        <p>3 block</p>
      </div>
    </IndexMainStyle>
  );
};
