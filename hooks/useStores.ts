import { useContext } from 'react';
import { StoreContext } from '@Store';
import { MainContext } from '@Main';
import { TimelineStore } from '@Timeline/Timeline';
import { CreateStepsStore } from '@Modals/steps/Steps';

export const useGlobalStore = () => {
  return useContext(StoreContext);
};

export const useTimelineStore = () => {
  return useContext(TimelineStore);
};

export const useMainStore = () => {
  return useContext(MainContext);
};

export const useStepsStore = () => {
  return useContext(CreateStepsStore);
};
