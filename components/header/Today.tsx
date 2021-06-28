import { FC } from 'react';
// Helper function
import { dateFormat } from '@Utils/helperFunc';
// Styles
import { TodayStyle } from '@styles/header';

export const Today: FC = () => {
  // Day Of the week
  const day = dateFormat({ weekday: 'long' });
  const currentDayOfWeek = day.replace(day[0], day[0].toUpperCase());
  // Full date
  const fullDate = dateFormat({
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  // For dateTime attribute
  const dateTime = dateFormat({
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
    .split('.')
    .join('-');

  return (
    <TodayStyle>
      <time id="day_of_week" dateTime={dateTime}>
        {currentDayOfWeek}
      </time>
      <time id="current_date" dateTime={dateTime}>
        {fullDate}
      </time>
    </TodayStyle>
  );
};
