import { tableMarket } from "@/constant/table";
import Link from "next/link";
import Pagination from "../pagination/Pagination";
import TableHeader from "./TableHeader";
import TableReportBody from "./TableReportBody";

const TableReport = ({ title }) => {
  const topics = tableMarket;

  return (
    <div className="relative overflow-x-auto">
      <TableHeader title={title} nosearch={true} />
      <TableReportBody topics={topics} />
      <div className="flex justify-between items-center">
        <Pagination />
        <Link
          href="/create"
          className="py-2.5 px-6 w-24 text-center rounded-lg shadow bg-blue-500 text-white hover:bg-blue-600"
        >
          등록
        </Link>
      </div>
    </div>
  );
};

export default TableReport;
