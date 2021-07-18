import { FC } from 'react';
import { AddProfileButtonStyle } from './AddProfileButton.style';
// Hook
import { useMainStore } from '@Hooks/useStores';

export const AddProfileButton: FC = () => {
  const { openModal, setOpenModal } = useMainStore();
  const open = () => {
    setOpenModal(!openModal);
  };
  return <AddProfileButtonStyle onClick={open}></AddProfileButtonStyle>;
};
