"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constant";
import { useState } from "react";
import NotificationBadge from "./NotificationBadge";
import DropdownMenu from "./DropdownMenu";

import {
  LiaAlignJustifySolid,
  LiaGlobeAmericasSolid,
  LiaSearchSolid,
} from "react-icons/lia";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New message received" },
    { id: 2, text: "Friend request" },
    { id: 3, text: "Friend request" },
    { id: 4, text: "Friend request" },
    { id: 4, text: "Friend request" },
    { id: 4, text: "Friend request" },
  ]);

  const dropdownOptions = [{ label: "KOR", value: "option1" }];
  return (
    <nav className="nav">
      {/* Logo Icons */}

      <Link href="/" className="nav__logo">
        <Image src="/ico-abbc.svg" width={30} height={30} />
        <span className="nav__logo--title">CSI-Play</span>
      </Link>

      {/* Navigation Link And Menu Bar */}

      <div className={`nav__menu show-menu ${isMenuOpen ? "nav__open" : ""} `}>
        <ul className="nav__list">
          {navLinks.map((category, index) => (
            <li key={index} className="group nav__item">
              <button className="nav__link-button ">
                <span className="mr-1">{category.category}</span>
                <box-icon name="chevron-down" size="sm"></box-icon>
              </button>
              <ul className="nav__list--submenu">
                {category.items.map((item, subindex) => (
                  <li key={subindex} className="nav__item--submenu">
                    <Link className="nav__link--submenu" href="/">
                      <div
                        className={`nav__link-icon btn-rounded btn-${item.color}`}
                      >
                        <box-icon name="shield-plus" size="sm"></box-icon>
                      </div>
                      <div>{item.title}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {/* Search Bar */}
        <div className="search__bar">
          <div className="relative xl:max-w-lg mx-auto">
            <input
              className="search__bar--input"
              type="search"
              placeholder="Search"
            />
            <button className="search__bar--button">
              <LiaSearchSolid size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* National Flag Setting & Toggle Button */}
      <div className="flex justify-end items-center">
        {/* 알람 기능 추가 */}
        <div className="w-full text-end xl:hidden">
          <NotificationBadge notifications={notifications} />
        </div>
        {/* User Profile and Sign UP Button & National Setting*/}
        {/* National Setting */}

        <div className="w-full text-end xl:hidden">
          <button className="">
            <DropdownMenu options={dropdownOptions} />
          </button>
        </div>

        {/* Togglem Button */}
        <div className="w-full text-end xl:hidden">
          <div className="nav__toggle" onClick={toggleMenu}>
            <LiaAlignJustifySolid size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
