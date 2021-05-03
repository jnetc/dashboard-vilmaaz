import { useRef, useState, useEffect, FC, createRef } from 'react';
import styled from 'styled-components';
// Components
import { MainContent } from '@Main/Main';
import {
  mouseDownHandler,
  mouseMoveHandler,
  mouseUpHandler,
  mouseLeaveHandler,
  transition,
} from '@Main/lessons/utils/mouseMovementHandler';
import Timeline from '@Main/lessons/Timeline';
import Timefield from '@Main/lessons/Timefield';

import { useStore } from '@Store/Store';
// Types
import { Event, Element, Div } from '@Main/lessons/types';

const TimetableStyle = styled.div`
  min-width: ${({ theme }) => theme.timeline}px;
  height: 100%;
  display: grid;
  position: relative;
  grid-template-rows: 60px 1fr;
  &.will-change {
    will-change: transform;
  }
  &.animate {
    transition: transform 0.3s ease-in-out;
  }
`;

export const Timetable: FC = () => {
  const { setAutoMovement, setTimetableEl } = useStore();

  const [currentPosEl, setCurrentPosEl] = useState<number>(0);
  let [mouseDownCursorPos, setMouseDownCursorPos] = useState<number>(0);
  const [maxPositionElement, setMaxPositionElement] = useState<number>(0);
  const [startMove, setStartMove] = useState<boolean>(false);
  const [widthMainEl, setWidthMainEl] = useState(0);
  const [timepoinsHeight, setTimepointsHeight] = useState(0);

  const mainEl = createRef<Div>();
  const timetableEl = useRef<Element>(null);

  useEffect(() => {
    if (mainEl.current && timetableEl.current) {
      setWidthMainEl(mainEl.current.offsetWidth);
      setTimetableEl(timetableEl.current);
      setTimepointsHeight(timetableEl.current.offsetHeight);
      return () => {
        setWidthMainEl(NaN);
        setTimepointsHeight(NaN);
        setTimetableEl(null);
      };
    }
  }, [mainEl, timetableEl]);

  // Mount component with current position time
  useEffect(() => {
    timetableEl.current?.classList.add('animate');
    setAutoMovement(true);
    return () => {
      setAutoMovement(false);
    };
  }, []);

  const mouseDown = (ev: Event) => {
    setAutoMovement(false);
    setStartMove(true);

    mouseDownHandler(
      ev,
      setMaxPositionElement,
      setCurrentPosEl,
      setMouseDownCursorPos,
      mainEl.current,
      timetableEl.current
    );
  };

  const mouseMove = (ev: Event) => {
    if (startMove) {
      mouseMoveHandler(
        ev,
        timetableEl.current,
        mouseDownCursorPos,
        currentPosEl
      );
    }
  };

  const mouseUp = (ev: Event) => {
    transition(timetableEl.current);

    if (startMove) {
      mouseUpHandler(ev, timetableEl.current, maxPositionElement);
      setStartMove(false);
    }
  };

  const mouseLeave = (ev: Event) => {
    transition(timetableEl.current);

    if (startMove) {
      mouseLeaveHandler(ev, timetableEl.current, maxPositionElement);
      setStartMove(false);
    }
  };

  return (
    <MainContent ref={mainEl}>
      <TimetableStyle
        id="timetable"
        ref={timetableEl}
        style={{ transform: `translate3d(0, 0, 0)` }}
        onMouseDown={mouseDown}
        onMouseMove={startMove ? ev => mouseMove(ev) : undefined}
        onMouseUp={startMove ? ev => mouseUp(ev) : undefined}
        onMouseLeave={startMove ? ev => mouseLeave(ev) : undefined}
        onTransitionEnd={() => transition}>
        <Timeline width={widthMainEl} lines={timepoinsHeight} />
        <Timefield />
      </TimetableStyle>
    </MainContent>
  );
};
