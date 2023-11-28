"use client";
import Link from "next/link";
import React from "react";

import MenuItems from "./MenuItem";

const DropdownMenu = ({
  submenus,
  dropdown,
  depthLevel,
  setIsMenuOpen,
  isMenuOpen,
}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? " -right-full top-0 " : "";
  return (
    <ul
      className={`nav__list--submenu px-2 dropdown ${dropdownClass} ${
        dropdown ? "show" : ""
      }`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems
          key={index}
          items={submenu}
          isAuthenticated={true}
          depthLevel={depthLevel}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      ))}
    </ul>
  );
};

export default DropdownMenu;
