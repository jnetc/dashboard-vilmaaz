import { ReactNode } from 'react';
import { ModalStyle } from './Modal.style';
// Hook
import { useMainStore } from '@Hooks/useStores';
import { ModalCloseBtn } from '@Modals/modal-button/ModalCloseBtn';

const Modal = ({ children }: { children: ReactNode }) => {
  const { openModal, setOpenModal } = useMainStore();

  return openModal ? (
    <ModalStyle>
      <ModalCloseBtn setOpenModal={setOpenModal} />
      <div className="wrapper">{children}</div>
    </ModalStyle>
  ) : null;
};

export default Modal;
