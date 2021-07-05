import { FC, useState, MouseEvent, ChangeEvent } from 'react';

import {
  CreateProfileStyle,
  ProfileAvatarStyle,
  UploadAvatarStyle,
  ColorPickerStyle,
} from './CreateProfile.style';
// HOC
import Modal from '@Modals/Modal';
// Types
import { Input, Form } from '@Types';

const CreateProfile: FC = () => {
  const [username, setUsername] = useState('');
  // const [avatar, setAvatar] = useState('');

  const avatarStr = username.substring(0, 2).toUpperCase();

  const getUsername = (ev: ChangeEvent<Input>) => {
    const el = ev.target as Input;
    console.log(el.value);
    setUsername(el.value);
  };

  const create = (ev: MouseEvent<Form>) => {
    ev.preventDefault();
    const el = ev.target as Form;
    const fieldsetEl = el.querySelectorAll('input');

    fieldsetEl.forEach(e => {
      console.log(e.type);
    });

    // const username = el.getElementById('username')?.value
    const data = {
      id: '4a5s45d2as1d45510',
      name: username,
      color: '',
      avatar: {
        name: avatarStr,
      },
      timetable: [],
    };
    console.log(ev.target, data);
  };

  return (
    <Modal>
      <CreateProfileStyle onSubmit={create} name="user">
        <UploadAvatarStyle>
          <ProfileAvatarStyle>
            {/* <img src="//" alt="//" /> */}
            <figcaption>{avatarStr}</figcaption>
          </ProfileAvatarStyle>
          <span>Liitä kuva</span>
          <input
            type="file"
            name="avatar"
            accept=".png, .jpg, .jpeg, .webp, .svg"
          />
        </UploadAvatarStyle>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          onChange={getUsername}
        />
        <ColorPickerStyle>
          <legend>Valitse väri</legend>
          <input type="radio" name="color" id="brown" />
          <label data-color="brown" htmlFor="brown"></label>
          <input type="radio" name="color" id="green" />
          <label data-color="green" htmlFor="green"></label>
          <input type="radio" name="color" id="pink" />
          <label data-color="pink" htmlFor="pink"></label>
          <input type="radio" name="color" id="violet" />
          <label data-color="violet" htmlFor="violet"></label>
          <input type="radio" name="color" id="blue" />
          <label data-color="blue" htmlFor="blue"></label>
        </ColorPickerStyle>
        <button type="submit">Tallentaa</button>
      </CreateProfileStyle>
    </Modal>
  );
};

export default CreateProfile;
