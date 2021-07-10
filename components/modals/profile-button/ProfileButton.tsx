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
}

export const ProfileButton: FC<ProfileButtonType> = ({
  children,
  ButtonStyle,
  onClick,
}) => {
  switch (ButtonStyle) {
    case 'reset':
      return (
        <ProfileButtonResetStyle type="button" onClick={onClick}>
          {children}
        </ProfileButtonResetStyle>
      );
    case 'update':
      return (
        <ProfileButtonUpdateStyle type="submit">
          {children}
        </ProfileButtonUpdateStyle>
      );
    case 'disable':
      return (
        <ProfileButtonDisableStyle type="button" disabled>
          {children}
        </ProfileButtonDisableStyle>
      );
    default:
      return (
        <ProfileButtonConfirmStyle type="submit">
          {children}
        </ProfileButtonConfirmStyle>
      );
  }
};
