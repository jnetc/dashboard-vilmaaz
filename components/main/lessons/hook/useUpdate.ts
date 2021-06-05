import { useState, useEffect } from 'react';
import { useMainStore } from '@Store/MainStore';
import { transformTimeToNum } from '@Store/utils/helperFunc';

export const useUpdate = () => {
  const {
    timelineWidth,
    timeline: { startLessons, endLessons, totalTime },
  } = useMainStore();
  const [hours, setHours] = useState<number>(new Date().getHours());
  const [minutes, setMinutes] = useState<number>(new Date().getMinutes());

  useEffect(() => {
    const counter = setInterval(
      () => setMinutes(new Date().getMinutes()),
      1000
    );

    return () => clearInterval(counter);
  }, []);

  useEffect(() => {
    setHours(new Date().getHours());
  }, [minutes]);

  const stepTime = transformTimeToNum(`${hours}:${minutes}`);
  // Manual check timelne
  // const h = (new Date().getHours() - 2).toString();
  // const m = (new Date().getMinutes() + 54).toString();
  // const stepTime = transformTimeToNum(`${h}:${m}`);
  // const stepTime = transformTimeToNum(`9:50`);

  // * Hide timeline clock bar
  let visible: boolean = false;
  if (startLessons <= stepTime || endLessons > stepTime) {
    visible = true;
  }

  // console.log('hook', stepTime);

  const timepos = stepTime - startLessons;
  const position = Math.round((timepos * timelineWidth) / totalTime);
  // debugger
  return {
    position,
    visible,
    currentTimeStr: `${hours}:${minutes > 9 ? minutes : '0' + minutes}`,
    currentTimeNum: stepTime,
  };
};