import CardHorizonalTypeD from "@/components/card/CardHorizonalTypeD";
import FreeBoardSearchBar from "@/components/FreeBoardSearchBar";
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
