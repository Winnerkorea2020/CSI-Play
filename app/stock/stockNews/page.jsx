import BoardTableHeader from "@/components/board/BoardTableHeader";
import CardHorizonalTypeB from "@/components/card/CardHorizonalTypeB";

const StockNewsPage = () => {
  return (
    <div>
      <div className="mt-10">
        <BoardTableHeader title={"주식뉴스"} />
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
