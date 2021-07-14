import { FC } from 'react';
// Style
import {
  ProfileButtonConfirmStyle,
  ProfileButtonResetStyle,
  ProfileButtonUpdateStyle,
  ProfileButtonDisableStyle,
} from './ProfileButton.style';

type ButtonStyle = 'confirm' | 'reset' | 'update' | 'disable';
interface ProfileButtonType {
  ButtonStyle: ButtonStyle;
  onClick?: () => void;
  row: number;
  col: number;
}

export const ProfileButton: FC<ProfileButtonType> = ({
  children,
  ButtonStyle,
  row,
  col,
  onClick,
}) => {
  switch (ButtonStyle) {
    case 'reset':
      return (
        <ProfileButtonResetStyle
          type="button"
          pos={{ row, col }}
          onClick={onClick}>
          {children}
        </ProfileButtonResetStyle>
      );
    case 'update':
      return (
        <ProfileButtonUpdateStyle type="submit" pos={{ row, col }}>
          {children}
        </ProfileButtonUpdateStyle>
      );
    case 'disable':
      return (
        <ProfileButtonDisableStyle type="button" pos={{ row, col }} disabled>
          {children}
        </ProfileButtonDisableStyle>
      );
    default:
      return (
        <ProfileButtonConfirmStyle type="submit" pos={{ row, col }}>
          {children}
        </ProfileButtonConfirmStyle>
      );
  }
};
