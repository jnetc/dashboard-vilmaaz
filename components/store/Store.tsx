import React, { createContext, useContext, useState } from 'react';

const Context = createContext({});

export const useStore = () => {
  return useContext(Context);
};

const Store = ({ children }: { children: React.ReactNode }) => {
  const [content, setContent] = useState<Array<{ name: string }>>([
    { name: 'Jouni' },
  ]);
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <React.StrictMode>
      <Context.Provider value={{ menu, content }}>{children}</Context.Provider>
    </React.StrictMode>
  );
};

export default Store;
