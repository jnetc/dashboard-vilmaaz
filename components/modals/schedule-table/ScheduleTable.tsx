import { FC, useState, ChangeEvent } from 'react';
// Style
import { ScheduleTableStyle } from './ScheduleTable.style';

import { ScheduleDay } from '@Modals/schedule-day/ScheduleDay';
// Hook
import { useStepsStore } from '@Hooks/useStores';
// Helper func
import { removeDayFromSchedule } from 'utils/helperFunctions';
// Type
import { Input } from '@Types';

export const ScheduleTable: FC = () => {
  const { timetable, setTimetable, setStep } = useStepsStore();
  const selectedDays = timetable.map(d => d.day);
  const [days, setDays] = useState<Array<string>>(selectedDays);

  const removeDay = (ev: ChangeEvent<Input>) => {
    const getDayStr = ev.currentTarget.id;

    if (days?.includes(getDayStr)) {
      const idx = days.findIndex(idx => idx === getDayStr);
      days.splice(idx, 1);

      const remove = removeDayFromSchedule(getDayStr, timetable);

      if (days.length === 0) setStep('days');
      setTimetable(remove);
      return setDays(days);
    }
  };

  const scheduleDays = timetable.map(d => {
    return (
      <ScheduleDay
        key={d.day}
        data={d}
        onChange={removeDay}
        isChecked={days.includes(d.day)}
      />
    );
  });

  return <ScheduleTableStyle>{scheduleDays}</ScheduleTableStyle>;
};
