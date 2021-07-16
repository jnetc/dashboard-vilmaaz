import { FC, ChangeEvent } from 'react';
// Style
import {
  ProfileColorLabelStyle,
  ProfileColorInputStyle,
} from './ProfileColor.style';
//Types
import { Input } from '@Types';

export interface ProfileColorType {
  clr: { en: string; fi: string };
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
      id={clr.en}
      data-color={clr.en}
      onChange={onChange}
      tabIndex={0}
    />
    <ProfileColorLabelStyle
      htmlFor={clr.en}
      aria-label={`Pick ${clr.fi} profile color`}
      setColor={clr.en}>
      <p>{clr.fi}</p>
    </ProfileColorLabelStyle>
  </>
);
