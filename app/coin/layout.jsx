import SideNavi from "@/components/SideNavi";
import TopCoins from "@/components/topcoin/TopCoins";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="h-full pb-14">
      <div className="container mx-auto max-w-9xl h-full ">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-2 h-full ">
          <div className="col-span-1 xl:col-span-10 h-full">{children}</div>
          <div className="hidden xl:block xl:col-span-2 ">
            <div className="">
              <SideNavi index={0} />
            </div>
            <div className="mt-2">
              <TopCoins />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;