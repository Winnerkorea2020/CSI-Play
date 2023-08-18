"use client";
import { useState } from "react";
import { LiaGlobeAmericasSolid } from "react-icons/lia";

const DropdownMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="inline-flex items-center  text-center focus:outline-none focus:ring-blue-300">
      <button className="" onClick={toggleDropdown}>
        <LiaGlobeAmericasSolid size={20} />
      </button>
      {isOpen && (
        <ul className="absolute w-60 top-16 right-1 bg-white rounded-md border">
          {options.map((option) => (
            <li key={option.value} className="">
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
