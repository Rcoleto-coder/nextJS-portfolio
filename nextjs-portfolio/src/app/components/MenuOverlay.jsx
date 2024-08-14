import React from "react";
import NavLink from "./NavLink";

// links is an array of links in the navbar
const MenuOverlay = ({ navLinks }) => {
  return (
    <ul className="flex flex-col items-center py-4">
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
