import { FC, MouseEvent, ChangeEvent, useState } from 'react';
// Style
import { SelectDaysStyle } from './SelectDays.style';
// Component
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
import { SelectDay } from '@Modals/select-days/SelectDay';
import { ModalButton } from '@Modals/modal-button/ModalButton';
// Hook
import { useStepsStore } from '@Hooks/useStores';
// Types
import { Form, Input } from '@Types';
// Helper func
import { addDayToTheSchedule, removeDayFromSchedule } from '@Helpers';
// Global const
import { daysOfWeek } from '@Const/daysOfWeek';

const SelectDays: FC = () => {
  let { setStep, timetable, setTimetable } = useStepsStore();
  const selectedDays = timetable.map(d => d.day);
  const [days, setDays] = useState<Array<string>>(selectedDays);

  const pickDay = (ev: ChangeEvent<Input>) => {
    const getDayStr = ev.currentTarget.id;

    if (days?.includes(getDayStr)) {
      const idx = days.findIndex(idx => idx === getDayStr);
      days.splice(idx, 1);

      const remove = removeDayFromSchedule(getDayStr, timetable);

      setTimetable(remove);
      return setDays(days);
    }

    const sortedDays = addDayToTheSchedule(getDayStr, timetable).sort(
      (a, b) => {
        const aNum = daysOfWeek.indexOf(a.day);
        const bNum = daysOfWeek.indexOf(b.day);

        if (aNum > bNum) return 1;
        return -1;
      }
    );

    setDays([...days, getDayStr]);
    setTimetable(sortedDays);
  };

  const next = (ev: MouseEvent<Form>) => {
    ev.preventDefault();
    setStep('schedule');
    console.log('Selected days', days, timetable);
  };

  const prev = () => setStep('profile');

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

  return (
    <SelectDaysStyle onSubmit={next} name="days">
      <ModalTitle>Valitse päivät</ModalTitle>
      <section id="modal-days">{dayslist}</section>
      <ModalButton
        ButtonStyle="reset"
        onClick={prev}
        row={3}
        col={1}
        aria-label="reset by default">
        Takaisin
      </ModalButton>
      {days.length !== 0 ? (
        <ModalButton
          ButtonStyle="confirm"
          row={3}
          col={2}
          aria-label="go to next">
          Seuraava
        </ModalButton>
      ) : (
        <ModalButton
          ButtonStyle="disable"
          row={3}
          col={2}
          aria-label="go to next">
          Seuraava
        </ModalButton>
      )}
    </SelectDaysStyle>
  );
};

export default SelectDays;
