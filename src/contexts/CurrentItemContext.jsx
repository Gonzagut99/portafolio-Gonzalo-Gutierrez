import { useState, useContext } from 'preact/hooks';
import { createContext } from 'preact'

const CurrentItemContext = createContext();

export function CurrentItemProvider({ children }) {
  const [currentItem, setCurrentItem] = useState("home");

  return (
    <CurrentItemContext.Provider value={{ currentItem, setCurrentItem }}>
      {children}
    </CurrentItemContext.Provider>
  );
}

export function useCurrentItem() {
  return useContext(CurrentItemContext);
}
