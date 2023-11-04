import React from "react";
import TableHeader from "./TableHeader";
import TableChartBody from "./TableChartBody";

const TableChart = async ({ title }) => {
  const res = await fetch("http://localhost:9999/tableChart", {
    cache: "no-cache",
  });

  const topics = await res.json();
  return (
    <div className="relative overflow-x-auto">
      <TableHeader title={title} />
      <TableChartBody topics={topics} />
    </div>
  );
};

export default TableChart;
