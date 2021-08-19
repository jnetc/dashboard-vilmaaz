import { useContext } from 'react';
import { StoreContext } from '@Store';
import { MainContext } from '@Main';
import { TimelineStore } from '@Timeline/Timeline';
import { CreateCommonUsersStore } from '@Modals/steps/CommonUsers';

export const useGlobalStore = () => {
  return useContext(StoreContext);
};

export const useTimelineStore = () => {
  return useContext(TimelineStore);
};

export const useMainStore = () => {
  return useContext(MainContext);
};

export const useCommonUsersStore = () => {
  return useContext(CreateCommonUsersStore);
};
