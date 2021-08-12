import { FC, MouseEvent, ChangeEvent } from 'react';
// Style
import { SelectDaysStyle } from './SelectDays.style';
// Component
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
import { SelectDay } from '@Modals/select-days/SelectDay';
import { ModalButton } from '@Modals/modal-button/ModalButton';
// Hook
import { useMainStore } from '@Hooks/useStores';
// Types
import { Form, Input } from '@Types';
// Helper func
import {
  addDayToTheSchedule,
  removeDayFromSchedule,
} from 'utils/helperFunctions';
// Global const
import { daysOfWeek } from '@Constants';

const SelectDays: FC = () => {
  const { setStep, newUser, setNewUser } = useMainStore();
  if (!newUser) return null;

  const selectedDays = newUser.timetable.map(d => d.day) as Array<string>;

  const pickDay = (ev: ChangeEvent<Input>) => {
    const getDayStr = ev.currentTarget.id;

    if (selectedDays.includes(getDayStr)) {
      const idx = selectedDays.findIndex(idx => idx === getDayStr);
      selectedDays.splice(idx, 1);

      const remove = removeDayFromSchedule(getDayStr, newUser.timetable);

      setNewUser(prevState => {
        if (!prevState) return null;

        prevState.timetable = remove;
        return { ...prevState, ...newUser };
      });
    }

    const sortedDays = addDayToTheSchedule(getDayStr, newUser.timetable).sort(
      (a, b) => {
        const aNum = daysOfWeek.indexOf(a.day);
        const bNum = daysOfWeek.indexOf(b.day);

        if (aNum > bNum) return 1;
        return -1;
      }
    );

    setNewUser(prevState => {
      if (!prevState) return null;

      prevState.timetable = sortedDays;
      return { ...prevState, ...newUser };
    });
  };

  const next = (ev: MouseEvent<Form>) => {
    ev.preventDefault();
    setStep({ value: 'schedule' });
    // console.log('Selected days', days, timetable);
  };

  const prev = () => setStep({ value: 'profile' });

  const dayslist = daysOfWeek.map(day => {
    return (
      <SelectDay
        key={day}
        day={day}
        onChange={pickDay}
        isChecked={selectedDays.includes(day)}
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
      {newUser.timetable.length !== 0 ? (
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
