import { FC, MouseEvent } from 'react';
// Style
import { CreateScheduleStyle } from './CreateSchedule.style';
// Component
import { ProfileButton } from '@Modals/profile-button/ProfileButton';
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
// Hook
import { useStepsStore } from '@Hooks/useStores';
// Types
import { Form } from '@Types';

const CreateSchedule: FC = () => {
  let { step, setStep, color } = useStepsStore();

  const getSchedule = (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    console.log('Created Schedule');
  };
  const isDaySelect = false;

  const prev = () => {
    step -= 1;
    setStep(step);
  };

  console.log('from select-days ', color);
  return (
    <CreateScheduleStyle onSubmit={getSchedule} name="schedule">
      <ModalTitle>Lukujärjestys</ModalTitle>
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
          aria-label="save your profile & schedule">
          Tallentaa
        </ProfileButton>
      ) : (
        <ProfileButton
          ButtonStyle="disable"
          row={2}
          col={2}
          aria-label="save your profile & schedule">
          Tallentaa
        </ProfileButton>
      )}
    </CreateScheduleStyle>
  );
};

export default CreateSchedule;
