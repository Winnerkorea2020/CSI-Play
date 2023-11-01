import BoardTableHeader from "@/components/board/BoardTableHeader";
import CardHorizonalTypeE from "@/components/card/CardHorizonalTypeE";
import React from "react";

const StockEventPage = () => {
  return (
    <div>
      <div className="mt-10 ">
        <BoardTableHeader title={"공시&일시"} />

        <div className="grid grid-cols-1 gap-3 w-full ">
          <CardHorizonalTypeE />
          <CardHorizonalTypeE />
          <CardHorizonalTypeE />
          <CardHorizonalTypeE />
          <CardHorizonalTypeE />
          <CardHorizonalTypeE />
          <CardHorizonalTypeE />
          <CardHorizonalTypeE />
          <CardHorizonalTypeE />
          <CardHorizonalTypeE />
          <CardHorizonalTypeE />
          <CardHorizonalTypeE />
          <CardHorizonalTypeE />
        </div>
      </div>
    </div>
  );
};

export default StockEventPage;
