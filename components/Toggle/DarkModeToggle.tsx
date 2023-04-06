import { Fragment, useContext, useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { themeChange } from "theme-change";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "../../utils/context";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const darkModeEnabled = theme === "dark";

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="flex space-x-2 items-center">
      <div>{darkModeEnabled ? <MdDarkMode /> : <MdLightMode />}</div>
      <Switch checked={darkModeEnabled} onChange={toggleTheme} as={Fragment}>
        {({ checked }) => (
          <button
            className={`${
              checked ? "bg-gray-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
            data-set-theme={darkModeEnabled ? "light" : "dark"}
            data-act-class="ACTIVECLASS"
          >
            <span className="sr-only">Toggle dark mode</span>
            <span
              className={`${
                checked ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </button>
        )}
      </Switch>
    </div>
  );
};

export default DarkModeToggle;
