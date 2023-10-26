import StockCalandar from "@/components/Calandar/StockCalandar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="h-full pb-14">
        <StockCalandar title={"12월"} description={"공시일정"} />
        <div className="container mx-auto max-w-9xl h-full">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
