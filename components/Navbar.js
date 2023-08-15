"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constant";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    console.log(isMenuOpen);
  };
  // Determine whether to show the close button
  const showCloseButton = isMenuOpen && window.innerWidth < 1280;

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
        <div className=" absolute top-2 left-0 w-full px-20 xl:static xl:max-w-lg xl:px-4">
          <div className="relative xl:max-w-lg mx-auto">
            <input
              className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm  "
              type="search"
              placeholder="Search"
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 ">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Nav-Close Button */}
        {showCloseButton && (
          <button className="nav__close" onClick={closeMenu}>
            <box-icon type="solid" name="chevron-right" size="sm"></box-icon>
          </button>
        )}
      </div>

      {/* Toggle Button */}
      <div className="flex items-center">
        {/* User Profile and Sign UP Button & National Setting*/}
        {/* National Setting */}
        <div className="">
          <div className="dropdown inline-block relative">
            <button className="font-medium py-2 px-4 w-max rounded inline-flex items-center">
              <box-icon name="world"></box-icon>
              <span className="ml-2">언어설정</span>
            </button>
            <ul className="dropdown-menu absolute hidden text-gray-700  w-full">
              <li className="w-full">
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  KOR
                </a>
              </li>
              <li className="">
                <a
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  KOR
                </a>
              </li>
              <li className="">
                <a
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  KOR
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Togglem Button */}
        <div className="w-full text-end xl:hidden">
          <div
            className="px-2 inline-block xl:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <box-icon name="menu"></box-icon>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
