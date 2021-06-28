import { useContext } from 'react';
import { MainContext } from '@Store/Store';
import { timetableStore } from '@Timeline/Timetable';

export const useStore = () => {
  return useContext(MainContext);
};

export const useTimelineStore = () => {
  return useContext(timetableStore);
};
