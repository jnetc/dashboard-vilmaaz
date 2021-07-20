import { FC } from 'react';
// Style
import {
  ModalButtonConfirmStyle,
  ModalButtonResetStyle,
  ModalButtonUpdateStyle,
  ModalButtonDisableStyle,
} from './ModalButton.style';

type ButtonStyle = 'confirm' | 'reset' | 'update' | 'disable';
interface ModalButtonType {
  ButtonStyle: ButtonStyle;
  onClick?: () => void;
  row: number;
  col: number;
}

export const ModalButton: FC<ModalButtonType> = ({
  children,
  ButtonStyle,
  row,
  col,
  onClick,
}) => {
  switch (ButtonStyle) {
    case 'reset':
      return (
        <ModalButtonResetStyle
          type="button"
          pos={{ row, col }}
          onClick={onClick}>
          {children}
        </ModalButtonResetStyle>
      );
    case 'update':
      return (
        <ModalButtonUpdateStyle type="submit" pos={{ row, col }}>
          {children}
        </ModalButtonUpdateStyle>
      );
    case 'confirm':
      return (
        <ModalButtonConfirmStyle type="submit" pos={{ row, col }}>
          {children}
        </ModalButtonConfirmStyle>
      );
    default:
      return (
        <ModalButtonDisableStyle type="button" pos={{ row, col }} disabled>
          {children}
        </ModalButtonDisableStyle>
      );
  }
};
