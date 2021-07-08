import { FC, useEffect, ChangeEvent } from 'react';
// Style
import { ProfileColorPickerStyle } from './ProfileColorPicker.style';
// Global const
import { colors } from '@Const/colors';
// Component
import { ProfileColor } from '@Modals/profile-color-picker/ProfileColor';
//Types
import { Input } from '@Types';
// Hook
import { useCreateProfileStore } from '@Hooks/useStores';

export const ProfileColorPicker: FC = () => {
  const { setColor, color, reset } = useCreateProfileStore();

  const getColor = (ev: ChangeEvent<Input>) => {
    if (!ev.currentTarget.dataset.color) return;
    setColor(ev.currentTarget.dataset.color);
  };

  useEffect(() => {
    setColor('brown');
  }, [reset]);

  const radioBtns = colors.map(clr => {
    return (
      <ProfileColor
        key={clr}
        clr={clr}
        onChange={getColor}
        checked={clr === color}
      />
    );
  });

  return (
    <ProfileColorPickerStyle>
      <legend>Valitse väri</legend>
      {radioBtns}
    </ProfileColorPickerStyle>
  );
};
