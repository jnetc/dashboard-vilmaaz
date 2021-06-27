import { FC, useState, useEffect } from 'react';
// Styles
import { DayOfWeekStyle } from '@styles/header';

export const DayOfWeek: FC<{ day: string; today: string }> = ({
  day,
  today,
}) => {
  const [activeDay, setActiveDay] = useState(false);
  const short = day.substring(0, 2);
  const name = short.replace(short[0], short[0].toUpperCase());

  useEffect(() => {
    if (short === today.substring(0, 2)) setActiveDay(true);
  }, []);

  return (
    <DayOfWeekStyle className={activeDay ? `active` : ''} data-day={day}>
      {name}
    </DayOfWeekStyle>
  );
};
