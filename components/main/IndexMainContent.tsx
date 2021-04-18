import { useRef, useState, useEffect, MouseEvent, FC } from 'react';
import styled from 'styled-components';

import {
  mouseDownHandler,
  mouseMoveHandler,
  mouseUpHandler,
} from '@Main/utils/MouseMovementHandler';
import Timeline from '@Main/Timeline';

const IndexMainStyle = styled.section`
  position: relative;
  height: inherit;
  overflow-y: auto;
  overflow-x: hidden;
  div#timetable {
    /* width: 100%; */
    min-width: 2000px;
    height: 100%;
    display: grid;
    position: relative;
    background-color: ${({ theme }) => theme.bg_middle};
    grid-template-rows: 60px 1fr;
    /* grid-template-columns: 3fr; */
    div#timefield {
      grid-row: 2;
      display: grid;
      place-items: center;
    }
    & .will-change {
      will-change: transform;
    }
    /* p {
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
    } */
  }
`;

export const IndexMainContent: FC = () => {
  const [currentPositionElement, setCurrentPositionElement] = useState<number>(
    0
  );
  let [mouseDownCursorPos, setMouseDownCursorPos] = useState<number>(0);
  const [maxPositionElement, setMaxPositionElement] = useState<number>(0);
  const [startMove, setStartMove] = useState<boolean>(false);

  const parentEl = useRef<HTMLDivElement | null>(null);
  const childEl = useRef<HTMLDivElement | null>(null);

  ///// Mouse Handlers
  /////////
  const mouseDown = (
    ev: MouseEvent<HTMLDivElement> | globalThis.MouseEvent
  ) => {
    mouseDownHandler(
      ev,
      setStartMove,
      setMaxPositionElement,
      setCurrentPositionElement,
      setMouseDownCursorPos,
      parentEl.current,
      childEl.current
    );
  };

  const mouseMove = (
    ev: MouseEvent<HTMLDivElement> | globalThis.MouseEvent
  ) => {
    mouseMoveHandler(
      ev,
      startMove,
      parentEl.current,
      childEl.current,
      mouseDownCursorPos,
      currentPositionElement
    );
  };
  const mouseUp = (ev: MouseEvent<HTMLDivElement> | globalThis.MouseEvent) => {
    mouseUpHandler(ev, setStartMove, childEl.current, maxPositionElement);
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
        id="timetable"
        ref={childEl}
        style={{ transform: `translate3d(0, 0, 0)` }}
        onMouseDown={mouseDown}>
        <Timeline />
        <div id="timefield">Timetable</div>
        {/* <p>1 block</p>
        <p>2 block</p>
        <p>3 block</p> */}
      </div>
    </IndexMainStyle>
  );
};
