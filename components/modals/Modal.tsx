import { ReactNode } from 'react';
import { ModalStyle } from './Modal.style';
// Hook
import { useMainStore } from '@Hooks/useStores';

const Modal = ({ children }: { children: ReactNode }) => {
  const { openModal, setOpenModal } = useMainStore();

  return openModal ? (
    <ModalStyle>
      <button
        id="close-modal"
        aria-label="close modal"
        onClick={() => setOpenModal(false)}
      />
      <div className="wrapper">{children}</div>
    </ModalStyle>
  ) : null;
};

export default Modal;
