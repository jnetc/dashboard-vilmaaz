import { FC, ChangeEvent } from 'react';
// Style
import { ScheduleTableStyle } from './ScheduleTable.style';

import { ScheduleDay } from '@Modals/schedule-day/ScheduleDay';
// Hook
import { useCommonUsersStore } from '@Hooks/useStores';
// Helper func
import { removeDayFromSchedule } from 'utils/helperFunctions';
// Type
import { Input } from '@Types';

export const ScheduleTable: FC = () => {
  const { setStep, newUser, setNewUser } = useCommonUsersStore();

  const selectedDays = newUser?.timetable.map(d => d.day) as Array<string>;

  const removeDay = (ev: ChangeEvent<Input>) => {
    const getDayStr = ev.currentTarget.id;

    if (selectedDays.includes(getDayStr)) {
      const idx = selectedDays.findIndex(idx => idx === getDayStr);
      selectedDays.splice(idx, 1);

      const remove = removeDayFromSchedule(getDayStr, newUser?.timetable || []);

      if (selectedDays.length === 0) setStep({ value: 'days' });
      setNewUser(prevState => {
        if (!prevState) return null;

        prevState.timetable = remove;
        return { ...prevState, ...newUser };
      });
    }
  };

  const scheduleDays = newUser?.timetable.map(d => {
    return (
      <ScheduleDay
        key={d.day}
        data={d}
        onChange={removeDay}
        isChecked={selectedDays.includes(d.day)}
      />
    );
  });

  return <ScheduleTableStyle>{scheduleDays}</ScheduleTableStyle>;
};
