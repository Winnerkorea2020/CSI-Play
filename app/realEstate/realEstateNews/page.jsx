import CardHorizonalTypeA from "@/components/card/CardHorizonalTypeA";
import FreeBoardSearchBar from "@/components/FreeBoardSearchBar";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="w-full flex justify-between items-center">
          <h3 className="ml-2 py-4 font-semibold text-lg">부동산 뉴스</h3>
        </div>
        <div className="mb-4">
          <FreeBoardSearchBar />
        </div>
        <div className="grid grid-cols-1 gap-3">
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
        </div>
      </div>
    </div>
  );
};

export default page;
