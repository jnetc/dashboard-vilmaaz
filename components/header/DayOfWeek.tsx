import { FC } from 'react';
import styled from 'styled-components';

const DateStyle = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  #day_of_week {
    font-size: ${props => props.theme.fontsize_36};
    font-weight: 300;
  }
  #current_date {
    font-size: ${props => props.theme.fontsize_16};
    color: ${props => props.theme.grey_light};
    padding-top: 5px;
  }
`;

// Helper function to get date values
function DateFormat(options: Intl.DateTimeFormatOptions, date: Date) {
  return new Intl.DateTimeFormat('fi-FI', options).format(date);
}

export const DayOfWeek: FC = () => {
  var date: Date = new Date();

  // Day Of the week
  const day = DateFormat({ weekday: 'long' }, date);
  const currentDayOfWeek = day.replace(day[0], day[0].toUpperCase());
  // Full date
  const dateFormat = DateFormat(
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    },
    date
  );
  // For dateTime attribute
  const dateTime = DateFormat(
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
        {dateFormat}
      </time>
    </DateStyle>
  );
};
