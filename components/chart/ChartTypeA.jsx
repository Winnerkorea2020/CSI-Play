import React from "react";
import TableHeader from "../table/TableHeader";

const ChartTypeA = () => {
  const title = "총 청산 차트";
  return (
    <div className="card h-full">
      <div>
        <TableHeader title={title} />

        <div className="h-[520px] border rounded">ChartTypeA</div>
      </div>
    </div>
  );
};

export default ChartTypeA;
