import { FC, createContext, useEffect, useState } from 'react';

// Types
import { Schedule2, StoreCtxProps, LessonsType, TimePosition } from '@Types';
import { transform, staticValues, dateFormat } from 'utils/helperFunctions';

// import { database } from './data';
import { getAllFromIndexedDB } from '@IndexedDB';

const state: StoreCtxProps = {
  updateStore: { status: 'default' },
  setUpdateStore: update => update,
  dayOfWeek: '',
  setDayOfWeek: day => day,
  step: 'profile',
  setStep: step => step,
  today: true,
  activeDay: false,
  content: [],
  timepoints: [],
  timeline: {
    startLessons: 0,
    endLessons: 0,
    totalTime: 0,
    timelineWidth: 0,
  },
};
// Global context
export const StoreContext = createContext(state);

const Store: FC = ({ children }) => {
  const [updateStore, setUpdateStore] = useState(state.updateStore);
  const [data, setData] = useState<Array<Schedule2>>([]);
  const [dayOfWeek, setDayOfWeek] = useState(state.dayOfWeek);
  const [step, setStep] = useState(state.step);
  // const [refresh, setRefresh] = useState(false);

  //
  //
  //
  //
  //
  //
  //
  // const getDataAll = (storeName: string, idb: IDBDatabase) => {
  //   const trans = idb.transaction(storeName, 'readonly');
  //   // If everything was fine
  //   trans.oncomplete = (ev: IDBOpenDBRequestEventMap['success']) => {
  //     const req = ev.target as IDBRequest<IDBDatabase>;
  //     setRefresh(!refresh);

  //     console.log(
  //       `Transaction for reading all objects is complite: v${req.result}`
  //     );
  //   };

  //   // Define store name
  //   const store = trans.objectStore(storeName);
  //   const res = store.getAll();
  //   // Handler if got all data
  //   res.onsuccess = (ev: IDBRequestEventMap['success']) => {
  //     const req = ev.target as IDBRequest<IDBDatabase>;
  //     console.log('Get data to store state', req.result);
  //     const resetType = req.result as unknown;
  //     const arr = resetType as Array<Schedule2>;
  //     setData(arr);
  //   };
  //   // Handler if got an error
  //   res.onerror = (ev: IDBRequestEventMap['error']) => {
  //     console.warn(`error: ${ev}`);
  //   };
  // };

  // const getConnect = (
  //   dbName: string,
  //   storeName: string,
  //   cb: (val: IDBDatabase | string) => void
  // ) => {
  //   let db: IDBDatabase | null;
  //   let database = indexedDB.open(dbName, 3);

  //   database.addEventListener(
  //     'error',
  //     (err: IDBOpenDBRequestEventMap['error']) => {
  //       // console.warn('error', err);
  //       cb(`Error indexedDB: ${err}`);
  //     }
  //   );

  //   database.addEventListener(
  //     'success',
  //     (ev: IDBOpenDBRequestEventMap['success']) => {
  //       const req = ev.target as IDBRequest<IDBDatabase>;
  //       db = req.result;
  //       console.info('Connection success');
  //       cb(db);
  //     }
  //   );

  //   database.addEventListener(
  //     'upgradeneeded',
  //     (ev: IDBOpenDBRequestEventMap['upgradeneeded']) => {
  //       const req = ev.target as IDBRequest<IDBDatabase>;
  //       db = req.result;
  //       // indexedID version
  //       const oldVersion = ev.oldVersion;
  //       const newVersion = ev.newVersion || req.result.version;

  //       console.log(`DB upgraded form v.${oldVersion} to v.${newVersion}`);
  //       // Checking an existing store
  //       if (!db.objectStoreNames.contains(storeName)) {
  //         console.info('database created!!!');
  //         db.createObjectStore(storeName, {
  //           keyPath: 'id',
  //           autoIncrement: true,
  //         });
  //       }
  //     }
  //   );
  // };

  useEffect(() => {
    (async () => {
      const data = await getAllFromIndexedDB('schedule');
      setData(data);
    })();

    // const status = setTimeout(() => {
    //   setUpdateStore({ status: 'default' });
    // }, 3000);
    console.log('status', updateStore);

    // return () => clearTimeout(status);
  }, [dayOfWeek, updateStore]);

  //
  //
  //
  //
  //
  //
  //
  const today = dateFormat({ weekday: 'long' });
  // Manual check day
  // let day = 'perjantai';
  const day = dayOfWeek;

  const content = transform(data, day, false) as LessonsType[];
  const timepoints = transform(data, day) as Array<TimePosition>;
  const timeline = staticValues(timepoints);
  const isActiveDay = timepoints.length !== 0;
  const isToday = today === dayOfWeek;

  // useEffect(() => {
  //   getConnect('vilmazz', 'schedule', data => {
  //     // console.log('data funt', val);
  //     if (typeof data === 'string') {
  //       return data;
  //     }
  //     setIDB(data);
  //     getDataAll('schedule', data);
  //   });
  // }, []);

  // useEffect(() => {
  //   // If necessary time points for lessons
  //   // const setHours = new Set([...hours, ...timepoints]);
  //   // const getHoursPoints = hourPositions([...setHours]);

  //   // setData(database);

  //   console.log('timepoints', timepoints, content);

  //   const getHoursPoints = timepoints.length !== 0 ? hourPositions(hours) : [];

  //   setTimelineHours([...getHoursPoints]);
  //   // setTimeline(staticValues(timepoints));
  // }, [dayOfWeek]);

  useEffect(() => {
    setDayOfWeek(today);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        updateStore,
        setUpdateStore,
        dayOfWeek,
        setDayOfWeek,
        step,
        setStep,
        today: isToday,
        activeDay: isActiveDay,
        content,
        timepoints,
        timeline,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
