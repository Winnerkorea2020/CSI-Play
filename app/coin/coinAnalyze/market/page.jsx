import BoardTableHeader from "@/components/board/BoardTableHeader";
import CardHorizonalTypeB from "@/components/card/CardHorizonalTypeB";

import FreeBoardSearchBar from "@/components/searchbox/FreeBoardSearchBar";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="mt-10">
        <BoardTableHeader title={"암호화페 투자리포트"} />
        <div className="grid grid-cols-1 gap-3">
          <CardHorizonalTypeB title={"차트분석"} />
          <CardHorizonalTypeB title={"차트분석"} />
          <CardHorizonalTypeB title={"차트분석"} />
          <CardHorizonalTypeB title={"차트분석"} />
          <CardHorizonalTypeB title={"차트분석"} />
          <CardHorizonalTypeB title={"차트분석"} />
          <CardHorizonalTypeB title={"차트분석"} />
          <CardHorizonalTypeB title={"차트분석"} />
          <CardHorizonalTypeB title={"차트분석"} />
          <CardHorizonalTypeB title={"차트분석"} />
          <CardHorizonalTypeB title={"차트분석"} />
          <CardHorizonalTypeB title={"차트분석"} />
          <CardHorizonalTypeB title={"차트분석"} />
        </div>
      </div>
    </div>
  );
};

export default page;
