import Link from "next/link";
import { LiaSearchSolid, LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import Pagination from "./Pagination";

const Table = () => {
  return (
    <div className="mx-auto px-4 border rounded-lg shadow-sm bg-white">
      <div className=" relative ">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="w-ufll md:w-1/2">
            <h6 className="p-4 font-semibold underline text-lg">TItle</h6>
          </div>
          <div className="w-full md:w-1/2">
            {/* Search Menu */}

            <form className="flex justify-start items-center gap-2">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <LiaSearchSolid size={20} />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 "
                  placeholder="Search"
                />
              </div>
              <button className="bg-red-600 text-white w-20 py-2.5 rounded-lg cursor-pointer hover:bg-red-500">
                검색
              </button>
            </form>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 table-fixed">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" className="px-4 py-3 truncate whitespace-nowrap w-24 text-center">
                  번호
                </th>
                <th scope="col" className="px-4 py-3 truncate whitespace-nowrap w-auto">
                  제목
                </th>
                <th scope="col" className="px-4 py-3 truncate whitespace-nowrap w-24 text-center">
                  작성자
                </th>
                <th scope="col" className="px-4 py-3 truncate whitespace-nowrap w-24 text-center">
                  등록일
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b ">
                <th scope="row" className="px-4 py-3 truncate whitespace-nowrap text-center">
                  <Link href="/dashboard/[id]?id=1">공지사항</Link>
                </th>
                <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-left">
                  <Link href="/dashboard/[id]?id=1">TEST</Link>
                </td>
                <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-center">
                  관리자
                </td>
                <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-center">
                  2023-08-24
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default Table;
