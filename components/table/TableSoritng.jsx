"use client";

import { tabledataCoin, tabledataColumns } from "@/mockupDB";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useState } from "react";
import Pagination from "../Pagination";

const TableSoritng = () => {
  const [tableData, setTableData] = useState(tabledataCoin);
  return (
    <div>
      <div className="border">
        <table className="table-auto w-full text-lg ">
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
