import { useContext } from 'react';
import { MainContext } from '@Store/Store';

export const useStore = () => {
  return useContext(MainContext);
};
