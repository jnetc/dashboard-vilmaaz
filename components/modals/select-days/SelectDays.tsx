import { FC, MouseEvent, ChangeEvent, useState, useEffect } from 'react';
// Style
import { SelectDaysStyle, SelectDaysGroupStyle } from './SelectDays.style';
// Component
import { ProfileButton } from '@Modals/profile-button/ProfileButton';
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
import { SelectDay } from '@Modals/select-days/SelectDay';
// Hook
import { useStepsStore } from '@Hooks/useStores';
// Types
import { Form, Input } from '@Types';
// Global const
import { daysOfWeek } from '@Const/daysOfWeek';

const SelectDays: FC = () => {
  let { step, setStep } = useStepsStore();
  const [daysArr, setDayArr] = useState<Array<string>>([]);
  const pickArr: Set<string> = new Set(daysArr);

  const pickDay = (ev: ChangeEvent<Input>) => {
    const getDayStr = ev.currentTarget.id;

    if (pickArr.has(getDayStr)) {
      pickArr.delete(getDayStr);
      setDayArr([...pickArr]);
      window.localStorage.setItem('days', JSON.stringify([...pickArr]));
      return;
    }

    pickArr.add(getDayStr);
    setDayArr([...pickArr]);
    window.localStorage.setItem('days', JSON.stringify([...pickArr]));
  };

  const getSelectedDays = (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    step += 1;
    setStep(step);

    console.log('Selected');
  };

  const prev = () => {
    step -= 1;
    setStep(step);
  };

  useEffect(() => {
    const lsDays = window.localStorage.getItem('days');
    if (!lsDays) return;

    const days = JSON.parse(lsDays) as Array<string>;
    setDayArr(days);
  }, []);

  const isDaySelect = true;

  const days = daysOfWeek.map(day => {
    return (
      <SelectDay
        key={day}
        day={day}
        onChange={pickDay}
        isChecked={pickArr.has(day)}
      />
    );
  });

  return (
    <SelectDaysStyle onSubmit={getSelectedDays} name="days">
      <ModalTitle>Valitse päivät</ModalTitle>
      <SelectDaysGroupStyle>{days}</SelectDaysGroupStyle>
      <ProfileButton
        ButtonStyle="reset"
        onClick={prev}
        row={3}
        col={1}
        aria-label="reset by default">
        Takaisin
      </ProfileButton>
      {isDaySelect ? (
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
