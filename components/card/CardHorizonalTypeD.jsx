"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

const CardHorizonalTypeD = ({ title }) => {
  const pathname = usePathname();
  const id = "1";
  console.log(pathname);
  return (
    <div>
      <Link
        href={`${pathname}/${id}`}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 "
      >
        <div className="px-4 w-24 text-center">{`${title}`}</div>
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <h5 className=" text-xl font-semibold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h5>
        </div>
        <div className="text-center font-normal text-gray-700 w-fit">2022-12-12 00:00:00</div>
      </Link>
    </div>
  );
};

export default CardHorizonalTypeD;
