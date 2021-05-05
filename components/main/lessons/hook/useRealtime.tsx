import { useState, useEffect } from 'react';
import { useStore } from '@Store/Store';
import { transformTimeToNum } from '@Store/utils/helperFunc';

export const useRealtime = (minutes: number) => {
  const {
    trackWidth,
    timeline: { startLessons, endLessons, totalTime },
  } = useStore();
  let [hours, setHours] = useState<number>(new Date().getHours());

  useEffect(() => {
    let tick = setInterval(() => {
      setHours(new Date().getHours());
    }, 1000);

    return () => {
      clearInterval(tick);
    };
  }, [minutes]);

  const stepTime = transformTimeToNum(`${hours}:${minutes}`);
  // Manual check timelne
  // const stepTime = transformTimeToNum(`12:30`);
  let visible: boolean = false;

  if (startLessons <= stepTime && endLessons > stepTime) {
    visible = true;
  }

  const timepos = Math.abs(startLessons - stepTime);
  const position = Math.round((timepos * trackWidth) / totalTime);

  return {
    position,
    visible,
    time: `${hours}:${minutes > 9 ? minutes : '0' + minutes}`,
  };
};
