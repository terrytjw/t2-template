import React from "react";
import CustomLink from "./CustomLink";

const Navbar = () => {
  return (
    <div className="navbar px-6 bg-base-100">
      <div className="flex-1">
        <CustomLink href="/" className="text-xl font-extrabold tracking-widest">
          T2 Template
        </CustomLink>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-sm mx-4 hover:bg-gray-500 hover:border-gray-500"
          onClick={() => alert("Write post.")}
        >
          Write post
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() => alert("Profile page")}>Profile</button>
            </li>
            <li>
              <button onClick={() => alert("Logout")}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
