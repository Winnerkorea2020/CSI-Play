import BoardTableHeader from "@/components/board/BoardTableHeader";
import CalandarTypeA from "@/components/Calandar/CalandarTypeA";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="mt-10 ">
        <BoardTableHeader title={"증시캘린더"} />

        <div className="grid grid-cols-1 gap-3 w-full border">
          <CalandarTypeA />
        </div>
      </div>
    </div>
  );
};

export default page;
