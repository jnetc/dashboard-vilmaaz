import { FC, ChangeEvent, useEffect } from 'react';
// Style
import { ProfileNameStyle } from './ProfileName.style';
// Types
import { Input } from '@Types';
// Helper
import { firstUpperCase } from '@Helpers';
// Hook
import { useCreateProfileStore } from '@Hooks/useStores';

export const ProfileName: FC = () => {
  const { setUsername, name, reset } = useCreateProfileStore();

  const getOnChange = (ev: ChangeEvent<Input>) => {
    const el = ev.target as Input;
    const string = el.value.toLowerCase().trim();
    const name = firstUpperCase(string);
    setUsername(name);
  };

  useEffect(() => {
    setUsername('');
  }, [reset]);

  const error = name === '' || name.length <= 1;

  return (
    <ProfileNameStyle styleErr={error}>
      <legend>Luo tili nimi</legend>

      <input
        type="text"
        name="username"
        id="username"
        placeholder="nimi"
        value={name}
        onChange={getOnChange}
      />

      {name === '' ? (
        <small aria-live="polite">merkityt kentää pakollinen</small>
      ) : name.length <= 1 ? (
        <small>pitäisi sisältää 2 ja yli merkkejä</small>
      ) : (
        <></>
      )}
    </ProfileNameStyle>
  );
};
