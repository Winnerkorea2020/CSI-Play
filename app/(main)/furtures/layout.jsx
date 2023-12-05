import BannerSide from "@/components/banner/BannerSide";
import TopCoins from "@/components/coins/topcoins/TopCoins";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="main__wrap ">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-2 h-full ">
        <div className="col-span-1 xl:col-span-10 h-full">
          <div className="border p-4 rounded-lg bg-white shadow-sm h-full">
            <div>{children}</div>
          </div>
        </div>
        <div className="hidden xl:block xl:col-span-2 ">
          <div className="">
            <BannerSide />
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
