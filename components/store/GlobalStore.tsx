import {
  StrictMode,
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
// Types
import { GlobalStoreProps } from '@types';

// State
const state: GlobalStoreProps = {
  openMenu: true,
  setOpenMenu: boolean => boolean,
  mainPaddingLeft: 0,
  setMainPaddingLeft: num => num,
};

// let request = null;
// let objectStore = null;

// Create context
const GlobalContext = createContext(state);
// Store Hook
export const useGlobalStore = () => {
  return useContext(GlobalContext);
};

const GlobalStore: FC = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(state.openMenu);
  const [mainPaddingLeft, setMainPaddingLeft] = useState(state.mainPaddingLeft);

  useEffect(() => {
    const isHidden = window.localStorage.getItem('nav-menu');
    if (isHidden) return setOpenMenu(JSON.parse(isHidden));
    if (!isHidden) {
      return window.localStorage.setItem('nav-menu', JSON.stringify(openMenu));
    }
  }, []);

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

  return (
    <StrictMode>
      <GlobalContext.Provider
        value={{
          openMenu,
          setOpenMenu,
          mainPaddingLeft,
          setMainPaddingLeft,
        }}>
        {children}
      </GlobalContext.Provider>
    </StrictMode>
  );
};

export default GlobalStore;

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
