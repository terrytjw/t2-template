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
      <div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp;
