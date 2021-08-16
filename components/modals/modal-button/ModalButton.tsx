import { FC } from 'react';
// Style
import {
  ModalButtonConfirmStyle,
  ModalButtonResetStyle,
  ModalButtonUpdateStyle,
  ModalButtonDisableStyle,
  ModalButtonDeleteStyle,
} from './ModalButton.style';

type ButtonStyle = 'confirm' | 'reset' | 'update' | 'disable' | 'delete';
interface ModalButtonType {
  ButtonStyle: ButtonStyle;
  type: 'button' | 'submit';
  onClick?: () => void;
  row: string;
  col: string;
  selfStretch?: boolean;
  tooltip?: string;
}

export const ModalButton: FC<ModalButtonType> = ({
  children,
  ButtonStyle,
  type,
  row,
  col,
  selfStretch,
  tooltip,
  onClick,
}) => {
  switch (ButtonStyle) {
    case 'reset':
      return (
        <ModalButtonResetStyle
          type={type}
          options={{ row, col, selfStretch }}
          onClick={onClick}>
          {children}
        </ModalButtonResetStyle>
      );
    case 'update':
      return (
        <ModalButtonUpdateStyle type={type} options={{ row, col, selfStretch }}>
          {children}
        </ModalButtonUpdateStyle>
      );
    case 'confirm':
      return (
        <ModalButtonConfirmStyle
          type={type}
          options={{ row, col, selfStretch }}>
          {children}
        </ModalButtonConfirmStyle>
      );
    case 'delete':
      return (
        <ModalButtonDeleteStyle
          type={type}
          options={{ row, col, selfStretch, tooltip }}
          onClick={onClick}
          aria-label={tooltip}>
          {children}
        </ModalButtonDeleteStyle>
      );
    default:
      return (
        <ModalButtonDisableStyle
          type={type}
          options={{ row, col, selfStretch }}
          disabled>
          {children}
        </ModalButtonDisableStyle>
      );
  }
};
