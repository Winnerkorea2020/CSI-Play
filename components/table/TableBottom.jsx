import Link from "next/link";
import Pagination from "../pagination/Pagination";

const TableBottom = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center py-2.5 xl:py-0">
      <Pagination />
      <Link
        href="/create"
        className="py-2 w-20 text-center rounded-lg shadow bg-gray-500 text-white hover:bg-gray-600"
      >
        등록
      </Link>
    </div>
  );
};

export default TableBottom;
