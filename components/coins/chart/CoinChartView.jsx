import TableHeader from "@/components/table/TableHeader";
import TableSoritng from "@/components/table/TableSoritng";
import React from "react";
import CoinChartViewBody from "./CoinChartViewBody";

const CoinChartView = () => {
  const title = "시세/김프";
  return (
    <>
      <TableHeader title={title} nosearch={false} />
      <div className="h-96 p-4 border rounded-lg  mb-5">
        <CoinChartViewBody />
      </div>
      <TableSoritng />
    </>
  );
};

export default CoinChartView;
