import { useEffect, useState } from "react";
import { Theme } from "../../utils/types";

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) // using the Window.matchMedia() api to check the OS theme
    ) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return [theme, toggleTheme];
};
