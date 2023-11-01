import BoardTableHeader from "@/components/board/BoardTableHeader";
import CardHorizonalTypeA from "@/components/card/CardHorizonalTypeA";

const page = () => {
  return (
    <div>
      <div className="mt-10">
        <BoardTableHeader title={"차트 분석"} />
        <div>
          <CardHorizonalTypeA />
          <CardHorizonalTypeA />
          <CardHorizonalTypeA />
          <CardHorizonalTypeA />
          <CardHorizonalTypeA />
          <CardHorizonalTypeA />
          <CardHorizonalTypeA />
          <CardHorizonalTypeA />
          <CardHorizonalTypeA />
          <CardHorizonalTypeA />
          <CardHorizonalTypeA />
          <CardHorizonalTypeA />
          <CardHorizonalTypeA />
          <CardHorizonalTypeA />
        </div>
      </div>
    </div>
  );
};

export default page;
