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

  //! Проверить промежуток времени с 8:59 - 9:00
  //! Проверить промежуток времени с 10:59 - 11:00
  //! Проверить промежуток времени с 11:59 - 12:00
  //! Проверить промежуток времени с 13:59 - 14:00
  //? Нужно проверить логическое выражение, где идет расчет времени
  //? т.к. именно в переходе с 59 мин на 00 мин происходит скачок!
  //TODO Узнать из-за чего это происходит

  const stepTime = transformTimeToNum(`${hours}:${minutes}`);
  // Manual check timelne
  // const h = (new Date().getHours() - 2).toString();
  // const m = new Date().getMinutes().toString();
  // const stepTime = transformTimeToNum(`${h}:${m}`);
  // const stepTime = transformTimeToNum(`9:50`);

  //* Hide timeline clock bar
  let visible: boolean = false;
  if (startLessons <= stepTime || endLessons > stepTime) {
    visible = true;
  }

  const timepos = stepTime - startLessons;
  const position = Math.round((timepos * timelineWidth) / totalTime);

  return {
    position,
    visible,
    currentTimeStr: `${hours}:${minutes > 9 ? minutes : '0' + minutes}`,
    currentTimeNum: stepTime,
  };
};
