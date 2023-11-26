import CalandarTypeA from "@/components/Calandar/CalandarTypeA";
import TableHeader from "@/components/table/TableHeader";
import React from "react";

const page = () => {
  const title = "증시캘린더";
  return (
    <div className="border px-5">
      <TableHeader title={"증시캘린더"} nosearch={false} />

      <div className="grid grid-cols-1 gap-3 w-full border">
        <CalandarTypeA />
      </div>
    </div>
  );
};

export default page;
