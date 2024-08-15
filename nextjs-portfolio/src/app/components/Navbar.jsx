"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// Creates an array of links with their props
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Project",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  // This hook checks the navbar state, mainly for mobile screen size
  const [isNavbarOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      {/* Desktop view navbar */}
      <div className="mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        {/* Hamburguer menu - only shows on viewports smaller than 768px wide */}
        <menu className="mobile-menu block md:hidden">
          {
            /* Using the hook to show or hide the mobile menu */
            !isNavbarOpen ? (
              <button
                onClick={() => setNavOpen(true)}
                className="px-3 py-2 flex items-center border rounded border-slate-200 hover:border-white text-slate-200 hover:text-white"
              >
                <Bars3Icon className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavOpen(false)}
                className="px-3 py-2 flex items-center border rounded border-slate-200 hover:border-white text-slate-200 hover:text-white"
              >
                <XMarkIcon className="w-5 h-5 z-11" />
              </button>
            )
          }
        </menu>
        {/* Top right link area */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNavbarOpen ? (
        <>
          {/* If navbar is open, returns the mobile menu but hides it in wider screens
        else, returns null */}
          <menu className="md:hidden">
            <MenuOverlay navLinks={navLinks} />
          </menu>
        </>
      ) : null}
    </nav>
  );
};

export default Navbar;
