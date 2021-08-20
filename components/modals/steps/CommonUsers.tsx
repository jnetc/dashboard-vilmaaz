import {
  FC,
  createContext,
  useReducer,
  ReactNode,
  useEffect,
  useState,
} from 'react';
// Types
import { CommonUsersCtxProps, Error, Action } from '@Types';
// Hook
import { useGlobalStore } from '@Hooks/useStores';
// Types
import { Schedule } from '@Types';

const state: CommonUsersCtxProps = {
  error: { isError: false },
  dispatch: obj => obj,
  openModal: { isOpen: false, action: false },
  setOpenModal: isOpen => isOpen,
  step: { value: 'profile' },
  setStep: step => step,
  newUser: null,
  setNewUser: obj => obj,
};

export const CreateCommonUsersStore = createContext(state);

const reducer = (error: Error, action: Action) => {
  switch (action.type) {
    case 'numbers-and-letters':
      return action.payload;
    case 'two-letter-or-more':
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

const CommonUsers: FC<ReactNode> = ({ children }) => {
  const { content } = useGlobalStore();
  const [error, dispatch] = useReducer(reducer, state.error);
  const [openModal, setOpenModal] = useState(state.openModal);
  const [step, setStep] = useState(state.step);
  const [newUser, setNewUser] = useState<Schedule | null>(null);

  useEffect(() => {
    if (!openModal.isOpen) return;
    content.find(prof => {
      if (prof.id === step.id) {
        const { timetable, start, end, ...profile } = prof;
        const schedule = { ...profile, timetable };
        setNewUser(schedule);
      }
    });
  }, [openModal.isOpen]);

  return (
    <CreateCommonUsersStore.Provider
      value={{
        error,
        dispatch,
        openModal,
        setOpenModal,
        step,
        setStep,
        newUser,
        setNewUser,
      }}>
      {children}
    </CreateCommonUsersStore.Provider>
  );
};

export default CommonUsers;
