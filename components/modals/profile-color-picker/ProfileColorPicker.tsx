import { FC, ChangeEvent, useState, useEffect } from 'react';
// Style
import { ProfileColorPickerStyle } from './ProfileColorPicker.style';
// Global const
import { colors } from '@Const/colors';
// Component
import { ProfileColor } from '@Modals/profile-color-picker/ProfileColor';
//Types
import { Input } from '@Types';
// Hook
import { useStepsStore } from '@Hooks/useStores';

export const ProfileColorPicker: FC<{ reset: boolean }> = ({ reset }) => {
  const { profile, setProfile } = useStepsStore();
  const [color, setColor] = useState(profile.color);

  const pickColor = (ev: ChangeEvent<Input>) => {
    const colorStr = ev.currentTarget.dataset.color;
    if (!colorStr) return;
    setColor(colorStr);
  };

  useEffect(() => {
    profile.color = color;
    setProfile(profile);
  }, [color]);

  // Reset to default
  useEffect(() => {
    if (profile.color === colors[0].en) setColor(colors[0].en);
  }, [reset]);

  const radioBtns = colors.map(clr => {
    return (
      <ProfileColor
        key={clr.en}
        clr={clr}
        onChange={pickColor}
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
