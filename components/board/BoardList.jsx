import Link from "next/link";
import { alaramSetting } from "@/mockupDB";
import Pagination from "../Pagination";

const BoardList = ({ params }) => {
  return (
    <div>
      <div className="overflow-hidden  border border-gray-200  md:rounded-lg w-full">
        <table className="w-full text-sm  text-gray-500  table-fixed">
          <thead className="text-base text-gray-700 bg-gray-100">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 truncate whitespace-nowrap text-center"
              >
                번호
              </th>
              <th
                scope="col"
                className="px-4 py-3 truncate whitespace-nowrap text-center"
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
                className="px-4 py-3 truncate whitespace-nowrap text-center"
              >
                등록일
              </th>
            </tr>
          </thead>
          <tbody>
            {alaramSetting.map((table, index) => (
              <tr key={index}>
                <td
                  scope="row"
                  className="px-4 py-3 truncate whitespace-nowrap w-full "
                >
                  {table.number}
                </td>
                <td
                  scope="row"
                  className="px-4 py-3 truncate whitespace-nowrap text-center cursor-pointer"
                >
                  <Link href={"123"}>{table.title}</Link>
                </td>
                <td
                  scope="row"
                  className="px-4 py-3 truncate whitespace-nowrap text-center"
                >
                  {table.write}
                </td>
                <td
                  scope="row"
                  className="px-4 py-3 truncate whitespace-nowrap text-center"
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

export default BoardList;
