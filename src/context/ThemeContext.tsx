import { createContext } from "react";

type ThemeValue = "Dark" | "Light";
type ThemeContextType = {
  theme: ThemeValue;
  setTheme: (theme: ThemeValue) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
