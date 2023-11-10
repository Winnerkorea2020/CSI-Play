"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TableReportBody = ({ topics }) => {
  const pathname = usePathname();
  return (
    <div className="relative w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 grid grid-cols-1 gap-y-4 ">
      {topics.map((topics) => (
        <div
          key={topics.id}
          className="px-4 py-5 border bg-white rounded-lg shadow-sm shadow-gray-100 "
        >
          <div className="relative flex items-center gap-4  pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border ">
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {topics.title}
                </h5>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                {`작성자: ${topics.author}`}
              </p>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                {`날짜: ${topics.dateTime}`}
              </p>
            </div>
          </div>
          <Link href={`${pathname}/${topics.id}`}>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit ">
              {topics.contents}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TableReportBody;
