import { FC } from 'react';
import { ModalCloseBtnStyle } from './ModalCloseBtn.style';

interface CloseBtnType {
  setOpenModal: (open: boolean) => void;
}

export const ModalCloseBtn: FC<CloseBtnType> = ({ setOpenModal }) => {
  return (
    <ModalCloseBtnStyle
      id="close-modal"
      aria-label="close modal"
      onClick={() => setOpenModal(false)}
    />
  );
};
