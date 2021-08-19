import { FC, MouseEvent, useState } from 'react';
// Style
import { ScheduleCreateStyle } from './ScheduleCreate.style';
// Component
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
// Styles
import {
  Titleh1Style,
  Titleh4Style,
} from '@Modals/modal-title/ModalTitle.style';
import { ScheduleTable } from '@Modals/schedule-table/ScheduleTable';
import { ModalButton } from '@Modals/modal-button/ModalButton';
// Hook
import { useCommonUsersStore, useGlobalStore } from '@Hooks/useStores';
// Types
import { Form } from '@Types';
// IndexedDB
import { createNewProfileIndexedDB, updateProfileIndexedDB } from '@IndexedDB';
// Global const
import { modalAnimationDuration } from '@Constants';

const ScheduleCreate: FC = () => {
  const { error, setOpenModal, step, setStep, newUser, setNewUser } =
    useCommonUsersStore();
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
      }

      setOpenModal({ isOpen: true, action: false });
      setTimeout(() => {
        setNewUser(null);
        setStep({ value: 'profile' });
        setOpenModal({ isOpen: false, action: false });
        setUpdateStore({ status: 'success', message: 'Tilisi on tallennettu' });
      }, modalAnimationDuration);
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
      }
      setOpenModal({ isOpen: true, action: false });
      setTimeout(() => {
        setNewUser(null);
        setStep({ value: 'profile' });
        setOpenModal({ isOpen: false, action: false });
        setUpdateStore({
          status: 'success',
          message: 'Lukujärjestys päivitetty',
        });
      }, 300);
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
      <ModalTitle>
        <Titleh1Style>Lukujärjestys</Titleh1Style>
        <Titleh4Style>
          *Jos kirjoita "tauko", "ruokatauko" tai "lounas" tämä solu visuaalinen
          vaihtuu lukujärjestyksessä.
        </Titleh4Style>
      </ModalTitle>
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
