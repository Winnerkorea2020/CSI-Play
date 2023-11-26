"use client";

import { tabledataCoin, tabledataColumns } from "@/mockupDB";
import { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "../Pagination";

const TableSoritng = () => {
  const [tableData, setTableData] = useState(tabledataCoin);
  return (
    <div>
      <div className="border overflow-auto overscroll-x-auto">
        <table className="table-auto w-full  xl:text-lg text-xs">
          <TableHead columns={tabledataColumns} />
          <TableBody columns={tabledataColumns} tableData={tableData} />
        </table>
      </div>
      <div className="my-5">
        <Pagination />
      </div>
    </div>
  );
};

export default TableSoritng;
