import { FC } from 'react';
import { useCommonUsersStore } from '@Hooks/useStores';
// Components
import ProfileCreate from '@Modals/profile-create/ProfileCreate';
import SelectDays from '@Modals/select-days/SelectDays';
import ScheduleCreate from '@Modals/schedule-create/ScheduleCreate';

export const SwitchStep: FC = () => {
  const { step } = useCommonUsersStore();

  switch (step.value) {
    case 'profile':
      return <ProfileCreate />;
    case 'days':
      return <SelectDays />;
    case 'schedule':
      return <ScheduleCreate />;
    default:
      return null;
  }
};
