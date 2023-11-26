import BoardTable from "@/components/Board/BoardTable";
import TableReport from "@/components/table/TableReport";
import React from "react";

const page = () => {
  const title = "News";
  return (
    <div className="h-full bg-white">
      <TableReport title={title} />
    </div>
  );
};

export default page;
