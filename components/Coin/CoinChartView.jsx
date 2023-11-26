import React from "react";
import TableHeader from "../table/TableHeader";
import TableSoritng from "../table/TableSoritng";
import CoinChartViewBody from "./CoinChartViewBody";

export const CoinChartView = () => {
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
