"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { alaramSetting } from "@/mockupDB";

import Pagination from "../Pagination";

import BoardTableHeader from "./BoardTableHeader";
import TableMain from "./TableMain";
import TableHeader from "../table/TableHeader";

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
