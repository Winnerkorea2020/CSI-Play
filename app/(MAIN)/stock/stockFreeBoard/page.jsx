import BoardTable from "@/components/Board/BoardTable";
import TableList from "@/components/table/TableList";
import React from "react";

const StockFreeBoardPage = () => {
  const title = "주식 자유게시판";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default StockFreeBoardPage;
