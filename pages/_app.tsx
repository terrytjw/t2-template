import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeContext } from "../utils/context";
import { useTheme } from "../lib/hooks/useTheme";
import Layout from "../components/Layout";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* The className={theme} below is for tailwind CSS dark: prefix to work */}
      <Layout theme={theme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default MyApp;
