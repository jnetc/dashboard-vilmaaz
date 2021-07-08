import { FC, useState, MouseEvent, createContext } from 'react';

import { CreateProfileStyle } from './CreateProfile.style';
// HOC
import Modal from '@Modals/Modal';
// Types
import { Form, UserDataType, CreateProfileStoreProps } from '@Types';
// Components
import { ProfileAvatar } from '@Modals/profile-avatar/ProfileAvatar';
import { ProfileName } from '@Modals/profile-name/ProfileName';
import { ProfileColorPicker } from '@Modals/profile-color-picker/ProfileColorPicker';
import { ProfileButton } from '@Modals/profile-button/ProfileButton';

const state: CreateProfileStoreProps = {
  id: `${Math.round(Math.random() * 1000000000)}`,
  name: '',
  setUsername: name => name,
  color: 'brown',
  setColor: color => color,
  avatar: { name: '' },
  setAvatar: str => str,
  reset: false,
};

export const CreateProfileStore = createContext(state);

const CreateProfile: FC = () => {
  const [username, setUsername] = useState<string>(state.name);
  const [image, setAvatar] = useState<string | undefined>(state.avatar.img);
  const [color, setColor] = useState<string>(state.color);
  const [reset, setReset] = useState(state.reset);

  const avatarStr = username.substring(0, 2);

  const create = (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    if (username.length < 2 || username === '') return;

    const data: UserDataType = {
      id: `${Math.round(Math.random() * 1000000000)}`,
      name: username,
      color: color,
      avatar: {
        name: avatarStr,
        img: image,
      },
    };
    console.log('Created', data);
  };

  const clear = () => {
    setReset(!reset);
  };

  return (
    <Modal>
      <CreateProfileStore.Provider
        value={{
          id: state.id,
          name: username,
          setUsername,
          color,
          setColor,
          avatar: {
            name: avatarStr,
            img: image,
          },
          setAvatar,
          reset,
        }}>
        <CreateProfileStyle onSubmit={create} name="user">
          <ProfileAvatar />
          <ProfileName />
          <ProfileColorPicker />
          <ProfileButton
            ButtonStyle="cancel"
            onClick={clear}
            aria-label="reset by default">
            Tyhjätä
          </ProfileButton>
          <ProfileButton
            ButtonStyle="confirm"
            aria-label="go next to fill schedule">
            Seuraava
          </ProfileButton>
        </CreateProfileStyle>
      </CreateProfileStore.Provider>
    </Modal>
  );
};

export default CreateProfile;
