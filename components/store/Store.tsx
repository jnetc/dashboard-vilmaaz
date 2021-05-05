import React, { createContext, useContext, useEffect, useState } from 'react';
// Types
import { UseContextProps } from '@types';
import { transform, staticValues } from '@Store/utils/helperFunc';
import { fetch } from '@Store/utils/data';

// State
const context: UseContextProps = {
  menu: false,
  autoMovement: true,
  setAutoMovement: x => x,
  timetableEl: null,
  setTimetableEl: x => x,
  trackWidth: 0,
  setTrackWidth: x => x,
  content: [],
  timepoints: [],
  timeline: {
    startLessons: 0,
    endLessons: 0,
    totalTime: 0,
  },
};

// let request = null;
// let objectStore = null;

// Create context
const Context = createContext<UseContextProps>(context);
// Store Hook
export const useStore = () => {
  return useContext(Context);
};
// console.log(fetch);

const Store: React.FC = ({ children }) => {
  const [data, setData] = useState(fetch);
  const [autoMovement, setAutoMovement] = useState(context.autoMovement);
  const [timetableEl, setTimetableEl] = useState(context.timetableEl);
  const [trackWidth, setTrackWidth] = useState(context.trackWidth);
  const [timeline, setTimeline] = useState(context.timeline);

  // console.log(data);

  let content = transform(data, false);
  let timepoints = transform(data);
  // console.log('store ', content, timepoints);

  // let lesson = {
  //   id: 'sdf54we68w5f4s5d4fkjd',
  //   lesson: 'Русский язык',
  //   time: { start: '12:45', end: '13:30' },
  //   duration: 45,
  // };

  // openRequest.onupgradeneeded = () => {
  //   db = openRequest.result;
  //   console.log('upgrade', db);

  //   if (!db.objectStoreNames.contains('lessons')) {
  //     console.log('create');
  //     db.createObjectStore('lessons', { keyPath: 'id' });
  //   }
  // };

  // openRequest.onerror = (ev: any) => {
  //   console.warn({
  //     name: ev.target.error.name,
  //     messgae: ev.target.error.message,
  //   });
  //   // alert(`Error name: ${ev.target.error.name}`);
  // };
  // openRequest.onsuccess = () => {
  //   const db = openRequest.result;

  //   db.onversionchange = () => {
  //     console.log('versio change ', db.version);
  //     db.close();
  //   };
  //   console.log('success ');
  // };

  useEffect(() => {
    setData(fetch);
    setAutoMovement(context.autoMovement);
    setTimeline(staticValues(timepoints));

    // let xx = indexedDatabase(context.data);
    // indexedDatabase(lesson);
    // console.log('useEffect ', xx);

    // console.log('useEffect ', db);
    // let db = null;
  }, [data]);

  // console.log(timeline);

  return (
    <React.StrictMode>
      <Context.Provider
        value={{
          menu: true,
          autoMovement,
          setAutoMovement,
          timetableEl,
          setTimetableEl,
          trackWidth,
          setTrackWidth,
          content,
          timepoints,
          timeline,
        }}>
        {children}
      </Context.Provider>
    </React.StrictMode>
  );
};

export default Store;

// const indexedDatabase = (data: Array<Schedule>) => {
//   let indexDB = null;
//   let openRequest = indexedDB.open('store', 1);

//   //TRANSITION
//   function addData(database: IDBDatabase) {
//     let tx = database.transaction('lessons', 'readwrite');

//     console.log(...data);
//     const lesson = {
//       id: 'h45fsd8fwe65r456f4',
//       data,
//     };

//     let req = tx.objectStore('lessons').add(lesson);

//     req.onsuccess = () => {
//       console.log('Добавил урок в хранилище', req.result);
//     };
//     req.onerror = () => {
//       if (req.error?.name) {
//         console.log('Такой урок уже существует');
//       }
//     };
//   }
//   function getData(database: IDBDatabase) {
//     let tx = database.transaction('lessons', 'readwrite');

//     let req = tx.objectStore('lessons').getAll();

//     req.addEventListener('success', function () {
//       indexDB = req.result;
//       console.log('getData ', indexDB);
//       console.log('Получили уроки с хранилища', req.result);
//     });

//     req.onerror = () => {
//       if (req.error?.name) {
//         console.log('=( ничего не вышло');
//       }
//     };
//   }

//   openRequest.addEventListener('upgradeneeded', function () {
//     const db = openRequest.result;
//     console.log('upgrade', db);

//     if (!db.objectStoreNames.contains('lessons')) {
//       console.log('create');
//       db.createObjectStore('lessons', { keyPath: 'id' });
//     }
//     // addData(db);
//     // getData(db);
//   });

//   openRequest.addEventListener('error', function () {
//     const db = openRequest.error;
//     console.warn({
//       name: db?.name,
//       messgae: db?.message,
//     });
//     // alert(`Error name: ${ev.target.error.name}`);
//   });

//   openRequest.addEventListener('success', function () {
//     const db = openRequest.result;

//     // transaction(db);
//     // addData(db);
//     getData(db);
//     db.onversionchange = () => {
//       console.log('versio change ', db.version);
//       db.close();
//     };
//     console.log('success ');
//   });
//   return indexDB;
// };
