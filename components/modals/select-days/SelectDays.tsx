import { FC, MouseEvent } from 'react';
// Style
import { SelectDaysStyle } from './SelectDays.style';
// Component
import { ProfileButton } from '@Modals/profile-button/ProfileButton';
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
// Hook
import { useStepsStore } from '@Hooks/useStores';
// Types
import { Form } from '@Types';

const SelectDays: FC = () => {
  let { step, setStep, color } = useStepsStore();

  const selectDays = (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    step += 1;
    setStep(step);

    console.log('Selected');
  };

  const prev = () => {
    step -= 1;
    setStep(step);
  };
  console.log('from create-profile', color);

  const isDaySelect = true;

  return (
    <SelectDaysStyle onSubmit={selectDays} name="days">
      <ModalTitle>Valitse päivät</ModalTitle>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <ProfileButton
        ButtonStyle="reset"
        onClick={prev}
        row={2}
        col={1}
        aria-label="reset by default">
        Takaisin
      </ProfileButton>
      {isDaySelect ? (
        <ProfileButton
          ButtonStyle="confirm"
          row={2}
          col={2}
          aria-label="go to next">
          Seuraava
        </ProfileButton>
      ) : (
        <ProfileButton
          ButtonStyle="disable"
          row={2}
          col={2}
          aria-label="go to next">
          Seuraava
        </ProfileButton>
      )}
    </SelectDaysStyle>
  );
};

export default SelectDays;
