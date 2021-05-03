import React, { createContext, useContext, useEffect, useState } from 'react';
// Types
import { ContextProps } from './types';

// State
const context: ContextProps = {
  menu: false,
  autoMovement: true,
  setAutoMovement: x => x,
  timetableEl: null,
  setTimetableEl: x => x,
  data: [
    {
      id: '4a5s45d2as1d45we5',
      name: 'Jouni',
      primaryColor: 'oldrose',
      secondaryColor: 'oldrosedark',
      avatar: '/img',
      order: 1,
      timetable: [
        {
          id: 'sdf54we68w5f4s5d8fsj3',
          lesson: 'Математика',
          time: { start: '9:00', end: '9:45' },
          duration: 45,
        },
        {
          id: 'sdf54we68w5f475d4fsl7',
          lesson: 'Математика',
          time: { start: '9:45', end: '10:30' },
          duration: 45,
        },
        {
          id: 'sdf54we68w5f4s5d4fsd4',
          lesson: 'Английский язык',
          time: { start: '10:30', end: '11:15' },
          duration: 45,
        },
        {
          id: 'sdf54w588w5f4s5d4fsz2',
          lesson: 'Физика',
          time: { start: '11:15', end: '12:30' },
          duration: 45,
        },
        {
          id: 'sdf54we68yti4s5d4fsu6',
          lesson: 'Пение',
          time: { start: '12:30', end: '13:15' },
          duration: 45,
        },
        {
          id: 'sdf54we64gjo4s5d4fsyt',
          lesson: 'Литература',
          time: { start: '13:15', end: '14:00' },
          duration: 45,
        },
        {
          id: 'sdf54we57h5f4s5d4fs15',
          lesson: 'История',
          time: { start: '14:00', end: '14:45' },
          duration: 45,
        },
      ],
    },
    {
      id: '4a5s45d2as1d45whf',
      name: 'Suvi',
      primaryColor: 'polishedpine',
      secondaryColor: 'polishedpinedark',
      avatar: '/img',
      order: 2,
      timetable: [
        {
          id: 'sdf54we68w5f4s5d8fsy6',
          lesson: 'Литература',
          time: { start: '8:30', end: '9:00' },
          duration: 45,
        },
        {
          id: 'sdf54we68w5f475d4fsi8',
          lesson: 'Домоводство',
          time: { start: '9:00', end: '9:45' },
          duration: 45,
        },
        {
          id: 'sdf54we68w5f4s5d4fs8k',
          lesson: 'Русский язык',
          time: { start: '9:45', end: '10:30' },
          duration: 45,
        },
        {
          id: 'sdf54w588w5f4s5d4fs11',
          lesson: 'Русский язык',
          time: { start: '10:30', end: '11:45' },
          duration: 45,
        },
        {
          id: 'sdf54we68yti4s5d4fs0f',
          lesson: 'География',
          time: { start: '11:45', end: '12:30' },
          duration: 45,
        },
        {
          id: 'sdf54we64gjo4s5d4fss2',
          lesson: 'Биология',
          time: { start: '12:30', end: '13:15' },
          duration: 45,
        },
      ],
    },
    {
      id: '4a5s45d2as1d455hj',
      name: 'Marja-Maju',
      primaryColor: 'bringpink',
      secondaryColor: 'bringpinkdark',
      avatar: '/img',
      order: 3,
      timetable: [
        {
          id: 'sdf54we68w5f4s5d8fssw',
          lesson: 'Литература',
          time: { start: '8:15', end: '9:00' },
          duration: 45,
        },
        {
          id: 'sdf54we68w5f475d4fs3g',
          lesson: 'Домоводство',
          time: { start: '9:00', end: '9:45' },
          duration: 45,
        },
        {
          id: 'sdf54we68w5f4s5d4fsgn',
          lesson: 'Русский язык',
          time: { start: '9:45', end: '10:30' },
          duration: 45,
        },
        {
          id: 'sdf54w588w5f4s5d4fsjr',
          lesson: 'Русский язык',
          time: { start: '10:30', end: '11:45' },
          duration: 45,
        },
        {
          id: 'sdf54we68yti4s5d4fsty',
          lesson: 'География',
          time: { start: '11:45', end: '12:30' },
          duration: 45,
        },
      ],
    },
    {
      id: '4a5s45d2as1d45rhb',
      name: 'Katja-Milla',
      primaryColor: 'orhid',
      secondaryColor: 'orhiddark',
      avatar: '/img',
      order: 4,
      timetable: [
        {
          id: 'sdf54we68w5f4s5d8ftrb',
          lesson: 'Литература',
          time: { start: '10:15', end: '11:00' },
          duration: 45,
        },
        {
          id: 'sdf54we68w5f475d4fpb6',
          lesson: 'Домоводство',
          time: { start: '11:00', end: '11:45' },
          duration: 45,
        },
        {
          id: 'sdf54we68w5f4s5d4fq6v',
          lesson: 'Русский язык',
          time: { start: '11:45', end: '12:30' },
          duration: 45,
        },
        {
          id: 'sdf54w588w5f4s5d4f36f',
          lesson: 'Русский язык',
          time: { start: '12:30', end: '13:15' },
          duration: 45,
        },
      ],
    },
    {
      id: '4a5s45d2as1d45nvh',
      name: 'Temu-Pekka',
      primaryColor: 'greenbluecayola',
      secondaryColor: 'greenbluecayoladark',
      avatar: '/img',
      order: 5,
      timetable: [
        {
          id: 'sdf54we68w5f4s5d8f77y',
          lesson: 'Литература',
          time: { start: '11:15', end: '12:00' },
          duration: 45,
        },
        {
          id: 'sdf54we68w5f475d4fhj7',
          lesson: 'Домоводство',
          time: { start: '12:00', end: '12:45' },
          duration: 45,
        },
        {
          id: 'sdf54we68w5f4s5d4fkjd',
          lesson: 'Русский язык',
          time: { start: '12:45', end: '13:30' },
          duration: 45,
        },
      ],
    },
    // {
    //   id: '4a5s45d2as1d45we50',
    //   name: 'Jouni',
    //   primaryColor: 'hsl(8, 40%, 70%)',
    //   secondaryColor: 'hsl(8, 20%, 30%)',
    //   timetable: [
    //     {
    //       id: 'sdf54we68w5f4s5d8fsj3',
    //       lesson: 'Математика',
    //       time: { start: '9:00', end: '9:45' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we68w5f475d4fsl7',
    //       lesson: 'Математика',
    //       time: { start: '9:45', end: '10:30' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we68w5f4s5d4fsd4',
    //       lesson: 'Английский язык',
    //       time: { start: '10:30', end: '11:15' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54w588w5f4s5d4fsz2',
    //       lesson: 'Физика',
    //       time: { start: '11:15', end: '12:30' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we68yti4s5d4fsu6',
    //       lesson: 'Пение',
    //       time: { start: '12:30', end: '13:15' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we64gjo4s5d4fsyt',
    //       lesson: 'Литература',
    //       time: { start: '13:15', end: '14:00' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we57h5f4s5d4fs15',
    //       lesson: 'История',
    //       time: { start: '14:00', end: '14:45' },
    //       duration: 45,
    //     },
    //   ],
    // },
    // {
    //   id: '4a5s45d2as1d45whf0',
    //   name: 'Suvi',
    //   primaryColor: 'hsl(157, 25%, 60%)',
    //   secondaryColor: 'hsl(157, 5%, 30%)',
    //   timetable: [
    //     {
    //       id: 'sdf54we68w5f4s5d8fsy6',
    //       lesson: 'Литература',
    //       time: { start: '8:30', end: '9:00' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we68w5f475d4fsi8',
    //       lesson: 'Домоводство',
    //       time: { start: '9:00', end: '9:45' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we68w5f4s5d4fs8k',
    //       lesson: 'Русский язык',
    //       time: { start: '9:45', end: '10:30' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54w588w5f4s5d4fs11',
    //       lesson: 'Русский язык',
    //       time: { start: '10:30', end: '11:45' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we68yti4s5d4fs0f',
    //       lesson: 'География',
    //       time: { start: '11:45', end: '12:30' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we64gjo4s5d4fss2',
    //       lesson: 'Биология',
    //       time: { start: '12:30', end: '13:15' },
    //       duration: 45,
    //     },
    //   ],
    // },
    // {
    //   id: '4a5s45d2as1d455hj0',
    //   name: 'Marja-Maju',
    //   primaryColor: 'hsl(346, 90%, 75%)',
    //   secondaryColor: 'hsl(346, 50%, 30%)',
    //   timetable: [
    //     {
    //       id: 'sdf54we68w5f4s5d8fssw',
    //       lesson: 'Литература',
    //       time: { start: '8:15', end: '9:00' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we68w5f475d4fs3g',
    //       lesson: 'Домоводство',
    //       time: { start: '9:00', end: '9:45' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we68w5f4s5d4fsgn',
    //       lesson: 'Русский язык',
    //       time: { start: '9:45', end: '10:30' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54w588w5f4s5d4fsjr',
    //       lesson: 'Русский язык',
    //       time: { start: '10:30', end: '11:45' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we68yti4s5d4fsty',
    //       lesson: 'География',
    //       time: { start: '11:45', end: '12:30' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we64gjo4s5d4fscc',
    //       lesson: 'Биология',
    //       time: { start: '12:30', end: '13:15' },
    //       duration: 45,
    //     },
    //   ],
    // },
    // {
    //   id: '4a5s45d2as1d45rhb0',
    //   name: 'Katja-Milla',
    //   primaryColor: 'hsl(307, 60%, 60%)',
    //   secondaryColor: 'hsl(307, 40%, 30%)',
    //   timetable: [
    //     {
    //       id: 'sdf54we68w5f4s5d8ftrb',
    //       lesson: 'Литература',
    //       time: { start: '10:15', end: '11:00' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we68w5f475d4fpb6',
    //       lesson: 'Домоводство',
    //       time: { start: '11:00', end: '11:45' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we68w5f4s5d4fq6v',
    //       lesson: 'Русский язык',
    //       time: { start: '11:45', end: '12:30' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54w588w5f4s5d4f36f',
    //       lesson: 'Русский язык',
    //       time: { start: '12:30', end: '13:15' },
    //       duration: 45,
    //     },
    //   ],
    // },
    // {
    //   id: '4a5s45d2as1d45nvh0',
    //   name: 'Temu-Pekka',
    //   primaryColor: 'hsl(207, 55%, 65%)',
    //   secondaryColor: 'hsl(207, 35%, 25%)',
    //   timetable: [
    //     {
    //       id: 'sdf54we68w5f4s5d8f77y',
    //       lesson: 'Литература',
    //       time: { start: '11:15', end: '12:00' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we68w5f475d4fhj7',
    //       lesson: 'Домоводство',
    //       time: { start: '12:00', end: '12:45' },
    //       duration: 45,
    //     },
    //     {
    //       id: 'sdf54we68w5f4s5d4fkjd',
    //       lesson: 'Русский язык',
    //       time: { start: '12:45', end: '13:30' },
    //       duration: 45,
    //     },
    //   ],
    // },
  ],
};

// let request = null;
// let objectStore = null;

// Create context
const Context = createContext<ContextProps>(context);
// Store Hook
export const useStore = () => {
  return useContext(Context);
};

const Store: React.FC = ({ children }) => {
  const [data, setData] = useState(context.data);
  const [autoMovement, setAutoMovement] = useState(context.autoMovement);
  const [timetableEl, setTimetableEl] = useState(context.timetableEl);

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
    setData(context.data);
    setAutoMovement(context.autoMovement);

    // let xx = indexedDatabase(context.data);
    // indexedDatabase(lesson);
    // console.log('useEffect ', xx);

    // console.log('useEffect ', db);
    // let db = null;
  }, [data]);

  // console.log(lessons);

  return (
    <React.StrictMode>
      <Context.Provider
        value={{
          menu: true,
          autoMovement,
          setAutoMovement,
          timetableEl,
          setTimetableEl,
          data,
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
