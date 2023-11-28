import TableHeader from "./TableHeader";
import TableListHead from "./TableListHead";
import TableListBody from "./TableListBody";
import TableBottom from "./TableBottom";

import { tableList, tableListHeadColumns } from "@/constant/table";

const TableList = ({ title }) => {
  const topics = tableList;

  return (
    <div className="relative overflow-x-auto">
      <TableHeader title={title} nosearch={true} />

      <table className="table__theme-1 w-full">
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
      <TableBottom />
    </div>
  );
};

export default TableList;
