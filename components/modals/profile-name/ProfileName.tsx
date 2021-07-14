import {
  FC,
  ChangeEvent,
  useCallback,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
// Style
import { ProfileNameStyle } from './ProfileName.style';
// Types
import { Input } from '@Types';
// Helper
import { firstUpperCase } from '@Helpers';
// Hook
import { useStepsStore } from '@Hooks/useStores';

interface GetProfileName {
  getName: Dispatch<SetStateAction<string>>;
  name: string;
}

interface ErrorHandler {
  isError: boolean;
  message?: string;
}

export const ProfileName: FC<GetProfileName> = ({ getName, name }) => {
  const { setHasError } = useStepsStore();
  const [error, setError] = useState<ErrorHandler>({ isError: false });

  const getOnChange = useCallback((ev: ChangeEvent<Input>) => {
    const el = ev.target as Input;
    const string = el.value.toLowerCase().trim();
    const name = firstUpperCase(string);
    const typingCheck = name.match(RegExp(/[a-яA-Я0-9]/gmu))?.join('');

    if (typingCheck !== name && name.length > 0) {
      getName(name);
      setError({
        isError: true,
        message: 'Käytä vain numeroita tai kirjaimia',
      });
      setHasError(true);
      return;
    }
    if (name.length === 1) {
      getName(name);
      setError({
        isError: true,
        message: 'Pitäisi sisältää 2 ja yli kirjainta',
      });
      setHasError(true);
      return;
    }

    getName(name);
    window.localStorage.setItem('name', name);
    setHasError(false);
    setError({ isError: false });
  }, []);

  return (
    <ProfileNameStyle styleErr={error.isError}>
      <legend>{error.isError ? error.message : 'Keksiä nimesi'}</legend>

      <input
        type="text"
        name="username"
        id="username"
        placeholder="Tilin nimi"
        value={name}
        onChange={getOnChange}
      />
    </ProfileNameStyle>
  );
};
