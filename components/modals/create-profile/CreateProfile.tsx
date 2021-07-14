import { FC, MouseEvent, useState, useEffect } from 'react';
//Style
import { CreateProfileStyle } from './CreateProfile.style';
// Hook
import { useStepsStore } from '@Hooks/useStores';
// Types
import { Form, UserDataType } from '@Types';
// Components
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
import { ProfileAvatar } from '@Modals/profile-avatar/ProfileAvatar';
import { ProfileName } from '@Modals/profile-name/ProfileName';
import { ProfileColorPicker } from '@Modals/profile-color-picker/ProfileColorPicker';
import { ProfileButton } from '@Modals/profile-button/ProfileButton';
// Global const
import { colors } from '@Const/colors';

const CreateProfile: FC = () => {
  let { step, setStep, hasError } = useStepsStore();
  const [name, setName] = useState<string>('');
  const [avatarImage, setAvatarImage] = useState('');
  const [color, setColor] = useState<string>('');

  const avatarStr = name?.substring(0, 2);
  const isAcepted = name.length >= 2 && !hasError;

  useEffect(() => {
    const lsAvatar = window.localStorage.getItem('avatar');
    const lsName = window.localStorage.getItem('name');
    const lsColor = window.localStorage.getItem('color');

    if (lsAvatar) setAvatarImage(lsAvatar);
    if (lsName) setName(lsName);
    if (lsColor) setColor(lsColor);
    if (!lsColor) setColor(colors[0].en);
  }, []);

  const create = (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    if (!isAcepted) return;

    //! Здесь нужна проверка
    //! Создавать или обновлять?
    const data: UserDataType = {
      id: `${Math.round(Math.random() * 1000000000)}`,
      name,
      color,
      avatar: {
        name: avatarStr,
        img: avatarImage,
      },
    };

    step += 1;
    setStep(step);

    console.log('Created', data);
  };

  // Clear LS & set to default state
  const clear = () => {
    window.localStorage.removeItem('avatar');
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('color');
    setAvatarImage('');
    setName('');
    setColor(colors[0].en);
  };

  return (
    <>
      <CreateProfileStyle onSubmit={create} name="user">
        <ModalTitle>Lou uusi tili</ModalTitle>
        <ProfileAvatar
          getAvatar={setAvatarImage}
          avatar={avatarImage}
          avatarStr={avatarStr}
        />
        <ProfileName getName={setName} name={name} />
        <ProfileColorPicker getColor={setColor} color={color} />
        <ProfileButton
          ButtonStyle="reset"
          row={5}
          col={1}
          onClick={clear}
          aria-label="reset by default">
          Tyhjätä
        </ProfileButton>
        {isAcepted ? (
          <ProfileButton
            ButtonStyle="confirm"
            row={5}
            col={2}
            aria-label="go to next">
            Seuraava
          </ProfileButton>
        ) : (
          <ProfileButton
            ButtonStyle="disable"
            row={5}
            col={2}
            aria-label="go to next">
            Seuraava
          </ProfileButton>
        )}
      </CreateProfileStyle>
    </>
  );
};

export default CreateProfile;
