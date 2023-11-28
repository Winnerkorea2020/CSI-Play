import { mainCoinColumns, mainCoinData } from "@/constant/main";
import React from "react";
import KpremiumTableBody from "./KpremiumTableBody";
import KpremiumTableHeader from "./KpremiumTableHeader";

const KpremiumTable = () => {
  const columns = mainCoinColumns;
  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      <KpremiumTableHeader columns={columns} />
      <KpremiumTableBody columns={columns} tableData={mainCoinData} />
    </table>
  );
};

export default KpremiumTable;
