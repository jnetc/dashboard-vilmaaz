import { useState, useEffect } from 'react';
import { transformTimeToNum2 } from '@Utils/helperFunc';

export const useUpdate = () => {
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

  const stepTime = transformTimeToNum2(`${hours}:${minutes}`);
  // Manual check timelne
  // const h = (new Date().getHours() - 0).toString();
  // const m = (new Date().getMinutes() - 59).toString();
  // const stepTime = transformTimeToNum2(`${h}:${m}`);
  // const stepTime = transformTimeToNum2(`14:15`);

  // console.log('hook', stepTime);

  return {
    position: stepTime,
    currentTimeStr: `${hours}:${minutes > 9 ? minutes : '0' + minutes}`,
    currentTimeNum: stepTime,
  };
};
