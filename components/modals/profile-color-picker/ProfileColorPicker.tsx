import { FC, ChangeEvent } from 'react';
// Style
import { ProfileColorPickerStyle } from './ProfileColorPicker.style';
// Global const
import { colors } from '@Constants';
// Component
import { ProfileColor } from '@Modals/profile-color-picker/ProfileColor';
//Types
import { Input } from '@Types';
// Hook
import { useCommonUsersStore } from '@Hooks/useStores';

export const ProfileColorPicker: FC = () => {
  const { newUser, setNewUser } = useCommonUsersStore();

  const pickColor = (ev: ChangeEvent<Input>) => {
    const colorStr = ev.currentTarget.dataset.color;
    if (!colorStr) return;

    setNewUser(newUser);
    setNewUser(prevState => {
      if (!prevState) return null;

      prevState.color = colorStr;
      return { ...prevState, ...newUser };
    });
  };

  const radioBtns = colors.map(clr => {
    return (
      <ProfileColor
        key={clr.en}
        clr={clr}
        onChange={pickColor}
        checked={clr.en.includes(newUser?.color || 'brown')}
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
