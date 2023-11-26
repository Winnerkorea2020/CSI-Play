import BoardTable from "@/components/Board/BoardTable";
import TableList from "@/components/table/TableList";
import React from "react";

const page = () => {
  const title = "유머/감동 게시판";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default page;
