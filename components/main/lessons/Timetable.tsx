import { useRef, useState, useEffect, FC, createRef } from 'react';
// Helpers
import {
  cssAnimationHandler,
  getTransformStylePosition,
} from '@Main/lessons/utils/timeline';
// Components
import Timeline from '@Main/lessons/Timeline';
import Timefield from '@Main/lessons/Timefield';
import { LeftSidePanel } from '@Main/lessons/left-side-panel';
// Stores
import { useMainStore } from '@Store/MainStore';
import { useGlobalStore } from '@Store/GlobalStore';
// Types
import { Event, Element, Div } from '@types';
// Styles
import {
  MainStyle,
  TimetableStyle,
  TimetableEmptyStyle,
} from './styles/lessons';

export const Timetable: FC = () => {
  const { setTimetableEl, setAutoMovement, content } = useMainStore();
  const { mainPaddingLeft } = useGlobalStore();

  const [currentPosEl, setCurrentPosEl] = useState<number>(0);
  let [mouseDownCursorPos, setMouseDownCursorPos] = useState<number>(0);
  const [maxPositionElement, setMaxPositionElement] = useState<number>(0);
  const [startMove, setStartMove] = useState<boolean>(false);
  const [widthMainEl, setWidthMainEl] = useState(0);

  const mainEl = createRef<Div>();
  const timetableEl = useRef<Element>(null);

  useEffect(() => {
    if (mainEl.current && timetableEl.current) {
      setWidthMainEl(mainEl.current.offsetWidth);
      setTimetableEl(timetableEl.current);
    }
  }, [widthMainEl]);

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

    if (!startMove ?? !timetableEl.current) return;

    timetableEl.current.classList.remove('animate');

    let cursorMovement = mouseDownCursorPos - ev.clientX;
    timetableEl.current.style.transform = `translate3d(-${
      cursorMovement + currentPosEl
    }px, 0, 0)`;
  };

  const mouseUp = (ev: Event) => {
    ev.preventDefault();

    cssAnimationHandler(timetableEl.current);

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
    ev.preventDefault();

    cssAnimationHandler(timetableEl.current);

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
        onMouseDown={ev => mouseDown(ev)}
        onMouseMove={ev => mouseMove(ev)}
        onMouseUp={ev => mouseUp(ev)}
        onMouseLeave={ev => mouseLeave(ev)}
        onTransitionEnd={() => cssAnimationHandler}>
        <Timeline width={widthMainEl} />
        <Timefield />
      </TimetableStyle>
    </MainStyle>
  ) : (
    <TimetableEmptyStyle>Viikonloppu</TimetableEmptyStyle>
  );
};
