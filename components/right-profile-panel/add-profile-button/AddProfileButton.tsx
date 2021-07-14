import { FC } from 'react';
import { AddProfileButtonStyle } from './AddProfileButton.style';
// Hook
import { useGlobalStore } from '@Hooks/useStores';

export const AddProfileButton: FC = () => {
  const { openModal, setOpenModal } = useGlobalStore();
  const open = () => {
    setOpenModal(!openModal);
  };
  return <AddProfileButtonStyle onClick={open}></AddProfileButtonStyle>;
};
