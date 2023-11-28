import React from "react";
import TableHeader from "./TableHeader";
import TableChartBody from "./TableChartBody";
import { tableChart } from "@/constant/table";

const TableChart = ({ title }) => {
  const topics = tableChart;
  return (
    <div className="relative overflow-x-auto">
      <TableHeader title={title} />
      <TableChartBody topics={topics} />
    </div>
  );
};

export default TableChart;
