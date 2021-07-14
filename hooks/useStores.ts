import { useContext } from 'react';
import { MainContext } from '@Store';
import { TimelineStore } from '@Timeline/Timeline';
// import { CreateProfileStore } from '@Modals/create-profile/CreateProfile';
import { CreateStepsStore } from '@Modals/steps/Steps';

export const useGlobalStore = () => {
  return useContext(MainContext);
};

export const useTimelineStore = () => {
  return useContext(TimelineStore);
};

// export const useCreateProfileStore = () => {
//   return useContext(CreateProfileStore);
// };

export const useStepsStore = () => {
  return useContext(CreateStepsStore);
};
