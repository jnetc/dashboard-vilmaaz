import { useState, useEffect } from 'react';
import { transformTimeToNum } from 'utils/helperFunctions';

export const useUpdateTime = () => {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  useEffect(() => {
    const counter = setInterval(() => setMinutes(new Date().getMinutes()), 0);
    return () => clearInterval(counter);
  }, []);

  useEffect(() => {
    setHours(new Date().getHours());
  }, [minutes]);

  const stepTime = transformTimeToNum(`${hours}:${minutes}`);
  // Manual check timelne
  // const h = (new Date().getHours() - 5).toString();
  // const m = (new Date().getMinutes() - 17).toString();
  // const stepTime = transformTimeToNum(`${h}:${m}`);
  // const stepTime = transformTimeToNum(`12:10`);

  return {
    position: stepTime,
    currentTimeStr: `${hours}:${minutes > 9 ? minutes : '0' + minutes}`,
    currentTimeNum: stepTime,
  };
};
