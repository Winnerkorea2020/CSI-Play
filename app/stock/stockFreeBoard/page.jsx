import BoardTable from "@/components/board/BoardTable";
import React from "react";

const StockFreeBoardPage = () => {
  const title = "주식 자유게시판";
  return (
    <div>
      <div className="h-full bg-white">
        <BoardTable title={title} />
      </div>
    </div>
  );
};

export default StockFreeBoardPage;
