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
        <div className="search__bar">
          <div className="relative xl:max-w-lg mx-auto">
            <input
              className="search__bar--input"
              type="search"
              placeholder="Search"
            />
            <button className="search__bar--button">
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

      {/* National Flag Setting & Toggle Button */}
      <div className="flex items-center">
        {/* User Profile and Sign UP Button & National Setting*/}
        {/* National Setting */}
        <div className="national">
          <div className="dropdown national__dropdown">
            <button className="national__dropdwon--buuton">
              <box-icon name="world"></box-icon>
              <span className="ml-2">언어설정</span>
            </button>
            <ul className="dropdown-menu national__dropdown--menu">
              <li className="w-full">
                <a className="national__dropdown--item rounded-t" href="#">
                  KOR
                </a>
              </li>
              <li className="">
                <a className="national__dropdown--item" href="#">
                  KOR
                </a>
              </li>
              <li className="">
                <a className="national__dropdown--item rounded-b " href="#">
                  KOR
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Togglem Button */}
        <div className="w-full text-end xl:hidden">
          <div className="nav__toggle" onClick={toggleMenu}>
            <box-icon name="menu"></box-icon>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
