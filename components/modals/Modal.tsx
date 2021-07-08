import { FC } from 'react';
import { ModalStyle } from './Modal.style';
// Hook
import { useGlobalStore } from '@Hooks/useStores';

const Modal: FC = ({ children }) => {
  const { openModal, setOpenModal } = useGlobalStore();
  const cancel = () => setOpenModal(false);
  return (
    <ModalStyle open={openModal}>
      <button id="close-modal" aria-label="close modal" onClick={cancel} />
      <div className="wrapper">{children}</div>
    </ModalStyle>
  );
};

export default Modal;
