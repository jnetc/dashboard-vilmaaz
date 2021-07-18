import { FC, createContext, useState } from 'react';
// Types
import { MainCtxProps } from '@Types';

const state: MainCtxProps = {
  openModal: false,
  setOpenModal: open => open,
  autoMovement: true,
  setAutoMovement: el => el,
  profileLine: { id: '', color: '' },
  setProfileLine: obj => obj,
};
// Global context
export const MainContext = createContext(state);

const Main: FC = ({ children }) => {
  const [openModal, setOpenModal] = useState(state.openModal);
  const [autoMovement, setAutoMovement] = useState(state.autoMovement);
  const [profileLine, setProfileLine] = useState(state.profileLine);

  return (
    <MainContext.Provider
      value={{
        openModal,
        setOpenModal,
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
