"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { SECTION_ID } from "../utils/constants";

const navLinks = [
  { title: "About", path: `#${SECTION_ID.ABOUT}` },
  { title: "Projects", path: `#${SECTION_ID.PROJECTS}` },
  { title: "Contact", path: `#${SECTION_ID.CONTACT}` },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 border-b border-brass-500/20 bg-bronze-950/90 backdrop-blur-md">
      <div className="mx-auto flex flex-wrap items-center justify-between px-4 py-2 sm:px-8">
        <Link href={"/"} className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={64}
            height={64}
            className="h-14 w-14 object-contain md:h-16 md:w-16"
            priority
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center rounded border border-brass-500/50 px-3 py-2 text-brass-300 transition-colors hover:border-brass-300 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center rounded border border-brass-500/50 px-3 py-2 text-brass-300 transition-colors hover:border-brass-300 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <div className="md:hidden">
          <MenuOverlay
            links={navLinks}
            onLinkClick={() => setNavbarOpen(false)}
          />
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
