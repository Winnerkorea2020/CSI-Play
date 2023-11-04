import React from "react";
import TableMainBody from "./TableMainBody";
import TableMainHeader from "./TableMainHeader";

const TableMain = () => {
  return (
    <table className="w-full text-sm  text-gray-500  table-fixed">
      <colgroup>
        <col width={60}></col>
        <col width="70%"></col>
        <col width={100}></col>
        <col className="hidden xl:block" width={150}></col>
      </colgroup>
      <TableMainHeader />
      <TableMainBody />
    </table>
  );
};

export default TableMain;