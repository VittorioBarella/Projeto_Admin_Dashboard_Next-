import { createContext, useEffect, useState } from "react";

// Theme type = 'dark' | ''

interface AppContextProps {
  theme?: string;
  themeToggle?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
  const [theme, setTheme] = useState("dark");

  function themeToggle() {
    const newTheme = theme === "" ? "dark" : "";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    const themeSaved = localStorage.getItem("theme");
    setTheme(themeSaved);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        themeToggle,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
