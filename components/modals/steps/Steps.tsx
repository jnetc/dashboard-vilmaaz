import { FC, createContext, useState } from 'react';
// HOC
import Modal from '@Modals/Modal';
// Component
import { SwitchStep } from './SwitchStep';
// Global const
import { colors } from '@Const/colors';
// Types
import { User, Timetable } from '@Types';

interface StepsType {
  step: number;
  setStep: (num: number) => void;
  profile: User;
  setProfile: (obj: User) => void;
  timetable: Array<Timetable>;
  setTimetable: (arr: Array<Timetable>) => void;
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
  timetable: [],
  setTimetable: arr => arr,
};

export const CreateStepsStore = createContext(state);

export const Steps: FC = () => {
  const [step, setStep] = useState(state.step);
  const [profile, setProfile] = useState(state.profile);
  const [timetable, setTimetable] = useState(state.timetable);

  return (
    <CreateStepsStore.Provider
      value={{
        step,
        profile,
        timetable,
        setStep,
        setProfile,
        setTimetable,
      }}>
      <Modal>
        <SwitchStep />
      </Modal>
    </CreateStepsStore.Provider>
  );
};
