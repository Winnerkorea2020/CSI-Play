import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import Link from "next/link";

const Pagination = ({}) => {
  return (
    <div>
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

export default Pagination;
