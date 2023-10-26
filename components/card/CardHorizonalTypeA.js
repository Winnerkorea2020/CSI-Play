"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

const CardHorizonalTypeA = () => {
  const pathname = usePathname();
  const id = "1";
  console.log(pathname);
  return (
    <div>
      <Link
        href={`${pathname}/${id}`}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 "
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://plus.unsplash.com/premium_photo-1680230177375-2b3c7778b0b2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h1 className="mb-2 text-sm font-bold tracking-tight text-gray-700">차트분석</h1>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardHorizonalTypeA;
