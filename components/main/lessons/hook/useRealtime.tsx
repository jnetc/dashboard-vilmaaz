import { useState, useEffect } from 'react';
import { useMainStore } from '@Store/MainStore';
import { transformTimeToNum } from '@Store/utils/helperFunc';

export const useRealtime = (minutes: number) => {
  const {
    timelineWidth,
    timeline: { startLessons, endLessons, totalTime },
  } = useMainStore();
  let [hours, setHours] = useState<number>(new Date().getHours());

  useEffect(() => {
    let tick = setInterval(() => {
      setHours(new Date().getHours());
    }, 1000);

    return () => {
      clearInterval(tick);
    };
  }, []);

  // const stepTime = transformTimeToNum(`${hours}:${minutes}`);
  // Manual check timelne
  const h = (new Date().getHours() - 4).toString();
  const m = new Date().getMinutes().toString();
  const stepTime = transformTimeToNum(`${h}:${m}`);
  // const stepTime = transformTimeToNum(`13:10`);
  let visible: boolean = false;

  if (startLessons <= stepTime && endLessons > stepTime) {
    visible = true;
  }

  // console.log('hook=> ', timelineWidth);

  const timepos = Math.abs(startLessons - stepTime);
  const position = Math.round((timepos * timelineWidth) / totalTime);

  return {
    position,
    visible,
    timeString: `${hours}:${minutes > 9 ? minutes : '0' + minutes}`,
    timeNumber: stepTime,
  };
};
