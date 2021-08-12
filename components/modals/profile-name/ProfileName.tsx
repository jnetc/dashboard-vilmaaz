import { FC, ChangeEvent, useEffect } from 'react';
// Style
import { ProfileNameStyle } from './ProfileName.style';
// Types
import { Input, Schedule2 } from '@Types';
// Helper
import { firstUpperCase } from 'utils/helperFunctions';
// Hook
import { useMainStore, useStepsStore } from '@Hooks/useStores';

const changeProfile = (profile: Schedule2 | null, typing: string) => {
  if (!profile) return null;
  profile.name = typing;
  profile.avatar.name = typing.substring(0, 2);
  return profile;
};

export const ProfileName: FC = () => {
  const { newUser, setNewUser } = useMainStore();
  const { error, dispatch } = useStepsStore();

  const getInputName = (ev: ChangeEvent<Input>) => {
    const el = ev.target as Input;
    const string = el.value.toLowerCase().trim();
    const nameProf = firstUpperCase(string);

    const typingCheck = nameProf?.match(RegExp(/[a-яA-Я0-9]/gmu))?.join('');

    if (typingCheck !== nameProf && nameProf.length > 0) {
      setNewUser(changeProfile(newUser, nameProf));
      console.log(newUser);
      dispatch({
        type: 'numbers-and-letters',
        payload: {
          isError: true,
          message: 'Käytä vain numeroita tai kirjaimia',
        },
      });
      return;
    }

    if (nameProf.length <= 1) {
      setNewUser(changeProfile(newUser, nameProf));
      dispatch({
        type: 'two-letter-or-more',
        payload: {
          isError: true,
          message: 'Pitäisi sisältää 2 ja yli kirjainta',
        },
      });
      return;
    }

    if (nameProf.length <= 1) {
      dispatch({
        type: 'two-letter-or-more',
        payload: {
          isError: true,
          message: 'Pitäisi sisältää 2 ja yli kirjainta',
        },
      });
    } else {
      dispatch({ type: 'no-errors', payload: { isError: false } });
    }

    setNewUser(changeProfile(newUser, nameProf));
    dispatch({
      type: 'no-errors',
      payload: { isError: false, isActive: true },
    });
  };

  // Initial dispatch
  useEffect(() => {
    if (newUser?.name === '') {
      dispatch({
        type: 'no-errors',
        payload: { isError: false, isActive: false },
      });
      return;
    }
    dispatch({
      type: 'no-errors',
      payload: { isError: false, isActive: true },
    });
  }, []);

  return (
    <ProfileNameStyle styleErr={error.isError ?? false}>
      <legend>{error.isError ? error.message : 'Tilin nimesi'}</legend>

      <input
        type="text"
        name="username"
        id="username"
        placeholder="Keksiä nimesi"
        value={newUser?.name || ''}
        onChange={getInputName}
        required
      />
    </ProfileNameStyle>
  );
};
