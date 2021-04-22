import { useRef, useState, useEffect, MouseEvent, FC } from 'react';
import styled from 'styled-components';

import {
  mouseDownHandler,
  mouseMoveHandler,
  mouseUpHandler,
} from '@Main/utils/MouseMovementHandler';
import Timeline from '@Main/Timeline';

const IndexMainStyle = styled.section`
  grid-column: 1 / 2;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  div#timetable {
    min-width: ${({ theme }) => theme.timeline}px;
    height: 100%;
    display: grid;
    /* padding-right: 90px; */
    position: relative;
    /* background-color: ${({ theme }) => theme.bg_middle}; */
    grid-template-rows: 60px 1fr;
    div#timefield {
      grid-row: 2;
      display: grid;
      place-items: center;
    }
    & .will-change {
      will-change: transform;
    }
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
      </div>
    </IndexMainStyle>
  );
};
