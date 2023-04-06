import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  theme: string; // for tailwind CSS dark: prefix to work
  children: React.ReactNode;
};
const Layout = ({ theme, children }: LayoutProps) => {
  return (
    <div className={theme}>
      <Navbar />
      {/* style in the main tag for page standardizations across app */}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
