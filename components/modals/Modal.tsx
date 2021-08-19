import { ReactNode, useEffect } from 'react';
import { ModalStyle } from './Modal.style';
// Hook
import { useCommonUsersStore } from '@Hooks/useStores';
// Component
import { ModalCloseBtn } from '@Modals/modal-button/ModalCloseBtn';
// Global const
import { modalAnimationDuration } from '@Constants';

const Modal = ({ children }: { children: ReactNode }) => {
  const { openModal, setOpenModal } = useCommonUsersStore();

  useEffect(() => {
    setTimeout(() => {
      if (openModal.isOpen) {
        setOpenModal({ isOpen: true, action: true });
      }
      return;
    }, 0);
  }, [openModal.isOpen]);

  return openModal.isOpen ? (
    <ModalStyle
      options={{ open: openModal.action, duration: modalAnimationDuration }}>
      <ModalCloseBtn />
      <div className="wrapper">{children}</div>
    </ModalStyle>
  ) : null;
};

export default Modal;
