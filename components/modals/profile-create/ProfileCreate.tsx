import { FC, MouseEvent, useState } from 'react';
//Style
import { ProfileCreateStyle } from './ProfileCreate.style';
// Hook
import { useCommonUsersStore, useGlobalStore } from '@Hooks/useStores';
// Types
import { Form } from '@Types';
// Components
import { ModalTitle } from '@Modals/modal-title/ModalTitle';
import { ProfileAvatar } from '@Modals/profile-avatar/ProfileAvatar';
import { ProfileName } from '@Modals/profile-name/ProfileName';
import { ProfileColorPicker } from '@Modals/profile-color-picker/ProfileColorPicker';
import { ModalButton } from '@Modals/modal-button/ModalButton';
// Global const
import { colors, modalAnimationDuration } from '@Constants';
// IndexedDB
import { updateProfileIndexedDB, deleteProfileIndexedDB } from '@IndexedDB';

const CreateProfile: FC = () => {
  const { setUpdateStore } = useGlobalStore();
  const { error, dispatch, setOpenModal, setStep, step, newUser, setNewUser } =
    useCommonUsersStore();
  const [removeData, setRemoveData] = useState(false);

  const nextStep = (ev: MouseEvent<Form>) => {
    ev.preventDefault();
    setStep({ value: 'days' });
  };

  const updateProfileHandler = async (ev: MouseEvent<Form>) => {
    ev.preventDefault();
    try {
      const updateProfile = await updateProfileIndexedDB('schedule', newUser);
      if (!updateProfile.created) {
        setUpdateStore({
          status: 'error',
          message: 'Tilisi ei ole päivitetty',
        });
      }
      setOpenModal({ isOpen: true, action: false });
      setTimeout(() => {
        setNewUser(null);
        setOpenModal({ isOpen: false, action: false });
        setUpdateStore({ status: 'success', message: 'Tilisi on päivitetty' });
      }, modalAnimationDuration);
    } catch (error) {
      setUpdateStore({ status: 'error', message: 'Database error' });
    }
  };

  const deleteProfileHandler = async (ev: MouseEvent<Form>) => {
    ev.preventDefault();
    try {
      const deleteProfile = await deleteProfileIndexedDB('schedule', step?.id);
      if (!deleteProfile.created) {
        setUpdateStore({ status: 'error', message: 'Tilisi ei ole poistettu' });
      }
      setOpenModal({ isOpen: true, action: false });
      setTimeout(() => {
        setNewUser(null);
        setOpenModal({ isOpen: false, action: false });
        setUpdateStore({ status: 'success', message: 'Tilisi on poistettu' });
      }, modalAnimationDuration);
    } catch (error) {
      setUpdateStore({ status: 'error', message: 'Database error' });
    }
  };

  const beforeDelete = () => {
    setTimeout(() => {
      setRemoveData(true);
    }, 0);
  };

  // Set to default state
  const clear = () => {
    if (!newUser) return;

    setRemoveData(!removeData);
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

  return (
    <>
      <ProfileCreateStyle
        onSubmit={
          step.id
            ? removeData
              ? deleteProfileHandler
              : updateProfileHandler
            : nextStep
        }
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
        {step.id ? (
          removeData ? (
            <ModalButton
              type={'submit'}
              ButtonStyle="delete"
              row={'3'}
              col={'1'}
              tooltip="Ole varovainen, jos poistat profiilisi, myös aikataulu poistetaan ">
              Poistako?
            </ModalButton>
          ) : (
            <ModalButton
              type={'button'}
              ButtonStyle="delete"
              row={'3'}
              col={'1'}
              onClick={beforeDelete}
              tooltip="Ole varovainen, jos poistat profiilisi, myös aikataulu poistetaan ">
              Poistaa profilli
            </ModalButton>
          )
        ) : (
          <ModalButton
            type={'submit'}
            ButtonStyle="reset"
            row={'3'}
            col={'1'}
            onClick={clear}>
            Tyhjätä
          </ModalButton>
        )}
        {step.id ? (
          removeData ? (
            <ModalButton
              type={'button'}
              ButtonStyle="reset"
              row={'3'}
              col={'2'}
              onClick={() => setRemoveData(false)}>
              Peruuttaa
            </ModalButton>
          ) : error.isActive ? (
            <ModalButton
              type={'submit'}
              ButtonStyle="update"
              row={'3'}
              col={'2'}>
              Päivittää
            </ModalButton>
          ) : (
            <ModalButton
              type={'submit'}
              ButtonStyle="disable"
              row={'3'}
              col={'2'}>
              Päivittää
            </ModalButton>
          )
        ) : error.isActive ? (
          <ModalButton
            type={'submit'}
            ButtonStyle="confirm"
            row={'3'}
            col={'2'}>
            Seuraava
          </ModalButton>
        ) : (
          <ModalButton
            type={'submit'}
            ButtonStyle="disable"
            row={'3'}
            col={'2'}>
            Seuraava
          </ModalButton>
        )}
      </ProfileCreateStyle>
    </>
  );
};

export default CreateProfile;
