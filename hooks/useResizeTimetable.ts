import { useEffect, useState } from 'react';
// Global const
import { hourDivWidth, rightPanelWidth } from '@Constants';
// Types
import { StaticValues } from '@Types';

export const useResizeTimetable = (timeline: StaticValues, main: number) => {
  const [bodyWidth, setBodyWidth] = useState(0);

  const scopeTime = timeline.totalTime + hourDivWidth + rightPanelWidth;
  const endOfTrack = timeline.endLessons - main + hourDivWidth;
  const mainCenter = main / 2;
  const totalTimeCenter = timeline.totalTime / 2;
  const gap = mainCenter - totalTimeCenter;
  const getCenterOfPosition = timeline.startLessons - gap;

  let isOutOfScope = false;
  if (scopeTime < bodyWidth) {
    isOutOfScope = true;
  }

  useEffect(() => {
    // Get onload width
    const getWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    setBodyWidth(getWidth);

    const resize = () => {
      const time = setTimeout(() => {
        const getWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        setBodyWidth(getWidth);

        clearTimeout(time);
      }, 1000);
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [timeline.totalTime]);

  return {
    width: bodyWidth,
    isOut: isOutOfScope,
    end: endOfTrack,
    center: getCenterOfPosition,
  };
};
