import { useRef, useState, useEffect, FC } from 'react';
import styled from 'styled-components';
// Components
import {
  mouseDownHandler,
  mouseMoveHandler,
  mouseUpHandler,
} from '@Main/utils/MouseMovementHandler';
import Timeline from '@Main/Timeline';
import Timefield from '@Main/Timefield';

import { useStore } from '@Store/Store';
// Types
import { Event } from '@Main/types';

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
    &.will-change {
      will-change: transform;
    }
    &.animate {
      transition: transform 0.3s ease-in-out;
    }
  }
`;

export const IndexMainContent: FC = () => {
  const { setAutoMovement, setTimetableEl } = useStore();
  const [currentPosEl, setCurrentPosEl] = useState<number>(0);
  let [mouseDownCursorPos, setMouseDownCursorPos] = useState<number>(0);
  const [maxPositionElement, setMaxPositionElement] = useState<number>(0);
  const [startMove, setStartMove] = useState<boolean>(false);
  const [widthMainEl, setWidthMainEl] = useState(0);
  // const [getTimetableEl, setGetTimetableEl] = useState<HTMLDivElement | null>(
  //   null
  // );

  const mainEl = useRef<HTMLDivElement>(null);
  const timetableEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainEl.current && timetableEl.current) {
      setWidthMainEl(mainEl.current.offsetWidth);
      setTimetableEl(timetableEl.current);
      return () => {
        setWidthMainEl(NaN);
        setTimetableEl(null);
      };
    }
  }, [mainEl, timetableEl]);

  const mouseDown = (ev: Event) => {
    setAutoMovement(false);

    mouseDownHandler(
      ev,
      setStartMove,
      setMaxPositionElement,
      setCurrentPosEl,
      setMouseDownCursorPos,
      mainEl.current,
      timetableEl.current
    );
  };

  const mouseMove = (ev: Event) => {
    mouseMoveHandler(
      ev,
      startMove,
      timetableEl.current,
      mouseDownCursorPos,
      currentPosEl
    );
  };

  const mouseUp = (ev: Event) => {
    transition();
    mouseUpHandler(ev, setStartMove, timetableEl.current, maxPositionElement);
    const timer = setTimeout(() => {
      timetableEl.current?.classList.remove('animate');
    }, 3000);
    clearTimeout(timer);
  };

  const transition = () => {
    timetableEl.current?.classList.add('animate');
  };

  ///// Init mouse handlers
  /////////
  useEffect(() => {
    document.onmousemove = mouseMove;
    document.onmouseup = mouseUp;
    document.ontransitionend = transition;
    return () => {
      document.onmousemove = null;
      document.onmouseup = null;
      document.ontransitionend = null;
    };
  }, [startMove]);

  return (
    <IndexMainStyle id="main" ref={mainEl}>
      <div
        id="timetable"
        ref={timetableEl}
        style={{ transform: `translate3d(0, 0, 0)` }}
        onMouseDown={mouseDown}>
        <Timeline width={widthMainEl} />
        <Timefield />
      </div>
    </IndexMainStyle>
  );
};
