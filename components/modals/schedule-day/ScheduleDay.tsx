import { FC } from 'react';
// Style
import { ScheduleDayStyle } from './ScheduleDay.style';
// Type
import { Timetable } from '@Types';

export const ScheduleDay: FC<{ data: Timetable }> = ({ data }) => {
  return <ScheduleDayStyle>{data.day}</ScheduleDayStyle>;
};
