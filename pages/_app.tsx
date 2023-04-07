import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeContext } from "../utils/context";
import { useTheme } from "../lib/hooks/useTheme";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { useState } from "react";
import { Router } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme] = useTheme();
  const [pageRouteLoading, setPageRouteLoading] = useState(false);

  // for page routing loading animation
  Router.events.on("routeChangeStart", () => {
    setPageRouteLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setTimeout(() => {
      setPageRouteLoading(false);
    }, 1000);
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* The className={theme} below is for tailwind CSS dark: prefix to work */}
      <Layout theme={theme}>
        {!pageRouteLoading && <Component {...pageProps} />}
        {pageRouteLoading && <Loading fullScreen />}
      </Layout>
    </ThemeContext.Provider>
  );
}

export default MyApp;
