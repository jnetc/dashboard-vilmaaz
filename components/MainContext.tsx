import { FC, createContext, useState, useEffect } from 'react';
// Types
import { MainCtxProps, Schedule } from '@Types';
// Hook
import { useGlobalStore } from '@Hooks/useStores';

const state: MainCtxProps = {
  openModal: false,
  setOpenModal: open => open,
  step: { value: 'profile' },
  setStep: step => step,
  newUser: null,
  setNewUser: obj => obj,
  autoMovement: true,
  setAutoMovement: el => el,
  profileLine: { id: '', color: '' },
  setProfileLine: obj => obj,
};
// Global context
export const MainContext = createContext(state);

const Main: FC = ({ children }) => {
  const { content } = useGlobalStore();
  const [openModal, setOpenModal] = useState(state.openModal);
  const [step, setStep] = useState(state.step);
  const [autoMovement, setAutoMovement] = useState(state.autoMovement);
  const [profileLine, setProfileLine] = useState(state.profileLine);
  const [newUser, setNewUser] = useState<Schedule | null>(null);

  useEffect(() => {
    if (!openModal) return;
    content.find(prof => {
      if (prof.id === step.id) {
        const { timetable, start, end, ...profile } = prof;
        const schedule = { ...profile, timetable };
        setNewUser(schedule);
      }
    });
  }, [openModal]);

  return (
    <MainContext.Provider
      value={{
        openModal,
        setOpenModal,
        step,
        setStep,
        newUser,
        setNewUser,
        autoMovement,
        setAutoMovement,
        profileLine,
        setProfileLine,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export default Main;
