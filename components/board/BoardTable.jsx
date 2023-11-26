"use client";
import { usePathname } from "next/navigation";
import TableHeader from "../table/TableHeader";
import TableMain from "./TableMain";
import Pagination from "../Pagination";

const BoardTable = ({ title }) => {
  const pathnamne = usePathname();
  const id = "1";
  console.log(pathnamne);
  return (
    <div>
      <TableHeader title={title} />
      <div className="overflow-hidden  border border-gray-200  md:rounded-lg w-full">
        <TableMain />
      </div>
      <Pagination />
    </div>
  );
};

export default BoardTable;
