import {
  FC,
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
  MouseEvent,
} from 'react';
// Style
import { ProfileAvatarStyle, UploadAvatarStyle } from './ProfileAvatar.style';
// Types
import { Input } from '@Types';
// Hook
import { useCreateProfileStore } from '@Hooks/useStores';

export const ProfileAvatar: FC = () => {
  const { setAvatar, avatar, reset } = useCreateProfileStore();
  const [file, setFile] = useState<File | undefined>();
  const [image, setImage] = useState<string | undefined>(avatar.img);
  const [error, setError] = useState(false);

  const getAvatar = useCallback((ev: ChangeEvent<Input>) => {
    const el = ev.target as Input;

    if (!el.files || !el.files[0]) return setFile(undefined);
    if (el.files[0].size > 300000) {
      setError(true);
      return;
    }

    setError(false);
    setFile(el.files[0]);
  }, []);

  // onChange can't clear target value. Use it!
  const resetAvatar = (ev: MouseEvent<Input>) => {
    const el = ev.target as Input;
    el.value = '';
  };

  // Need for render image of view
  useEffect(() => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  }, [file]);

  // Get image string, when image will mounted
  useEffect(() => {
    setAvatar(image);
  }, [image]);

  useEffect(() => {
    setImage(undefined);
    setFile(undefined);
    setAvatar(undefined);
  }, [reset]);

  return (
    <UploadAvatarStyle
      aria-label={error ? 'Kuva saa olla enintään 300kt' : 'Laata kuva'}
      styleErr={error}>
      {/* {image ? (
        <button aria-label="remove image" onClick={removeAvatar} />
      ) : (
        <></>
      )} */}
      <ProfileAvatarStyle>
        {image ? (
          <img src={image} alt={file?.name} />
        ) : (
          <figcaption>{avatar.name}</figcaption>
        )}
      </ProfileAvatarStyle>
      <input
        type="file"
        name="avatar"
        accept=".png, .jpg, .jpeg, .webp, .svg"
        onChange={getAvatar}
        onClick={resetAvatar}
      />
    </UploadAvatarStyle>
  );
};
