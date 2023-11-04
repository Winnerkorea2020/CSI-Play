import BoardTableHeader from "@/components/board/BoardTableHeader";
import CardHorizonalTypeD from "@/components/card/CardHorizonalTypeD";

import SearchBar from "@/components/searchbox/SearchBar";
import TableCard from "@/components/table/TableCard";
import React from "react";

const page = () => {
  const title = "시황분석";
  return (
    <div className="border px-5">
      <TableCard title={title} />
    </div>
  );
};

export default page;