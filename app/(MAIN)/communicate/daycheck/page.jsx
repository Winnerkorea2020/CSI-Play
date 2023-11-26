import CalandarTypeA from "@/components/Calandar/CalandarTypeA";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-4">
        <div className="tracking-tighter text-xl font-semibold">출석체크</div>
      </div>
      <CalandarTypeA />
    </div>
  );
};

export default page;
