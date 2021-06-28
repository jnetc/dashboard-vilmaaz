import { useState, useEffect, MouseEvent, createContext, useRef } from 'react';
// Helpers
import {
  cssAnimationHandler,
  getTransformStylePosition,
  timelineLimits,
} from '@Utils/helperFunc';
// Components
import Timeline from './Timeline';
import Timefield from './Timefield';
// Hook
import { useStore } from '@Hooks/useStore';
// Types
import { This, Div, Element } from '@types';
// Styles
import {
  MainStyle,
  TimetableStyle,
  TimetableEmptyStyle,
} from '@styles/timeline';

type State = {
  mainWidth: number;
  timetableEl: Element;
  hourDivWidth: number;
};

const state: State = {
  mainWidth: 0,
  timetableEl: null,
  hourDivWidth: 90, // watch is styles to
};

export const timetableStore = createContext(state);

const Timetable = () => {
  const {
    // timetableEl,
    // mainWidth,
    setAutoMovement,
    // content,
    timeline,
    timetableWidth,
    // dayOfWeek,
    activeDays,
  } = useStore();

  const [currentPosEl, setCurrentPosEl] = useState<number>(0);
  let [mouseDownCursorPos, setMouseDownCursorPos] = useState<number>(0);
  const [startMove, setStartMove] = useState<boolean>(false);
  const [timetable, setTimetable] = useState<Element>(state.timetableEl);
  const [mainWidth, setMainWidth] = useState(state.mainWidth);
  // const [timetableWidth, setTimetableWidth] = useState(0);
  const [animateClass, setAnimateClass] = useState(true);

  const mainEl = useRef<Div>(null);
  const timetableEl = useRef<Element>(null);

  useEffect(() => {
    if (mainEl.current && timetableEl.current) {
      setMainWidth(mainEl.current.offsetWidth);
      setTimetable(timetableEl.current);
    }

    setAutoMovement(true);
    return () => {
      setAutoMovement(false);
    };
  }, [activeDays]);
  // useEffect(() => {
  //   console.log('timetable', activeDays);
  // }, []);

  const mouseDown = (ev: MouseEvent<Div, This>) => {
    setAutoMovement(false);
    setStartMove(true);

    if (ev.type !== 'mousedown' ?? !timetable) {
      return;
    }
    setAnimateClass(false);

    let transformStyle = getTransformStylePosition(timetable);

    setCurrentPosEl(transformStyle);
    setMouseDownCursorPos(ev.clientX);
  };

  const mouseMove = (ev: MouseEvent<Div, This>) => {
    ev.preventDefault();

    if (!startMove ?? !timetable) return;

    let cursorMovement = mouseDownCursorPos - ev.clientX;
    timetable.style.transform = `translate3d(-${
      cursorMovement + currentPosEl
    }px, 0, 0)`;
  };

  const mouseUp = (ev: MouseEvent<Div, This>) => {
    ev.preventDefault();

    if (!startMove ?? !timetable) return;

    cssAnimationHandler(timetable);

    setAnimateClass(true);
    timelineLimits(timetable, timeline, mainWidth, state.hourDivWidth);
    setStartMove(false);
  };

  const mouseLeave = (ev: MouseEvent<Div, This>) => {
    ev.preventDefault();

    if (!startMove ?? !timetable) return;

    cssAnimationHandler(timetable);

    timelineLimits(timetable, timeline, mainWidth, state.hourDivWidth);
    setStartMove(false);
  };

  return (
    <timetableStore.Provider
      value={{
        hourDivWidth: state.hourDivWidth,
        mainWidth,
        timetableEl: timetable,
      }}>
      {activeDays ? (
        <MainStyle id="schedule" ref={mainEl}>
          <TimetableStyle
            id="timetable"
            ref={timetableEl}
            className={animateClass ? 'animate' : ''}
            onMouseDown={mouseDown}
            onMouseMove={mouseMove}
            onMouseUp={mouseUp}
            onMouseLeave={mouseLeave}
            onTransitionEnd={() => cssAnimationHandler}
            hours={timetableWidth}>
            <Timeline width={mainWidth} />
            <Timefield />
          </TimetableStyle>
        </MainStyle>
      ) : (
        <TimetableEmptyStyle>Viikonloppu</TimetableEmptyStyle>
      )}
    </timetableStore.Provider>
  );
};

export default Timetable;
