import { FC } from 'react';
// Style
import {
  ProfileButtonConfirmStyle,
  ProfileButtonCancelStyle,
  ProfileButtonUpdateStyle,
} from './ProfileButton.style';

type ButtonStyle = 'confirm' | 'cancel' | 'update';
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
    case 'cancel':
      return (
        <ProfileButtonCancelStyle type="button" onClick={onClick}>
          {children}
        </ProfileButtonCancelStyle>
      );
    case 'update':
      return (
        <ProfileButtonUpdateStyle type="submit">
          {children}
        </ProfileButtonUpdateStyle>
      );
    default:
      return (
        <ProfileButtonConfirmStyle type="submit">
          {children}
        </ProfileButtonConfirmStyle>
      );
  }
};
