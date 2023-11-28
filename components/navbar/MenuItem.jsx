"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  LiaAngleDownSolid,
  LiaAngleRightSolid,
  LiaDotCircle,
} from "react-icons/lia";
import DropdownMenu from "./DropdownMenu";

const MenuItems = ({
  items,
  isAuthenticated,
  depthLevel,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [dropdown, setDropdown] = useState(false);

  const onClickToggleHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const onCloseHandler = () => {
    dropdown && setDropdown(false);
  };

  return (
    <>
      <li
        className="nav__item relative"
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onCloseHandler}
      >
        {items.submenu ? (
          <>
            <button
              className="nav__link-button"
              onClick={() => setDropdown((prev) => !prev)}
            >
              {window.innerWidth < 960 && depthLevel === 0 ? (
                items.title
              ) : (
                <Link className="nav__link--submenu" href={`${items.url}`}>
                  <div
                    className={`nav__link-icon btn-rounded btn-${items.color}`}
                  >
                    {depthLevel > 0 ? <LiaDotCircle size={15} /> : ""}
                  </div>
                  <div onClick={onClickToggleHandler}>{items.title}</div>
                </Link>
              )}
              {/* Drop Down 화살표 */}
              {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                  0 && window.innerWidth > 960 ? (
                <LiaAngleRightSolid size={15} />
              ) : null
              // <LiaAngleDownSolid size={15} />
              }
            </button>
            <DropdownMenu
              submenus={items.submenu}
              dropdown={dropdown}
              depthLevel={depthLevel}
              setIsMenuOpen={setIsMenuOpen}
              isMenuOpen={isMenuOpen}
            />
          </>
        ) : (
          <>
            <Link
              className="nav__link--submenu"
              href={`${items.url}`}
              onClick={onClickToggleHandler}
            >
              <div className={`nav__link-icon btn-rounded btn-${items.color}`}>
                <LiaDotCircle size={15} />
              </div>
              <div>{items.title}</div>
            </Link>
          </>
        )}
      </li>
    </>
  );
};

export default MenuItems;
