"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TableAnalyzeBody = ({ topics }) => {
  const pathname = usePathname();
  return (
    <div className="">
      <Link
        href={`${pathname}/${topics.id}`}
        className="inline-block grid xl:grid-cols-1 gap-3"
      >
        {topics.map((topics) => (
          <div
            key={topics.id}
            className="relative flex flex-col w-full xl:flex-row  rounded-xl bg-white  text-gray-700 border shadow-md "
          >
            <div className="relative xl:w-40 h-40 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-t-xl xl:rounded-xl">
              <img
                src={topics.img}
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="px-5 py-2.5">
              <h6 className="block mb-2 font-sans text-base antialiased  leading-relaxed tracking-normal  uppercase">
                <div className="flex items-center gap-2">
                  <div className="text-gray-800">{topics.tag}</div>
                  <div>2023-12-31</div>
                </div>
              </h6>
              <h4 className="block font-sans text-base antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {topics.title}
              </h4>
              <p className="block  font-sans text-xs antialiased font-normal leading-relaxed text-gray-700">
                {topics.contents}
              </p>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default TableAnalyzeBody;
