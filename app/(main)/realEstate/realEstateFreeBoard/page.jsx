import TableList from "@/components/table/TableList";
import React from "react";

const page = () => {
  const title = "부동산 자유게시판";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default page;
