import { FC } from 'react';
import { AddProfileButtonStyle } from './AddProfileButton.style';
// Hook
import { useCommonUsersStore } from '@Hooks/useStores';
// Global const
import { colors } from '@Constants';

export const AddProfileButton: FC = () => {
  const { setOpenModal, setStep, setNewUser } = useCommonUsersStore();
  const open = () => {
    setOpenModal({ isOpen: true, action: false });
    setStep({ value: 'profile' });
    setNewUser({
      id: `${Math.random()}`,
      name: '',
      color: colors[0].en,
      avatar: { name: '', img: '' },
      timetable: [],
    });
  };
  return <AddProfileButtonStyle onClick={open}></AddProfileButtonStyle>;
};
