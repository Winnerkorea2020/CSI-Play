"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constant";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      {/* Logo Icons */}

      <Link href="/" className="nav__logo">
        <Image src="/ico-abbc.svg" width={30} height={30} />
        <span className="nav__logo--title">CSI-Play</span>
      </Link>

      {/* Navigation Link And Menu Bar */}

      <div className={`nav__menu ${isMenuOpen ? "show" : ""}`}>
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

        {/* Nav-Close Button */}
        <div
          className={`nav__close ${isMenuOpen ? "right-0" : ""}`}
          onClick={closeMenu}
        >
          <box-icon type="solid" name="chevron-right" size="sm"></box-icon>
        </div>
      </div>

      {/* Toggle Button */}
      <div>
        <div className="w-full text-end xl:hidden">
          <div className="px-2 inline-block xl:hidden cursor-pointer">
            <box-icon name="search"></box-icon>
          </div>
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
