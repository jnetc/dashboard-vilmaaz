import { FC } from 'react';
// Style
import { ScheduleTableStyle } from './ScheduleTable.style';

import { ScheduleDay } from '@Modals/schedule-day/ScheduleDay';
// Hook
import { useStepsStore } from '@Hooks/useStores';

export const ScheduleTable: FC = () => {
  let { timetable } = useStepsStore();

  console.log(timetable);
  const days = timetable.map(d => {
    return <ScheduleDay key={d.day} data={d} />;
  });

  return <ScheduleTableStyle>{days}</ScheduleTableStyle>;
};
