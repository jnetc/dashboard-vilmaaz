import { FC, MouseEvent, useState } from 'react';
// Style
import { ScheduleCreateStyle } from './ScheduleCreate.style';
// Component
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
import { ScheduleTable } from '@Modals/schedule-table/ScheduleTable';
import { ModalButton } from '@Modals/modal-button/ModalButton';
// Hook
import { useStepsStore, useMainStore, useGlobalStore } from '@Hooks/useStores';
// Types
import { Form, ProfileStore } from '@Types';
// IndexedDB
import { createNewProfileIndexedDB } from '@IndexedDB';
// Helpers
import { getBreaks } from '@Helpers';

const ScheduleCreate: FC = () => {
  let { error } = useStepsStore();
  const { setOpenModal, setStep, newUser, setNewUser } = useMainStore();
  const { setUpdateStore } = useGlobalStore();

  const [trigger, setTrigger] = useState(false);

  const saveToDB = async (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    try {
      const content = getBreaks(newUser);
      console.log(content);

      const obj = { ...content } as ProfileStore;
      setTrigger(!trigger);
      const createProfile = await createNewProfileIndexedDB('schedule', obj);

      console.log(createProfile);
      if (!createProfile.created) {
        return console.log(createProfile.message);
      }
      setNewUser(null);
      setStep({ value: 'profile' });
      setOpenModal(false);
      setUpdateStore({ status: 'added', message: createProfile.message });
      console.log(createProfile.message, obj);
    } catch (error) {
      console.log(error);
    }
  };

  const prevPrev = () => setStep({ value: 'days' });

  return (
    <ScheduleCreateStyle onSubmit={saveToDB} name="schedule">
      <ModalTitle>Lukujärjestys</ModalTitle>
      <ScheduleTable />
      <ModalButton
        ButtonStyle="reset"
        onClick={prevPrev}
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
