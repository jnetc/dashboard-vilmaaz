import { FC, MouseEvent, useState } from 'react';
//Style
import { ProfileCreateStyle } from './ProfileCreate.style';
// Hook
import { useMainStore, useStepsStore, useGlobalStore } from '@Hooks/useStores';
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
// IndexedDB
import { updateProfileIndexedDB } from '@IndexedDB';

const CreateProfile: FC = () => {
  const { setUpdateStore } = useGlobalStore();
  const { setOpenModal, setStep, step, newUser, setNewUser } = useMainStore();
  const { error, dispatch } = useStepsStore();

  const [reset, setReset] = useState(false);

  const nextStep = (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    setStep({ value: 'days' });

    // setUpdateStore({ status: 'updated' });
    // console.log('Created profile', profile);
  };
  const updateProfileHandler = async (ev: MouseEvent<Form>) => {
    ev.preventDefault();

    console.log(newUser);

    try {
      const updateProfile = await updateProfileIndexedDB('schedule', newUser);
      console.log('Update profile', updateProfile);
      setNewUser(null);
      setOpenModal(false);
      setUpdateStore({ status: 'updated', message: '' });
    } catch (error) {
      console.log(error);
    }
  };

  // Set to default state
  const clear = () => {
    if (!newUser) return;

    setReset(!reset);
    setNewUser({
      id: newUser.id,
      name: '',
      color: colors[0].en,
      avatar: { name: '', img: '' },
      timetable: newUser.timetable,
    });
    dispatch({
      type: 'no-errors',
      payload: { isError: false, isActive: false },
    });
  };

  // console.log(error);

  return (
    <>
      <ProfileCreateStyle
        onSubmit={step.id ? updateProfileHandler : nextStep}
        name="user">
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
        {step.id ? (
          error.isActive ? (
            <ModalButton
              ButtonStyle="update"
              row={3}
              col={2}
              aria-label="update profile">
              Päivittää
            </ModalButton>
          ) : (
            <ModalButton
              ButtonStyle="disable"
              row={3}
              col={2}
              aria-label="go to next">
              Päivittää
            </ModalButton>
          )
        ) : error.isActive ? (
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
