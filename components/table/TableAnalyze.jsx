import Link from "next/link";
import Pagination from "../Pagination";
import TableAnalyzeBody from "./TableAnalyzeBody";
import TableHeader from "./TableHeader";

const TableAnalyze = async ({ title }) => {
  const res = await fetch("http://localhost:9999/tableAnalyze", {
    cache: "no-cache",
  });

  const topics = await res.json();
  return (
    <div className="relative overflow-x-auto">
      <TableHeader title={title} />
      <TableAnalyzeBody topics={topics} />
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

export default TableAnalyze;
