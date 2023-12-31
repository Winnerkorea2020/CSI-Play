"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

const CardHorizonalTypeA = ({ topics, tag }) => {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-1 gap-2">
      {topics.map((topic) => {
        return (
          <Link
            href={`${pathname}/${topic.id}`}
            key={topic.id}
            className="flex flex-col  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 "
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-40 md:rounded-none md:rounded-l-lg"
              src="https://plus.unsplash.com/premium_photo-1680230177375-2b3c7778b0b2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h1 className="mb-2 text-xs tracking-tight text-gray-700">
                {!tag ? null : "차트분석"}
              </h1>
              <h5 className="mb-2 text-base  tracking-tight text-gray-900 ">
                Noteworthy technology acquisitions 2021
              </h5>
              <div className="text-xs">
                <span>차분남</span>

                <span className="px-2">2022-12-31</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardHorizonalTypeA;
