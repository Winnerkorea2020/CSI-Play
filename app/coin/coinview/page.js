import Image from "next/image";
import Link from "next/link";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

const CoinViewPage = () => {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-sm h-full">
      <h6 className="py-4 font-semibold underline text-lg">Title</h6>
      <div className="overflow-hidden border border-gray-200  md:rounded-lg w-full">
        <table className="w-full text-sm  text-gray-500  table-fixed">
          <thead className="text-base text-gray-700 bg-gray-100">
            <tr>
              <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                코인명
              </th>
              <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                랭크
              </th>
              <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                가격
              </th>
              <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                24 시간 변화%
              </th>
              <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-right">
                시가총액
              </th>
              <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-right">
                USD 표시 24시간 거래량
              </th>
              <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                김프
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                <div className="flex justify-center items-start gap-3 w-full">
                  <Image src={`/ico-bitcoin.svg`} width={20} height={20} />
                  <div className=" tracking-tighter">
                    <div className="text-base font-medium">BTC</div>
                    <div className="text-gray-600">Bitcoin</div>
                  </div>
                </div>
              </td>
              <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-center">
                1
              </td>
              <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-right">
                <div className="flex justify-start items-start gap-3">
                  <div className=" tracking-tighter">
                    <div className="text-base font-medium">
                      29,028.59 <span className="ml-2">USD</span>
                    </div>
                    <div className="text-base font-medium text-gray-600">
                      38,452,000 <span className="ml-2">KRW</span>
                    </div>
                  </div>
                </div>
              </td>
              <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-center">
                -0.03%
              </td>
              <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-right">
                <div className="flex justify-end items-start gap-3">
                  <div className=" tracking-tighter">
                    <div className="text-base font-medium">
                      5,646억 <span className="ml-2">USD</span>
                    </div>
                    <div className="text-base font-medium text-gray-600">
                      736조 2,558억 <span className="ml-2">KRW</span>
                    </div>
                  </div>
                </div>
              </td>
              <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-right">
                <div className="flex justify-end items-start gap-3">
                  <div className=" tracking-tighter">
                    <div className="text-base font-medium">
                      64.36억 <span className="ml-2">USD</span>
                    </div>
                    <div className="text-base font-medium text-gray-600">
                      8조 3,686억 KRW <span className="ml-2">KRW</span>
                    </div>
                  </div>
                </div>
              </td>
              <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-right">
                <div className="flex justify-center items-start gap-3">
                  <div className=" tracking-tighter">
                    <div className="text-base font-medium">
                      -0.7 <span className="ml-2">%</span>
                    </div>
                    <div className="text-base font-medium text-gray-600">-270,957</div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
        <ul className="inline-flex items-stretch">
          <li>
            <Link
              href="#"
              className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
            >
              <LiaAngleLeftSolid size={15} />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
            >
              1
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
            >
              2
            </Link>
          </li>
          <li>
            <Link
              href="#"
              aria-current="page"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  table__activity "
            >
              3
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
            >
              4
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
            >
              5
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
            >
              <LiaAngleRightSolid size={15} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CoinViewPage;
