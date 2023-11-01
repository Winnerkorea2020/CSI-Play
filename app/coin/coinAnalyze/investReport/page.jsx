import BoardTableHeader from "@/components/board/BoardTableHeader";
import CardHorizonalTypeD from "@/components/card/CardHorizonalTypeD";

import SearchBar from "@/components/searchbox/SearchBar";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="mt-10">
        <BoardTableHeader title={"시황분석"} />
        <div className="grid grid-cols-1 gap-3">
          <CardHorizonalTypeD title={"분석"} />
          <CardHorizonalTypeD title={"분석"} />
          <CardHorizonalTypeD title={"분석"} />
          <CardHorizonalTypeD title={"자유"} />
          <CardHorizonalTypeD title={"분석"} />
          <CardHorizonalTypeD title={"분석"} />
          <CardHorizonalTypeD title={"분석"} />
          <CardHorizonalTypeD title={"자유"} />
          <CardHorizonalTypeD title={"분석"} />
          <CardHorizonalTypeD title={"분석"} />
          <CardHorizonalTypeD title={"자유"} />
          <CardHorizonalTypeD title={"분석"} />
        </div>
      </div>
    </div>
  );
};

export default page;
