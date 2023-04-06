import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../utils/context";
import Footer from "../components/Footer";
import { useTheme } from "../lib/hooks/useTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* The className={theme} below is for tailwind CSS dark: prefix to work */}
      <div className={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp;
