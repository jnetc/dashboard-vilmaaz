import { FC, ChangeEvent, MouseEvent } from 'react';
// Style
import {
  ProfileAvatarStyle,
  UploadAvatarStyle,
  UploadInputAvatarStyle,
} from './ProfileAvatar.style';
// Types
import { Input } from '@Types';
// Hook
import { useMainStore, useStepsStore } from '@Hooks/useStores';

export const ProfileAvatar: FC = () => {
  const { newUser, setNewUser } = useMainStore();
  const { error, dispatch } = useStepsStore();

  const getFile = (ev: ChangeEvent<Input>) => {
    const el = ev.target as Input;

    if (!el.files || !el.files[0]) return;
    if (el.files[0].size > 300000) {
      setNewUser(prevState => {
        if (!prevState) return null;

        prevState.avatar.img = '';
        return { ...prevState, ...newUser };
      });

      if (newUser?.avatar.name.length == 2) {
        dispatch({
          type: 'file-size-limit',
          payload: { isActive: true, isMaxSize: true },
        });
        return;
      }

      dispatch({
        type: 'file-size-limit',
        payload: { isActive: false, isMaxSize: true },
      });
      return;
    }

    const file = el.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () =>
      setNewUser(prevState => {
        const result = reader.result as string;
        if (!prevState) return null;

        prevState.avatar.img = result;
        return { ...prevState, ...newUser };
      });
    reader.readAsDataURL(file);

    if (newUser?.avatar.name.length == 2) {
      dispatch({
        type: 'no-errors',
        payload: { isActive: true, isMaxSize: false },
      });
      return;
    }

    dispatch({
      type: 'no-errors',
      payload: { isActive: false, isMaxSize: false },
    });
  };

  // onChange event can't clear target value. Use it!
  const resetAvatar = (ev: MouseEvent<Input>) => {
    const el = ev.target as Input;
    el.value = '';
  };

  return (
    <>
      <UploadInputAvatarStyle
        type="file"
        name="avatar"
        id="upload-avatar"
        accept=".png, .jpg, .jpeg, .webp, .svg"
        tabIndex={0}
        styleErr={error.isMaxSize ?? false}
        onChange={getFile}
        onClick={resetAvatar}
      />
      <UploadAvatarStyle
        aria-label="● Tiedostojen enimmäiskoko on 300 kt"
        styleErr={error.isMaxSize ?? false}
        htmlFor="upload-avatar">
        <ProfileAvatarStyle aria-label="● Voit ladata webp- png-, svg- tai jpg-tiedostoja">
          {newUser?.avatar.img ? (
            <img src={newUser.avatar.img} alt={newUser?.name} />
          ) : (
            <figcaption>
              {newUser?.avatar.name ? newUser?.avatar.name : ''}
            </figcaption>
          )}
        </ProfileAvatarStyle>
        <p id="upload-warning"></p>
      </UploadAvatarStyle>
    </>
  );
};
