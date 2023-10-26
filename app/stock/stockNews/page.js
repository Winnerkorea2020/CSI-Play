import CardHorizonalTypeB from "@/components/card/CardHorizonalTypeB";

import FreeBoardSearchBar from "@/components/FreeBoardSearchBar";

const StockNewsPage = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="w-full flex justify-between items-center">
          <h3 className="ml-2 py-4 font-semibold text-lg">주식뉴스</h3>
        </div>
        <div className="mb-4">
          <FreeBoardSearchBar />
        </div>
        <div className="grid grid-cols-1 gap-3">
          <CardHorizonalTypeB title={"헤럴드 경제"} />
          <CardHorizonalTypeB title={"헤럴드 경제"} />
          <CardHorizonalTypeB title={"헤럴드 경제"} />
          <CardHorizonalTypeB title={"헤럴드 경제"} />
          <CardHorizonalTypeB title={"헤럴드 경제"} />
          <CardHorizonalTypeB title={"헤럴드 경제"} />
          <CardHorizonalTypeB title={"헤럴드 경제"} />
          <CardHorizonalTypeB title={"헤럴드 경제"} />
          <CardHorizonalTypeB title={"헤럴드 경제"} />
          <CardHorizonalTypeB title={"헤럴드 경제"} />
          <CardHorizonalTypeB title={"헤럴드 경제"} />
          <CardHorizonalTypeB title={"헤럴드 경제"} />
          <CardHorizonalTypeB title={"헤럴드 경제"} />
        </div>
      </div>
    </div>
  );
};

export default StockNewsPage;
