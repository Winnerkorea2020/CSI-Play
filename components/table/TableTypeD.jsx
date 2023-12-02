import TableHeader from "./TableHeader";
import TableListHead from "./TableListHead";
import TableListBody from "./TableListBody";
import TableBottom from "./TableBottom";

import { tableListA, tableListHeadColumnsA } from "@/constant/table";

const TableTypeD = ({ title }) => {
  const topics = tableListA;

  return (
    <div className="relative overflow-x-auto">
      <TableHeader title={title} nosearch={true} />

      <table className="table__theme-2 w-full">
        <TableListHead columns={tableListHeadColumnsA} />
        <TableListBody columns={tableListHeadColumnsA} tableData={tableListA} />
      </table>
      <TableBottom />
    </div>
  );
};

export default TableTypeD;
