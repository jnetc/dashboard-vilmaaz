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
// Global const
import { colors } from '@Constants';
// IndexedDB
import { createNewProfileIndexedDB } from '@IndexedDB';

const ScheduleCreate: FC = () => {
  let { error, profile, setProfile, timetable, setTimetable } = useStepsStore();
  const { setOpenModal } = useMainStore();
  const { setUpdateStore, setStep } = useGlobalStore();

  const [trigger, setTrigger] = useState(false);

  const saveToDB = async (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    const obj = { ...profile, timetable } as ProfileStore;

    setTrigger(!trigger);
    const createProfile = await createNewProfileIndexedDB('schedule', obj);

    console.log(createProfile);
    if (!createProfile.created) {
      return console.log(createProfile.message);
    }
    setProfile({
      id: `${Math.random()}`,
      name: '',
      color: colors[0].en,
      avatar: { name: '', img: '' },
    });
    setTimetable([]);
    setStep('profile');
    setOpenModal(false);
    setUpdateStore({ status: 'added', message: createProfile.message });
    console.log(createProfile.message);
  };

  const prev = () => setStep('days');

  return (
    <ScheduleCreateStyle onSubmit={saveToDB} name="schedule">
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
