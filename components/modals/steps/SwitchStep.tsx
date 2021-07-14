import { FC } from 'react';
import { useStepsStore } from '@Hooks/useStores';
// Components
import CreateProfile from '@Modals/create-profile/CreateProfile';
import SelectDays from '@Modals/select-days/SelectDays';
import CreateSchedule from '@Modals/create-schedule/CreateSchedule';

export const SwitchStep: FC = () => {
  const { step } = useStepsStore();

  switch (step) {
    case 1:
      return <CreateProfile />;
    case 2:
      return <SelectDays />;
    default:
      return <CreateSchedule />;
  }
};
