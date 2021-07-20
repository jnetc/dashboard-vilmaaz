import { FC, MouseEvent, useState } from 'react';
//Style
import { ProfileCreateStyle } from './ProfileCreate.style';
// Hook
import { useStepsStore } from '@Hooks/useStores';
// Types
import { Form } from '@Types';
// Components
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
import { ProfileAvatar } from '@Modals/profile-avatar/ProfileAvatar';
import { ProfileName } from '@Modals/profile-name/ProfileName';
import { ProfileColorPicker } from '@Modals/profile-color-picker/ProfileColorPicker';
import { ModalButton } from '@Modals/modal-button/ModalButton';
// Global const
import { colors } from '@Const/colors';

const CreateProfile: FC = () => {
  let { setStep, profile, setProfile } = useStepsStore();
  const [hasError, setHasError] = useState({
    nameErr: false,
    avatarErr: false,
  });
  const [reset, setReset] = useState(false);

  const nameErrHandler = (err: boolean) => {
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

  const next = (ev: MouseEvent<Form>) => {
    ev.preventDefault();
    if (hasError.nameErr ?? hasError.avatarErr) return;

    setStep('days');
    console.log('Created profile', profile);
  };

  // Set to default state
  const clear = () => {
    setReset(!reset);
    setProfile({
      id: profile.id,
      name: '',
      color: colors[0].en,
      avatar: { name: '', img: '' },
    });
    console.log('reset profile', profile);
  };

  return (
    <>
      <ProfileCreateStyle onSubmit={next} name="user">
        <ModalTitle>Lou uusi tili</ModalTitle>
        <section id="modal-profile">
          <ProfileAvatar profileErrHandler={avatarErrHandler} reset={reset} />
          <ProfileName profileErrHandler={nameErrHandler} reset={reset} />
          <ProfileColorPicker reset={reset} />
        </section>
        <ModalButton
          ButtonStyle="reset"
          row={3}
          col={1}
          onClick={clear}
          aria-label="reset by default">
          Tyhjätä
        </ModalButton>
        {hasError.nameErr ?? hasError.avatarErr ? (
          <ModalButton
            ButtonStyle="disable"
            row={3}
            col={2}
            aria-label="go to next">
            Seuraava
          </ModalButton>
        ) : (
          <ModalButton
            ButtonStyle="confirm"
            row={3}
            col={2}
            aria-label="go to next">
            Seuraava
          </ModalButton>
        )}
      </ProfileCreateStyle>
    </>
  );
};

export default CreateProfile;
