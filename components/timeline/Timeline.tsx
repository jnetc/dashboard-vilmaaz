import { useState, useEffect, MouseEvent, createContext, useRef } from 'react';
// Helpers
import {
  cssAnimationHandler,
  getTransformStylePosition,
  timelineLimits,
} from '@Helpers';
// Components
import { TimeScale } from '@Timeline/time-scale/TimeScale';
import { TimeField } from '@Timeline/time-field/TimeField';
// Hook
import { useGlobalStore } from '@Hooks/useStores';
import { useResizeTimetable } from '@Hooks/useResizeTimetable';
// Types
import { This, Div, Element } from '@Types';
// Styles
import { MainStyle, TimelineStyle, TimelineEmptyStyle } from './Timeline.style';

// Timetable Context
type State = { mainWidth: number; timetableEl: Element };
const state: State = { mainWidth: 0, timetableEl: null };
export const timetableStore = createContext(state);

const Timeline = () => {
  const { setAutoMovement, timeline, timelineWidth, activeDay } =
    useGlobalStore();

  const [currentPosEl, setCurrentPosEl] = useState<number>(0);
  const [mouseDownCursorPos, setMouseDownCursorPos] = useState<number>(0);
  const [startMove, setStartMove] = useState<boolean>(false);
  const [timetable, setTimetable] = useState<Element>(state.timetableEl);
  const [mainWidth, setMainWidth] = useState(state.mainWidth);
  const [animateClass, setAnimateClass] = useState(true);
  const { width, isOut, end, center } = useResizeTimetable(timeline, mainWidth);

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
  }, [activeDay, width]);

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
    timelineLimits(timetable, timeline, end, center, isOut);
    setStartMove(false);
  };

  const mouseLeave = (ev: MouseEvent<Div, This>) => {
    ev.preventDefault();

    if (!startMove ?? !timetable) return;

    cssAnimationHandler(timetable);

    timelineLimits(timetable, timeline, end, center, isOut);
    setStartMove(false);
  };

  return (
    <timetableStore.Provider
      value={{
        mainWidth,
        timetableEl: timetable,
      }}>
      {activeDay ? (
        <MainStyle id="schedule" ref={mainEl}>
          <TimelineStyle
            id="timeline"
            ref={timetableEl}
            className={animateClass ? 'animate' : ''}
            onMouseDown={mouseDown}
            onMouseMove={mouseMove}
            onMouseUp={mouseUp}
            onMouseLeave={mouseLeave}
            onTransitionEnd={() => cssAnimationHandler}
            hours={timelineWidth}>
            <TimeScale />
            <TimeField />
          </TimelineStyle>
        </MainStyle>
      ) : (
        <TimelineEmptyStyle>Viikonloppu</TimelineEmptyStyle>
      )}
    </timetableStore.Provider>
  );
};

export default Timeline;
