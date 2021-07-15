import {
  FC,
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
// Style
import { ProfileColorPickerStyle } from './ProfileColorPicker.style';
// Global const
import { colors } from '@Const/colors';
// Component
import { ProfileColor } from '@Modals/profile-color-picker/ProfileColor';
//Types
import { Input } from '@Types';

interface GetProfileColor {
  getColor: Dispatch<SetStateAction<string>>;
  color: string;
}

export const ProfileColorPicker: FC<GetProfileColor> = ({
  getColor,
  color,
}) => {
  const pickColor = useCallback((ev: ChangeEvent<Input>) => {
    const colorStr = ev.currentTarget.dataset.color;
    if (!colorStr) return;

    getColor(colorStr);
    window.localStorage.setItem('color', colorStr);
  }, []);

  const pressEnter = useCallback((ev: KeyboardEvent<Input>) => {
    if (ev.key !== 'Enter') return;

    const colorStr = ev.currentTarget.dataset.color;
    if (!colorStr) return;

    getColor(colorStr);
    window.localStorage.setItem('color', colorStr);
  }, []);

  const radioBtns = colors.map(clr => {
    return (
      <ProfileColor
        key={clr.en}
        clr={clr}
        onChange={pickColor}
        onKeyPress={pressEnter}
        checked={clr.en === color}
      />
    );
  });

  return (
    <ProfileColorPickerStyle>
      <legend>Valitse tilin elementit väri</legend>
      {radioBtns}
    </ProfileColorPickerStyle>
  );
};
