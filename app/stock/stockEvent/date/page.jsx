import CardHorizonalTypeE from "@/components/card/CardHorizonalTypeE";
import FreeBoardSearchBar from "@/components/searchbox/FreeBoardSearchBar";
import React from "react";

const StockEventPage = () => {
  return (
    <div>
      <div className="mt-10 ">
        <div className="w-full flex justify-between items-center">
          <h3 className="ml-2 py-4 font-semibold text-lg">공시&일시</h3>
        </div>
        <div className="mb-4">
          <FreeBoardSearchBar />
        </div>
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
