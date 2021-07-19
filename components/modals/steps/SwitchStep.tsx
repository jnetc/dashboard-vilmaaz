import { FC } from 'react';
import { useStepsStore } from '@Hooks/useStores';
// Components
import ProfileCreate from '@Modals/profile-create/ProfileCreate';
import SelectDays from '@Modals/select-days/SelectDays';
import ScheduleCreate from '@Modals/schedule-create/ScheduleCreate';

export const SwitchStep: FC = () => {
  const { step } = useStepsStore();

  switch (step) {
    case 1:
      return <ProfileCreate />;
    case 2:
      return <SelectDays />;
    default:
      return <ScheduleCreate />;
  }
};
