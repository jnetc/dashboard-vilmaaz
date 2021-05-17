import { useRef, useState, useEffect, FC, createRef } from 'react';
import styled from 'styled-components';
// Components
import { MainContent } from '@Main/Main';
import {
  transition,
  getTransformStylePosition,
} from '@Main/lessons/utils/timeline';
import Timeline from '@Main/lessons/Timeline';
import Timefield from '@Main/lessons/Timefield';

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
  @media (max-width: 1920px) {
    width: 1920px;
  }
  &.will-change {
    will-change: transform;
  }
  &.animate {
    transition: transform 0.3s ease-in-out;
  }
`;
const LeftSidePanelStyle = styled.div`
  min-width: 140px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.bg_middle(0.8)};
  backdrop-filter: blur(4px);
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    pointer-events: none;
  }
  &::after {
    width: 20px;
    right: -20px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.bg_middle(0.7)} 0%,
      ${({ theme }) => theme.bg_middle(0)} 100%
    );
  }
  &::before {
    width: 100px;
    left: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.bg_middle(1)} 0%,
      ${({ theme }) => theme.bg_middle(0)} 100%
    );
  }
`;
const TimetableEmptyStyle = styled.h2`
  justify-self: center;
  align-self: center;
`;

export const Timetable: FC = () => {
  const { setTimetableEl, setAutoMovement, content } = useMainStore();
  const { setMainPaddingLeft, mainPaddingLeft } = useGlobalStore();

  const [currentPosEl, setCurrentPosEl] = useState<number>(0);
  let [mouseDownCursorPos, setMouseDownCursorPos] = useState<number>(0);
  const [maxPositionElement, setMaxPositionElement] = useState<number>(0);
  const [startMove, setStartMove] = useState<boolean>(false);
  const [widthMainEl, setWidthMainEl] = useState(0);
  const [timepoinsHeight, setTimepointsHeight] = useState(0);

  const mainEl = createRef<Div>();
  const timetableEl = useRef<Element>(null);
  const sidepanelEl = useRef<Element>(null);

  useEffect(() => {
    if (mainEl.current && timetableEl.current && sidepanelEl.current) {
      setWidthMainEl(mainEl.current.offsetWidth);
      setTimetableEl(timetableEl.current);
      setTimepointsHeight(timetableEl.current.offsetHeight);
      setMainPaddingLeft(sidepanelEl.current.offsetWidth);
    }
  }, []);

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

    if (ev.type !== 'mousedown' ?? !timetableEl.current ?? !mainEl.current) {
      return;
    }

    timetableEl.current.classList.remove('animate');
    timetableEl.current.classList.add('will-change');

    const invisiblePartOftimetableEl =
      timetableEl.current.offsetWidth -
      mainEl.current.offsetWidth +
      mainPaddingLeft;

    let transformStyle = getTransformStylePosition(timetableEl.current);

    console.log(invisiblePartOftimetableEl);

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
    ev.preventDefault();
    ev.stopPropagation();

    transition(timetableEl.current);

    if (!startMove ?? !timetableEl.current) return;

    let transformStyle = getTransformStylePosition(timetableEl.current);

    if (maxPositionElement < transformStyle) {
      timetableEl.current.style.transform = `translate3d(-${maxPositionElement}px, 0, 0)`;
    }

    if (transformStyle < 100) {
      timetableEl.current.style.transform = `translate3d(0, 0, 0)`;
    }

    timetableEl.current.classList.remove('will-change');
    setStartMove(false);
  };

  const mouseLeave = (ev: Event) => {
    ev.preventDefault();
    ev.stopPropagation();
    transition(timetableEl.current);

    if (!startMove ?? !timetableEl.current) return;

    let transformStyle = getTransformStylePosition(timetableEl.current);
    if (maxPositionElement < transformStyle) {
      timetableEl.current.style.transform = `translate3d(-${maxPositionElement}px, 0, 0)`;
    }
    setStartMove(false);
  };

  return content.length > 0 ? (
    <MainContent ref={mainEl}>
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
      <LeftSidePanelStyle ref={sidepanelEl}>Side</LeftSidePanelStyle>
    </MainContent>
  ) : (
    <TimetableEmptyStyle>Viikonloppu</TimetableEmptyStyle>
  );
};
