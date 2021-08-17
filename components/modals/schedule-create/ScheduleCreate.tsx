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
import { Form } from '@Types';
// IndexedDB
import { createNewProfileIndexedDB, updateProfileIndexedDB } from '@IndexedDB';

const ScheduleCreate: FC = () => {
  let { error } = useStepsStore();
  const { setOpenModal, step, setStep, newUser, setNewUser } = useMainStore();
  const { setUpdateStore } = useGlobalStore();

  const [trigger, setTrigger] = useState(false);

  const saveToDB = async (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    try {
      if (!newUser) return;
      const obj = { ...newUser };
      setTrigger(!trigger);
      const createProfile = await createNewProfileIndexedDB('schedule', obj);

      if (!createProfile.created) {
        setUpdateStore({
          status: 'error',
          message: 'Tilisi ei ole tallennettu',
        });
        return console.log(createProfile.message);
      }

      setNewUser(null);
      setStep({ value: 'profile' });
      setOpenModal(false);
      setUpdateStore({ status: 'success', message: 'Tilisi on tallennettu' });
    } catch (error) {
      setUpdateStore({ status: 'error', message: 'Database error' });
    }
  };

  const updateDB = async (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    try {
      setTrigger(!trigger);
      const updateProfile = await updateProfileIndexedDB('schedule', newUser);

      if (!updateProfile.created) {
        setUpdateStore({
          status: 'error',
          message: 'Lukujärjestys ei päivitetty',
        });
        return console.log(updateProfile.message);
      }

      setNewUser(null);
      setStep({ value: 'profile' });
      setOpenModal(false);
      setUpdateStore({
        status: 'success',
        message: 'Lukujärjestys päivitetty',
      });
    } catch (error) {
      setUpdateStore({ status: 'error', message: 'Database error' });
    }
  };

  const prevPrev = () => setStep({ value: 'days' });
  const prevPrevId = () => setStep({ value: 'days', id: step.id });

  return (
    <ScheduleCreateStyle
      onSubmit={step.id ? updateDB : saveToDB}
      name="schedule">
      <ModalTitle>Lukujärjestys</ModalTitle>
      <ScheduleTable />
      {step.id ? (
        <ModalButton
          type={'button'}
          ButtonStyle="reset"
          onClick={prevPrevId}
          row={'3'}
          col={'1'}
          aria-label="reset by default">
          Valitse päivät
        </ModalButton>
      ) : (
        <ModalButton
          type={'button'}
          ButtonStyle="reset"
          onClick={prevPrev}
          row={'3'}
          col={'1'}
          aria-label="reset by default">
          Takaisin
        </ModalButton>
      )}
      {step.id ? (
        <ModalButton
          type={'submit'}
          ButtonStyle="update"
          row={'3'}
          col={'2'}
          aria-label="save your profile & schedule">
          Tallentaa
        </ModalButton>
      ) : !error.isError ? (
        <ModalButton
          type={'submit'}
          ButtonStyle="confirm"
          row={'3'}
          col={'2'}
          aria-label="save your profile & schedule">
          Tallentaa
        </ModalButton>
      ) : (
        <ModalButton
          type={'button'}
          ButtonStyle="disable"
          row={'3'}
          col={'2'}
          aria-label="save your profile & schedule">
          Tallentaa
        </ModalButton>
      )}
    </ScheduleCreateStyle>
  );
};

export default ScheduleCreate;
