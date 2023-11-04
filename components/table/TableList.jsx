import TableHeader from "./TableHeader";
import TableListHead from "./TableListHead";
import TableListBody from "./TableListBody";
import Pagination from "../Pagination";
import { tableListHeadColumns } from "@/constant/table";
import Link from "next/link";

const TableList = async ({ title }) => {
  const res = await fetch("http://localhost:9999/tableList", {
    cache: "no-store",
  });
  const topics = await res.json();

  return (
    <div className="relative overflow-x-auto">
      <TableHeader title={title} nosearch={true} />

      <table className="table__theme-1 w-full text-xs uppercase bg-gray-50">
        <colgroup>
          <col width="3%" />
          <col width="50%" />
          <col width="5%" />
          <col width="5%" />
          <col width="5%" />
          <col width="5%" />
        </colgroup>
        <TableListHead columns={tableListHeadColumns} />
        <TableListBody columns={tableListHeadColumns} tableData={topics} />
      </table>
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

export default TableList;
