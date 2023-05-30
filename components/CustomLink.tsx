import Link from "next/link";
import React from "react";

type CustomLinkProps = {
  href: string;
  openInNewPage?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
};
const CustomLink = ({
  href,
  openInNewPage,
  className,
  onClick,
  children,
}: CustomLinkProps) => {
  return (
    <Link
      href={href}
      className={`px-2 inline-flex items-center w-fit hover:text-gray-400 transition-all ${className}`}
      target={openInNewPage ? `_blank` : `_self`}
      rel="noreferrer"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
