import { FC, MouseEvent, useState } from 'react';
//Style
import { ProfileCreateStyle } from './ProfileCreate.style';
// Hook
import { useMainStore, useStepsStore } from '@Hooks/useStores';
// Types
import { Form } from '@Types';
// Components
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
import { ProfileAvatar } from '@Modals/profile-avatar/ProfileAvatar';
import { ProfileName } from '@Modals/profile-name/ProfileName';
import { ProfileColorPicker } from '@Modals/profile-color-picker/ProfileColorPicker';
import { ModalButton } from '@Modals/modal-button/ModalButton';
// Global const
import { colors } from '@Constants';

const CreateProfile: FC = () => {
  const { setStep, step, newUser, setNewUser } = useMainStore();
  const { error, dispatch } = useStepsStore();

  const [reset, setReset] = useState(false);

  const next = (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    setStep({ value: 'days' });

    // setUpdateStore({ status: 'updated' });
    // console.log('Created profile', profile);
  };

  // Set to default state
  const clear = () => {
    if (!newUser) return;

    setReset(!reset);
    setNewUser({
      id: `${Math.random()}`,
      name: '',
      color: colors[0].en,
      avatar: { name: '', img: '' },
      timetable: [],
    });
    dispatch({
      type: 'no-errors',
      payload: { isError: false, isActive: false },
    });
  };

  // console.log(error);

  return (
    <>
      <ProfileCreateStyle onSubmit={next} name="user">
        {step.id ? (
          <ModalTitle>Tilisi</ModalTitle>
        ) : (
          <ModalTitle>Lou uusi tili</ModalTitle>
        )}
        <section id="modal-profile">
          <ProfileAvatar />
          <ProfileName />
          <ProfileColorPicker />
        </section>
        <ModalButton
          ButtonStyle="reset"
          row={3}
          col={1}
          onClick={clear}
          aria-label="reset by default">
          Tyhjätä
        </ModalButton>
        {error.isActive ? (
          <ModalButton
            ButtonStyle="confirm"
            row={3}
            col={2}
            aria-label="go to next">
            Seuraava
          </ModalButton>
        ) : (
          <ModalButton
            ButtonStyle="disable"
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
