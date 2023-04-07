import React from "react";
import CustomLink from "./CustomLink";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer place-items-center bg-neutral p-6 text-neutral-content">
      <div className="grid-flow-col items-center">
        <p>
          Maintained with ❤️ by
          <CustomLink href="https://github.com/terrytjw" className="">
            <FaGithub className="mr-1" /> @terrytjw
          </CustomLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
