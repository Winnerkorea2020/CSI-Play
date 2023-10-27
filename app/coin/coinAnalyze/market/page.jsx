import CardHorizonalTypeB from "@/components/card/CardHorizonalTypeB";

import FreeBoardSearchBar from "@/components/searchbox/FreeBoardSearchBar";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="w-full flex justify-between items-center">
          <h3 className="ml-2 py-4 font-semibold text-lg">시황분석</h3>
        </div>
        <div className="mb-4">
          <FreeBoardSearchBar />
        </div>
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
