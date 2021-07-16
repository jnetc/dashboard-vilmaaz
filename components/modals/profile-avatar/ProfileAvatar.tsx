import { FC, useEffect, useState, ChangeEvent, MouseEvent } from 'react';
// Style
import {
  ProfileAvatarStyle,
  UploadAvatarStyle,
  UploadInputAvatarStyle,
} from './ProfileAvatar.style';
// Types
import { Input } from '@Types';
// Hook
import { useStepsStore } from '@Hooks/useStores';

interface PropsErrHandler {
  profileErrHandler: (err: boolean) => void;
}

export const ProfileAvatar: FC<PropsErrHandler> = ({ profileErrHandler }) => {
  const { profile, setProfile, reset } = useStepsStore();
  const [avatarError, setAvatarError] = useState(false);
  const [file, setFile] = useState<File | undefined>();
  const [image, setImage] = useState<string>(profile.avatar.img);

  const getFile = (ev: ChangeEvent<Input>) => {
    const el = ev.target as Input;

    if (!el.files || !el.files[0]) return setFile(undefined);
    if (el.files[0].size > 300000) {
      setAvatarError(true);
      profileErrHandler(true);
      return;
    }

    setAvatarError(false);
    profileErrHandler(false);

    setFile(el.files[0]);
  };

  // API fileReader & get string image to state
  useEffect(() => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  }, [file]);

  // Update component for show avatar
  useEffect(() => {
    if (!image) return;
    profile.avatar.img = image;
    setProfile(profile);
  }, [image]);

  // Reset to default
  useEffect(() => {
    if (profile.avatar.img === '') setImage('');
  }, [reset]);

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
        styleErr={avatarError}
        onChange={getFile}
        onClick={resetAvatar}
      />
      <UploadAvatarStyle
        aria-label="● Tiedostojen enimmäiskoko on 300 kt"
        styleErr={avatarError}
        htmlFor="upload-avatar">
        <ProfileAvatarStyle aria-label="● Voit ladata webp- png-, svg- tai jpg-tiedostoja">
          {image ? (
            <img src={image} alt={file?.name} />
          ) : (
            <figcaption>{profile.avatar.name}</figcaption>
          )}
        </ProfileAvatarStyle>
        <p id="upload-warning"></p>
      </UploadAvatarStyle>
    </>
  );
};
