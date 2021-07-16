import { FC, ChangeEvent, useEffect, useState } from 'react';
// Style
import { ProfileNameStyle } from './ProfileName.style';
// Types
import { Input, User } from '@Types';
// Helper
import { firstUpperCase } from '@Helpers';
// Hook
import { useStepsStore } from '@Hooks/useStores';

interface ErrorHandler {
  isError: boolean;
  message?: string;
}

interface PropsErrHandler {
  profileErrHandler: (err: boolean) => void;
}

const changeProfile = (profile: User, typing: string) => {
  profile.name = typing;
  profile.avatar.name = typing.substring(0, 2);
  return profile;
};

export const ProfileName: FC<PropsErrHandler> = ({ profileErrHandler }) => {
  const { profile, setProfile, reset } = useStepsStore();
  const [typing, setTyping] = useState(profile.name);
  const [profileNameError, setProfileNameError] = useState<ErrorHandler>({
    isError: false,
  });

  const getOnChange = (ev: ChangeEvent<Input>) => {
    const el = ev.target as Input;
    const string = el.value.toLowerCase().trim();
    const name = firstUpperCase(string);
    setTyping(name);
  };

  useEffect(() => {
    const typingCheck = typing.match(RegExp(/[a-яA-Я0-9]/gmu))?.join('');

    if (typingCheck !== typing && typing.length > 0) {
      setProfile(changeProfile(profile, typing));
      setProfileNameError({
        isError: true,
        message: 'Käytä vain numeroita tai kirjaimia',
      });

      profileErrHandler(true);
      return;
    }

    if (typing.length === 1) {
      setProfile(changeProfile(profile, typing));
      setProfileNameError({
        isError: true,
        message: 'Pitäisi sisältää 2 ja yli kirjainta',
      });
      profileErrHandler(true);
      return;
    }

    if (typing.length <= 1) {
      profileErrHandler(true);
    } else {
      profileErrHandler(false);
    }

    setProfile(changeProfile(profile, typing));
    setProfileNameError({ isError: false });
  }, [typing]);

  // Reset to default
  useEffect(() => {
    if (profile.name === '') setTyping('');
  }, [reset]);

  return (
    <ProfileNameStyle styleErr={profileNameError.isError}>
      <legend>
        {profileNameError.isError ? profileNameError.message : 'Keksiä nimesi'}
      </legend>

      <input
        type="text"
        name="username"
        id="username"
        placeholder="Tilin nimi"
        value={profile.name}
        onChange={getOnChange}
      />
    </ProfileNameStyle>
  );
};
