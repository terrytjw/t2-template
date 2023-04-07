import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaTools, FaHome } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import CustomLink from "./CustomLink";
import DarkModeToggle from "./Toggle/DarkModeToggle";

type NavbarProps = {
  children?: React.ReactNode;
};
const Navbar = ({ children }: NavbarProps) => {
  const router = useRouter();
  const drawerToggleRef = useRef<HTMLInputElement>(null);

  // to automatically close daisyUI side drawer when route changes
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      if (drawerToggleRef.current && drawerToggleRef.current.checked === true) {
        drawerToggleRef.current.checked = false;
      }
    });
  }, [router.events]);

  return (
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
            <label htmlFor="drawer-toggle" className="btn-ghost btn-square btn">
              <HiOutlineMenuAlt2 className="h-6 w-6" />
            </label>
          </div>
          <div className="absolute left-1/2 flex-1 -translate-x-1/2 px-2 lg:static lg:left-0 lg:mx-2 lg:translate-x-0">
            <CustomLink
              href="/"
              className="text-xl font-extrabold tracking-tighter"
            >
              T2 Template
              <IoRocketSharp className="ml-1" />
            </CustomLink>
          </div>
          <div className="hidden lg:flex">
            <CustomLink href="/" className="mx-2 font-semibold">
              Home
            </CustomLink>
            <CustomLink href="/playground" className="mx-2 font-semibold">
              Playground
            </CustomLink>
            <div className="mx-4">
              <DarkModeToggle />
            </div>
            <div className="dropdown-end dropdown">
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <button onClick={() => alert("Profile page")}>Account</button>
                </li>
                <li>
                  <button onClick={() => alert("Logout")}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12" />

        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
        <ul className="menu w-80 bg-base-200 p-4 font-medium text-gray-500 dark:text-gray-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link href="/" className="active:bg-white/0">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link href="/playground" className="active:bg-white/0">
              <FaTools />
              Playground
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
  );
};

export default Navbar;
