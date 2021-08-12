import { FC } from 'react';
import { ModalCloseBtnStyle } from './ModalCloseBtn.style';
// Hook
import { useMainStore } from '@Hooks/useStores';

interface CloseBtnType {
  setOpenModal: (open: boolean) => void;
}

export const ModalCloseBtn: FC<CloseBtnType> = ({ setOpenModal }) => {
  const { setNewUser } = useMainStore();
  const closeModalWindow = () => {
    setOpenModal(false);
    setNewUser(null);
  };
  return (
    <ModalCloseBtnStyle
      id="close-modal"
      aria-label="close modal"
      onClick={closeModalWindow}
    />
  );
};
