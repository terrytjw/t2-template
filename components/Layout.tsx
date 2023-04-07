import React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Navbar from "./Navbar";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type LayoutProps = {
  theme: string; // for tailwind CSS dark: prefix to work
  children: React.ReactNode;
};
const Layout = ({ theme, children }: LayoutProps) => {
  const themeMode = theme === "business" ? "dark" : "light"; // for tailwind CSS dark: prefix to work

  return (
    <div
      className={classNames(
        themeMode,
        process.env.NEXT_PUBLIC_ENV === "dev" ? "debug-screens" : ""
      )}
    >
      <Navbar>
        {/* style in the main tag for page standardizations across app */}
        <main className="p-4">{children}</main>
        <Footer />
        <Toaster />
      </Navbar>
    </div>
  );
};

export default Layout;
