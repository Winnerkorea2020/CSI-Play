import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-sm h-full">
      <div className="mt-2">
        <div className="flex justify-start items-center gap-0.5 border-b-2 ">
          <Link
            className="border border-gray-200 px-5 py-2.5 rounded-t bg-gray-100  text-sm font-medium hover:bg-yellow-500"
            href={`/stock/stockEvent/date`}
          >
            공시일정
          </Link>
          <Link
            className="border border-gray-200 px-5 py-2.5 rounded-t bg-gray-100  text-sm font-medium hover:bg-yellow-500"
            href={`/stock/stockEvent/calandar`}
          >
            증시캘린더
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
