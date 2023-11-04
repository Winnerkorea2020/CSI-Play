import BoardTable from "@/components/board/BoardTable";
import TableAnalyze from "@/components/table/TableAnalyze";
import TableList from "@/components/table/TableList";
import React from "react";

const StockAnalzePage = () => {
  const title = "증시분석";
  return (
    <div className="h-full bg-white">
      <TableAnalyze title={title} />
    </div>
  );
};

export default StockAnalzePage;
