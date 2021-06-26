import { FC, useState, useEffect } from 'react';

// Styles
import { DayOfWeekStyle } from '@styles/header';
// Type
// import { Button } from '@types';

export const DayOfWeek: FC<{ day: string; today: string }> = ({
  day,
  today,
}) => {
  const [activeDay, setActiveDay] = useState(false);

  const btnName = day.substring(0, 2);

  useEffect(() => {
    if (btnName === today) setActiveDay(true);
  }, []);

  return (
    <DayOfWeekStyle className={activeDay ? `active` : ''}>
      {btnName}
    </DayOfWeekStyle>
  );
};
