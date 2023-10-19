import SideNavi from "@/components/SideNavi";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="h-full pb-2">
      <div className="container mx-auto max-w-9xl h-full ">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-2 h-full ">
          <div className="col-span-10 h-full">{children}</div>
          <div className="col-span-2">
            <SideNavi index={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
