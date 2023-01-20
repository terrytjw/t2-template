import { createContext } from "react";

export type Theme = "light" | "dark";
export type ThemeContext = { theme: Theme; toggleTheme: () => void };
export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);
