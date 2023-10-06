"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Pagination from "./Pagination";
import FreeBoardSearchBar from "./FreeBoardSearchBar";

const BoardTable = ({ title }) => {
  const pathnamne = usePathname();
  const id = "1";
  console.log(pathnamne);
  return (
    <div>
      <FreeBoardSearchBar />
      <h3 className="py-4 font-semibold underline text-lg">{title}</h3>
      <div className="overflow-hidden  border border-gray-200  md:rounded-lg w-full">
        <table className="w-full text-sm  text-gray-500  table-fixed">
          <thead className="text-base text-gray-700 bg-gray-100">
            <tr>
              <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                번호
              </th>
              <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                제목
              </th>
              <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                작성자
              </th>
              <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                등록일
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                214
              </td>
              <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-center cursor-pointer">
                <Link href={`${pathnamne}/${id}`}>[코인 시황]다시 주춤하는 비트코인…3800만원대 횡보</Link>
              </td>
              <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-center">
                신호철
              </td>
              <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-center">
                2023-08-04 17:26:50
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default BoardTable;
