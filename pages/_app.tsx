import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { Theme, ThemeContext } from "../lib/context";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) // using the Window.matchMeida() api to check the OS theme
    ) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default MyApp;
