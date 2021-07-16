import { FC, createContext, useState } from 'react';
// HOC
import Modal from '@Modals/Modal';
// Component
import { SwitchStep } from './SwitchStep';
// Global const
import { colors } from '@Const/colors';
// Types
import { User } from '@Types';

interface StepsType {
  step: number;
  setStep: (num: number) => void;
  profile: User;
  setProfile: (obj: User) => void;
  reset: boolean;
  setReset: (res: boolean) => void;
}

export const state: StepsType = {
  step: 1,
  setStep: num => num,
  profile: {
    id: `${Math.random()}`,
    name: '',
    color: colors[0].en,
    avatar: { name: '', img: '' },
  },
  setProfile: obj => obj,
  reset: false,
  setReset: res => res,
};

export const CreateStepsStore = createContext(state);

export const Steps: FC = () => {
  const [step, setStep] = useState(state.step);
  const [profile, setProfile] = useState(state.profile);
  const [reset, setReset] = useState(state.reset);

  return (
    <CreateStepsStore.Provider
      value={{
        step,
        reset,
        profile,
        setStep,
        setProfile,
        setReset,
      }}>
      <Modal>
        <SwitchStep />
      </Modal>
    </CreateStepsStore.Provider>
  );
};
