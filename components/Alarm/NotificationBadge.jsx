"use client";
import React, { useState } from "react";
import NotificationDropdown from "./NotificationDropdown";

import { LiaBellSolid } from "react-icons/lia";

const NotificationBadge = ({ notifications }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="">
      <button
        type="button"
        className="relative inline-flex items-center p-2 text-center focus:outline-none focus:ring-blue-300 "
        onClick={handleClick}
      >
        <LiaBellSolid size={25} />
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-1">
          {notifications.length}
        </div>
      </button>
      <div className="absolute w-60 top-16 right-1 rounded-t-lg">
        {isDropdownOpen && (
          <NotificationDropdown
            notifications={notifications}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          />
        )}
      </div>
    </div>
  );
};

export default NotificationBadge;
