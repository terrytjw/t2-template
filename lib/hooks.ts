import { useEffect, useState } from "react";
import { Theme } from "@/utils/types";

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>("lofi");

  useEffect(() => {
    if (
      localStorage.theme === "business" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) // using the Window.matchMedia() api to check the OS theme
    ) {
      setTheme("business");
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "lofi" ? "business" : "lofi");
  };

  return [theme, toggleTheme];
};
