"use client";
import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextProps {
  darkMode: boolean;
  setDarkMode: Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextProps>({
  darkMode: false,
  setDarkMode: () => false as any,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getDefaultTheme = (): boolean => {
    const selectedTheme = localStorage.getItem("darkMode");
    return selectedTheme ? JSON.parse(selectedTheme) : false;
  };

  const [darkMode, setDarkMode] = useState<boolean>(getDefaultTheme());

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
