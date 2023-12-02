import TableHeader from "@/components/table/TableHeader";
import TableSoritng from "@/components/table/TableSoritng";
import React from "react";
import { tabledataCoin, tabledataColumns } from "@/constant/db";
import CoinChartViewBody from "./CoinChartViewBody";

const CoinChartView = () => {
  const title = "코인정보 (암호화폐 스크리너)";
  return (
    <>
      <TableHeader title={title} nosearch={false} />
      <TableSoritng data={tabledataCoin} columns={tabledataColumns} />
    </>
  );
};

export default CoinChartView;
