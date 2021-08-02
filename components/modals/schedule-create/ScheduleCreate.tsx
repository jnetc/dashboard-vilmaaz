import { FC, MouseEvent, useEffect, useState } from 'react';
// Style
import { ScheduleCreateStyle } from './ScheduleCreate.style';
// Component
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
import { ScheduleTable } from '@Modals/schedule-table/ScheduleTable';
import { ModalButton } from '@Modals/modal-button/ModalButton';
// Hook
import { useStepsStore, useMainStore } from '@Hooks/useStores';
// Types
import { Form } from '@Types';
// Global const
import { colors } from '@Constants';

const ScheduleCreate: FC = () => {
  let { setStep, error, profile, setProfile, timetable, setTimetable } =
    useStepsStore();
  const { setOpenModal } = useMainStore();
  const [trigger, setTrigger] = useState(false);
  let [db, setDb] = useState<IDBDatabase | null>(null);

  const getSchedule = (ev: MouseEvent<Form>) => {
    ev.preventDefault();
    const obj = { ...profile, timetable };

    setTrigger(!trigger);
    if (!db) return;
    console.log('trans', db);

    const transition = db.transaction('data', 'readwrite');
    const schedule = transition.objectStore('data');

    const request = schedule.add({ ...obj });

    request.addEventListener('success', () => {
      console.log(`added to the store: ${request.result}`);
      db?.close();
    });

    request.addEventListener('error', () => {
      console.log(`error: ${request.error}`);
    });

    setProfile({
      id: `${Math.random()}`,
      name: '',
      color: colors[0].en,
      avatar: { name: '', img: '' },
    });
    setTimetable([]);
    setStep('profile');
    setOpenModal(false);
    console.log('Created Schedule');
  };

  useEffect(() => {
    let database = indexedDB.open('database', 1);

    database.addEventListener(
      'error',
      (err: IDBOpenDBRequestEventMap['error']) => {
        console.warn('error', err);
      }
    );

    database.addEventListener(
      'success',
      (ev: IDBOpenDBRequestEventMap['success']) => {
        const req = ev.target as IDBRequest<IDBDatabase>;
        db = req.result;
        console.info('success');
        setDb(db);
      }
    );

    database.addEventListener(
      'upgradeneeded',
      (ev: IDBOpenDBRequestEventMap['upgradeneeded']) => {
        const req = ev.target as IDBRequest<IDBDatabase>;
        db = req.result;
        const oldVersion = ev.oldVersion;
        const newVersion = ev.newVersion || req.result.version;
        console.log(`DB upgraded form v.${oldVersion} to v.${newVersion}`);
        if (!db.objectStoreNames.contains('data')) {
          console.log('database created!!!');
          db.createObjectStore('data', {
            keyPath: 'id',
            autoIncrement: true,
          });
        }
        setDb(db);
      }
    );
  }, [trigger]);

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
