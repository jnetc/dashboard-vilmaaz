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
  let { step, setStep, days, setDays } = useStepsStore();
  const [isSelectedAny, setIsSelectedAny] = useState(false);
  const pickArr: Set<string> = new Set(days);

  const pickDay = (ev: ChangeEvent<Input>) => {
    const getDayStr = ev.currentTarget.id;

    if (pickArr.has(getDayStr)) {
      pickArr.delete(getDayStr);
      setDays([...pickArr]);
      return;
    }

    pickArr.add(getDayStr);
    setDays([...pickArr]);
  };

  const getSelectedDays = (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    step += 1;
    setStep(step);

    console.log('Selected days', days);
  };

  const prev = () => {
    step -= 1;
    setStep(step);
  };

  useEffect(() => {
    if (days.length === 0) return setIsSelectedAny(false);
    setIsSelectedAny(true);
  }, [days]);

  const dayslist = daysOfWeek.map(day => {
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
      <SelectDaysGroupStyle>{dayslist}</SelectDaysGroupStyle>
      <ProfileButton
        ButtonStyle="reset"
        onClick={prev}
        row={3}
        col={1}
        aria-label="reset by default">
        Takaisin
      </ProfileButton>
      {isSelectedAny ? (
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
