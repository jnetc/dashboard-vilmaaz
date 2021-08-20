import { FC } from 'react';
// Style
import { ModalHeaderStyle } from './ModalTitle.style';

export const ModalTitle: FC = ({ children }) => {
  return <ModalHeaderStyle>{children}</ModalHeaderStyle>;
};
