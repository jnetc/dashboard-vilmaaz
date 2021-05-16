import { FC } from 'react';
import styled from 'styled-components';

import { dateFormat } from '@Store/utils/helperFunc';

const DateStyle = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  text-align: right;
  #day_of_week {
    font-size: ${props => props.theme.fontsize_16};
    font-weight: 400;
  }
  #current_date {
    font-size: ${props => props.theme.fontsize_14};
    color: ${props => props.theme.grey_light()};
    padding-top: 5px;
  }
`;

// Helper function to get date values

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
