import BoardTable from "@/components/board/BoardTable";
import React from "react";

const page = () => {
  const title = "자유게시판";
  return (
    <div>
      <div className="h-full bg-white">
        <BoardTable title={title} />
      </div>
    </div>
  );
};

export default page;
