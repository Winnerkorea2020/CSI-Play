import CardHorizonalTypeA from "@/components/card/CardHorizonalTypeA";
import FreeBoardSearchBar from "@/components/Searchbox/FreeBoardSearchBar";
import SearchBar from "@/components/Searchbox/SearchBar";
import TableAnalyze from "@/components/table/TableAnalyze";
import React from "react";

const page = () => {
  const title = "부동산 뉴스";
  return (
    <div className="h-full bg-white">
      <TableAnalyze title={title} />
    </div>
  );
};

export default page;
