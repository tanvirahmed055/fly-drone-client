import React, { createContext, useEffect, useState, useContext } from 'react';

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}
export const AppContextProvider = ({ children = {} }) => {
  const [isInitialLoad, setIsInitialLoad] = useState(false);

//   useEffect(() => {
//     setIsInitialLoad(true);
//   }, []);

  return (
    <AppContext.Provider
      value={{
        isInitialLoad,
        setIsInitialLoad,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
