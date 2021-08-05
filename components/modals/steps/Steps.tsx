import {
  FC,
  createContext,
  useState,
  useReducer,
  Dispatch,
  useEffect,
} from 'react';
// HOC
import Modal from '@Modals/Modal';
// Component
import { SwitchStep } from './SwitchStep';
// Hook
import { useGlobalStore } from '@Hooks/useStores';
// Global const
import { colors } from '@Constants';
// Types
import { User, Timetable } from '@Types';

type Steps = 'profile' | 'days' | 'schedule';
interface StepsType {
  error: Error;
  dispatch: Dispatch<Action>;
  step: Steps;
  setStep: (step: Steps) => void;
  profile: User | null;
  setProfile: (obj: User) => void;
  timetable: Array<Timetable>;
  setTimetable: (arr: Array<Timetable>) => void;
}

export const state: StepsType = {
  error: { isError: false },
  dispatch: obj => obj,
  step: 'profile',
  setStep: step => step,
  profile: null,
  setProfile: obj => obj,
  timetable: [],
  setTimetable: arr => arr,
};

export const CreateStepsStore = createContext(state);

export interface Error {
  isError: boolean;
  message?: string;
  id?: string;
}
type ErrorActionType =
  | 'numbers-and-letters'
  | 'file-size-limit'
  | 'empty-days'
  | 'no-errors';

interface Action {
  type?: ErrorActionType;
  payload: Error;
}

const reducer = (error: Error, action: Action) => {
  switch (action.type) {
    case 'numbers-and-letters':
      return action.payload;
    case 'file-size-limit':
      return action.payload;
    case 'empty-days':
      return action.payload;
    case 'no-errors':
      return action.payload;
    default:
      return error;
  }
};

export const Steps: FC = () => {
  let { updateStore } = useGlobalStore();
  const [error, dispatch] = useReducer(reducer, state.error);
  const [step, setStep] = useState(state.step);
  const [profile, setProfile] = useState(state.profile);
  const [timetable, setTimetable] = useState(state.timetable);

  useEffect(() => {
    setProfile({
      id: `${Math.random()}`,
      name: '',
      color: colors[0].en,
      avatar: { name: '', img: '' },
    });
    setTimetable([]);
    console.log('update steps', profile, timetable);
  }, [updateStore]);

  return (
    <CreateStepsStore.Provider
      value={{
        error,
        dispatch,
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
