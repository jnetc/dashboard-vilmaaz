import { FC, MouseEvent, ChangeEvent, useState } from 'react';
// Style
import { SelectDaysStyle, SelectDaysGroupStyle } from './SelectDays.style';
// Component
import { ProfileButton } from '@Modals/profile-button/ProfileButton';
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
import { SelectDay } from '@Modals/select-days/SelectDay';
// Hook
import { useStepsStore } from '@Hooks/useStores';
// Types
import { Form, Input, Timetable } from '@Types';
// Global const
import { daysOfWeek } from '@Const/daysOfWeek';

const SelectDays: FC = () => {
  let { step, setStep, timetable, setTimetable } = useStepsStore();
  const selectedDays = timetable.map(d => d.day);
  const [days, setDays] = useState<Array<string>>(selectedDays);

  const pickDay = (ev: ChangeEvent<Input>) => {
    const getDayStr = ev.currentTarget.id;

    if (days?.includes(getDayStr)) {
      const idx = days.findIndex(idx => idx === getDayStr);

      days.splice(idx, 1);
      const remove = removeDay(getDayStr, timetable);
      setTimetable(remove);
      return setDays(days);
    }

    if (!days) return;

    const mergeDayToArray = [...days, getDayStr];
    setDays(mergeDayToArray);

    const addSortedDays = addDay(getDayStr, timetable).sort((a, b) => {
      const aNum = daysOfWeek.indexOf(a.day);
      const bNum = daysOfWeek.indexOf(b.day);
      if (aNum > bNum) {
        return 1;
      }
      return -1;
    });

    setTimetable(addSortedDays);
  };

  const getSelectedDays = (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    step += 1;
    setStep(step);
    console.log('Selected days', days, timetable);
  };

  const prev = () => {
    step -= 1;
    setStep(step);
  };

  const addDay = (currDay: string, days: Timetable[]) => {
    const checkDay = days.find(d => d.day.includes(currDay));
    if (!checkDay) {
      days.push({ day: currDay, lessons: [] });
      return days;
    }
    return days;
  };

  const removeDay = (currDay: string, days: Timetable[]) => {
    const checkDay = days.filter(d => !d.day.includes(currDay));
    if (checkDay.length === 0) return [];
    return checkDay;
  };

  const dayslist = daysOfWeek.map(day => {
    return (
      <SelectDay
        key={day}
        day={day}
        onChange={pickDay}
        isChecked={days.includes(day)}
      />
    );
  });

  console.log(days);

  return (
    <SelectDaysStyle onSubmit={getSelectedDays} name="days">
      <ModalTitle>Valitse päivät</ModalTitle>
      <SelectDaysGroupStyle>{dayslist}</SelectDaysGroupStyle>
      <ProfileButton
        ButtonStyle="reset"
        onClick={prev}
        row={3}
        col={1}
        aria-label="reset by default">
        Takaisin
      </ProfileButton>
      {days.length !== 0 ? (
        <ProfileButton
          ButtonStyle="confirm"
          row={3}
          col={2}
          aria-label="go to next">
          Seuraava
        </ProfileButton>
      ) : (
        <ProfileButton
          ButtonStyle="disable"
          row={3}
          col={2}
          aria-label="go to next">
          Seuraava
        </ProfileButton>
      )}
    </SelectDaysStyle>
  );
};

export default SelectDays;
