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
  days: Array<string>;
  setDays: (arr: Array<string>) => void;
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
  days: [],
  setDays: arr => arr,
  timetable: [{ day: '', lessons: [] }],
  setTimetable: arr => arr,
};

export const CreateStepsStore = createContext(state);

export const Steps: FC = () => {
  const [step, setStep] = useState(state.step);
  const [profile, setProfile] = useState(state.profile);
  const [days, setDays] = useState(state.days);
  const [timetable, setTimetable] = useState(state.timetable);

  return (
    <CreateStepsStore.Provider
      value={{
        step,
        profile,
        days,
        timetable,
        setStep,
        setProfile,
        setDays,
        setTimetable,
      }}>
      <Modal>
        <SwitchStep />
      </Modal>
    </CreateStepsStore.Provider>
  );
};
