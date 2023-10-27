"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { alaramSetting } from "@/mockupDB";

import Pagination from "../Pagination";
import SearchBar from "../searchbox/SearchBar";

const BoardTable = ({ title }) => {
  const pathnamne = usePathname();
  const id = "1";
  console.log(pathnamne);
  return (
    <div>
      <SearchBar />
      <h3 className="py-4 font-semibold underline text-lg">{title}</h3>
      <div className="overflow-hidden  border border-gray-200  md:rounded-lg w-full">
        <table className="w-full text-sm  text-gray-500  table-fixed">
          <colgroup>
            <col width={60}></col>
            <col width="70%"></col>
            <col width={100}></col>
            <col className="hidden xl:block" width={150}></col>
          </colgroup>
          <thead className="text-base text-gray-700 bg-gray-100">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 truncate whitespace-nowrap text-left"
              >
                번호
              </th>
              <th
                scope="col"
                className="px-4 py-3 truncate whitespace-nowrap text-left"
              >
                제목
              </th>
              <th
                scope="col"
                className="px-4 py-3 truncate whitespace-nowrap text-center"
              >
                작성자
              </th>
              <th
                scope="col"
                className="hidden xl:block px-4 py-3 truncate whitespace-nowrap text-center"
              >
                등록일
              </th>
            </tr>
          </thead>
          <tbody>
            {alaramSetting.map((table) => (
              <tr key={table.id}>
                <td
                  scope="row"
                  className="px-4 py-3 truncate whitespace-nowrap w-full "
                >
                  {table.number}
                </td>
                <td
                  scope="row"
                  className="px-4 py-3 truncate whitespace-nowrap text-left cursor-pointer"
                >
                  <Link href={`${pathnamne}/${id}`}>{table.title}</Link>
                </td>
                <td
                  scope="row"
                  className="px-4 py-3 truncate whitespace-nowrap text-center"
                >
                  {table.write}
                </td>
                <td
                  scope="row"
                  className="hidden xl:block px-4 py-3 truncate whitespace-nowrap text-center"
                >
                  {table.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default BoardTable;
