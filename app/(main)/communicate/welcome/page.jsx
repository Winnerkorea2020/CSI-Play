import TableList from "@/components/table/TableList";
import React from "react";

const page = () => {
  const title = "가입인사";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default page;
