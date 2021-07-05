import { FC } from 'react';
import { ModalStyle } from './Modal.style';
// Hook
import { useGlobalStore } from '@Hooks/useStores';

const Modal: FC = ({ children }) => {
  const { openModal } = useGlobalStore();
  return (
    <ModalStyle open={openModal}>
      <div className="wrapper">{children}</div>
    </ModalStyle>
  );
};

export default Modal;
