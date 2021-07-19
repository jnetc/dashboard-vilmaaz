import { FC, MouseEvent } from 'react';
// Style
import { ScheduleCreateStyle } from './ScheduleCreate.style';
// Component
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
import { ScheduleTable } from '@Modals/schedule-table/ScheduleTable';
import { ProfileButton } from '@Modals/profile-button/ProfileButton';
// Hook
import { useStepsStore } from '@Hooks/useStores';
// Types
import { Form } from '@Types';

const ScheduleCreate: FC = () => {
  let { step, setStep, timetable } = useStepsStore();

  console.log(timetable);

  const getSchedule = (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    console.log('Created Schedule');
  };
  const isDaySelect = false;

  const prev = () => {
    step -= 1;
    setStep(step);
  };

  console.log('from select-days ');
  return (
    <ScheduleCreateStyle onSubmit={getSchedule} name="schedule">
      <ModalTitle>Lukujärjestys</ModalTitle>
      <ScheduleTable />
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
          aria-label="save your profile & schedule">
          Tallentaa
        </ProfileButton>
      ) : (
        <ProfileButton
          ButtonStyle="disable"
          row={3}
          col={2}
          aria-label="save your profile & schedule">
          Tallentaa
        </ProfileButton>
      )}
    </ScheduleCreateStyle>
  );
};

export default ScheduleCreate;
