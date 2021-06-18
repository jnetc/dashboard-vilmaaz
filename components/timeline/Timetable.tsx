import { useRef, useState, useEffect, FC, createRef } from 'react';
// Helpers
import {
  cssAnimationHandler,
  getTransformStylePosition,
} from '@Utils/timeline';
// Components
import Timeline from './Timeline';
import Timefield from './Timefield';
// Hook
import { useStore } from '@Hooks/useStore';
// Types
import { Event, Element, Div, StaticValues } from '@types';
// Styles
import {
  MainStyle,
  TimetableStyle,
  TimetableEmptyStyle,
} from '@styles/timeline';

export const Timetable: FC = () => {
  const { setTimetableEl, setAutoMovement, content, timelineHours, timeline } =
    useStore();

  const [currentPosEl, setCurrentPosEl] = useState<number>(0);
  let [mouseDownCursorPos, setMouseDownCursorPos] = useState<number>(0);
  const [startMove, setStartMove] = useState<boolean>(false);
  const [widthMainEl, setWidthMainEl] = useState(0);
  const [timetableWidth, setTimetableWidth] = useState(0);

  const mainEl = createRef<Div>();
  const timetableEl = useRef<Element>(null);

  useEffect(() => {
    if (mainEl.current && timetableEl.current) {
      setWidthMainEl(mainEl.current.offsetWidth);
      setTimetableEl(timetableEl.current);
    }
    const timetableLenght = timelineHours.length - 1;
    setTimetableWidth(timelineHours[timetableLenght]?.position);
  }, [widthMainEl, timetableEl]);

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
    let el = timetableEl.current;
    if (ev.type !== 'mousedown' ?? !el ?? !mainEl.current) {
      return;
    }

    el.classList.remove('animate');

    let transformStyle = getTransformStylePosition(el);

    setCurrentPosEl(transformStyle);
    setMouseDownCursorPos(ev.clientX);
  };

  const mouseMove = (ev: Event) => {
    ev.preventDefault();
    let el = timetableEl.current;
    if (!startMove ?? !el) return;

    el.classList.remove('animate');

    let cursorMovement = mouseDownCursorPos - ev.clientX;
    el.style.transform = `translate3d(-${
      cursorMovement + currentPosEl
    }px, 0, 0)`;
  };

  const mouseUp = (ev: Event) => {
    ev.preventDefault();
    let el = timetableEl.current;
    cssAnimationHandler(el);

    if (!startMove ?? !el) return;

    timelineLimits(el, timeline, widthMainEl);
    setStartMove(false);
  };

  const mouseLeave = (ev: Event) => {
    ev.preventDefault();
    let el = timetableEl.current;

    cssAnimationHandler(el);

    if (!startMove ?? !el) return;

    timelineLimits(el, timeline, widthMainEl);
    setStartMove(false);
  };

  const timelineLimits = (
    el: HTMLDivElement,
    timeline: StaticValues,
    main: number
  ) => {
    let transformStyle = getTransformStylePosition(el);
    const divPointWidth = 90;

    const end = timeline.endLessons - main + divPointWidth;

    if (end < transformStyle) {
      el.style.transform = `translate3d(-${end}px, 0, 0)`;
    }

    if (timeline.startLessons > transformStyle) {
      el.style.transform = `translate3d(-${timeline.startLessons}px, 0, 0)`;
    }
  };

  return content.length > 0 ? (
    <MainStyle ref={mainEl}>
      <TimetableStyle
        id="timetable"
        ref={timetableEl}
        onMouseDown={mouseDown}
        onMouseMove={mouseMove}
        onMouseUp={mouseUp}
        onMouseLeave={mouseLeave}
        onTransitionEnd={() => cssAnimationHandler}
        hours={timetableWidth}>
        <Timeline width={widthMainEl} />
        <Timefield />
      </TimetableStyle>
    </MainStyle>
  ) : (
    <TimetableEmptyStyle>Viikonloppu</TimetableEmptyStyle>
  );
};
