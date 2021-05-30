import { FC } from 'react';
// Helper function
import { dateFormat } from '@Store/utils/helperFunc';
// Styles
import { DateStyle } from './styles/right-panel-styles';

export const DayOfWeek: FC = () => {
  var date: Date = new Date();

  // Day Of the week
  const day = dateFormat({ weekday: 'long' }, date);
  const currentDayOfWeek = day.replace(day[0], day[0].toUpperCase());
  // Full date
  const fullDate = dateFormat(
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    },
    date
  );
  // For dateTime attribute
  const dateTime = dateFormat(
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    },
    date
  )
    .split('.')
    .join('-');

  return (
    <DateStyle>
      <time id="day_of_week" dateTime={dateTime}>
        {currentDayOfWeek}
      </time>
      <time id="current_date" dateTime={dateTime}>
        {fullDate}
      </time>
    </DateStyle>
  );
};
