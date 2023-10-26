"use client";
import { useState } from "react";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import Image from "next/image";
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
        <ul className="absolute w-fit px-2 top-16 right-4 bg-white rounded-md border">
          {options.map((option) => (
            <li
              key={option.value}
              className="flex items-center gap-2 py-2 px-2"
            >
              <Image src={option.img} width={20} height={20} />
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
