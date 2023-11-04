"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const TableListBody = ({ columns, tableData }) => {
  const pathname = usePathname();
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id} className="text-center">
            {columns.map(({ accessor }) => {
              const tData = data[accessor] ? data[accessor] : "——";
              return (
                <td key={accessor} className="py-3">
                  <Link href={`${pathname}/${data.id}`}>{tData}</Link>
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableListBody;
