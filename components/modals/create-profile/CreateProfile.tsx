import { FC, MouseEvent, useState } from 'react';
//Style
import { CreateProfileStyle } from './CreateProfile.style';
// Hook
import { useStepsStore } from '@Hooks/useStores';
// Types
import { Form } from '@Types';
// Components
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
import { ProfileAvatar } from '@Modals/profile-avatar/ProfileAvatar';
import { ProfileName } from '@Modals/profile-name/ProfileName';
import { ProfileColorPicker } from '@Modals/profile-color-picker/ProfileColorPicker';
import { ProfileButton } from '@Modals/profile-button/ProfileButton';
// Global const
import { colors } from '@Const/colors';

const CreateProfile: FC = () => {
  let { step, setStep, profile, setProfile, reset, setReset } = useStepsStore();

  const [hasError, setHasError] = useState({
    nameErr: false,
    avatarErr: false,
  });

  const nameErrHandler = (err: boolean) => {
    hasError.nameErr = err;
    setHasError(prev => {
      hasError.nameErr = err;
      return { ...prev, ...hasError };
    });
  };

  const avatarErrHandler = (err: boolean) => {
    setHasError(prev => {
      hasError.avatarErr = err;
      return { ...prev, ...hasError };
    });
  };

  const create = (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    if (hasError.nameErr ?? hasError.avatarErr) return;

    step += 1;
    setStep(step);

    console.log('Created profile', profile);
  };

  // Set to default state
  const clear = () => {
    setReset(!reset);
    setProfile({
      id: `${Math.random()}`,
      name: '',
      color: colors[0].en,
      avatar: { name: '', img: '' },
    });
    console.log('reset profile', profile);
  };

  return (
    <>
      <CreateProfileStyle onSubmit={create} name="user">
        <ModalTitle>Lou uusi tili</ModalTitle>
        <ProfileAvatar profileErrHandler={avatarErrHandler} />
        <ProfileName profileErrHandler={nameErrHandler} />
        <ProfileColorPicker />
        <ProfileButton
          ButtonStyle="reset"
          row={5}
          col={1}
          onClick={clear}
          aria-label="reset by default">
          Tyhjätä
        </ProfileButton>
        {hasError.nameErr ?? hasError.avatarErr ? (
          <ProfileButton
            ButtonStyle="disable"
            row={5}
            col={2}
            aria-label="go to next">
            Seuraava
          </ProfileButton>
        ) : (
          <ProfileButton
            ButtonStyle="confirm"
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
