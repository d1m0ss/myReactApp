import { FC, ReactNode, createContext, useContext, useState } from "react";

type theme = "light" | "dark";

interface IAppContext {
  theme: theme;
  toggleTheme: () => void;
  isDarkTheme: () => boolean;
}

export const AppContext = createContext<IAppContext>({
  theme: "light",
  toggleTheme: () => {},
  isDarkTheme: () => false,
});

interface IAppProvider {
  children: ReactNode;
}

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  const [theme, setTheme] = useState<theme>("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const isDarkTheme = () => theme === "dark";

  return <AppContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
