import {
  FC,
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
  MouseEvent,
  Dispatch,
  SetStateAction,
} from 'react';
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

interface GetProfileAvatar {
  getAvatar: Dispatch<SetStateAction<string>>;
  avatar: string;
  avatarStr: string;
}

interface ErrorHandler {
  isError: boolean;
  message?: string;
}

export const ProfileAvatar: FC<GetProfileAvatar> = ({
  getAvatar,
  avatar,
  avatarStr,
}) => {
  const { setHasError } = useStepsStore();
  const [error, setError] = useState<ErrorHandler>({ isError: false });
  const [file, setFile] = useState<File | undefined>();
  const [image, setImage] = useState<string>('');

  const getFile = useCallback((ev: ChangeEvent<Input>) => {
    const el = ev.target as Input;

    if (!el.files || !el.files[0]) return setFile(undefined);
    if (el.files[0].size > 300000) {
      setError({
        isError: true,
        message: 'Tiedostojen enimmäiskoko on 300 kt',
      });
      setHasError(true);
      return;
    }

    setError({ isError: false });
    setHasError(false);
    setFile(el.files[0]);
  }, []);

  // API fileReader & get string image
  useEffect(() => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  }, [file]);

  // Update FC for show avatar
  useEffect(() => {
    if (!image) return;
    // Save image to LS for backward step
    window.localStorage.setItem('avatar', image);
    getAvatar(image);
  }, [image]);

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
        styleErr={error.isError}
        onChange={getFile}
        onClick={resetAvatar}
      />
      <UploadAvatarStyle
        aria-label="● Tiedostojen enimmäiskoko on 300 kt"
        styleErr={error.isError}
        htmlFor="upload-avatar">
        <ProfileAvatarStyle aria-label="● Voit ladata webp- png-, svg- tai jpg-tiedostoja">
          {avatar ? (
            <img src={avatar} alt={file?.name} />
          ) : (
            <figcaption>{avatarStr}</figcaption>
          )}
        </ProfileAvatarStyle>
        <p id="upload-warning"></p>
      </UploadAvatarStyle>
    </>
  );
};
