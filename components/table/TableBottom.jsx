import Link from "next/link";
import React from "react";
import Pagination from "../Pagination";

const TableBottom = () => {
  return (
    <div className="flex flex-col xl:justify-between xl:items-center py-2.5 xl:py-0">
      <Pagination />
      <Link
        href="/create"
        className="py-2.5 px-6 w-24 text-center rounded-lg shadow bg-blue-500 text-white hover:bg-blue-600"
      >
        등록
      </Link>
    </div>
  );
};

export default TableBottom;
