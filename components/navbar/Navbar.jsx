"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Constant Menu Items
import { menuItem } from "@/constant/menuItem";
import { countryFlag } from "@/constant/countryFlag";

// Components

// ICONS
import { LiaAlignJustifySolid, LiaSearchSolid } from "react-icons/lia";
import NotificationBadge from "../alarm/NotificationBadge";
import SearchbarTypeA from "../search/SearchbarTypeA";

// SSR None
const DynamicMenuItem = dynamic(() => import("./MenuItem"), {
  ssr: false,
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const isAuthenticated = true;
  const [notifications] = useState([
    { id: 1, text: "New message received" },
    { id: 2, text: "Friend request" },
    { id: 3, text: "Friend request" },
    { id: 4, text: "Friend request" },
    { id: 5, text: "Friend request" },
    { id: 6, text: "Friend request" },
  ]);
  const dropdownOptions = countryFlag;

  return (
    <nav className="nav ">
      {/* Logo Icons */}

      <Link href="/" className="nav__logo">
        <Image src="/ico-abbc.svg" width={30} height={30} />
        <span className="nav__logo--title">CSI-Play</span>
      </Link>

      {/* Navigation Link And Menu Bar */}
      <div className={`nav__menu show-menu ${isMenuOpen ? "nav__open" : ""} `}>
        <ul className="nav__list">
          {menuItem.map((menu, index) => {
            const depthLevel = 0;
            return (
              <DynamicMenuItem
                key={index}
                items={menu}
                isAuthenticated={true}
                depthLevel={depthLevel}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            );
          })}
          {!isAuthenticated ? null : (
            <Link
              href={`/login`}
              className="text-center bg-blue-500 border-t xl:hidden py-2.5 rounded-lg text-white hover:bg-blue-700"
            >
              로그인
            </Link>
          )}
        </ul>
        {/* Search Bar */}
        <SearchbarTypeA />
      </div>

      {/* National Flag Setting & Toggle Button */}
      <div className="flex justify-end items-center gap-2 xl:gap-5">
        {/* 알람 기능 추가 */}

        <NotificationBadge notifications={notifications} />

        {/* User Profile and Sign UP Button & National Setting*/}

        {/* National Setting */}
        {/* <div className="w-full text-end">
          <DropdownMenu options={dropdownOptions} />
        </div> */}

        {/* Togglem Button */}
        <div className="w-full text-end xl:hidden ">
          <div
            className="nav__toggle border-2 hover:border-2 rounded-lg hover:border-blue-400 py-2.5"
            onClick={toggleMenu}
          >
            <LiaAlignJustifySolid size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
