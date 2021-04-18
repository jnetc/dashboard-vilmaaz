import React, { createContext, useContext, useEffect, useState } from 'react';
// Types
import { ContextProps } from './types';

// State
const context: ContextProps = {
  menu: false,
  data: [
    {
      id: '4a5s45d2as1d45we5',
      name: 'Jouni',
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
        {
          id: 'sdf54we64gjo4s5d4fscc',
          lesson: 'Биология',
          time: { start: '12:30', end: '13:15' },
          duration: 45,
        },
      ],
    },
  ],
};

// Create context
const Context = createContext<ContextProps>(context);
// Store Hook
export const useStore = () => {
  return useContext(Context);
};

const Store: React.FC = ({ children }) => {
  const [data, setData] = useState(context.data);
  // const [menu, setMenu] = useState(context.menu);

  useEffect(() => {
    setData(context.data);
  }, []);
  return (
    <React.StrictMode>
      <Context.Provider value={{ menu: true, data }}>
        {children}
      </Context.Provider>
    </React.StrictMode>
  );
};

export default Store;
