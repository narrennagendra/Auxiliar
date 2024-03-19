import { createContext, useContext } from 'react';
const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children, promptData }) => (
  <DataContext.Provider value={promptData}>
    {children}
  </DataContext.Provider>
);
