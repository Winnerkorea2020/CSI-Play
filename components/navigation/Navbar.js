"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constant";
import { useState } from "react";

import NotificationBadge from "./NotificationBadge";
import DropdownMenu from "./DropdownMenu";
import SignUpSignIn from "../SignUpSignIn";

import {
  LiaAlignJustifySolid,
  LiaSearchSolid,
  LiaDotCircle,
  LiaAngleDownSolid,
} from "react-icons/lia";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastCategory = navLinks[navLinks.length - 1];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
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

  const dropdownOptions = [
    { label: "KR", value: "option1", img: "/KR.png" },
    { label: "US", value: "option1", img: "/US.png" },
    { label: "CH", value: "option1", img: "/CH.png" },
    { label: "JP", value: "option1", img: "/JP.png" },
    { label: "IT", value: "option1", img: "/IT.png" },
    { label: "DE", value: "option1", img: "/DE.png" },
  ];
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
          {navLinks.slice(0, navLinks.length - 1).map((category, index) => (
            <li key={index} className="group nav__item">
              <button className="nav__link-button ">
                <span className="mr-1">{category.category}</span>
                <LiaAngleDownSolid size={10} />
              </button>
              <ul className="nav__list--submenu">
                {category.items.map((item, subindex) => (
                  <li key={subindex} className="nav__item--submenu">
                    <Link className="nav__link--submenu" href={`${item.url}`}>
                      <div
                        className={`nav__link-icon btn-rounded btn-${item.color}`}
                      >
                        <LiaDotCircle size={10} />
                      </div>
                      <div>{item.title}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          {isAuthenticated && lastCategory && (
            <li className="group nav__item">
              <button className="nav__link-button ">
                <span className="mr-1">{lastCategory.category}</span>
                <LiaAngleDownSolid size={15} />
              </button>
              <ul className="nav__list--submenu">
                {lastCategory.items.map((item, subindex) => (
                  <li key={subindex} className="nav__item--submenu">
                    <Link className="nav__link--submenu" href={`${item.url}`}>
                      <div
                        className={`nav__link-icon btn-rounded btn-${item.color}`}
                      >
                        <LiaDotCircle size={15} />
                      </div>
                      <div>{item.title}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )}
          {isAuthenticated ? null : (
            <li className="nav__item mt-24 border-t pt-10 xl:hidden">
              <div>
                <SignUpSignIn />
              </div>
            </li>
          )}
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
      <div className="flex justify-end items-center gap-2 xl:gap-5">
        {/* 알람 기능 추가 */}
        {isAuthenticated ? (
          <div className="w-full text-end">
            <NotificationBadge notifications={notifications} />
          </div>
        ) : null}
        {/* User Profile and Sign UP Button & National Setting*/}

        {/* National Setting */}
        <div className="w-full text-end">
          <DropdownMenu options={dropdownOptions} />
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
