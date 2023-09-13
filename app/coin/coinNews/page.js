import Pagination from "@/components/Pagination";
import Link from "next/link";
const CoinNewsPage = () => {
  return (
    <div>
      <div className="border p-4 rounded-lg bg-white shadow-sm h-full">
        <h6 className="py-4 font-semibold underline text-lg">Title</h6>
        <div className="overflow-hidden border border-gray-200  md:rounded-lg w-full">
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
                  출처
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
                <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-center">
                  [코인 시황]다시 주춤하는 비트코인…3800만원대 횡보
                </td>
                <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-center">
                  신호철 기자
                </td>
                <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-center">
                  2023-08-04 17:26:50
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

export default CoinNewsPage;
