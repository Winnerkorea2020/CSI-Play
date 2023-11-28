import TopCoins from "@/components/coins/topcoins/TopCoins";
import SideNavi from "@/components/navbar/SideNavi";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="container mx-auto max-w-9xl h-full ">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-2 h-full ">
        <div className="col-span-1 xl:col-span-10 h-full">
          <div className="border p-4 rounded-lg bg-white shadow-sm h-full">
            <div>{children}</div>
          </div>
        </div>
        <div className="hidden xl:block xl:col-span-2 ">
          <div className="">
            <SideNavi index={2} />
          </div>
          <div className="mt-2">
            <TopCoins />
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
