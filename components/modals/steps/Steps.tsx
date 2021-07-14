import { FC, createContext, useState } from 'react';
// HOC
import Modal from '@Modals/Modal';
// Component
import { SwitchStep } from './SwitchStep';

interface StepsType {
  step: number;
  setStep: (num: number) => void;
  hasError: boolean;
  setHasError: (err: boolean) => void;
}

export const state: StepsType = {
  step: 1,
  setStep: num => num,
  hasError: false,
  setHasError: err => err,
};

export const CreateStepsStore = createContext(state);

export const Steps: FC = () => {
  const [step, setStep] = useState(state.step);
  const [hasError, setHasError] = useState(state.hasError);

  return (
    <CreateStepsStore.Provider
      value={{
        step,
        setStep,
        hasError,
        setHasError,
      }}>
      <Modal>
        <SwitchStep />
      </Modal>
    </CreateStepsStore.Provider>
  );
};
