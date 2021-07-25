import { FC, MouseEvent } from 'react';
// Style
import { ScheduleCreateStyle } from './ScheduleCreate.style';
// Component
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
import { ScheduleTable } from '@Modals/schedule-table/ScheduleTable';
import { ModalButton } from '@Modals/modal-button/ModalButton';
// Hook
import { useStepsStore } from '@Hooks/useStores';
// Types
import { Form } from '@Types';

const ScheduleCreate: FC = () => {
  let { setStep, error } = useStepsStore();

  const getSchedule = (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    console.log('Created Schedule');
  };

  const prev = () => setStep('days');

  return (
    <ScheduleCreateStyle onSubmit={getSchedule} name="schedule">
      <ModalTitle>Lukujärjestys</ModalTitle>
      <ScheduleTable />
      <ModalButton
        ButtonStyle="reset"
        onClick={prev}
        row={3}
        col={1}
        aria-label="reset by default">
        Takaisin
      </ModalButton>
      {!error.isError ? (
        <ModalButton
          ButtonStyle="confirm"
          row={3}
          col={2}
          aria-label="save your profile & schedule">
          Tallentaa
        </ModalButton>
      ) : (
        <ModalButton
          ButtonStyle="disable"
          row={3}
          col={2}
          aria-label="save your profile & schedule">
          Tallentaa
        </ModalButton>
      )}
    </ScheduleCreateStyle>
  );
};

export default ScheduleCreate;
