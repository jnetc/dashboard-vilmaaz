import { useContext } from 'react';
import { MainContext } from '@Store';
import { timetableStore } from '@Timeline/Timeline';

export const useGlobalStore = () => {
  return useContext(MainContext);
};

export const useTimelineStore = () => {
  return useContext(timetableStore);
};
