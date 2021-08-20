import { FC } from 'react';
import { ModalCloseBtnStyle } from './ModalCloseBtn.style';
// Hook
import { useCommonUsersStore } from '@Hooks/useStores';
// Consts
import { modalAnimationDuration } from '@Constants';

export const ModalCloseBtn: FC = () => {
  const { setNewUser, setOpenModal } = useCommonUsersStore();
  const closeModalWindow = () => {
    setOpenModal({ isOpen: true, action: false });
    setTimeout(() => {
      setOpenModal({ isOpen: false, action: false });
      setNewUser(null);
    }, modalAnimationDuration);
  };
  return (
    <ModalCloseBtnStyle
      id="close-modal"
      aria-label="close modal"
      onClick={closeModalWindow}
    />
  );
};
