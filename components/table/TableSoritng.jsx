"use client";

import { tabledataCoin, tabledataColumns } from "@/mockupDB";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useState } from "react";

const TableSoritng = () => {
  const [tableData, setTableData] = useState(tabledataCoin);
  return (
    <table className="table-auto w-full text-lg">
      <TableHead columns={tabledataColumns} />
      <TableBody columns={tabledataColumns} tableData={tableData} />
    </table>
  );
};

export default TableSoritng;
