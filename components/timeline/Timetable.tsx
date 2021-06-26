import { useRef, useState, useEffect, FC, createRef, MouseEvent } from 'react';
// Helpers
import {
  cssAnimationHandler,
  getTransformStylePosition,
} from '@Utils/helperFunc';
// Components
import Timeline from './Timeline';
import Timefield from './Timefield';
// Hook
import { useStore } from '@Hooks/useStore';
// Types
import { This, Element, Div, StaticValues } from '@types';
// Styles
import {
  MainStyle,
  TimetableStyle,
  TimetableEmptyStyle,
} from '@styles/timeline';

const Timetable: FC = () => {
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
    const transition = setTimeout(() => {
      timetableEl.current?.classList.add('animate');
    }, 0);
    const timetableLenght = timelineHours.length - 1;
    setTimetableWidth(timelineHours[timetableLenght]?.position);
    setAutoMovement(true);
    return () => {
      setAutoMovement(false);
      clearTimeout(transition);
    };
  }, [widthMainEl, timetableEl]);

  const mouseDown = (ev: MouseEvent<Div, This>) => {
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

  const mouseMove = (ev: MouseEvent<Div, This>) => {
    ev.preventDefault();
    let el = timetableEl.current;
    if (!startMove ?? !el) return;

    let cursorMovement = mouseDownCursorPos - ev.clientX;
    el.style.transform = `translate3d(-${
      cursorMovement + currentPosEl
    }px, 0, 0)`;
  };

  const mouseUp = (ev: MouseEvent<Div, This>) => {
    ev.preventDefault();
    let el = timetableEl.current;
    cssAnimationHandler(el);

    if (!startMove ?? !el) return;

    timelineLimits(el, timeline, widthMainEl);
    setStartMove(false);
  };

  const mouseLeave = (ev: MouseEvent<Div, This>) => {
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

export default Timetable;
