import { useRef, useState, useEffect, FC, createRef } from 'react';
import styled from 'styled-components';
// Components
import {
  transition,
  getTransformStylePosition,
} from '@Main/lessons/utils/timeline';
import Timeline from '@Main/lessons/Timeline';
import Timefield from '@Main/lessons/Timefield';

import { LeftSidePanel } from '@Main/lessons/left-side-panel';
// Stores
import { useMainStore } from '@Store/MainStore';
import { useGlobalStore } from '@Store/GlobalStore';
// Types
import { Event, Element, Div } from '@types';

const TimetableStyle = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
  grid-template-rows: 60px 1fr;
  /* padding: 0 160px 0 2px; */
  padding: 0 120px 0 2px;
  z-index: 1;
  user-select: none;
  @media (max-width: 1920px) {
    width: 1920px;
  }
  &.animate {
    transition: transform 0.3s ease-in-out;
  }
`;

const MainStyle = styled.main`
  width: 100%;
  min-height: 100%;
  padding: 35px 0 0 140px;
  /* padding: 20px 0 0 70px; */
  border-radius: 30px 0 0 30px;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.bg_middle()};
  box-shadow: 0px 40px 40px ${props => props.theme.bg_dark(0.2)},
    0px 10px 10px ${props => props.theme.bg_dark(0.3)};
`;

const TimetableEmptyStyle = styled.h2`
  justify-self: center;
  align-self: center;
`;

export const Timetable: FC = () => {
  const { setTimetableEl, setAutoMovement, content } = useMainStore();
  const { mainPaddingLeft } = useGlobalStore();

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
    }
  }, []);

  useEffect(() => {
    timetableEl.current?.classList.add('animate');
    setAutoMovement(true);
    return () => {
      setAutoMovement(false);
    };
  }, []);

  const mouseDown = (ev: Event) => {
    // ev.stopPropagation();
    // ev.nativeEvent.stopImmediatePropagation();

    setAutoMovement(false);
    setStartMove(true);

    if (ev.type !== 'mousedown' ?? !timetableEl.current ?? !mainEl.current) {
      return;
    }

    timetableEl.current.classList.remove('animate');

    const invisiblePartOftimetableEl =
      timetableEl.current.offsetWidth -
      mainEl.current.offsetWidth +
      mainPaddingLeft;

    let transformStyle = getTransformStylePosition(timetableEl.current);

    setMaxPositionElement(invisiblePartOftimetableEl);
    setCurrentPosEl(transformStyle);
    setMouseDownCursorPos(ev.clientX);
  };

  const mouseMove = (ev: Event) => {
    ev.preventDefault();
    ev.stopPropagation();
    if (!startMove ?? !timetableEl.current) return;

    timetableEl.current.classList.remove('animate');

    let cursorMovement = mouseDownCursorPos - ev.clientX;
    timetableEl.current.style.transform = `translate3d(-${
      cursorMovement + currentPosEl
    }px, 0, 0)`;
  };

  const mouseUp = (ev: Event) => {
    transition(timetableEl.current);

    if (!startMove ?? !timetableEl.current) return;

    let transformStyle = getTransformStylePosition(timetableEl.current);

    if (maxPositionElement < transformStyle) {
      timetableEl.current.style.transform = `translate3d(-${maxPositionElement}px, 0, 0)`;
    }

    if (transformStyle < 100) {
      timetableEl.current.style.transform = `translate3d(0, 0, 0)`;
    }

    setStartMove(false);
  };

  const mouseLeave = (ev: Event) => {
    transition(timetableEl.current);

    if (!startMove ?? !timetableEl.current) return;

    let transformStyle = getTransformStylePosition(timetableEl.current);
    if (maxPositionElement < transformStyle) {
      timetableEl.current.style.transform = `translate3d(-${maxPositionElement}px, 0, 0)`;
    }
    setStartMove(false);
  };

  return content.length > 0 ? (
    <MainStyle ref={mainEl}>
      <LeftSidePanel />
      <TimetableStyle
        id="timetable"
        ref={timetableEl}
        style={{ transform: `translate3d(0, 0, 0)` }}
        onMouseDown={mouseDown}
        onMouseMove={mouseMove}
        onMouseUp={mouseUp}
        onMouseLeave={mouseLeave}
        onTransitionEnd={() => transition}>
        <Timeline width={widthMainEl} lines={timepoinsHeight} />
        <Timefield />
      </TimetableStyle>
    </MainStyle>
  ) : (
    <TimetableEmptyStyle>Viikonloppu</TimetableEmptyStyle>
  );
};
