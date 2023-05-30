"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaHome, FaDatabase, FaTv } from "react-icons/fa";
import CustomLink from "./CustomLink";
import DarkModeToggle from "./Toggle/DarkModeToggle";
import { ThemeContext } from "../utils/context";
import { useTheme } from "@/lib/hooks";

type NavbarProps = {
  children?: React.ReactNode;
};
const Navbar = ({ children }: NavbarProps) => {
  const drawerToggleRef = useRef<HTMLInputElement>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // to automatically close daisyUI side drawer when route changes
  useEffect(() => {
    if (drawerToggleRef.current && drawerToggleRef.current.checked === true) {
      drawerToggleRef.current.checked = false;
    }
  }, [pathname, searchParams]);

  const [theme, toggleTheme] = useTheme();
  const themeMode = theme === "business" ? "dark" : "light"; // for tailwind CSS dark: prefix to work

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={themeMode}>
        <div className="drawer">
          <input
            id="drawer-toggle"
            ref={drawerToggleRef}
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content flex flex-col">
            {/* <!-- Navbar --> */}
            <div className="navbar fixed z-50 w-full bg-base-100 shadow-md">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="drawer-toggle"
                  className="btn-ghost btn-square btn"
                >
                  <HiOutlineMenuAlt2 className="h-6 w-6" />
                </label>
              </div>
              <div className="absolute left-1/2 flex-1 -translate-x-1/2 px-2 lg:static lg:left-0 lg:mx-2 lg:translate-x-0">
                <CustomLink
                  href="/"
                  className="text-xl font-extrabold tracking-tighter"
                >
                  T2 Template
                  <span className="ml-1.5">
                    {theme === "business" ? (
                      <Image
                        src="/svgs/aethero-logo-white.svg"
                        alt="aethero logo"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src="/svgs/aethero-logo-black.svg"
                        alt="aethero logo"
                        width={20}
                        height={20}
                      />
                    )}
                  </span>
                </CustomLink>
              </div>
              <div className="hidden lg:flex">
                <CustomLink
                  href="/fe-playground"
                  className="mx-2 font-semibold"
                >
                  FE Playground
                </CustomLink>
                <CustomLink
                  href="/be-playground"
                  className="mx-2 font-semibold"
                >
                  BE Playground
                </CustomLink>
                <div className="mx-4">
                  <DarkModeToggle />
                </div>
                <div className="dropdown-end dropdown mr-6">
                  <label
                    tabIndex={0}
                    className="btn-ghost btn-circle avatar btn"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://placeimg.com/80/80/people" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                  >
                    <li>
                      <button onClick={() => alert("Profile page")}>
                        Account
                      </button>
                    </li>
                    <li>
                      <button onClick={() => alert("Logout")}>Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Page content here --> */}
            <div className="h-20" />
            {children}
          </div>
          <div className="drawer-side">
            <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
            <ul className="menu w-80 bg-base-100 p-4 font-medium text-gray-500 dark:text-gray-100">
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link href="/" className="active:bg-white/0">
                  <FaHome />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/fe-playground" className="active:bg-white/0">
                  <FaTv />
                  FE Playground
                </Link>
              </li>
              <li>
                <Link href="/be-playground" className="active:bg-white/0">
                  <FaDatabase />
                  BE Playground
                </Link>
              </li>

              <div className="divider mt-auto" />

              <div className="ml-2 pb-4">
                <DarkModeToggle />
              </div>
              <Link
                className="ml-2 flex items-center gap-x-2 py-4"
                href="#"
                onClick={() =>
                  toast("Logged in", {
                    icon: "✅",
                    style: {
                      borderRadius: "1rem",
                      background: "#333",
                      color: "#fff",
                    },
                  })
                }
              >
                <IoMdPerson />
                Account
              </Link>
              <Link
                className="ml-2 flex items-center gap-x-2 py-4"
                href="#"
                onClick={() =>
                  toast("Logged in", {
                    icon: "✅",
                    style: {
                      borderRadius: "1rem",
                      background: "#333",
                      color: "#fff",
                    },
                  })
                }
              >
                <RiLoginCircleLine />
                Login
              </Link>
              <Link
                className="ml-2 flex items-center gap-x-2 py-4"
                href="#"
                onClick={() =>
                  toast("Logged out", {
                    icon: "✅",
                    style: {
                      borderRadius: "1rem",
                      background: "#333",
                      color: "#fff",
                    },
                  })
                }
              >
                <RiLogoutCircleLine />
                Logout
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Navbar;
