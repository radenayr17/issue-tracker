"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

interface Links {
  label: string;
  href: string;
}

const links: Links[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Issues", href: "/issues" },
];

const NavBar = () => {
  const currentPath: string = usePathname();

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ label, href }) => (
          <li key={`${href}-${label}`}>
            <Link
              href={href}
              className={classNames({
                "text-zinc-900": href === currentPath,
                "text-zinc-500": href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
