import { FC, createContext, useReducer } from 'react';
// HOC
import Modal from '@Modals/Modal';
// Component
import { SwitchStep } from './SwitchStep';
// Hook
// import { useMainStore } from '@Hooks/useStores';
// Global const
// import { colors } from '@Constants';
// Types
import { StepsCtxProps, Error, Action } from '@Types';
// IDB
// import { getByIdIndexedDB } from '@IndexedDB';

export const state: StepsCtxProps = {
  error: { isError: false },
  dispatch: obj => obj,
};

export const CreateStepsStore = createContext(state);

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

export const Steps: FC = () => {
  // const { step, openModal, setNewUser } = useMainStore();
  const [error, dispatch] = useReducer(reducer, state.error);

  // Reset states after create data
  // useEffect(() => {
  // setProfile(null);
  // setTimetable([]);
  // console.log('update steps', profile, timetable);
  // }, [updateStore]);

  return (
    <CreateStepsStore.Provider
      value={{
        error,
        dispatch,
      }}>
      <Modal>
        <SwitchStep />
      </Modal>
    </CreateStepsStore.Provider>
  );
};
