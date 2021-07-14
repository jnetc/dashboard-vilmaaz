import { FC } from 'react';
// Style
import { ModalTitleStyle } from './ModalTitle.style';

export const ModalTitle: FC = ({ children }) => {
  return <ModalTitleStyle>{children}</ModalTitleStyle>;
};
