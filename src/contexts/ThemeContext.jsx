import { useState, useContext, useEffect } from 'preact/hooks';
import {createContext } from 'preact'

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  //   localStorage.getItem('color-theme') === 'dark' || 
  //   (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  // );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDarkMode(
        localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
