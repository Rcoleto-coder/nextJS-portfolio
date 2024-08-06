import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto p-8 flex flex-wrap items-center justify-between">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul>
            <li>
              <Link
                href={"#about"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl md:p-0 rounded  hover:text-white"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
