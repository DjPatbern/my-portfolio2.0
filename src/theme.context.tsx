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
    if (typeof window !== "undefined") {
      // This check ensures the code only runs in the browser
      const selectedTheme = localStorage.getItem("darkMode");
      return selectedTheme ? JSON.parse(selectedTheme) : false;
    }
    return false; // Default value for SSR (Server-Side Rendering)
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
