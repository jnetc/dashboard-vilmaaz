import { FC, ChangeEvent } from 'react';
// Style
import {
  ProfileColorLabelStyle,
  ProfileColorInputStyle,
} from './ProfileColor.style';
//Types
import { Input } from '@Types';

export interface ProfileColorType {
  clr: string;
  checked?: boolean;
  onChange: (ev: ChangeEvent<Input>) => void;
}

export const ProfileColor: FC<ProfileColorType> = ({
  clr,
  checked,
  onChange,
}) => (
  <>
    <ProfileColorInputStyle
      type="radio"
      name="color"
      checked={checked}
      id={clr}
      data-color={clr}
      onChange={onChange}
    />
    <ProfileColorLabelStyle
      htmlFor={clr}
      aria-label={`Pick ${clr} profile color`}
    />
  </>
);
